import { test } from 'node:test'
import assert from 'node:assert/strict'
import { floorEchoRow } from '../../src/lib/floorecho.mjs'
import { floorCrossConsistent } from '../../src/lib/floorcross.mjs'

test("the under's own echo (v0.976.40) - the side, the fence, the word", () => {
  // THE UNDER'S OWN RETURN byte-exact, the field's own arithmetic:
  // FACE 325 -> 326 rode 45M past -> 45M under (the peak 495M fell to
  // 405M against the valve's own 450M floor)
  const ret = floorEchoRow({
    prev: { marginValveM: -45, valveFloorM: 450, valveClosures: 0 },
    cur: { marginValveM: 45, valveFloorM: 450, valveClosures: 0 }
  })
  assert.equal(ret, "the floor's own side echo (v0.976.40): the prior face rode 45M past, this face rode 45M under - the under's own return (the crossing's word prices the step between the sides - the echo prices the side's own recurrence, co-existence by seat never by duplication)")
  // THE UNDER'S OWN REPEAT byte-exact two ways: FACE 326 -> 327 rode
  // 45 -> 41 under, FACE 327 -> 328 rode 41 -> 33 under (the under
  // HELD three faces deep)
  const rep1 = floorEchoRow({
    prev: { marginValveM: 45, valveFloorM: 450, valveClosures: 0 },
    cur: { marginValveM: 41, valveFloorM: 450, valveClosures: 0 }
  })
  assert.equal(rep1, "the floor's own side echo (v0.976.40): 45M under rode the prior face, 41M under this face - the under's own repeat (the crossing's word prices the step between the sides - the echo prices the side's own recurrence, co-existence by seat never by duplication)")
  const rep2 = floorEchoRow({
    prev: { marginValveM: 41, valveFloorM: 450, valveClosures: 0 },
    cur: { marginValveM: 33, valveFloorM: 450, valveClosures: 0 }
  })
  assert.ok(rep2.includes("the floor's own side echo (v0.976.40): 41M under rode the prior face, 33M under this face - the under's own repeat"))
  // the honest silences: the release (under -> past) and the past's
  // own rest (past -> past) are not the subject - the under is (the
  // rescueecho's own family law)
  assert.equal(floorEchoRow({
    prev: { marginValveM: 33, valveFloorM: 450, valveClosures: 0 },
    cur: { marginValveM: -32, valveFloorM: 450, valveClosures: 0 }
  }), null)
  assert.equal(floorEchoRow({
    prev: { marginValveM: -45, valveFloorM: 450, valveClosures: 0 },
    cur: { marginValveM: -32, valveFloorM: 450, valveClosures: 0 }
  }), null)
  // the fence rides the family's own law imported whole (never a
  // re-declaration): a moved floor is the config's own story, the
  // junk folds lie
  assert.equal(floorEchoRow({
    prev: { marginValveM: 45, valveFloorM: 450, valveClosures: 0 },
    cur: { marginValveM: 41, valveFloorM: 460, valveClosures: 0 }
  }), null)
  assert.equal(floorEchoRow({
    prev: { marginValveM: 45.5, valveFloorM: 450, valveClosures: 0 },
    cur: { marginValveM: 41, valveFloorM: 450, valveClosures: 0 }
  }), null)
  assert.equal(floorEchoRow({
    prev: { marginValveM: 45, valveFloorM: 450, valveClosures: -1 },
    cur: { marginValveM: 41, valveFloorM: 450, valveClosures: 0 }
  }), null)
  assert.equal(floorEchoRow({ prev: { marginValveM: 45 } }), null)
  assert.equal(floorEchoRow(null), null)
  assert.equal(floorEchoRow({
    prev: { marginValveM: 45, valveFloorM: 450, valveClosures: 0 },
    cur: { marginValveM: '41', valveFloorM: 450, valveClosures: 0 }
  }), null)
  assert.equal(floorCrossConsistent({
    prev: { marginValveM: 45, valveFloorM: 450, valveClosures: 0 },
    cur: { marginValveM: 41, valveFloorM: 450, valveClosures: 0 }
  }), true)
  // the boundary law byte-pin: a peak exactly at the line is never
  // under (past = margin <= 0) - the zero margin rides the past's own
  // rest, the silence
  assert.equal(floorEchoRow({
    prev: { marginValveM: 45, valveFloorM: 450, valveClosures: 0 },
    cur: { marginValveM: 0, valveFloorM: 450, valveClosures: 0 }
  }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own pair FACE 326/327 hand-priced from the real logs
  // (the same lens the crossing's wire holds): 45 -> 41 rides the
  // repeat byte-exact
  const fieldRow = floorEchoRow({
    prev: { marginValveM: 45, valveFloorM: 450, valveClosures: 0 },
    cur: { marginValveM: 41, valveFloorM: 450, valveClosures: 0 }
  })
  assert.ok(fieldRow === rep1)
})
