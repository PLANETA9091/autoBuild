// (v0.976.369 fire-0843) the dispatch census - every workflow_dispatch
// run enumerated, the F-anchor slide the fire-0743 method re-rides:
// the F-number the dispatch-run ordinal keeps (the anchors the
// fire-0643/0743 worklogs lock: F543 = 39565111685, F549 = 39593093613,
// F550 = 39597737826, F562 = 39690488199, F563 = 39697292378).
// Usage: node scripts/dispatch-census-0843.mjs <token> <out.json>
const token = process.argv[2]
const out = process.argv[3] || '/tmp/dispatch-census.json'
const H = { Authorization: `token ${token}`, 'User-Agent': 'fleet-census' }
const runs = []
for (let page = 1; page <= 12; page++) {
  const r = await fetch(`https://api.github.com/repos/PLANETA9091/privateB/actions/runs?event=workflow_dispatch&per_page=100&page=${page}`, { headers: H })
  if (!r.ok) { console.error('HTTP', r.status, 'page', page); break }
  const j = await r.json()
  for (const w of j.workflow_runs) {
    runs.push({ id: w.id, created: w.created_at, conclusion: w.conclusion, status: w.status, number: w.run_number })
  }
  if (j.workflow_runs.length < 100) break
}
runs.sort((a, b) => a.id - b.id) // the run id monotone the creation order prices
console.log('total dispatch runs:', runs.length)
// the anchors the worklogs lock
const anchors = { 39565111685: 543, 39593093613: 549, 39597737826: 550, 39690488199: 562, 39697292378: 563 }
// the slide: try every candidate offset (F1 = runs[k].id), the offset the
// anchors ALL lock the honest map prices
let best = null
for (let k = 0; k < runs.length; k++) {
  let hit = 0; let miss = 0
  for (const [id, f] of Object.entries(anchors)) {
    const idx = runs.findIndex(r => r.id === Number(id))
    if (idx === -1) { miss++; continue }
    if (idx - k + 1 === f) hit++
  }
  if (hit > (best?.hit || 0)) best = { hit, miss, k, f1: runs[k].id }
}
console.log('best slide:', JSON.stringify(best))
if (best && best.hit === Object.keys(anchors).length) {
  const map = {}
  for (let i = best.k; i < runs.length; i++) {
    const f = i - best.k + 1
    if (f >= 495 && f <= 570) map['F' + f] = { id: runs[i].id, conclusion: runs[i].conclusion, created: runs[i].created }
  }
  console.log(JSON.stringify(map, null, 1))
  await (await import('fs/promises')).writeFile(out, JSON.stringify({ best, runs, map }, null, 1))
  console.log('census written', out)
} else {
  await (await import('fs/promises')).writeFile(out, JSON.stringify({ best, runs }, null, 1))
  console.log('anchors NOT all locked - the census written for the audit')
}
