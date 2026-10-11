// (v0.936.0) THE LOGIN CHURN'S OWN CAST - the kick bill's bot-level seat
// (the count-seat precedent: each churn event is one vote). The seat reads
// the v0.717.0 bill's OWN cells (kickBots + paired.byBot + relogOnly.bots -
// the bill's own construction law partitions both books), zero re-parsing.
// Strict-majority law (a tie owns nothing), byte-law riders (count desc,
// bot byte asc), the branch law fenced in the lib, the junk fences, the
// honest silences. Tests run END-TO-END: kickBill(frozen) feeds the cast -
// the same cells the decompose's own wiring reads.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { kickBill, loginChurnCast, loginChurnCastRow, loginChurnRiders, loginChurnRidersRow } from '../../src/lib/kickbill.mjs'

const frozen = (kicks, relogs) => ({ dupKicks: { n: Object.values(kicks).reduce((a, x) => a + x, 0), byBot: kicks }, relogs: { n: Object.values(relogs).reduce((a, x) => a + x, 0), byBot: relogs } })

test('the count law: the top churner owns the cast under the strict majority', () => {
  const bill = kickBill(frozen({ F14: 8 }, { F10: 1 }))
  const cast = loginChurnCast(bill)
  assert.deepEqual(cast, { bot: 'F14', owns: 8, ofEvents: 9, share: 0.889 })
})

test("the under-half law's honest null: a minority churner reads the silence", () => {
  const bill = kickBill(frozen({ F14: 4, F7: 4 }, { F9: 1 }))
  assert.equal(loginChurnCast(bill), null)
})

test('the boundary law: an exact tie owns nothing', () => {
  const bill = kickBill(frozen({ F14: 4 }, { F7: 4 }))
  assert.equal(loginChurnCast(bill), null)
})

test('the paired join: a paired bot pays kicks AND relogs into one count', () => {
  const bill = kickBill(frozen({ F5: 3 }, { F5: 2, F8: 1 }))
  const cast = loginChurnCast(bill)
  assert.deepEqual(cast, { bot: 'F5', owns: 5, ofEvents: 6, share: 0.833 })
})

test('the seat row byte-exact (the plural law)', () => {
  const row = loginChurnCastRow(loginChurnCast(kickBill(frozen({ F14: 8 }, { F10: 1 }))))
  assert.equal(row, "the login churn's own cast (v0.936.0): F14 owns 8 of 9 churn events (88.9%) - THE SESSION'S OWN REPEAT CUSTOMER: one bot's own logins keep colliding the lane - the v0.717.0 bill priced the split, the cast names its repeater")
})

test('the singular law: one event names one churn event', () => {
  const row = loginChurnCastRow(loginChurnCast(kickBill(frozen({ F10: 1 }, {}))))
  assert.equal(row, "the login churn's own cast (v0.936.0): F10 owns 1 of 1 churn event (100.0%) - THE SESSION'S OWN REPEAT CUSTOMER: one bot's own logins keep colliding the lane - the v0.717.0 bill priced the split, the cast names its repeater")
})

test("the riders' byte law: count desc, then the name's own byte asc", () => {
  const bill = kickBill(frozen({ F6: 3 }, { F16: 3, F9: 2 }))
  const r = loginChurnRiders(bill)
  assert.deepEqual(r, { leader: 'F16', leaderOwns: 3, runner: 'F6', runnerOwns: 3, ofEvents: 8, pairOwns: 6, share: 0.75 })
})

test('the riders row byte-exact', () => {
  const row = loginChurnRidersRow(loginChurnRiders(kickBill(frozen({ F6: 3 }, { F16: 3, F9: 2 }))))
  assert.equal(row, "the login churn's own riders (v0.936.0): no solo session owns the majority - F16 x3 + F6 x3 own 6 of 8 churn events (75.0%) - THE REPEAT CUSTOMERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the sessions the solo law refused to name")
})

test('the branch law fenced in the lib: a majority leader leaves the riders silent', () => {
  assert.equal(loginChurnRiders(kickBill(frozen({ F14: 8 }, { F10: 1 }))), null)
  assert.equal(loginChurnRiders(kickBill(frozen({ F10: 1 }, {}))), null)
})

test('the junk battery: junk bills never seat, the real cells still tally', () => {
  for (const junk of [null, undefined, 'junk', 7, {}, { kickBots: 'x' }, { kickBots: {}, relogOnly: { bots: { F5: 'junk' } } }]) {
    assert.equal(loginChurnCast(junk), null)
  }
  const bill = kickBill(frozen({ F9: 2 }, { F2: 1 }))
  assert.deepEqual(loginChurnCast(bill), { bot: 'F9', owns: 2, ofEvents: 3, share: 0.667 })
})

test('the kick-free face: the honest silences carry through', () => {
  assert.equal(kickBill(frozen({}, { F5: 2 })), null) // the relog-only face stays the relog bill's own subject
  assert.equal(loginChurnCast(kickBill(frozen({}, { F5: 2 }))), null)
})

test("the rows' junk battery: wrong shapes never print", () => {
  assert.equal(loginChurnCastRow(null), null)
  assert.equal(loginChurnCastRow(undefined), null)
  assert.equal(loginChurnCastRow('junk'), null)
  assert.equal(loginChurnCastRow({}), null)
  assert.equal(loginChurnCastRow({ bot: 'F5', owns: 0, ofEvents: 5, share: 0 }), null)
  assert.equal(loginChurnCastRow({ bot: 'F5', owns: 8, ofEvents: 5, share: 1.6 }), null)
  assert.equal(loginChurnRidersRow(null), null)
  assert.equal(loginChurnRidersRow('junk'), null)
  assert.equal(loginChurnRidersRow({}), null)
  assert.equal(loginChurnRidersRow({ leader: 'a', leaderOwns: 0, runner: 'b', runnerOwns: 2, ofEvents: 5, pairOwns: 2, share: 0.4 }), null)
  assert.equal(loginChurnRidersRow({ leader: 'a', leaderOwns: 3, runner: 'b', runnerOwns: 2, ofEvents: 2, pairOwns: 5, share: 2.5 }), null)
})

test('THE CENSUS GUARD: the login churn cast rides the decompose seat beside the v0.717.0 row (WIRING)', async () => {
  const src = readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes("loginChurnCast, loginChurnCastRow, loginChurnRiders, loginChurnRidersRow } from '../../src/lib/kickbill.mjs'")) // the import rides the bill's own line
  const bill = src.indexOf("the kick's own churn (v0.717.0)")
  const cast = src.indexOf('loginChurnCast(kb)')
  assert.ok(bill > 0 && cast > bill) // the cast rides beside the bill, never before it
  assert.ok(!src.includes("THE SESSION'S OWN REPEAT CUSTOMER: one bot's own logins"), 'the prose lives only in the lib')
})
