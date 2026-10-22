// fire-0143 pin verification - the stretch/gapsum bound the 10 pins keep
import { readFileSync } from 'fs'
const map = JSON.parse(readFileSync('/home/z/my-project/dispatch-census-0143.json')).map
const dir = '/home/z/faces0143'
const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
const PINS = { F506: 5, F508: 12, F512: 12, F514: 13, F524: 0, F536: 16, F546: 11, F556: 6, F569: 11, F575: 5 }
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
  const ninth = gaps.length > 8 ? gaps[8] : 0
  const min = gaps.length ? Math.min(...gaps) : 0
  const max = gaps.length ? Math.max(...gaps) : 0
  const stretch = cevts.length >= 2 ? cevts[cevts.length - 1].s - cevts[0].s : 0
  const gapsum = gaps.reduce((a, b) => a + b, 0)
  const okVal = ninth === want ? 'OK' : `MISMATCH want ${want}`
  const boundOK = gaps.length > 8 ? (min <= ninth && ninth <= max && ninth <= stretch && ninth <= gapsum) : ninth === 0
  console.log(`${f} id=${map[f].id} ninth=${ninth} count=${gaps.length} min=${min} max=${max} stretch=${stretch} gapsum=${gapsum} wrap=${gapsum - stretch} ${okVal} bound=${boundOK ? 'OK' : 'FAIL'}`)
}
