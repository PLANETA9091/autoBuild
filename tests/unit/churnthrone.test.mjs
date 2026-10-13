// THE CHURN BOT'S THRONE - the churnthrone tests (v0.961.0).
// The three instability lanes' own join: the rescue starts' cast
// (v0.774.0), the frozen standdown's bot (v0.931.0), the relog census's
// own per-bot cells - each priced alone, the cross-lane ownership never
// rode a book. The verbatim cells below are the faces' own reads: face
// 226's throne birth (F5 churn 9/14 + standdown 10/17 + relog 7/8 - the
// lane's own assembled read) and face 210's one-vote-short shape (F18
// churn 8/14 + standdown 7/8 + relog 1/1 - the tie law held). The join
// consumes the books' OWN cells (the one-parser law: the standdown side
// rides standdownclock's own tally, imported never re-spelled; the test
// forks nothing).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { churnThrone, churnThroneRow, churnThroneRiders, churnThroneRidersRow, churnShadow, churnShadowRow, churnShadowRefusal, churnShadowRefusalRow, churnThronePair, churnThronePairRow } from '../../src/lib/churnthrone.mjs'
import { standdownBotTally } from '../../src/lib/standdownclock.mjs'
import { stickyLaneCells } from '../../src/lib/stickyseat.mjs'

// face 226's own cells (the lane's own read, byte for byte)
const FACE226 = {
  rescuePerBot: {
    F5: { starts: 9 }, F13: { starts: 2 }, F2: { starts: 1 },
    F16: { starts: 1 }, F19: { starts: 1 }
  },
  rescueTotals: { starts: 14 },
  relogsByBot: { F5: 7, F13: 1 },
  relogsTotal: 8,
  standdownBook: { stamps: [...Array(10).fill({ bot: 'F5' }), ...Array(7).fill({ bot: 'F13' })] }
}

// face 210's own shape (decomp210 verbatim): starts F18=8 F17=2 F16=1
// F12=1 F9=1 F14=1 (14); standdowns F18 7 of 8; relogs F18=1 F17=1
const FACE210 = {
  rescuePerBot: {
    F18: { starts: 8 }, F17: { starts: 2 }, F16: { starts: 1 },
    F12: { starts: 1 }, F9: { starts: 1 }, F14: { starts: 1 }
  },
  rescueTotals: { starts: 14 },
  relogsByBot: { F18: 1, F17: 1 },
  relogsTotal: 2,
  standdownBook: { stamps: [...Array(7).fill({ bot: 'F18' }), { bot: 'F17' }] }
}

test('THE THRONE: face 226 verbatim - F5 owns every lane at once', () => {
  const t = churnThrone(FACE226)
  assert.ok(t, 'the throne seats')
  assert.equal(t.bot, 'F5')
  assert.deepEqual(t.lanes, [
    { lane: 'churn', owns: 9, of: 14 },
    { lane: 'standdown', owns: 10, of: 17 },
    { lane: 'relog', owns: 7, of: 8 }
  ])
  assert.equal(t.owns, 26)
  assert.equal(t.ofEvents, 39)
  assert.equal(t.share, 0.667)
})

test('THE ROW: the throne byte verbatim', () => {
  const row = churnThroneRow(churnThrone(FACE226))
  assert.equal(row, "the churn bot's own throne (v0.961.0): F5 owns the strict majority of every instability lane at once - the churn 9 of 14, the standdown 10 of 17, the relog 7 of 8 (26 of 39 event(s), 66.7%) - THE CHURN BOT'S THRONE: one bot's own sessions churn the lanes together - the starts' cast (v0.774.0) priced the water lane, the standdown's bot (v0.931.0) named the freeze, nobody priced the lanes' own join")
})

test('THE TIE LAW: face 210 - the relog lane contested, no throne, the riders measure', () => {
  const t = churnThrone(FACE210)
  assert.equal(t, null, 'the relog tie owns nothing - the storm-has-no-seat precedent')
  const r = churnThroneRiders(FACE210)
  assert.ok(r, 'the riders measure beside the silence')
  assert.equal(r.leader, 'F18')
  assert.equal(r.leaderOwns, 16)
  assert.equal(r.runner, 'F17')
  assert.equal(r.runnerOwns, 4)
  assert.equal(r.ofEvents, 24)
  assert.equal(r.pairOwns, 20)
  assert.equal(r.share, 0.833)
  const row = churnThroneRidersRow(r)
  assert.ok(row.includes("no bot owns every lane's majority - F18 x16 + F17 x4 own 20 of 24 event(s) (83.3%)"), row)
})

