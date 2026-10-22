// (fire-1943 the :43 stream) the dispatch census re-ride - the
// fire-1743 method the ten anchors keep: the F-number the
// dispatch-run ordinal prices (the anchors the ledger locks: F1 =
// 37403158305, F543 = 39565111685, F549 = 39593093613, F550 =
// 39597737826, F562 = 39690488199, F563 = 39697292378, F567 =
// 39734190584, F568 = 39749767928, F569 = 39758247041, F570 =
// 39765657422). Usage: node scripts/dispatch-census-1943.mjs <token> <out.json>
const token = process.argv[2]
const out = process.argv[3] || '/home/z/my-project/dispatch-census-1943.json'
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
const anchors = {
  37403158305: 1, 39565111685: 543, 39593093613: 549, 39597737826: 550,
  39690488199: 562, 39697292378: 563, 39734190584: 567, 39749767928: 568,
  39758247041: 569, 39765657422: 570
}
const idxOf = new Map(runs.map((r, i) => [r.id, i]))
let best = null
for (let k = 0; k < runs.length; k++) {
  let hit = 0; let miss = 0
  for (const [id, f] of Object.entries(anchors)) {
    const idx = idxOf.get(Number(id))
    if (idx === -1 || idx === undefined) { miss++; continue }
    if (idx - k + 1 === f) hit++
    else miss++
  }
  if (hit > (best?.hit || 0)) best = { hit, miss, k, f1: runs[k]?.id }
}
console.log('best slide:', JSON.stringify(best))
if (best && best.hit === Object.keys(anchors).length) {
  const map = {}
  for (let i = best.k; i < runs.length; i++) {
    const f = i - best.k + 1
    if (f >= 495 && f <= 572) map['F' + f] = { id: runs[i].id, conclusion: runs[i].conclusion, status: runs[i].status, created: runs[i].created }
  }
  await (await import('fs/promises')).writeFile(out, JSON.stringify({ best, runs, map }, null, 1))
  console.log('census written', out, '| F-map entries:', Object.keys(map).length)
  console.log('F568:', JSON.stringify(map.F568))
  console.log('F569:', JSON.stringify(map.F569))
  console.log('F570:', JSON.stringify(map.F570))
} else {
  await (await import('fs/promises')).writeFile(out, JSON.stringify({ best, runs }, null, 1))
  console.log('anchors NOT all locked - the census written for the audit')
}
