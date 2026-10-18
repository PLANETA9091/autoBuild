// (v0.976.239) THE SHED CONSULT'S OWN VERDICT TREND - the word's own pins.
// The census (the consult's verdict a vote, the sum the mass keeps), the
// fence (every face all four proven integers, the zero lawful), the row
// (the unknown mass's own two-step arc - the fade the inputs read clean,
// the swell the consult blind, the swing the trade; a held step the
// honest null, the three-face zero the lawful silence). The near-miss
// lanes never ride: the hybrid class/tail junk, the truncated tail, the
// alien why, the prefix-less line, the trip line's own seat. The emitter
// grammar pin: the fleet19 template must stand (the .237 word's own law).
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { shedConsultCensus, shedConsultTrendConsistent, shedConsultTrendRow } from '../../src/lib/shedconsulttrend.mjs'

const F = (light, late, holding, unknown) => ({ light, late, holding, unknown })

test('census: the F468-shaped lines sum, every skin rides', () => {
  const lines = [
    'F15 bank shed consult: refused - unknown (the junk inputs price no shed - the guess-free zero)',
    'F16 bank shed consult: refused - unknown (the junk inputs price no shed - the guess-free zero)',
    'F9 bank shed consult: deferred - late (the trip cannot land, 222s of run clock left - the endphase owns the goal)',
    'F8 bank shed consult: refused - light (the end bank covers the pocket - the leanness law holds)',
    'F3 bank shed consult: refused - light (the need 12s rides inside the budget 40s - the leanness law holds)',
    'F6 bank shed consult: deferred - holding (the active shed trip owns the clock, 40s left)',
    'F6 bank shed consult: deferred - holding (the active shed trip owns the clock)',
    'F9 bank shed consult: deferred - late (the trip cannot land - the endphase owns the goal)'
  ]
  assert.deepEqual(shedConsultCensus(lines), F(2, 2, 2, 2))
})

test('census: the lawful zero - a face whose lines hold no consult print', () => {
  assert.deepEqual(shedConsultCensus(['F12 bank trip: shed 12u - the trip speaks', 'F9 bank arm census: 1 bot(s) never armed']), F(0, 0, 0, 0))
})

test('census: junk-safe - the non-array prices null, junk types no votes', () => {
  assert.equal(shedConsultCensus(null), null)
  assert.equal(shedConsultCensus(undefined), null)
  assert.equal(shedConsultCensus(7), null)
  assert.equal(shedConsultCensus('F15 bank shed consult: refused - unknown (the junk inputs price no shed - the guess-free zero)'), null)
  assert.deepEqual(shedConsultCensus([null, 9, '', 'no votes here']), F(0, 0, 0, 0))
})

test('census: the near-miss lanes never ride', () => {
  const rejects = [
    // the hybrid class/tail junk - a class wearing the wrong tail prices nothing
    'F12 bank shed consult: refused - unknown (the end bank covers the pocket - the leanness law holds)',
    'F12 bank shed consult: refused - light (the junk inputs price no shed - the guess-free zero)',
    'F12 bank shed consult: deferred - late (the active shed trip owns the clock)',
    // the truncated tail
    'F8 bank shed consult: refused - light',
    'F8 bank shed consult: deferred - late (the trip cannot land, 40s of run clock left',
    // the alien why
    'F8 bank shed consult: refused - purple (the leanness law holds)',
    // the prefix-less line (the fleet always speaks the bot name first)
    'bank shed consult: refused - unknown (the junk inputs price no shed - the guess-free zero)',
    // the go and the seed - the TRIP LINE's own verdicts, a different seat
    'F7 bank trip: shed 12u - the trip is the verdict of record',
    // the whale cure's own prose a different lane owns
    'F7 whale cure: the shed arm waits - deferred'
  ]
  assert.deepEqual(shedConsultCensus(rejects), F(0, 0, 0, 0))
})

