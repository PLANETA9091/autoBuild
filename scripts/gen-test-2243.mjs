// (fire-2243 the :43 stream) the test fixture generator - the ten REAL
// pin columns the archive keeps byte-exact, the test file the pins
// embed. Usage: node scripts/gen-test-2243.mjs > tests/unit/rejoinchampeighthbreath.test.mjs
import { readFileSync } from 'fs'
const map = JSON.parse(readFileSync('/home/z/my-project/dispatch-census-2243.json')).map
const dir = '/home/z/faces2243'
const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
const PINS = ['F506', 'F508', 'F512', 'F514', 'F524', 'F537', 'F549', 'F556', 'F563', 'F573']
const cols = {}
for (const f of PINS) {
  const id = map[f].id
  const lines = readFileSync(`${dir}/face${id}.log`, 'utf8').split('\n')
  cols[f] = lines.filter(l => JOIN_ECHO_RE.test(l))
  console.error(`# ${f} id=${id} join-echoes=${cols[f].length}`)
}
// the eighth arc re-check per pin (the byte-exact the generator voices)
const champEighthOf = (lines) => {
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
    const cur = cevts[i - 1].s
    const nxt = cevts[i].s
    gaps.push(nxt >= cur ? nxt - cur : nxt + 86400 - cur)
  }
  const stretch = cevts.length >= 2 ? cevts[cevts.length - 1].s - cevts[0].s : 0
  return { eighth: gaps.length > 7 ? gaps[7] : 0, count: gaps.length, stretch, cevts: cevts.length }
}
const WANTS = { F506: 6, F508: 57, F512: 12, F514: 13, F524: 10, F537: 8, F549: 2, F556: 5, F563: 10, F573: 0 }
for (const f of PINS) {
  const r = champEighthOf(cols[f])
  const ok = r.eighth === WANTS[f] ? 'OK' : `MISMATCH want ${WANTS[f]}`
  const bound = r.count >= 8 ? 'voiced' : 'constructive'
  console.error(`# ${f} eighth=${r.eighth} count=${r.count} stretch=${r.stretch} cevts=${r.cevts} ${bound} ${ok}`)
}
// the arc re-check: the 71-face window F501-F573 the map prices
const faces = []
for (let f = 501; f <= 573; f++) {
  const m = map['F' + f]
  if (!m) continue
  if (m.conclusion !== 'success') continue
  const p = `${dir}/face${m.id}.log`
  try {
    const lines = readFileSync(p, 'utf8').split('\n')
    faces.push(champEighthOf(lines.filter(l => JOIN_ECHO_RE.test(l))).eighth)
  } catch { /* the hole the F-order keeps */ }
}
console.error(`# arc faces: ${faces.length}`)
console.error('# REAL_ARC = [' + faces.join(',') + ']')
const body = readFileSync(new URL('./test-body-2243.tmpl.mjs', import.meta.url), 'utf8')
let out = body
for (const f of PINS) {
  const arr = cols[f].map(l => '  "' + l + '",').join('\n')
  out = out.replace(`/*__REAL_${f}__*/`, arr)
}
out = out.replace('/*__REAL_ARC__*/', faces.join(','))
process.stdout.write(out)
