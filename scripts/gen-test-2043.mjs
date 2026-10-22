// (fire-2043 the :43 stream) the test fixture generator - the ten REAL
// pin columns the archive keeps byte-exact, the test file the pins
// embed. Usage: node scripts/gen-test-2043.mjs > tests/unit/rejoinchampseventhbreath.test.mjs
import { readFileSync } from 'fs'
const map = JSON.parse(readFileSync('/home/z/my-project/dispatch-census-2043.json')).map
const dir = '/home/z/faces2043'
const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
const PINS = ['F501', 'F506', 'F508', 'F512', 'F524', 'F536', 'F549', 'F563', 'F569', 'F571']
const cols = {}
for (const f of PINS) {
  const id = map[f].id
  const lines = readFileSync(`${dir}/face${id}.log`, 'utf8').split('\n')
  cols[f] = lines.filter(l => JOIN_ECHO_RE.test(l))
  console.error(`# ${f} id=${id} join-echoes=${cols[f].length}`)
}
// the seventh arc re-check per pin (the byte-exact the generator voices)
const champSeventhOf = (lines) => {
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
  return { seventh: gaps.length > 6 ? gaps[6] : 0, count: gaps.length }
}
const WANTS = { F501: 0, F506: 7, F508: 32, F512: 14, F524: 13, F536: 10, F549: 1, F563: 7, F569: 9, F571: 0 }
for (const f of PINS) {
  const r = champSeventhOf(cols[f])
  const ok = r.seventh === WANTS[f] ? 'OK' : `MISMATCH want ${WANTS[f]}`
  console.error(`# ${f} seventh=${r.seventh} count=${r.count} ${ok}`)
}
const body = readFileSync(new URL('./test-body-2043.tmpl.mjs', import.meta.url), 'utf8')
let out = body
for (const f of PINS) {
  const arr = cols[f].map(l => '  "' + l + '",').join('\n')
  out = out.replace(`/*__REAL_${f}__*/`, arr)
}
process.stdout.write(out)
