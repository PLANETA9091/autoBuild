// (fire-2343 the :43 stream) the test fixture generator - the ten REAL
// pin columns the archive keeps byte-exact, the test file the pins
// embed. Usage: node scripts/gen-test-2343.mjs > tests/unit/rejoinstormninthbreath.test.mjs
import { readFileSync } from 'fs'
const map = JSON.parse(readFileSync('/home/z/my-project/dispatch-census-2343.json')).map
const dir = '/home/z/faces2343'
const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
const PINS = ['F501', 'F508', 'F517', 'F521', 'F526', 'F537', 'F550', 'F556', 'F564', 'F572']
const cols = {}
for (const f of PINS) {
  const id = map[f].id
  const lines = readFileSync(`${dir}/face${id}.log`, 'utf8').split('\n')
  cols[f] = lines.filter(l => JOIN_ECHO_RE.test(l))
  console.error(`# ${f} id=${id} join-echoes=${cols[f].length}`)
}
// the ninth arc re-check per pin (the byte-exact the generator voices)
const stormNinthOf = (lines) => {
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
  return { ninth: gaps.length > 8 ? gaps[8] : 0, count: gaps.length }
}
const WANTS = { F501: 7, F508: 57, F517: 70, F521: 28, F526: 5, F537: 58, F550: 13, F556: 1, F564: 13, F572: 6 }
for (const f of PINS) {
  const r = stormNinthOf(cols[f])
  const ok = r.ninth === WANTS[f] ? 'OK' : `MISMATCH want ${WANTS[f]}`
  const bound = r.count >= 9 ? 'voiced' : 'constructive'
  console.error(`# ${f} ninth=${r.ninth} count=${r.count} ${bound} ${ok}`)
}
// the arc re-check: the 72-face window F501-F574 the map prices
const faces = []
for (let f = 501; f <= 574; f++) {
  const m = map['F' + f]
  if (!m) continue
  if (m.conclusion !== 'success') continue
  const p = `${dir}/face${m.id}.log`
  try {
    const lines = readFileSync(p, 'utf8').split('\n')
    faces.push(stormNinthOf(lines.filter(l => JOIN_ECHO_RE.test(l))).ninth)
  } catch { /* the hole the F-order keeps */ }
}
console.error(`# arc faces: ${faces.length}`)
console.error('# REAL_ARC = [' + faces.join(',') + ']')
const body = readFileSync(new URL('./test-body-2343.tmpl.mjs', import.meta.url), 'utf8')
let out = body
for (const f of PINS) {
  const arr = cols[f].map(l => '  "' + l + '",').join('\n')
  out = out.replace(`/*__REAL_${f}__*/`, arr)
}
out = out.replace('/*__REAL_ARC__*/', faces.join(','))
process.stdout.write(out)
