// (fire-0243 the :43 stream) the test fixture generator - the ten REAL
// pin columns the archive keeps byte-exact, the test file the pins
// embed. Usage: node scripts/gen-test-0243.mjs > tests/unit/rejoinstormtenthbreath.test.mjs
import { readFileSync } from 'fs'
const map = JSON.parse(readFileSync('/home/z/my-project/dispatch-census-0243.json')).map
const dir = '/home/z/faces0243'
const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
const PINS = ['F501', 'F508', 'F517', 'F521', 'F524', 'F526', 'F538', 'F556', 'F569', 'F577']
const cols = {}
for (const f of PINS) {
  const id = map[f].id
  const lines = readFileSync(`${dir}/face${id}.log`, 'utf8').split('\n')
  cols[f] = lines.filter(l => JOIN_ECHO_RE.test(l))
  console.error(`# ${f} id=${id} join-echoes=${cols[f].length}`)
}
// the tenth arc re-check per pin (the byte-exact the generator voices)
const stormTenthOf = (lines) => {
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
  return { tenth: gaps.length > 9 ? gaps[9] : 0, count: gaps.length }
}
const WANTS = { F501: 9, F508: 1, F517: 33, F521: 46, F524: 6, F526: 35, F538: 0, F556: 5, F569: 6, F577: 1 }
for (const f of PINS) {
  const r = stormTenthOf(cols[f])
  const ok = r.tenth === WANTS[f] ? 'OK' : `MISMATCH want ${WANTS[f]}`
  const bound = r.count >= 10 ? 'voiced' : 'constructive'
  console.error(`# ${f} tenth=${r.tenth} count=${r.count} ${bound} ${ok}`)
}
// the arc re-check: the 75-face window F501-F577 the map prices
const faces = []
for (let f = 501; f <= 577; f++) {
  const m = map['F' + f]
  if (!m) continue
  if (m.conclusion !== 'success') continue
  const p = `${dir}/face${m.id}.log`
  try {
    const lines = readFileSync(p, 'utf8').split('\n')
    faces.push(stormTenthOf(lines.filter(l => JOIN_ECHO_RE.test(l))).tenth)
  } catch { /* the hole the F-order keeps */ }
}
console.error(`# arc faces: ${faces.length}`)
console.error('# REAL_ARC = [' + faces.join(',') + ']')
const body = readFileSync(new URL('./test-body-0243.tmpl.mjs', import.meta.url), 'utf8')
let out = body
for (const f of PINS) {
  const arr = cols[f].map(l => '  "' + l + '",').join('\n')
  out = out.replace(`/*__REAL_${f}__*/`, arr)
}
out = out.replace('/*__REAL_ARC__*/', faces.join(','))
process.stdout.write(out)
