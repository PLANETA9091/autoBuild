// (v0.976.375 fire-1843) the test fixture generator - the ten REAL
// pin columns the archive keeps byte-exact, the test file the pins
// embed. Usage: node scripts/gen-test-1843.mjs > tests/unit/rejoinchampsixthbreath.test.mjs
import { readFileSync } from 'fs'
const map = JSON.parse(readFileSync('/home/z/my-project/dispatch-census-1843.json')).map
const dir = '/home/z/faces1843'
const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
const PINS = ['F501', 'F506', 'F508', 'F512', 'F514', 'F536', 'F549', 'F563', 'F565', 'F569']
const cols = {}
for (const f of PINS) {
  const id = map[f].id
  const lines = readFileSync(`${dir}/face${id}.log`, 'utf8').split('\n')
  cols[f] = lines.filter(l => JOIN_ECHO_RE.test(l))
  console.error(`# ${f} id=${id} join-echoes=${cols[f].length}`)
}
// the sixth arc re-check per pin (the byte-exact the generator voices)
const champSixthOf = (lines) => {
  const tally = new Map()
  const evts = []
  for (const l of lines) {
    const m = JOIN_ECHO_RE.exec(l)
    if (!m) continue
    const n = (tally.get(m[4]) || 0) + 1
    tally.set(m[4], n)
    evts.push({ name: m[4], s: Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]), n })
  }
  let peak = 0
  for (const n of tally.values()) if (n > 1) peak = Math.max(peak, n - 1)
  const champs = new Set()
  for (const [name, n] of tally) if (n > 1 && n - 1 === peak) champs.add(name)
  const cevts = evts.filter(e => e.n > 1 && champs.has(e.name))
  const gaps = []
  for (let i = 1; i < cevts.length; i++) {
    const cur = cevts[i - 1].s; const nxt = cevts[i].s
    gaps.push(nxt >= cur ? nxt - cur : nxt + 86400 - cur)
  }
  return { sixth: gaps.length > 5 ? gaps[5] : 0, count: gaps.length }
}
const WANTS = { F501: 0, F506: 7, F508: 17, F512: 8, F514: 12, F536: 52, F549: 2, F563: 13, F565: 26, F569: 11 }
for (const f of PINS) {
  const r = champSixthOf(cols[f])
  const ok = r.sixth === WANTS[f] ? 'OK' : `MISMATCH want ${WANTS[f]}`
  console.error(`# ${f} sixth=${r.sixth} count=${r.count} ${ok}`)
}
const body = readFileSync(new URL('./test-body-1843.tmpl.mjs', import.meta.url), 'utf8')
let out = body
for (const f of PINS) {
  const arr = cols[f].map(l => '  "' + l + '",').join('\n')
  out = out.replace(`/*__REAL_${f}__*/`, arr)
}
process.stdout.write(out)
