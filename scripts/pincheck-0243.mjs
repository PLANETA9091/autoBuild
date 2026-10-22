// fire-0243 pin verification - the stretch/gapsum bound the 10 pins keep
import { readFileSync } from 'fs'
const map = JSON.parse(readFileSync('/home/z/my-project/dispatch-census-0243.json')).map
const dir = '/home/z/faces0243'
const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
const PINS = { F501: 9, F508: 1, F517: 33, F521: 46, F524: 6, F526: 35, F538: 0, F556: 5, F569: 6, F577: 1 }
for (const [f, want] of Object.entries(PINS)) {
  const lines = readFileSync(`${dir}/face${map[f].id}.log`, 'utf8').split('\n')
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
  const tenth = gaps.length > 9 ? gaps[9] : 0
  const min = gaps.length ? Math.min(...gaps) : 0
  const max = gaps.length ? Math.max(...gaps) : 0
  const gapsum = gaps.reduce((a, b) => a + b, 0)
  const okVal = tenth === want ? 'OK' : `MISMATCH want ${want}`
  const boundOK = gaps.length > 9 ? (min <= tenth && tenth <= max && tenth <= gapsum) : tenth === 0
  console.log(`${f} id=${map[f].id} tenth=${tenth} count=${gaps.length} min=${min} max=${max} gapsum=${gapsum} ${okVal} bound=${boundOK ? 'OK' : 'FAIL'}`)
}
