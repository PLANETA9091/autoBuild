// fire-0443 pin verification - the min/max/gapsum bound the 10 pins keep
import { readFileSync } from 'fs'
const map = JSON.parse(readFileSync('/home/z/my-project/dispatch-census-0443.json')).map
const dir = '/home/z/faces0443'
const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
const PINS = { F501: 13, F508: 0, F511: 27, F521: 6, F536: 52, F548: 0, F558: 43, F564: 48, F577: 16, F579: 7 }
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
  const eleventh = gaps.length > 10 ? gaps[10] : 0
  const min = gaps.length ? Math.min(...gaps) : 0
  const max = gaps.length ? Math.max(...gaps) : 0
  const gapsum = gaps.reduce((a, b) => a + b, 0)
  if (eleventh !== want) { console.error(`PIN FAIL ${f}: got ${eleventh} want ${want}`); process.exit(1) }
  if (gaps.length > 10 && !(min <= eleventh && eleventh <= max && eleventh <= gapsum)) {
    console.error(`BOUND FAIL ${f}: ${eleventh} not in [${min},${max}] sum ${gapsum}`); process.exit(1)
  }
  console.log(`${f} eleventh=${eleventh} gapCount=${gaps.length} bound GREEN`)
}
console.log('PINCHECK 10/10 the fire-0443 ledger keeps')
