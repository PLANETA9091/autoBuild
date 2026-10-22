// (v0.976.372 fire-1343) the face harvest re-ride - the fire-1243
// script the same method keeps, the loop the F567 face the fresh tail
// includes: the window F501..F567 the census map prices, the
// fleet-server-log artifact per run, the 302 the Azure Blob the
// Authorization cross-host strip the two-step curl rides.
// Usage: node scripts/harvest-faces-1343.mjs <token> <map.json> <outdir>
import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { execFileSync } from 'child_process'
const token = process.argv[2]
const mapFile = process.argv[3] || '/home/z/my-project/dispatch-census-1343.json'
const outdir = process.argv[4] || '/home/z/faces331'
const H = { Authorization: `token ${token}`, 'User-Agent': 'fleet-harvest' }
if (!existsSync(outdir)) mkdirSync(outdir, { recursive: true })
const map = JSON.parse(await (await import('fs/promises')).readFile(mapFile)).map
const holes = []
let got = 0
for (let f = 501; f <= 567; f++) {
  const m = map['F' + f]
  if (!m) { holes.push(`F${f} no-map`); continue }
  const face = `${outdir}/face${m.id}.log`
  if (existsSync(face) && execFileSync('stat', ['-c', '%s', face]).toString().trim() !== '0') { got++; continue }
  if (m.conclusion !== 'success') { holes.push(`F${f} ${m.conclusion}`); continue }
  const ar = await (await fetch(`https://api.github.com/repos/PLANETA9091/privateB/actions/runs/${m.id}/artifacts`, { headers: H })).json()
  const a = (ar.artifacts || []).find(x => x.name === 'fleet-server-log')
  if (!a) { holes.push(`F${f} ${m.id} no-fleet-server-log-artifact`); continue }
  // the two-step: the API location first, the blob URL the header strip rides
  const lr = await fetch(`https://api.github.com/repos/PLANETA9091/privateB/actions/artifacts/${a.id}/zip`, { headers: { ...H, Range: 'bytes=0-0' }, redirect: 'manual' })
  const loc = lr.headers.get('location')
  if (!loc) { holes.push(`F${f} ${m.id} no-location HTTP ${lr.status}`); continue }
  execFileSync('bash', ['-c', `curl -s "${loc}" -o /tmp/face.zip`])
  execFileSync('bash', ['-c', `rm -rf /tmp/facex && mkdir -p /tmp/facex && cd /tmp/facex && unzip -o -q /tmp/face.zip`])
  const files = execFileSync('bash', ['-c', `ls /tmp/facex`]).toString().trim().split('\n')
  const logf = files.find(x => x.endsWith('.log') || x.endsWith('.txt')) || files[0]
  execFileSync('cp', [`/tmp/facex/${logf}`, face])
  got++
  if (got % 10 === 0) console.log('harvested', got)
}
console.log('faces harvested:', got, '/ 66 ; holes:', JSON.stringify(holes))
writeFileSync('/tmp/face-holes-1343.json', JSON.stringify(holes, null, 1))
