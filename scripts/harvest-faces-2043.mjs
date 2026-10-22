// (fire-2043 the :43 stream) the face harvest re-ride - the fire-1943
// script the same method keeps, the map the census-2043 slide the
// ELEVEN anchors lock (F1 = 37403158305, F571 = 39775762342): the
// window F501..F571 the census map prices, the fleet-server-log
// artifact per run, the 302 the Azure Blob the Authorization
// cross-host strip the two-step curl rides. The F572 face the
// terminal phase re-rides when the run lands.
// Usage: node scripts/harvest-faces-2043.mjs <token> <map.json> <outdir>
import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { execFileSync } from 'child_process'
const token = process.argv[2]
const mapFile = process.argv[3] || '/home/z/my-project/dispatch-census-2043.json'
const outdir = process.argv[4] || '/home/z/faces2043'
const H = { Authorization: `token ${token}`, 'User-Agent': 'fleet-harvest' }
if (!existsSync(outdir)) mkdirSync(outdir, { recursive: true })
const map = JSON.parse(await (await import('fs/promises')).readFile(mapFile)).map
const holes = []
let got = 0
for (let f = 501; f <= 571; f++) {
  const m = map['F' + f]
  if (!m) { holes.push(`F${f} no-map`); continue }
  const face = `${outdir}/face${m.id}.log`
  if (existsSync(face) && execFileSync('stat', ['-c', '%s', face]).toString().trim() !== '0') { got++; continue }
  if (m.conclusion !== 'success') { holes.push(`F${f} ${m.conclusion || m.status}`); continue }
  const ar = await (await fetch(`https://api.github.com/repos/PLANETA9091/privateB/actions/runs/${m.id}/artifacts`, { headers: H })).json()
  const a = (ar.artifacts || []).find(x => x.name === 'fleet-server-log')
  if (!a) { holes.push(`F${f} ${m.id} no-fleet-server-log-artifact`); continue }
  // the two-step: the API location first, the blob URL the header strip rides
  const lr = await fetch(`https://api.github.com/repos/PLANETA9091/privateB/actions/artifacts/${a.id}/zip`, { headers: { ...H, Range: 'bytes=0-0' }, redirect: 'manual' })
  const loc = lr.headers.get('location')
  if (!loc) { holes.push(`F${f} ${m.id} no-location HTTP ${lr.status}`); continue }
  execFileSync('bash', ['-c', `curl -s "${loc}" -o /tmp/face2043.zip`])
  execFileSync('bash', ['-c', `rm -rf /tmp/facex2043 && mkdir -p /tmp/facex2043 && cd /tmp/facex2043 && unzip -o -q /tmp/face2043.zip`])
  const files = execFileSync('bash', ['-c', `ls /tmp/facex2043`]).toString().trim().split('\n')
  const logf = files.find(x => x.endsWith('.log') || x.endsWith('.txt')) || files[0]
  execFileSync('cp', [`/tmp/facex2043/${logf}`, face])
  got++
  if (got % 10 === 0) console.log('harvested', got)
}
console.log('faces harvested:', got, '/ 71 ; holes:', JSON.stringify(holes))
writeFileSync('/tmp/face-holes-2043.json', JSON.stringify(holes, null, 1))