test('THE MAJORITY LAW: a lane under half never seats', () => {
  // the churn lane's top bot holds 6 of 14 (43%) - the lane contested,
  // the join prices nothing even though the other lanes would seat F1
  const cells = {
    rescuePerBot: { F1: { starts: 6 }, F2: { starts: 4 }, F3: { starts: 4 } },
    rescueTotals: { starts: 14 },
    relogsByBot: { F1: 3, F2: 1 },
    relogsTotal: 4,
    standdownBook: { stamps: [...Array(5).fill({ bot: 'F1' }), ...Array(3).fill({ bot: 'F2' })] }
  }
  assert.equal(churnThrone(cells), null)
  // exactly half is the tie - owns nothing byte for byte
  const tie = {
    rescuePerBot: { F1: { starts: 7 }, F2: { starts: 7 } },
    rescueTotals: { starts: 14 },
    relogsByBot: { F1: 3, F2: 1 },
    relogsTotal: 4
  }
  assert.equal(churnThrone(tie), null, 'the tie owns nothing')
})

test('THE ONE-OWNER LAW: two lanes, two owners - no throne', () => {
  const cells = {
    rescuePerBot: { F1: { starts: 9 }, F2: { starts: 5 } },
    rescueTotals: { starts: 14 },
    relogsByBot: { F2: 3, F1: 1 },
    relogsTotal: 4
  }
  assert.equal(churnThrone(cells), null, 'different owners never seat the throne')
  const r = churnThroneRiders(cells)
  assert.ok(r, 'the riders measure the split')
  assert.equal(r.leader, 'F1')
})

test('THE JOIN FENCE: a single non-empty lane stays the existing seats own verdict', () => {
  // the standdown lane alone (the v0.931.0 seat's own row) prices nothing here
  const solo = {
    rescuePerBot: null,
    rescueTotals: null,
    relogsByBot: null,
    relogsTotal: null,
    standdownBook: { stamps: [...Array(5).fill({ bot: 'F1' }), { bot: 'F2' }] }
  }
  assert.equal(churnThrone(solo), null, 'one lane - the join is not priced')
  // two junk lanes = zero non-empty lanes - the silence itself
  assert.equal(churnThrone({}), null)
  assert.equal(churnThrone(null), null)
})

test('THE ABSENT-LANE HONESTY: an absent lane never blocks, never votes', () => {
  // no relogs rode - the join seats on churn + standdown alone
  const cells = {
    rescuePerBot: { F1: { starts: 9 }, F2: { starts: 5 } },
    rescueTotals: { starts: 14 },
    relogsByBot: null,
    relogsTotal: null,
    standdownBook: { stamps: [...Array(5).fill({ bot: 'F1' }), ...Array(2).fill({ bot: 'F2' })] }
  }
  const t = churnThrone(cells)
  assert.ok(t, 'two lanes seat the throne')
  assert.equal(t.bot, 'F1')
  assert.deepEqual(t.lanes, [
    { lane: 'churn', owns: 9, of: 14 },
    { lane: 'standdown', owns: 5, of: 7 }
  ])
  assert.equal(t.ofEvents, 21)
})

