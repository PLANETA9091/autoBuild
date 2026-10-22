// fire-0343 pin verification - the stretch/gapsum bound the 10 pins keep
import { readFileSync } from 'fs'
const map = JSON.parse(readFileSync('/home/z/my-project/dispatch-census-0343.json')).map
const dir = '/home/z/faces0343'
const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
const PINS = { F506: 6, F514: 12, F524: 9, F546: 10, F554: 10, F556: 6, F560: 12, F566: 10, F575: 7, F578: 0 }
for (const [f, want] of Object.entries(PINS)) {
  const lines = readFileSync(`${dir}/face${map[f].id}.log`, 'utf8').split('\n')
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
  const tenth = gaps.length > 9 ? gaps[9] : 0
  const min = gaps.length ? Math.min(...gaps) : 0
  const max = gaps.length ? Math.max(...gaps) : 0
  const gapsum = gaps.reduce((a, b) => a + b, 0)
  const okVal = tenth === want ? 'OK' : `MISMATCH want ${want}`
  const boundOK = gaps.length > 9 ? (min <= tenth && tenth <= max && tenth <= gapsum) : tenth === 0
  console.log(`${f} id=${map[f].id} tenth=${tenth} count=${gaps.length} min=${min} max=${max} gapsum=${gapsum} ${okVal} bound=${boundOK ? 'OK' : 'FAIL'}`)
}
