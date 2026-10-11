// (v0.937.0) THE DEPOSIT'S OWN CAST - the deposit family's own WHO axis.
// The v0.827.0 titheFamilySeat priced the LANE axis (WHICH lane owns the
// family's voice) but no row ever said WHICH BOT's own pocket keeps
// paying the family's own tithe - face 204's raw bots row
// ('cobble-tithe: named firings 7, units 304, riders 0, bots
// F4,F3,F11,F14,F18') rode unseated. The bill law: the census's own
// events cells only (sealCensus's own named firings, zero re-parsing,
// one book); the count law: each named firing one vote (the v0.935.0
// firings + the v0.936.0 churn events' precedent); the atom is the
// COUNT, never the moved mass (the mass rode the census's own units
// column since v0.397.0); the strict-majority law (a tie owns nothing);
// the duo beside the seat's silence, byte law count desc + bot byte
// asc; the branch law fenced in the lib; the junk fences; the honest
// silences. END-TO-END: sealCensus(frozen log lines) feeds the cast -
// the census's own cells, the one-parser law honored.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { sealCensus, depositCast, depositCastRow, depositDuo, depositDuoRow } from '../../src/lib/sealcensus.mjs'

const ev = (bot, moved = 1) => ({ bot, family: 'cobble-tithe', moved, name: 'cobblestone', kept: 0 })

test('depositCast: the bill law\'s seat shape - the leader above half owns the cast', () => {
  // F4's own pocket paid 4 of 7 named firings - above half, the seat speaks
  const events = [ev('F4'), ev('F4'), ev('F4'), ev('F4'), ev('F3'), ev('F11'), ev('F14')]
  const cast = depositCast(events)
  assert.ok(cast, 'the book\'s own leader owns the seat')
  assert.equal(cast.bot, 'F4')
  assert.equal(cast.owns, 4)
  assert.equal(cast.ofFirings, 7)
  assert.equal(cast.share, 57.143)
})

test('depositCast: the under-half silence - a leader at or below half reads the honest null', () => {
  // 2 of 5 is under half - the seat's law refuses the claim
  assert.equal(depositCast([ev('F4'), ev('F4'), ev('F3'), ev('F11'), ev('F14')]), null)
})

test('depositCast: the boundary law - a tie owns nothing, above it the seat speaks', () => {
  // 2 of 4 = the tie owns nothing
  assert.equal(depositCast([ev('F4'), ev('F4'), ev('F3'), ev('F11')]), null)
  // 3 of 4 = above half
  const cast = depositCast([ev('F4'), ev('F4'), ev('F4'), ev('F3')])
  assert.ok(cast, '3 of 4 crosses the law')
  assert.equal(cast.owns, 3)
  assert.equal(cast.ofFirings, 4)
})

test('depositCast: the seat row byte-exact + the plural law', () => {
  const cast = depositCast([ev('F4'), ev('F4'), ev('F4'), ev('F4'), ev('F3'), ev('F11'), ev('F14')])
  const row = depositCastRow(cast, 'cobble tithe')
  assert.equal(row, 'the cobble tithe\'s own cast (v0.937.0): F4 owns 4 of 7 named firings (57.143%) - THE DEPOSIT\'S OWN REPEAT KEEPER: one bot\'s own pocket keeps paying the family\'s own voice - the v0.827.0 seat priced the lane, the cast names the lane\'s own keeper')
})

test('depositCast: the singular law - one named firing reads the singular word', () => {
  const cast = depositCast([ev('F10', 3)])
  assert.ok(cast, '1 of 1 owns the seat (the magnet\'s own precedent)')
  assert.equal(cast.owns, 1)
  assert.equal(cast.ofFirings, 1)
  assert.equal(cast.share, 100)
  const row = depositCastRow(cast, 'smelt tithe')
  assert.ok(row.includes('of 1 named firing ('), 'the singular law: no plural on a one-firing book')
})

test('depositCast: the byte law - equal counts read the bot byte ascending', () => {
  // F3 and F4 tie at 3 - the byte law picks F3 (the lower byte), and 3 of 6 is a tie anyway;
  // give F3 four to make the law visible in the SEAT, the count law ties break by byte
  const events = [ev('F4'), ev('F4'), ev('F4'), ev('F3'), ev('F3'), ev('F3'), ev('F3')]
  const cast = depositCast(events)
  assert.equal(cast.bot, 'F3', 'F3 owns 4, the byte law never needed - the count law decided')
  // the true byte law: the DUO's own leader/runner order on equal counts
  const tie = [ev('F9'), ev('F9'), ev('F7'), ev('F7')]
  const duo = depositDuo(tie)
  assert.equal(duo.leader, 'F7', 'equal counts read the byte ascending: F7 < F9')
  assert.equal(duo.runner, 'F9')
})

test('depositDuo: the duo row byte-exact', () => {
  const duo = depositDuo([ev('F4'), ev('F4'), ev('F4'), ev('F3'), ev('F3'), ev('F11'), ev('F14')])
  const row = depositDuoRow(duo, 'cobble tithe')
  assert.equal(row, 'the cobble tithe\'s own duo (v0.937.0): no solo keeper owns the majority - F4 x3 + F3 x2 own 5 of 7 named firings (71.429%) - THE KEEPERS\' OWN CROWD: the cast\'s tie law held, the crowd is still real - the duo prices the pockets the solo law refused to name')
})

