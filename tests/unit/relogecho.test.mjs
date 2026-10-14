import { test } from 'node:test'
import assert from 'node:assert/strict'
import { relogEchoRow, relogEchoConsistent } from '../../src/lib/relogecho.mjs'

test("the relog book's own echo (v0.976.38) - the voice, the fence, the word", () => {
  // THE REPEAT byte-exact, the field's own arithmetic four pairs deep:
  // FACE 326 -> 327 rode 3 -> 2 relog(s), FACE 323 -> 324 rode 6 -> 9
  // (the counts hand-priced from the real logs, the frozen census owns
  // the book)
  const rep1 = relogEchoRow({ prev: { relogs: 3 }, cur: { relogs: 2 } })
  assert.equal(rep1, "the relog book's own echo (v0.976.38): 3 relog(s) rode the prior face, 2 this face - the voice's own repeat (the relog's own bill prices the book within the face - the echo prices the voice's own recurrence, co-existence by seat never by duplication)")
  const rep2 = relogEchoRow({ prev: { relogs: 6 }, cur: { relogs: 9 } })
  assert.ok(rep2.includes("the relog book's own echo (v0.976.38): 6 relog(s) rode the prior face, 9 this face - the voice's own repeat"))
  // the counts ride as context bytes - the magnitude's own direction
  // never rides the row (the trend's family owns the steps)
  assert.ok(!/fell|rose|deep|eased|climb|slide/.test(rep1))
  // THE RETURN byte-exact: the silent prior face then the spoken face
  const ret = relogEchoRow({ prev: { relogs: 0 }, cur: { relogs: 5 } })
  assert.equal(ret, "the relog book's own echo (v0.976.38): the prior face rode 0 relog(s), 5 this face - the voice's own return (the relog's own bill prices the book within the face - the echo prices the voice's own recurrence, co-existence by seat never by duplication)")
  // the honest silences: a silent face prices no echo (the voice's
  // rest is not the subject - the voice is; the valve's own family
  // law) - the spoken -> silent and the silent -> silent both null
  assert.equal(relogEchoRow({ prev: { relogs: 4 }, cur: { relogs: 0 } }), null)
  assert.equal(relogEchoRow({ prev: { relogs: 0 }, cur: { relogs: 0 } }), null)
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(relogEchoConsistent({ prev: { relogs: 3 }, cur: { relogs: 2.5 } }), false)
  assert.equal(relogEchoConsistent({ prev: { relogs: 3 }, cur: { relogs: -1 } }), false)
  assert.equal(relogEchoConsistent({ prev: { relogs: 3 } }), false)
  assert.equal(relogEchoConsistent({ prev: { relogs: '3' }, cur: { relogs: 2 } }), false)
  assert.equal(relogEchoConsistent(null), false)
  assert.equal(relogEchoConsistent([]), false)
  assert.equal(relogEchoConsistent({ prev: { relogs: 3 }, cur: { relogs: 2 } }), true)
  assert.equal(relogEchoRow({ prev: { relogs: 3 }, cur: { relogs: -1 } }), null)
  assert.equal(relogEchoRow({ prev: { relogs: '3' }, cur: { relogs: 2 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own pair FACE 326/327 hand-priced from the real logs
  // (frozenCensus owns the count - the same image the frozen census's
  // own row holds): 3 -> 2 rides the repeat byte-exact
  const fieldRow = relogEchoRow({ prev: { relogs: 3 }, cur: { relogs: 2 } })
  assert.ok(fieldRow === rep1)
})