test('THE JUNK BATTERY: junk cells price nothing, never invent a throne', () => {
  // junky per-bot rows (non-finite / non-positive starts) never vote
  const junkRows = {
    rescuePerBot: { F1: { starts: NaN }, F2: null, F3: 'junk', F4: { starts: -1 }, F5: { starts: 0 } },
    rescueTotals: { starts: 14 },
    relogsByBot: { F1: 3 },
    relogsTotal: 4
  }
  assert.equal(churnThrone(junkRows), null, 'no real churn votes - the lane rides absent')
  // junky totals leave the lane silent
  assert.equal(churnThrone({ rescuePerBot: { F1: { starts: 9 } }, rescueTotals: { starts: 'junk' } }), null)
  assert.equal(churnThrone({ rescuePerBot: { F1: { starts: 9 } }, rescueTotals: { starts: 0 } }), null)
  // junky relogs (byBot without the census's own n) ride absent
  assert.equal(churnThrone({
    rescuePerBot: { F1: { starts: 9 } },
    rescueTotals: { starts: 14 },
    relogsByBot: { F1: 3 },
    relogsTotal: null
  }), null, 'the census n and byBot ship together - no re-derivation')
  // a junky standdown book (no stamps array) rides absent
  assert.equal(churnThrone({
    rescuePerBot: { F1: { starts: 9 } },
    rescueTotals: { starts: 14 },
    standdownBook: { stamps: 'junk' }
  }), null)
  // non-string / empty bot bytes never vote
  assert.equal(churnThrone({
    rescuePerBot: { '': { starts: 9 }, F2: { starts: 5 } },
    rescueTotals: { starts: 14 },
    relogsByBot: { '': 3 },
    relogsTotal: 4
  }), null)
})

test('THE BRANCH LAW: the riders read null beside a throne (fenced in the lib)', () => {
  assert.equal(churnThroneRiders(FACE226), null, 'the throne owns the row - the riders stay unprinted')
})

test('THE RIDERS JUNK LAW: junk never invents a shape', () => {
  assert.equal(churnThroneRiders(null), null)
  assert.equal(churnThroneRiders({}), null)
  // a single bot riding events - no crowd to measure
  assert.equal(churnThroneRiders({
    rescuePerBot: { F1: { starts: 9 } },
    rescueTotals: { starts: 14 }
  }), null)
})

test('THE ROWS JUNK LAW: bad bytes never print', () => {
  assert.equal(churnThroneRow(null), null)
  assert.equal(churnThroneRow('junk'), null)
  assert.equal(churnThroneRow({ bot: 'F1', lanes: [{ lane: 'churn', owns: 1, of: 0 }], owns: 1, ofEvents: 1, share: 1 }), null)
  assert.equal(churnThroneRow({ bot: '', lanes: [{ lane: 'churn', owns: 1, of: 2 }, { lane: 'relog', owns: 1, of: 2 }], owns: 2, ofEvents: 4, share: 0.5 }), null)
  assert.equal(churnThroneRow({ bot: 'F1', lanes: [{ lane: 'churn', owns: 2, of: 2 }], owns: 2, ofEvents: 2, share: 1 }), null, 'a one-lane throne never prints')
  assert.equal(churnThroneRidersRow(null), null)
  assert.equal(churnThroneRidersRow({ leader: 'F1', leaderOwns: 0, runner: 'F2', runnerOwns: 1, ofEvents: 2, pairOwns: 1, share: 0.5 }), null)
})

test('THE ONE-PARSER LAW: the standdown side rides the clocks own tally, never re-spelled', () => {
  // the lib's own tally (exported v0.961.0) reads the same book the seat reads
  const tally = standdownBotTally(FACE226.standdownBook)
  assert.ok(tally)
  assert.equal(tally.total, 17)
  assert.deepEqual(tally.byBot, { F5: 10, F13: 7 })
  // junk books refuse (the tally's own fences)
  assert.equal(standdownBotTally(null), null)
  assert.equal(standdownBotTally({ stamps: 'junk' }), null)
  assert.equal(standdownBotTally({ stamps: [{ bot: 'X1' }] }), null, 'the F\\d+ bot byte law holds')
})

test('WIRING: decompose imports the book and prints it beside the standdown seat', () => {
  const src = readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.match(src, /import \{[^}]*churnThrone, churnThroneRow, churnThroneRiders, churnThroneRidersRow[^}]*\} from '\.\.\/\.\.\/src\/lib\/churnthrone\.mjs'/)
  assert.match(src, /const throne = churnThrone\(/)
  assert.match(src, /churnThroneRow\(throne\)/)
  assert.match(src, /churnThroneRidersRow\(throneRiders\)/)
  // the print site rides inside the standdown clock's own block (the
  // freeze's own bot row's neighbor - the import band's order)
  const sdbAt = src.indexOf('const sdb = standdownClockBook(lines)')
  const throneAt = src.indexOf('const throne = churnThrone(')
  assert.ok(sdbAt > 0 && throneAt > sdbAt, 'the throne prints after the standdown book reads')
})