test('depositDuo: the thin-book fence - a solo keeper\'s book reads no duo', () => {
  assert.equal(depositDuo([ev('F4'), ev('F4'), ev('F4')]), null, 'book < 2 bots, no duo')
  assert.equal(depositDuo([]), null)
})

test('depositDuo: the branch law fenced in the lib - a majority leader reads the honest null', () => {
  // F4 owns 5 of 7 - above half: the SEAT speaks, the duo must refuse
  const events = [ev('F4'), ev('F4'), ev('F4'), ev('F4'), ev('F4'), ev('F3'), ev('F11')]
  assert.ok(depositCast(events), 'the seat owns the majority')
  assert.equal(depositDuo(events), null, 'the branch law: no duo beside a speaking seat')
})

test('depositCast: the mass-is-not-the-atom law - the moved junk never moves the seat', () => {
  // the count law: 999u vs 0u - the seat rides the COUNT, the mass rode the census's own units column
  const events = [ev('F7', 0), ev('F7', 0), ev('F5', 999), ev('F5', 999)]
  assert.equal(depositCast(events), null, 'a 2-2 tie owns nothing no matter the mass')
  const countBook = [ev('F7', 0), ev('F7', 0), ev('F7', 0), ev('F5', 999)]
  const cast = depositCast(countBook)
  assert.equal(cast.bot, 'F7', '3 zero-u firings own the count seat over one 999u firing')
})

test('depositCast: the junk battery - junk never invents a keeper, good cells still tally', () => {
  assert.equal(depositCast(null), null)
  assert.equal(depositCast('junk'), null)
  assert.equal(depositCast([null, undefined, 42, 'x', {}, { bot: '' }, { bot: 7 }, []]), null)
  // mixed junk + good: the good cells still tally (the junk fences, not the book)
  const mixed = [null, ev('F4'), 42, { nope: true }, ev('F4'), ev('F3'), 'junk']
  const cast = depositCast(mixed)
  assert.ok(cast, 'the good cells survived the junk')
  assert.equal(cast.owns, 2)
  assert.equal(cast.ofFirings, 3)
})

test('depositCast: the honest silences + the row guards', () => {
  assert.equal(depositCast([]), null, 'an empty book reads the firing-free family\'s own silence')
  assert.equal(depositCastRow(null, 'cobble tithe'), null)
  assert.equal(depositCastRow(depositCast([ev('F4')]), ''), null, 'a junk label reads the honest null row')
  assert.equal(depositCastRow(depositCast([ev('F4')]), null), null)
  assert.equal(depositDuoRow(null, 'cobble tithe'), null)
  assert.equal(depositDuoRow(depositDuo([ev('F4'), ev('F4')]), ''), null)
})

test('THE CENSUS GUARD WIRING: sealCensus(frozen) feeds the cast, the rows ride after the raw row', () => {
  // END-TO-END: the frozen log grammar feeds the census, the census's
  // own events feed the cast - zero re-parsing, the one-parser law.
  const lines = [
    'F4 [F4] cobble tithe: banked 8 x cobblestone (pocket keeps 4)',
    'F4 [F4] cobble tithe: banked 8 x cobblestone (pocket keeps 0)',
    'F4 [F4] cobble tithe: more firings ride the banked total',
    'F3 [F3] cobble tithe: banked 6 x cobblestone (pocket keeps 2)',
    'F11 [F11] fuel tithe: banked 3 x coal (pocket keeps 4)',
    'F1 [F1] seal reserve: banked 6 x dirt (pocket keeps 8 seal units)',
  ]
  const seal = sealCensus(lines)
  const cobble = depositCast(seal['cobble-tithe'].events)
  assert.ok(cobble, 'the census\'s own cells feed the cast')
  assert.equal(cobble.bot, 'F4', 'F4\'s own two named firings own 2 of 3')
  assert.equal(cobble.owns, 2)
  assert.equal(cobble.ofFirings, 3)
  const row = depositCastRow(cobble, 'cobble tithe')
  assert.ok(row.startsWith('the cobble tithe\'s own cast (v0.937.0): F4 owns 2 of 3 named firings (66.667%)'), 'the seat row rides the census\'s own book')
  // the rider row proves a 3rd firing but is NOT a named-firing vote (the rider is a count, not an event)
  assert.equal(seal['cobble-tithe'].banked, 3, 'the named book: the rider never inflates it')
  // the fuel family's single firing: the singular seat
  const fuel = depositCast(seal['fuel-tithe'].events)
  assert.equal(fuel.bot, 'F11')
  assert.equal(fuel.ofFirings, 1)
  // the wiring: the decompose import band carries the four names, the
  // cast block rides AFTER the family's own raw row (the order law)
  const src = fs.readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes("depositCast, depositCastRow, depositDuo, depositDuoRow } from '../../src/lib/sealcensus.mjs'"), 'the import band carries the cast family')
  const rawRowIdx = src.indexOf('named firings ${f.banked}')
  const castIdx = src.indexOf('depositCast(f.events)')
  assert.ok(rawRowIdx > -1 && castIdx > rawRowIdx, 'the order law: the cast rides after the raw row, never before it')
  assert.ok(!src.includes("console.log(`F"), 'CENSUS GUARD: the decompose never prints fleet log lines')
})
