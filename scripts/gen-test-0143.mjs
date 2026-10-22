// (fire-0143 the :43 stream) the test fixture generator - the ten REAL
// pin columns the archive keeps byte-exact, the test file the pins
// embed. Usage: node scripts/gen-test-0143.mjs > tests/unit/rejoinchampninthbreath.test.mjs
import { readFileSync } from 'fs'
const map = JSON.parse(readFileSync('/home/z/my-project/dispatch-census-0143.json')).map
const dir = '/home/z/faces0143'
const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
const PINS = ['F506', 'F508', 'F512', 'F514', 'F524', 'F536', 'F546', 'F556', 'F569', 'F575']
const cols = {}
for (const f of PINS) {
  const id = map[f].id
  const lines = readFileSync(`${dir}/face${id}.log`, 'utf8').split('\n')
  cols[f] = lines.filter(l => JOIN_ECHO_RE.test(l))
  console.error(`# ${f} id=${id} join-echoes=${cols[f].length}`)
}
// the ninth arc re-check per pin (the byte-exact the generator voices)
const champNinthOf = (lines) => {
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
  return { ninth: gaps.length > 8 ? gaps[8] : 0, count: gaps.length }
}
const WANTS = { F506: 5, F508: 12, F512: 12, F514: 13, F524: 0, F536: 16, F546: 11, F556: 6, F569: 11, F575: 5 }
for (const f of PINS) {
  const r = champNinthOf(cols[f])
  const ok = r.ninth === WANTS[f] ? 'OK' : `MISMATCH want ${WANTS[f]}`
  const bound = r.count >= 9 ? 'voiced' : 'constructive'
  console.error(`# ${f} ninth=${r.ninth} count=${r.count} ${bound} ${ok}`)
}
// the arc re-check: the 73-face window F501-F575 the map prices
const faces = []
for (let f = 501; f <= 576; f++) {
  const m = map['F' + f]
  if (!m) continue
  if (m.conclusion !== 'success') continue
  const p = `${dir}/face${m.id}.log`
  try {
    const lines = readFileSync(p, 'utf8').split('\n')
    faces.push(champNinthOf(lines.filter(l => JOIN_ECHO_RE.test(l))).ninth)
  } catch { /* the hole the F-order keeps */ }
}
console.error(`# arc faces: ${faces.length}`)
console.error('# REAL_ARC = [' + faces.join(',') + ']')
const body = readFileSync(new URL('./test-body-0143.tmpl.mjs', import.meta.url), 'utf8')
let out = body
for (const f of PINS) {
  const arr = cols[f].map(l => '  "' + l + '",').join('\n')
  out = out.replace(`/*__REAL_${f}__*/`, arr)
}
out = out.replace('/*__REAL_ARC__*/', faces.join(','))
process.stdout.write(out)
