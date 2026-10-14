import { test } from 'node:test'
import assert from 'node:assert/strict'
import { kindTrendRow, kindTrendConsistent } from '../../src/lib/kindtrend.mjs'

const h = (kind, deaths) => ({ kind, deaths })

test("the kind's own trend (v0.976.39) - the fold, the fence, the word", () => {
  // the CHURN'S OWN RUN byte-exact, the field's own arithmetic six
  // rides: the word's own birth face FACE 326 -> 327 -> 328 rode
  // drown (1) -> mob (4) -> fall (3) - the seat traded two walks
  // straight; the churn era's own five rides before it (317/318/319,
  // 318/319/320, 319/320/321, 320/321/322, 321/322/323)
  const run1 = kindTrendRow({ back: h('drown', 1), prev: h('mob', 4), cur: h('fall', 3) })
  assert.ok(run1.includes("the kind's own trend (v0.976.39): the seat traded two walks straight - drown (1) -> mob (4) -> fall (3)"))
  assert.ok(run1.includes("- the churn's own run (the echo prices each turn one step at a time"))
  const run2 = kindTrendRow({ back: h('mob', 4), prev: h('drown', 5), cur: h('explosion', 1) })
  assert.ok(run2.includes("the seat traded two walks straight - mob (4) -> drown (5) -> explosion (1)"))
  // the DYNASTY'S OWN HOLD byte-exact: the first dynasty's own three
  // rides (313/314/315, 314/315/316, 315/316/317 - the mob head five
  // faces straight)
  const hold1 = kindTrendRow({ back: h('mob', 4), prev: h('mob', 1), cur: h('mob', 3) })
  assert.ok(hold1.includes("the kind's own trend (v0.976.39): the head held three faces deep - mob (4) -> mob (1) -> mob (3)"))
  assert.ok(hold1.includes("- the dynasty's own hold (the echo prices each repeat one step at a time"))
  const hold2 = kindTrendRow({ back: h('mob', 1), prev: h('mob', 3), cur: h('mob', 10) })
  assert.ok(hold2.includes("the head held three faces deep - mob (1) -> mob (3) -> mob (10)"))
  const hold3 = kindTrendRow({ back: h('mob', 3), prev: h('mob', 4), cur: h('mob', 10) })
  assert.ok(hold3.includes("the head held three faces deep - mob (3) -> mob (4) -> mob (10)"))
  // the DYNASTY'S OWN DEATH byte-exact: the field's own three rides -
  // the FIRST dynasty's own end (316/317/318: mob,mob,drown), the
  // mob's second dynasty dying at one repeat (323/324/325:
  // mob,mob,drown), the drown dynasty's own end (325/326/327:
  // drown,drown,mob)
  const death1 = kindTrendRow({ back: h('mob', 4), prev: h('mob', 10), cur: h('drown', 5) })
  assert.ok(death1.includes("the kind's own trend (v0.976.39): the dynasty died at one repeat - mob (4) -> mob (10) -> drown (5)"))
  assert.ok(death1.includes("- the dynasty's own death (the echo prices the repeat and the turn one step at a time"))
  const death2 = kindTrendRow({ back: h('mob', 7), prev: h('mob', 7), cur: h('drown', 6) })
  assert.ok(death2.includes("the dynasty died at one repeat - mob (7) -> mob (7) -> drown (6)"))
  const death3 = kindTrendRow({ back: h('drown', 6), prev: h('drown', 1), cur: h('mob', 4) })
  assert.ok(death3.includes("the dynasty died at one repeat - drown (6) -> drown (1) -> mob (4)"))
  // the DYNASTY'S OWN BIRTH byte-exact: the field's own two rides -
  // the mob's second dynasty rising (322/323/324: explosion,mob,mob)
  // and the drown dynasty's own rise (324/325/326: mob,drown,drown)
  const birth1 = kindTrendRow({ back: h('explosion', 4), prev: h('mob', 7), cur: h('mob', 7) })
  assert.ok(birth1.includes("the kind's own trend (v0.976.39): the dynasty born of a turn - explosion (4) -> mob (7) -> mob (7)"))
  assert.ok(birth1.includes("- the dynasty's own birth (the echo prices the turn and the repeat one step at a time"))
  const birth2 = kindTrendRow({ back: h('mob', 7), prev: h('drown', 6), cur: h('drown', 1) })
  assert.ok(birth2.includes("the dynasty born of a turn - mob (7) -> drown (6) -> drown (1)"))
  // the honest silences: an empty book on any face prices no trend
  // (the echo's own empty-book law - the bars never invent)
  assert.equal(kindTrendRow({ back: null, prev: h('mob', 4), cur: h('fall', 3) }), null)
  assert.equal(kindTrendRow({ back: h('drown', 1), prev: null, cur: h('fall', 3) }), null)
  assert.equal(kindTrendRow({ back: h('drown', 1), prev: h('mob', 4), cur: null }), null)
  // the fence: the fold must prove itself (the word never rides a
  // lie) - junk heads, missing mass, empty kind byte, wrong types
  assert.equal(kindTrendConsistent({ back: h('mob', 4), prev: h('drown', -1), cur: h('fall', 3) }), false)
  assert.equal(kindTrendConsistent({ back: h('mob', 4), prev: h('drown', 1.5), cur: h('fall', 3) }), false)
  assert.equal(kindTrendConsistent({ back: h('mob', 4), prev: h('', 1), cur: h('fall', 3) }), false)
  assert.equal(kindTrendConsistent({ back: h('mob', 4), prev: { kind: 'drown' }, cur: h('fall', 3) }), false)
  assert.equal(kindTrendConsistent({ back: h('mob', 4), prev: h('drown', 1) }), false)
  assert.equal(kindTrendConsistent(null), false)
  assert.equal(kindTrendConsistent('mob'), false)
  assert.equal(kindTrendConsistent([h('mob', 1), h('mob', 1), h('mob', 1)]), false)
  // the fence's own row pass: a lying fold prices nothing, a fenced
  // fold rides
  assert.equal(kindTrendRow({ back: h('mob', 4), prev: h('drown', 1.5), cur: h('fall', 3) }), null)
  assert.equal(kindTrendRow(null), null)
})
