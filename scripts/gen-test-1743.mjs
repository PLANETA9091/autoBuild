// (v0.976.374 fire-1743) the test fixture generator - the ten REAL
// pin columns the archive keeps byte-exact, the test file the pins
// embed. Usage: node scripts/gen-test-1743.mjs > tests/unit/rejoinstormsixthbreath.test.mjs
import { readFileSync } from 'fs'
const map = JSON.parse(readFileSync('/home/z/my-project/dispatch-census-1743.json')).map
const dir = '/home/z/faces1743'
const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
const PINS = ['F501', 'F502', 'F504', 'F532', 'F534', 'F549', 'F561', 'F563', 'F567', 'F568']
const cols = {}
for (const f of PINS) {
  const id = map[f].id
  const lines = readFileSync(`${dir}/face${id}.log`, 'utf8').split('\n')
  cols[f] = lines.filter(l => JOIN_ECHO_RE.test(l))
  console.error(`# ${f} id=${id} join-echoes=${cols[f].length}`)
}
// the sixth arc re-check per pin (the byte-exact the generator voices)
const sixthOf = (lines) => {
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
    const cur = revts[i - 1]; const nxt = revts[i]
    gaps.push(nxt >= cur ? nxt - cur : nxt + 86400 - cur)
  }
  return { sixth: gaps.length > 5 ? gaps[5] : 0, count: gaps.length }
}
const WANTS = { F501: 0, F502: 10, F504: 6, F532: 59, F534: 41, F549: 2, F561: 57, F563: 8, F567: 34, F568: 3 }
for (const f of PINS) {
  const r = sixthOf(cols[f])
  const ok = r.sixth === WANTS[f] ? 'OK' : `MISMATCH want ${WANTS[f]}`
  console.error(`# ${f} sixth=${r.sixth} count=${r.count} ${ok}`)
}
const body = readFileSync(new URL('./test-body-1743.tmpl.mjs', import.meta.url), 'utf8')
let out = body
for (const f of PINS) {
  const arr = cols[f].map(l => '  "' + l + '",').join('\n')
  out = out.replace(`/*__REAL_${f}__*/`, arr)
}
process.stdout.write(out)
