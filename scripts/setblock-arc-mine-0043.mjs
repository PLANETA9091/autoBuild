#!/usr/bin/env node
// (v0.976.294) arc-mine: the 'Changed the block at' echo lane across the
// REAL server-console faces - the setblock mass the .292 word's own tail
// named the sibling seat this word never prices. Downloads each face's
// fleet-server-log artifact, counts the echo lane + the refusal lane.
import { execFileSync } from 'node:child_process'
import { mkdirSync, existsSync } from 'node:fs'

const TOKEN = process.argv[2]
if (!TOKEN) { console.error('usage: setblock-arc-mine-0043.mjs <token>'); process.exit(1) }
const API = 'https://api.github.com/repos/PLANETA9091/privateB'
const auth = ['-H', `Authorization: token ${TOKEN}`]

// the face runs the family's own records hold (chronological):
// run36284626465, run36286821015, run36289053811, run36292057377,
// run36295859380, run36301385048, F478=39174346168, F486=39211822338,
// F488=39222677292, F493=39260942274, F494=39268802792, F495=39281865630
const FACES = [
  ['36284626465', 'run36284626465'],
  ['36286821015', 'run36286821015'],
  ['36289053811', 'run36289053811'],
  ['36292057377', 'run36292057377'],
  ['36295859380', 'run36295859380'],
  ['36301385048', 'run36301385048'],
  ['39174346168', 'F478'],
  ['39211822338', 'F486'],
  ['39222677292', 'F488'],
  ['39260942274', 'F493'],
  ['39268802792', 'F494'],
  ['39281865630', 'F495']
]

const gh = (args) => execFileSync('curl', ['-s', ...auth, ...args], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })

const counts = []
for (const [runId, label] of FACES) {
  const cacheDir = `/home/z/facecache/sb-${runId}`
  const consoleLog = `${cacheDir}/console.log`
  if (!existsSync(consoleLog)) {
    const arts = JSON.parse(gh([`${API}/actions/runs/${runId}/artifacts`]))
    const art = (arts.artifacts || []).find((a) => a.name === 'fleet-server-log')
    if (!art) { console.log(`${label} ${runId}: NO fleet-server-log artifact (expired=${(arts.artifacts || []).map((a) => a.name).join(',') || 'none'})`); counts.push({ label, runId, echoes: null }); continue }
    mkdirSync(cacheDir, { recursive: true })
    execFileSync('curl', ['-sL', '-H', `Authorization: token ${TOKEN}`, `${API}/actions/artifacts/${art.id}/zip`, '-o', `${cacheDir}/a.zip`], { maxBuffer: 64 * 1024 * 1024 })
    execFileSync('bash', ['-c', `cd ${cacheDir} && unzip -oq a.zip`])
  }
  if (!existsSync(consoleLog)) { console.log(`${label} ${runId}: no console.log in artifact`); counts.push({ label, runId, echoes: null }); continue }
  const echoes = Number(execFileSync('grep', ['-cE', '^\\[[0-9:]{8}\\] \\[Server thread/INFO\\]: Changed the block at -?[0-9]+, -?[0-9]+, -?[0-9]+$', consoleLog], { encoding: 'utf8' }).trim() || '0')
  const refusals = Number(execFileSync('grep', ['-cE', '^\\[[0-9:]{8}\\] \\[Server thread/INFO\\]: Could not set the block$', consoleLog], { encoding: 'utf8' }).trim() || '0')
  const fills = Number(execFileSync('grep', ['-cE', '^\\[[0-9:]{8}\\] \\[Server thread/INFO\\]: Successfully filled [0-9]+ block\\(s\\)$', consoleLog], { encoding: 'utf8' }).trim() || '0')
  const prep = execFileSync('bash', ['-c', `grep -oE 'Time elapsed: [0-9]+ ms' '${consoleLog}' | tail -1`], { encoding: 'utf8' }).trim()
  console.log(`${label} ${runId}: echoes=${echoes} refusals=${refusals} fills=${fills} ${prep}`)
  counts.push({ label, runId, echoes, refusals })
}
console.log('===ARC===')
for (const c of counts) console.log(`${c.label}\t${c.echoes ?? 'null'}`)
console.log('===WINDOWS===')
const order = counts.filter((c) => c.echoes !== null)
for (let i = 0; i + 2 < order.length; i++) {
  const [b, p, cu] = [order[i].echoes, order[i + 1].echoes, order[i + 2].echoes]
  const f1 = p - b
  const f2 = cu - p
  const kind = (f1 === 0 || f2 === 0) ? 'HELD' : (f1 < 0 && f2 < 0) ? 'FADE' : (f1 > 0 && f2 > 0) ? 'SWELL' : 'SWING'
  console.log(`W${order[i].label}-${order[i + 1].label}-${order[i + 2].label}: ${b} -> ${p} (${f1 >= 0 ? '+' : ''}${f1}) -> ${cu} (${f2 >= 0 ? '+' : ''}${f2}) ${kind}`)
}
