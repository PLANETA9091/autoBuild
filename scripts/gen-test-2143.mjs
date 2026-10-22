// (fire-2143 the :43 stream) the test fixture generator - the ten REAL
// pin columns the archive keeps byte-exact, the test file the pins
// embed. Usage: node scripts/gen-test-2143.mjs > tests/unit/rejoinstormeighthbreath.test.mjs
import { readFileSync } from 'fs'
const map = JSON.parse(readFileSync('/home/z/my-project/dispatch-census-2143.json')).map
const dir = '/home/z/faces2143'
const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
const PINS = ['F501', 'F508', 'F514', 'F524', 'F542', 'F549', 'F550', 'F563', 'F569', 'F572']
const cols = {}
for (const f of PINS) {
  const id = map[f].id
  const lines = readFileSync(`${dir}/face${id}.log`, 'utf8').split('\n')
  cols[f] = lines.filter(l => JOIN_ECHO_RE.test(l))
  console.error(`# ${f} id=${id} join-echoes=${cols[f].length}`)
}
// the eighth arc re-check per pin (the byte-exact the generator voices)
const stormEighthOf = (lines) => {
  const tally = new Map()
  const revts = []
  for (const l of lines) {
    const m = JOIN_ECHO_RE.exec(l)
    if (!m) continue
    const n = (tally.get(m[4]) || 0) + 1
    tally.set(m[4], n)
    if (n > 1) revts.push(Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]))
  }
  const gaps = []
  for (let i = 1; i < revts.length; i++) {
    const cur = revts[i - 1]
    const nxt = revts[i]
    gaps.push(nxt >= cur ? nxt - cur : nxt + 86400 - cur)
  }
  return { eighth: gaps.length > 7 ? gaps[7] : 0, count: gaps.length }
}
const WANTS = { F501: 6, F508: 32, F514: 42, F524: 1, F542: 10, F549: 2, F550: 2, F563: 17, F569: 10, F572: 2 }
for (const f of PINS) {
  const r = stormEighthOf(cols[f])
  const ok = r.eighth === WANTS[f] ? 'OK' : `MISMATCH want ${WANTS[f]}`
  console.error(`# ${f} eighth=${r.eighth} count=${r.count} ${ok}`)
}
const body = readFileSync(new URL('./test-body-2143.tmpl.mjs', import.meta.url), 'utf8')
let out = body
for (const f of PINS) {
  const arr = cols[f].map(l => '  "' + l + '",').join('\n')
  out = out.replace(`/*__REAL_${f}__*/`, arr)
}
process.stdout.write(out)