test('fence: every branch', () => {
  assert.equal(shedConsultTrendConsistent({ back: F(1, 0, 0, 2), prev: F(0, 1, 0, 3), cur: F(0, 0, 1, 0) }), true)
  // the zero lawful - the arm never consulted
  assert.equal(shedConsultTrendConsistent({ back: F(0, 0, 0, 0), prev: F(0, 0, 0, 0), cur: F(0, 0, 0, 0) }), true)
  // extra keys never rejected
  assert.equal(shedConsultTrendConsistent({ back: { ...F(1, 0, 0, 1), top: 'x' }, prev: F(0, 0, 0, 0), cur: F(0, 0, 0, 0) }), true)
  // a missing cell rejects the face
  assert.equal(shedConsultTrendConsistent({ back: { light: 1, late: 0, holding: 0 }, prev: F(0, 0, 0, 0), cur: F(0, 0, 0, 0) }), false)
  // the junk folds reject whole
  assert.equal(shedConsultTrendConsistent(null), false)
  assert.equal(shedConsultTrendConsistent(undefined), false)
  assert.equal(shedConsultTrendConsistent([F(0, 0, 0, 0), F(0, 0, 0, 0), F(0, 0, 0, 0)]), false)
  assert.equal(shedConsultTrendConsistent('fold'), false)
  assert.equal(shedConsultTrendConsistent({ back: F(-1, 0, 0, 0), prev: F(0, 0, 0, 0), cur: F(0, 0, 0, 0) }), false)
  assert.equal(shedConsultTrendConsistent({ back: F(1.5, 0, 0, 0), prev: F(0, 0, 0, 0), cur: F(0, 0, 0, 0) }), false)
  assert.equal(shedConsultTrendConsistent({ back: F(0, 0, 0, 0), prev: null, cur: F(0, 0, 0, 0) }), false)
})

const TAIL = "(the formatter's own seat the bankshed book prices, the trip line's own verdicts the bank trip family's own seat prices, the arms' census the silent arms word prices - the consult's verdict mass alone, co-existence by seat never by duplication)"

test('row: the fade byte-exact - the junk gate two steps down', () => {
  const e = { back: F(7, 0, 0, 6), prev: F(5, 0, 0, 3), cur: F(2, 0, 0, 1) }
  assert.equal(shedConsultTrendRow(e),
    "the shed consult trend (v0.976.239): the junk gate's own heal ran two steps deep - 6 -> 3 (-3) -> 1 (-2) - the unknown mass's own fade, the light rode 7 -> 5 -> 2, the cur face's own split late 0 / holding 0 " + TAIL)
})

test('row: the swell byte-exact - the junk gate two steps up', () => {
  const e = { back: F(2, 0, 0, 1), prev: F(4, 1, 0, 3), cur: F(0, 0, 2, 8) }
  assert.equal(shedConsultTrendRow(e),
    "the shed consult trend (v0.976.239): the junk gate's own starve ran two steps deep - 1 -> 3 (+2) -> 8 (+5) - the unknown mass's own swell, the light rode 2 -> 4 -> 0, the cur face's own split late 0 / holding 2 " + TAIL)
})

test('row: the swing byte-exact + the held steps the honest null', () => {
  const e = { back: F(1, 0, 0, 2), prev: F(2, 0, 0, 5), cur: F(3, 0, 1, 0) }
  assert.equal(shedConsultTrendRow(e),
    "the shed consult trend (v0.976.239): the unknown mass's own swing - 2 -> 5 (+3) -> 0 (-5) - the heal and the starve traded seats between the faces, the light rode 1 -> 2 -> 3, the cur face's own split late 0 / holding 1 " + TAIL)
  // a held step prices no direction
  assert.equal(shedConsultTrendRow({ back: F(0, 0, 0, 3), prev: F(0, 0, 0, 3), cur: F(0, 0, 0, 5) }), null)
  assert.equal(shedConsultTrendRow({ back: F(0, 0, 0, 5), prev: F(0, 0, 0, 3), cur: F(0, 0, 0, 3) }), null)
  // the three-face zero unknown - the consult never spoke the junk way
  assert.equal(shedConsultTrendRow({ back: F(2, 1, 0, 0), prev: F(0, 0, 1, 0), cur: F(0, 0, 0, 0) }), null)
  // the fence fail rides null
  assert.equal(shedConsultTrendRow(null), null)
  assert.equal(shedConsultTrendRow({ back: F(0, 0, 0, 0), prev: F(0, 0, 0), cur: F(0, 0, 0, 0) }), null)
})

test('emitter grammar: the fleet19 template must stand', () => {
  const src = readFileSync(fileURLToPath(new URL('../../testbed/fleet19.mjs', import.meta.url)), 'utf8')
  assert.ok(src.includes('bank shed consult'), 'the shed consult emitter moved - the word\'s grammar must follow')
  assert.ok(src.includes('if (consult) { console.log('), 'the shed consult print gate moved - the word\'s grammar must follow')
})
