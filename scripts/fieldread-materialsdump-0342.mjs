#!/usr/bin/env node
// (v0.976.248, fire-0342) fieldread-materials-dump: read the materials
// byName dump line across the cached faces - the census's own fieldproof.
import { readFileSync } from 'node:fs'
import { execSync } from 'node:child_process'

const faces = [
  ['face466', '/home/z/my-project/faces/face466.zip'],
  ['face467', '/home/z/my-project/faces/face467.zip'],
  ['face468', '/home/z/my-project/faces/face468.zip'],
  ['face473', '/home/z/privateB/faces/face473/fleet19.log']
]
const RE = /^materials: (\{"[a-z_]+":(?:0|[1-9]\d*)(?:,"[a-z_]+":(?:0|[1-9]\d*))*\})$/
for (const [name, path] of faces) {
  const lines = path.endsWith('.zip')
    ? execSync(`unzip -p ${path} fleet19.log`, { encoding: 'utf8' }).split('\n')
    : readFileSync(path, 'utf8').split('\n')
  const rows = lines.filter(l => l.startsWith('materials: '))
  console.log(`--- ${name}: ${rows.length} line(s) ---`)
  for (const l of rows) {
    const json = l.slice('materials: '.length)
    let ok = null
    try { ok = JSON.parse(json) } catch { ok = null }
    if (ok && typeof ok === 'object') {
      const vals = Object.values(ok)
      const units = vals.reduce((a, b) => a + b, 0)
      const kinds = vals.length
      const topKey = Object.entries(ok).sort((a, b) => b[1] - a[1])[0]
      const compact = JSON.stringify(ok) === json
      console.log(`  kinds=${kinds} units=${units} top=${topKey ? topKey[0] + '=' + topKey[1] : 'n/a'} compact=${compact} len=${l.length}`)
    } else {
      console.log(`  UNPARSED: ${l.slice(0, 80)}`)
    }
  }
  // print the full line for the byte-exact pin (first face only)
  if (name === 'face473' && rows[0]) console.log('FULL473=' + rows[0])
  if (name === 'face466' && rows[0]) console.log('FULL466=' + rows[0])
  if (name === 'face467' && rows[0]) console.log('FULL467=' + rows[0])
  if (name === 'face468' && rows[0]) console.log('FULL468=' + rows[0])
}
