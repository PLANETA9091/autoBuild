import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rescueTrendRow, rescueTrendConsistent } from '../../src/lib/rescuetrend.mjs'

test("the rescue book's own trend (v0.976.36) - the fold, the fence, the word", () => {
  // the RUN's own shape byte-exact: the field's own history FACE 324
  // -> 325 -> 326 rode 3/55 -> 2/44 -> 1/63 - the scar held three
  // faces deep (a repeat then a repeat; the echo's word priced each
  // repeat one at a time - the REPEAT rows the FACE 325 and FACE 326
  // reads already hold)
  const run = rescueTrendRow({ back: { unclosed: 3, starts: 55 }, prev: { unclosed: 2, starts: 44 }, cur: { unclosed: 1, starts: 63 } })
  assert.ok(run.includes("the rescue book's own trend (v0.976.36): the scar held three faces deep - 3 unclosed of 55 start(s), then 2 of 44, then 1 of 63"))
  assert.ok(run.includes("- the scar's own run (the echo prices each repeat one step at a time"))
  // the STAY's own shape byte-exact: FACE 323 -> 324 -> 325 rode
  // 0/20 -> 3/55 -> 2/44 - the scar arrived on the return and held
  const stay = rescueTrendRow({ back: { unclosed: 0, starts: 20 }, prev: { unclosed: 3, starts: 55 }, cur: { unclosed: 2, starts: 44 } })
  assert.ok(stay.includes("the rescue book's own trend (v0.976.36): the scar arrived on the return and held - 0 unclosed of 20 start(s), then 3 of 55, then 2 of 44"))
  assert.ok(stay.includes("- the scar's own stay (the echo prices the return and the repeat one step at a time"))
  // the SWING's own shape byte-exact both ways, the field's own
  // alternation eight rides: FACE 322 -> 323 -> 324 rode 1/43 -> 0/20
  // -> 3/55 (the scar at the bookends) and FACE 321 -> 322 -> 323 rode
  // 0/17 -> 1/43 -> 0/20 (the scar in the middle) - the alternation
  // is one shape
  const swing1 = rescueTrendRow({ back: { unclosed: 1, starts: 43 }, prev: { unclosed: 0, starts: 20 }, cur: { unclosed: 3, starts: 55 } })
  assert.ok(swing1.includes("the rescue book's own trend (v0.976.36): the clean and the scar traded seats between the walks - 1 unclosed of 43 start(s), then 0 of 20, then 3 of 55"))
  assert.ok(swing1.includes("- the scar's own swing (the echo prices each step one at a time"))
  const swing2 = rescueTrendRow({ back: { unclosed: 0, starts: 17 }, prev: { unclosed: 1, starts: 43 }, cur: { unclosed: 0, starts: 20 } })
  assert.ok(swing2.includes("the rescue book's own trend (v0.976.36): the clean and the scar traded seats between the walks - 0 unclosed of 17 start(s), then 1 of 43, then 0 of 20"))
  // the held steps' honest silences: a trio a held-clean step rode
  // prices nothing (the family's own held law - the bars never
  // invent): the held clean, the held-then-return, the
  // release-into-held
  assert.equal(rescueTrendRow({ back: { unclosed: 0, starts: 17 }, prev: { unclosed: 0, starts: 20 }, cur: { unclosed: 3, starts: 55 } }), null)
  assert.equal(rescueTrendRow({ back: { unclosed: 0, starts: 17 }, prev: { unclosed: 0, starts: 20 }, cur: { unclosed: 0, starts: 20 } }), null)
  assert.equal(rescueTrendRow({ back: { unclosed: 1, starts: 43 }, prev: { unclosed: 0, starts: 20 }, cur: { unclosed: 0, starts: 20 } }), null)
  // the hold's own release the field never rode prices the honest
  // silence (the unriden shape waits for its first ride - the bars
  // never invent)
  assert.equal(rescueTrendRow({ back: { unclosed: 3, starts: 55 }, prev: { unclosed: 2, starts: 44 }, cur: { unclosed: 0, starts: 63 } }), null)
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string cells lie
  assert.equal(rescueTrendConsistent({ back: { unclosed: 3, starts: 55 }, prev: { unclosed: 2.5, starts: 44 }, cur: { unclosed: 1, starts: 63 } }), false)
  assert.equal(rescueTrendConsistent({ back: { unclosed: 3, starts: 55 }, prev: { unclosed: -1, starts: 44 }, cur: { unclosed: 1, starts: 63 } }), false)
  assert.equal(rescueTrendConsistent({ back: { unclosed: 3, starts: 55 }, prev: { unclosed: 2, starts: 44 }, cur: { unclosed: 1 } }), false)
  assert.equal(rescueTrendConsistent({ back: { unclosed: '3', starts: 55 }, prev: { unclosed: 2, starts: 44 }, cur: { unclosed: 1, starts: 63 } }), false)
  assert.equal(rescueTrendConsistent({ back: { unclosed: 3, starts: 55 }, prev: { unclosed: 2, starts: 44 } }), false)
  assert.equal(rescueTrendConsistent(null), false)
  assert.equal(rescueTrendConsistent('scar'), false)
  assert.equal(rescueTrendConsistent([{ unclosed: 1, starts: 1 }, { unclosed: 1, starts: 1 }, { unclosed: 1, starts: 1 }]), false)
  // the fence's own row pass: a fenced fold rides, a lying fold
  // prices nothing
  assert.equal(rescueTrendRow({ back: { unclosed: 2.5, starts: 55 }, prev: { unclosed: 2, starts: 44 }, cur: { unclosed: 1, starts: 63 } }), null)
  assert.equal(rescueTrendRow(null), null)
})