// === (v0.974.11) THE THRONE'S OWN SHADOW - the plurality fold beside the
// throne's silence. Face 272's own cells (the four lanes' own reads):
// churn F14 19 / F6 15 of 62, standdown F14 13 of 22, relog F14=3 F15=2
// F11=1 F12=1 of 7, sticky F14 15 of 26 - the hand-assembled face the
// throne's strict-majority law refused to seat.
const FACE272 = {
  rescuePerBot: {
    F14: { starts: 19 }, F6: { starts: 15 }, F15: { starts: 10 },
    F17: { starts: 8 }, F12: { starts: 6 }, F11: { starts: 2 }, F13: { starts: 2 }
  },
  rescueTotals: { starts: 62 },
  relogsByBot: { F14: 3, F15: 2, F11: 1, F12: 1 },
  relogsTotal: 7,
  standdownBook: { stamps: [...Array(13).fill({ bot: 'F14' }), ...Array(9).fill({ bot: 'F6' })] },
  stickyByBot: { F14: 15, F6: 4, F12: 4, F13: 3 },
  stickyTotal: 26
}

test('SHADOW: the unanimous plurality fold names the face the throne refused (face 272 real layout)', () => {
  assert.equal(churnThrone(FACE272), null, 'the throne stays dark (the churn lane rides spread - no strict majority)')
  const s = churnShadow(FACE272)
  assert.ok(s, 'the shadow seats')
  assert.equal(s.bot, 'F14')
  assert.equal(s.nonEmpty, 4)
  assert.deepEqual(s.lanes, [
    { lane: 'churn', owns: 19, of: 62 },
    { lane: 'standdown', owns: 13, of: 22 },
    { lane: 'relog', owns: 3, of: 7 },
    { lane: 'sticky', owns: 15, of: 26 }
  ])
  const row = churnShadowRow(s)
  assert.match(row, /the throne's own shadow \(v0\.974\.11\): F14 led every non-empty lane's own plurality at once - the churn 19 of 62, the standdown 13 of 22, the relog 3 of 7, the sticky 15 of 26 \(4 lane\(s\)\)/)
  assert.match(row, /THE SHADOW'S OWN FACE/)
})

test('SHADOW: the branch law - a seated throne reads the shadow\'s own silence', () => {
  // face 226's own throne + a sticky lane F5 also leads: the throne seats,
  // the shadow never double-prints the owner's face
  const cells = { ...FACE226, stickyByBot: { F5: 5, F13: 3 }, stickyTotal: 8 }
  assert.ok(churnThrone(cells), 'the throne seats (the strict-majority law)')
  assert.equal(churnShadow(cells), null, 'the shadow rides silent beside the throne')
})

test('SHADOW: a partial lead reads the honest silence (the riders\' own words own the spread)', () => {
  const cells = { ...FACE272, relogsByBot: { F15: 4, F14: 3 } }
  const s = churnShadow(cells)
  assert.equal(s, null, 'F15 leads the relog lane - the unanimity fails')
})

test('SHADOW: a leaderless tie blocks the unanimity (the tie law\'s own byte)', () => {
  const cells = { ...FACE272, relogsByBot: { F14: 3, F15: 3, F11: 1 } }
  assert.equal(churnShadow(cells), null, 'the relog lane rides leaderless (3 = 3)')
})

test('SHADOW: the absent lane votes never (the honest silence cannot block)', () => {
  const { stickyByBot, stickyTotal, ...three } = FACE272
  const s = churnShadow(three)
  assert.ok(s, 'the three-lane fold still seats')
  assert.equal(s.nonEmpty, 3)
  assert.equal(s.bot, 'F14')
  assert.equal(churnShadowRow(s).includes('(3 lane(s))'), true, 'the row names the lanes it read')
})

test('SHADOW: the sticky lane rides stickyseat\'s own fold (one read per emitter)', () => {
  const perBot = {
    F14: { starts: 3, frozenStanddown: 10, timeout: 5, dead: 1, complete: 99 },
    F6: { starts: 2, complete: 7, released: 4 }
  }
  const lane = stickyLaneCells(perBot)
  assert.deepEqual(lane, { byBot: { F14: 16 }, total: 16 }, 'the five sticky classes fold, the clean closes stay out')
  assert.equal(stickyLaneCells(null), null, 'the junk perBot reads the honest silence')
  assert.equal(stickyLaneCells({ F14: { complete: 5 } }), null, 'the clean-only book reads the honest silence')
})

// === (v0.974.13) THE FOLD'S OWN REFUSAL - the shadow's silence's own
// word. Face 275's own cells (the four lanes' own reads): churn F15 6 /
// F13 5 / F5 2 / F9 1 / F19 1 of 15, standdown F15 3 of 5, relog F15 2 /
// F13 1 / F5 1 of 4, sticky F13 2 + F15 2 of 5 - the tie's own face the
// 0700 fire hand-derived ('the sticky lane rode a tie (F13 x2 + F15 x2,
// 4 of 5) - a tie owns nothing'); the contested spread rides the
// synthetic shape (the lanes led apart).
const FACE275 = {
  rescuePerBot: {
    F15: { starts: 6 }, F13: { starts: 5 }, F5: { starts: 2 },
    F9: { starts: 1 }, F19: { starts: 1 }
  },
  rescueTotals: { starts: 15 },
  relogsByBot: { F15: 2, F13: 1, F5: 1 },
  relogsTotal: 4,
  standdownBook: { stamps: [...Array(3).fill({ bot: 'F15' }), { bot: 'F5' }, { bot: 'F19' }] },
  stickyByBot: { F13: 2, F15: 2 },
  stickyTotal: 5
}

test("REFUSAL: the tie's own word - face 275 real layout, the sticky lane rode a tie", () => {
  assert.equal(churnThrone(FACE275), null, 'the throne stays dark (the churn lane rides no strict majority)')
  assert.equal(churnShadow(FACE275), null, 'the fold refuses (the sticky lane rides leaderless)')
  const r = churnShadowRefusal(FACE275)
  assert.ok(r, 'the refusal speaks')
  assert.equal(r.kind, 'tie')
  assert.deepEqual(r.lanes, [{ lane: 'sticky', of: 5, top: 2, tiedBots: ['F13', 'F15'] }])
  const row = churnShadowRefusalRow(r)
  assert.equal(row, "the fold's own refusal (v0.974.13): the sticky lane rode a tie (F13 x2 + F15 x2, 4 of 5) - a tie owns nothing - THE TIE'S OWN SILENCE: the unanimity law refused the seat, the silence's own word named")
})

test("REFUSAL: the contested spread's own word - the lanes led apart", () => {
  const cells = {
    rescuePerBot: { F7: { starts: 6 }, F13: { starts: 5 } },
    rescueTotals: { starts: 11 },
    relogsByBot: { F7: 2, F13: 1 },
    relogsTotal: 3,
    standdownBook: { stamps: [...Array(5).fill({ bot: 'F13' }), ...Array(4).fill({ bot: 'F7' })] },
    stickyByBot: { F13: 4, F7: 3 },
    stickyTotal: 7
  }
  const r = churnShadowRefusal(cells)
  assert.ok(r, 'the refusal speaks')
  assert.equal(r.kind, 'contested')
  assert.deepEqual(r.lanes, [
    { lane: 'churn', bot: 'F7', owns: 6, of: 11 },
    { lane: 'standdown', bot: 'F13', owns: 5, of: 9 },
    { lane: 'relog', bot: 'F7', owns: 2, of: 3 },
    { lane: 'sticky', bot: 'F13', owns: 4, of: 7 }
  ])
  const row = churnShadowRefusalRow(r)
  assert.equal(row, "the fold's own refusal (v0.974.13): the lanes led apart - the churn F7, the standdown F13, the relog F7, the sticky F13 (4 lane(s) led, 2 bot(s)) - THE CONTESTED SPREAD'S OWN SILENCE: the unanimity law refused the seat, the silence's own word named")
})

test("REFUSAL: the lone lane's own word - no fold on one lane", () => {
  const cells = {
    rescuePerBot: { F5: { starts: 9 } },
    rescueTotals: { starts: 14 }
  }
  const r = churnShadowRefusal(cells)
  assert.ok(r, 'the refusal speaks')
  assert.equal(r.kind, 'lone')
  assert.deepEqual(r.lanes, [{ lane: 'churn', of: 14, bot: 'F5', owns: 9 }])
  const row = churnShadowRefusalRow(r)
  assert.equal(row, "the fold's own refusal (v0.974.13): the lone lane (the churn, the F5 lead 9 of 14) - no fold on one lane - THE LONE LANE'S OWN SILENCE: the join fence refused the seat, the silence's own word named")
})

test('REFUSAL: a multi-lane tie names every tied lane in one row', () => {
  const cells = {
    rescuePerBot: { F14: { starts: 5 }, F6: { starts: 5 } },
    rescueTotals: { starts: 10 },
    relogsByBot: { F14: 1, F6: 1 },
    relogsTotal: 2
  }
  const r = churnShadowRefusal(cells)
  assert.ok(r, 'the refusal speaks')
  assert.equal(r.kind, 'tie')
  assert.equal(r.lanes.length, 2)
  const row = churnShadowRefusalRow(r)
  assert.match(row, /the churn lane rode a tie \(F14 x5 \+ F6 x5, 10 of 10\); the relog lane rode a tie \(F14 x1 \+ F6 x1, 2 of 2\)/)
  assert.match(row, /THE TIE'S OWN SILENCE/)
})

test("REFUSAL: the branch law both ways - a seated throne or a seated shadow reads no refusal word", () => {
  // the throne's own face (face 226 + the sticky lane F5 also leads)
  const throneCells = { ...FACE226, stickyByBot: { F5: 5, F13: 3 }, stickyTotal: 8 }
  assert.ok(churnThrone(throneCells), 'the throne seats')
  assert.equal(churnShadowRefusal(throneCells), null, "no refusal word over the throne's own rows")
  // the shadow's own face (face 272's unanimous fold)
  assert.ok(churnShadow(FACE272), 'the shadow seats')
  assert.equal(churnShadowRefusal(FACE272), null, "no refusal word over the shadow's own row")
})

test('REFUSAL: the junk battery - junk never invents a word', () => {
  for (const junk of [null, undefined, 42, 'x', [], {}, { kind: 'tie' }, { kind: 'tie', lanes: [] }, { kind: 'nonsense', lanes: [{ lane: 'churn' }] }]) {
    assert.equal(churnShadowRefusalRow(junk), null, `junk ${JSON.stringify(junk)} reads the honest silence`)
  }
  assert.equal(churnShadowRefusalRow({ kind: 'tie', lanes: [{ lane: 'sticky', of: 5, top: 2, tiedBots: ['F13'] }] }), null, 'a one-bot tie reads the honest silence')
  assert.equal(churnShadowRefusalRow({ kind: 'tie', lanes: [{ lane: 'sticky', of: 5, top: 0, tiedBots: ['F13', 'F15'] }] }), null, 'a zero-top tie reads the honest silence')
  assert.equal(churnShadowRefusalRow({ kind: 'lone', lanes: [{ lane: 'churn', of: 14, bot: 'F5' }] }), null, 'a leaderless lone-lane bot field reads the honest silence')
  // the zero-lane join is the silence itself (no word over nothing)
  assert.equal(churnShadowRefusal(null), null)
  assert.equal(churnShadowRefusal({}), null)
})

test("REFUSAL: the shadow's own row byte-stable beside the refusal (the shared-walk refactor priced)", () => {
  const s = churnShadow(FACE272)
  assert.ok(s, 'the shadow still seats on the shared walk')
  const row = churnShadowRow(s)
  assert.match(row, /the throne's own shadow \(v0\.974\.11\): F14 led every non-empty lane's own plurality at once - the churn 19 of 62, the standdown 13 of 22, the relog 3 of 7, the sticky 15 of 26 \(4 lane\(s\)\)/)
})

// (v0.974.25) THE PAIR'S OWN BOOK - the fold's own pair seat. The
// verbatim cells below are face 291's own hand-read re-shaped: the noon
// freeze pair F11+F6 own 11 of 12 frozen standdowns, and the SAME pair
// rides the churn and the relog lanes - one pair's own book no fold
// ever priced (the throne asks for one bot, the shadow for one leader).

// face 291's own pair shape (the hand-read's own cells, the standdown
// byte verbatim 11 of 12; the churn and relog lanes re-shaped to the
// same pair's own book)
const PAIR291 = {
  rescuePerBot: { F6: { starts: 4 }, F11: { starts: 2 }, F14: { starts: 1 }, F1: { starts: 1 } },
  rescueTotals: { starts: 8 },
  relogsByBot: { F11: 4, F6: 3 },
  relogsTotal: 7,
  standdownBook: { stamps: [...Array(6).fill({ bot: 'F11' }), ...Array(5).fill({ bot: 'F6' }), { bot: 'F13' }] }
}

test('THE PAIR: face 291 shape - F11+F6 own every lane together', () => {
  const p = churnThronePair(PAIR291)
  assert.ok(p, 'the pair book seats')
  assert.deepEqual(p.pair, ['F11', 'F6'])
  assert.deepEqual(p.lanes, [
    { lane: 'churn', owns: 6, of: 8 },
    { lane: 'standdown', owns: 11, of: 12 },
    { lane: 'relog', owns: 7, of: 7 }
  ])
  assert.equal(p.owns, 24)
  assert.equal(p.ofEvents, 27)
  assert.equal(p.share, 0.889)
})

test('THE PAIR ROW: the pair book byte verbatim', () => {
  const row = churnThronePairRow(churnThronePair(PAIR291))
  assert.equal(row, "the pair's own book (v0.974.25): F11+F6 owned every non-empty lane together - the churn 6 of 8, the standdown 11 of 12, the relog 7 of 7 (24 of 27 event(s), 88.9%) - THE PAIR'S OWN BOOK: the throne asked for one bot, the shadow asked for one leader - the pair's own join names the two sessions the lanes keep riding together")
})

test('THE PAIR: the branch law both ways - a seated throne or shadow reads no pair row', () => {
  assert.ok(churnThrone(FACE226), 'the throne seats')
  assert.equal(churnThronePair(FACE226), null, "no pair row over the throne's own rows")
  assert.ok(churnShadow(FACE272), 'the shadow seats')
  assert.equal(churnThronePair(FACE272), null, "no pair row over the shadow's own row")
})

test('THE PAIR: the contested pair - the lanes topped apart read the silence', () => {
  const cells = {
    rescuePerBot: { F11: { starts: 6 }, F6: { starts: 5 } },
    rescueTotals: { starts: 11 },
    relogsByBot: { F14: 3, F15: 2, F6: 1 },
    relogsTotal: 6
  }
  assert.equal(churnThronePair(cells), null, 'a different top pair in one lane contests the book')
})

test('THE PAIR: the per-lane tie leads nothing (the tie law at pair level)', () => {
  const cells = {
    rescuePerBot: { A: { starts: 2 }, B: { starts: 1 }, C: { starts: 1 } },
    rescueTotals: { starts: 4 },
    relogsByBot: { A: 2, B: 1 },
    relogsTotal: 3
  }
  assert.equal(churnThronePair(cells), null, 'a tied lane owns no pair')
})

test('THE PAIR: the junk battery - junk never invents a book', () => {
  for (const junk of [null, undefined, 42, 'x', [], {}]) {
    assert.equal(churnThronePair(junk), null, `junk ${JSON.stringify(junk)} reads the honest silence`)
  }
  // the join fence: a single non-empty lane stays the seats' own verdict
  assert.equal(churnThronePair({ rescuePerBot: { F5: { starts: 9 } }, rescueTotals: { starts: 14 } }), null, 'a lone lane reads the honest silence')
  // a one-bot universe rides the shadow's own branch (the one bot leads
  // every lane - the branch law's own null, the fence stays protective)
  assert.equal(churnThronePair({ rescuePerBot: { F5: { starts: 9 } }, rescueTotals: { starts: 14 }, relogsByBot: { F5: 1 }, relogsTotal: 1 }), null, 'a one-bot universe rides the shadow branch')
  for (const junk of [null, undefined, 42, 'x', [], {}, { pair: 'F11' }, { pair: ['F11'], lanes: [] }, { pair: ['F11', 'F6'], lanes: [{ lane: 'churn' }] }]) {
    assert.equal(churnThronePairRow(junk), null, `row junk ${JSON.stringify(junk)} reads the honest silence`)
  }
})
