// (fire-0343 the :43 stream) the face harvest re-ride - the fire-0143
// script the same method keeps, the map the census-0343 slide the
// SEVENTEEN anchors lock (F1 = 37403158305, F577 = 39829014375): the
// window F501..F577 the census map prices, the fleet-server-log
// artifact per run, the 302 the Azure Blob the Authorization
// cross-host strip the two-step curl rides. The F577 face the fresh
// tail re-rides when the terminal SUCCESS the archive prices (the
// fire-0143 agent's twentieth dispatch the lane the one-active law
// keeps). Usage: node scripts/harvest-faces-0343.mjs <token> <map.json> <outdir>
import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { execFileSync } from 'child_process'
const token = process.argv[2]
const mapFile = process.argv[3] || '/home/z/my-project/dispatch-census-0343.json'
const outdir = process.argv[4] || '/home/z/faces0343'
const FROM = Number(process.argv[5] || 501)
const TO = Number(process.argv[6] || 578)
const H = { Authorization: `token ${token}`, 'User-Agent': 'fleet-harvest' }
if (!existsSync(outdir)) mkdirSync(outdir, { recursive: true })
const map = JSON.parse(await (await import('fs/promises')).readFile(mapFile)).map
const holes = []
let got = 0
for (let f = FROM; f <= TO; f++) {
  const m = map['F' + f]
  if (!m) { holes.push(`F${f} no-map`); continue }
  const face = `${outdir}/face${m.id}.log`
  if (existsSync(face) && execFileSync('stat', ['-c', '%s', face]).toString().trim() !== '0') { got++; continue }
  if (m.conclusion !== 'success') { holes.push(`F${f} ${m.conclusion || m.status}`); continue }
  const ar = await (await fetch(`https://api.github.com/repos/PLANETA9091/privateB/actions/runs/${m.id}/artifacts`, { headers: H })).json()
  const a = (ar.artifacts || []).find(x => x.name === 'fleet-server-log')
  if (!a) { holes.push(`F${f} ${m.id} no-fleet-server-log-artifact`); continue }
  let okFace = false
  for (let att = 1; att <= 3 && !okFace; att++) {
    try {
      // the two-step: the API location first, the blob URL the header strip rides
      const lr = await fetch(`https://api.github.com/repos/PLANETA9091/privateB/actions/artifacts/${a.id}/zip`, { headers: { ...H, Range: 'bytes=0-0' }, redirect: 'manual' })
      const loc = lr.headers.get('location')
      if (!loc) throw new Error(`no-location HTTP ${lr.status}`)
      execFileSync('bash', ['-c', `curl -s --max-time 60 "${loc}" -o /tmp/face0343.zip`])
      execFileSync('bash', ['-c', `rm -rf /tmp/facex0343 && mkdir -p /tmp/facex0343 && cd /tmp/facex0343 && unzip -tq /tmp/face0343.zip >/dev/null && unzip -o -q /tmp/face0343.zip`])
      const files = execFileSync('bash', ['-c', `ls /tmp/facex0343`]).toString().trim().split('\n')
      const logf = files.find(x => x.endsWith('.log') || x.endsWith('.txt')) || files[0]
      execFileSync('cp', [`/tmp/facex0343/${logf}`, face])
      okFace = true
    } catch (e) {
      if (att === 3) holes.push(`F${f} ${m.id} attempt${att} ${String(e.message).slice(0, 80)}`)
      else await new Promise(res => setTimeout(res, 1500 * att))
    }
  }
  if (okFace) { got++; if (got % 10 === 0) console.log('harvested', got) }
}
console.log(`faces harvested in [F${FROM}..F${TO}]:`, got, `of ${TO - FROM + 1} ; holes:`, JSON.stringify(holes))
writeFileSync('/tmp/face-holes-0343.json', JSON.stringify(holes, null, 1))
