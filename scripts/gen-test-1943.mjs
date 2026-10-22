// (fire-1943 the :43 stream) the test fixture generator - the ten
// REAL pin columns the archive keeps byte-exact, the test file the
// pins embed. Usage: node scripts/gen-test-1943.mjs > tests/unit/rejoinstormseventhbreath.test.mjs
import { readFileSync } from 'fs'
const map = JSON.parse(readFileSync('/home/z/my-project/dispatch-census-1943.json')).map
const dir = '/home/z/faces1943'
const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
const PINS = ['F501', 'F504', 'F505', 'F531', 'F533', 'F550', 'F562', 'F564', 'F569', 'F570']
const cols = {}
for (const f of PINS) {
  const id = map[f].id
  const lines = readFileSync(`${dir}/face${id}.log`, 'utf8').split('\n')
  cols[f] = lines.filter(l => JOIN_ECHO_RE.test(l))
  console.error(`# ${f} id=${id} join-echoes=${cols[f].length}`)
}
// the seventh arc re-check per pin (the byte-exact the generator voices)
const seventhOf = (lines) => {
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
  return { seventh: gaps.length > 6 ? gaps[6] : 0, count: gaps.length }
}
const WANTS = { F501: 2, F504: 60, F505: 26, F531: 0, F533: 0, F550: 0, F562: 86, F564: 9, F569: 42, F570: 0 }
for (const f of PINS) {
  const r = seventhOf(cols[f])
  const ok = r.seventh === WANTS[f] ? 'OK' : `MISMATCH want ${WANTS[f]}`
  console.error(`# ${f} seventh=${r.seventh} count=${r.count} ${ok}`)
}
const body = readFileSync(new URL('./test-body-1943.tmpl.mjs', import.meta.url), 'utf8')
let out = body
for (const f of PINS) {
  const arr = cols[f].map(l => '  "' + l + '",').join('\n')
  out = out.replace(`/*__REAL_${f}__*/`, arr)
}
process.stdout.write(out)
