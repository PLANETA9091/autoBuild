// (v0.976.369 fire-0843) THE FIX - the red gate 39704325010 the three
// hands caught: (1) the REAL_F558 block the .368 mislabel rode (the
// F560 face 39665225750 the label prices, the TRUE F558 39652892020
// the .367 ledger and the map both price - the 10=10 storm-third
// coincidence the .368 gate rode), (2) the Math.max arc assert the 72
// the wrong hand wrote (the F501's own 93 the window's own TALLEST
// the opener prices - the 72 the F558 ceiling-face the per-face law
// prices), (3) the honest naming the module comments re-voice.
// THE SCRIPT PATCHES BOTH TEST FILES + THE MODULE COMMENTS.
import { readFileSync, writeFileSync } from 'fs'
const RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
// the TRUE F558 face lines the archive keeps
const trueF558 = readFileSync('/home/z/faces331/face39652892020.log', 'utf8').split('\n').filter(l => RE.test(l))
console.log('true F558 join lines:', trueF558.length)
const block = '// REAL_F558 (face39652892020.log) - 38 join echoes\nconst REAL_F558 = [\n' + trueF558.map(l => '  "' + l + '",').join('\n') + '\n]'
function swapBlock (file, block) {
  const src = readFileSync(file, 'utf8').split('\n')
  const start = src.findIndex(l => l.startsWith('const REAL_F558 = ['))
  if (start === -1) throw new Error(file + ' no REAL_F558')
  let cstart = start
  if (cstart > 0 && src[cstart - 1].startsWith('// REAL_F558')) cstart-- // the comment line rides directly above - replace it too (the mislabel the honest ledger repairs)
  let end = start
  while (src[end] !== ']') end++
  src.splice(cstart, end - cstart + 1, ...block.split('\n'))
  writeFileSync(file, src.join('\n'))
  console.log(file, 'REAL_F558 swapped (lines', cstart + 1, '..', end + 1, '->', block.split('\n').length, ')')
}
swapBlock('/home/z/privateB/tests/unit/rejoinchampthirdbreath.test.mjs', block)
swapBlock('/home/z/privateB/tests/unit/rejoinstormthirdbreath.test.mjs', block)
// the arc-max assert + the class comment the honest naming prices
let t = readFileSync('/home/z/privateB/tests/unit/rejoinchampthirdbreath.test.mjs', 'utf8')
t = t.replace('  assert.equal(Math.max(...arc), 72)', '  assert.equal(Math.max(...arc), 93) // the F501\'s own 93 the window\'s own TALLEST the opener prices (the 72 the F558 ceiling-face the per-face law prices)')
t = t.replace('the 12 and the 13\n  // the three-face classes, the 72 the ceiling face F558 keeps', 'the 12 and the 13\n  // the three-face classes, the 93 the F501 opener the window\'s own tallest keeps, the 72 the F558 ceiling-face keeps')
writeFileSync('/home/z/privateB/tests/unit/rejoinchampthirdbreath.test.mjs', t)
// the module comments the honest naming re-voices (comment-only)
let m = readFileSync('/home/z/privateB/src/lib/rejoinchampthirdbreath.mjs', 'utf8')
m = m.replace('(F558\'s own 72 the arc ceiling the\n// same face prices, F530\'s own 67', '(F558\'s own 72 the ceiling-face the\n// same face prices, F530\'s own 67')
m = m.replace("the 72 the ceiling face F558 keeps, the 93\n// the F501 opener keeps, the 13 the fresh tail F563 keeps", "the 93 the F501 opener the window's own\n// TALLEST keeps, the 72 the F558 ceiling-face keeps, the 13 the fresh tail F563 keeps")
writeFileSync('/home/z/privateB/src/lib/rejoinchampthirdbreath.mjs', m)
console.log('patched')
