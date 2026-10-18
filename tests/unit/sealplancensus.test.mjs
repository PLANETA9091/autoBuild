// (v0.976.237) THE SEAL PLAN'S OWN VERDICT MASS - the word's own pins.
// The census (the firing's own verdict a vote, the sum the mass keeps),
// the fence (every face all four proven integers, the zero lawful), the
// row (the blocked mass's own two-step arc - the fade the dig-around's
// own heal, the swell the stand-off's own starve, the swing the trade;
// a held step the honest null, the three-face zero the lawful silence).
// The near-miss lanes never ride: the final climb's own 'shift pre-seal
// plan:' variant, the water-lock census line, the alien verdict word,
// the bad anchor term, the truncated tail. The emitter grammar pin: the
// fleet19 template must stand (the .235 word's own law).
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { sealPlanCensus, sealPlanCensusConsistent, sealPlanCensusRow } from '../../src/lib/sealplancensus.mjs'

const B = (buildable, walled, unanchored, unknown) => ({ buildable, walled, unanchored, unknown })

test('census: the firings sum, the junk never votes', () => {
  const lines = [
    'F12 tunnel: seal plan: anchor solid, headroom clear - the seal-and-cross is buildable',
    'junk line',
    7,
    null,
    '',
    'F9 tunnel: seal plan: anchor solid, headroom solid - the seal-and-cross is walled',
    'F19 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored',
    'F5 tunnel: seal plan: anchor open, headroom solid - the seal-and-cross is unknown',
    'F7 tunnel: seal plan: anchor solid, headroom clear - the seal-and-cross is buildable',
    'F7 tunnel: seal plan: anchor solid, headroom clear - the seal-and-cross is buildable'
  ]
  assert.deepEqual(sealPlanCensus(lines), B(3, 1, 1, 1))
})

test('census: the lawful zero - a face whose lines hold no plan print', () => {
  assert.deepEqual(sealPlanCensus(['F12 bank trip: shed 12u', 'F9 tunnel: water-lock census: water at step 1, 0 sealable in pocket']), B(0, 0, 0, 0))
})

test('census: junk-safe - the non-array prices null, junk types skipped', () => {
  assert.equal(sealPlanCensus(null), null)
  assert.equal(sealPlanCensus(undefined), null)
  assert.equal(sealPlanCensus('F12 tunnel: seal plan: anchor solid, headroom clear - the seal-and-cross is buildable'), null)
  assert.equal(sealPlanCensus(42), null)
  assert.deepEqual(sealPlanCensus([null, 9, 'no votes here']), B(0, 0, 0, 0))
})

test('census: the near-miss lanes never ride', () => {
  const rejects = [
    'F3 final climb: shift pre-seal plan: anchor solid, headroom clear - the seal-and-cross is buildable',
    'F9 tunnel: water-lock census: water at step 1, 0 sealable in pocket - the seal-and-cross never rides this lane',
    'F12 tunnel: seal plan: anchor solid, headroom clear - the seal-and-cross is impossible',
    'F12 tunnel: seal plan: anchor welded, headroom clear - the seal-and-cross is buildable',
    'F12 tunnel: seal plan: anchor solid, headroom murky - the seal-and-cross is buildable',
    'F12 tunnel: seal plan: anchor solid, headroom clear - the seal-and-cross is',
    'F12 tunnel: seal plan: anchor solid, headroom clear',
    'F12 tunnel: seal plan: anchor solid, headroom clear - the seal-and-cross is Buildable',
    'tunnel: seal plan: anchor solid, headroom clear - the seal-and-cross is buildable'
  ]
  const mass = sealPlanCensus(rejects)
  assert.deepEqual(mass, B(0, 0, 0, 0))
})

test('fence: every branch', () => {
  assert.equal(sealPlanCensusConsistent({ back: B(1, 0, 0, 0), prev: B(0, 2, 0, 0), cur: B(0, 0, 3, 0) }), true)
  // the zero lawful - the lane never fired
  assert.equal(sealPlanCensusConsistent({ back: B(0, 0, 0, 0), prev: B(0, 0, 0, 0), cur: B(0, 0, 0, 0) }), true)
  // extra keys never rejected
  assert.equal(sealPlanCensusConsistent({ back: { ...B(1, 1, 1, 1), top: 'x' }, prev: B(0, 0, 0, 0), cur: B(0, 0, 0, 0) }), true)
  // a missing cell rejects the face
  assert.equal(sealPlanCensusConsistent({ back: { buildable: 1, walled: 1, unanchored: 1 }, prev: B(0, 0, 0, 0), cur: B(0, 0, 0, 0) }), false)
  // the junk folds reject whole
  assert.equal(sealPlanCensusConsistent(null), false)
  assert.equal(sealPlanCensusConsistent(undefined), false)
  assert.equal(sealPlanCensusConsistent([B(0, 0, 0, 0), B(0, 0, 0, 0), B(0, 0, 0, 0)]), false)
  assert.equal(sealPlanCensusConsistent('fold'), false)
  assert.equal(sealPlanCensusConsistent({ back: B(-1, 0, 0, 0), prev: B(0, 0, 0, 0), cur: B(0, 0, 0, 0) }), false)
  assert.equal(sealPlanCensusConsistent({ back: B(1.5, 0, 0, 0), prev: B(0, 0, 0, 0), cur: B(0, 0, 0, 0) }), false)
  assert.equal(sealPlanCensusConsistent({ back: B(0, 0, 0, 0), prev: null, cur: B(0, 0, 0, 0) }), false)
})

const TAIL = "(the sealed trend's own seat prices the tunnel sealed's own lane, the water-lock book's own cast prices the census arm the plan's own eyes ride, the standoff's own verdict lanes price the crossing's own outcome - the plan's mass row alone, co-existence by seat never by duplication)"

test('row: the fade byte-exact - the blocked mass two steps down', () => {
  const e = { back: B(2, 4, 1, 0), prev: B(4, 2, 1, 0), cur: B(5, 1, 0, 0) }
  assert.equal(sealPlanCensusRow(e),
    'the seal plan trend (v0.976.237): the blockers\' own heal ran two steps deep - 5 -> 3 (-2) -> 1 (-2) - the blocked mass\'s own fade, the buildable rode 2 -> 4 -> 5, the cur face\'s own split walled 1 / unanchored 0 / unknown 0 ' + TAIL)
})

test('row: the swell byte-exact - the blocked mass two steps up', () => {
  const e = { back: B(1, 1, 0, 0), prev: B(2, 2, 1, 0), cur: B(0, 3, 2, 1) }
  assert.equal(sealPlanCensusRow(e),
    'the seal plan trend (v0.976.237): the blockers\' own starve ran two steps deep - 1 -> 3 (+2) -> 6 (+3) - the blocked mass\'s own swell, the buildable rode 1 -> 2 -> 0, the cur face\'s own split walled 3 / unanchored 2 / unknown 1 ' + TAIL)
})

test('row: the swing byte-exact + the held steps the honest null', () => {
  const e = { back: B(3, 2, 0, 0), prev: B(1, 4, 1, 0), cur: B(2, 0, 0, 1) }
  assert.equal(sealPlanCensusRow(e),
    'the seal plan trend (v0.976.237): the blocked mass\'s own swing - 2 -> 5 (+3) -> 1 (-4) - the heal and the starve traded seats between the faces, the buildable rode 3 -> 1 -> 2, the cur face\'s own split walled 0 / unanchored 0 / unknown 1 ' + TAIL)
  // a held step prices no direction
  assert.equal(sealPlanCensusRow({ back: B(0, 3, 0, 0), prev: B(0, 3, 0, 0), cur: B(0, 5, 0, 0) }), null)
  assert.equal(sealPlanCensusRow({ back: B(0, 5, 0, 0), prev: B(0, 3, 0, 0), cur: B(0, 3, 0, 0) }), null)
  // the three-face zero - the lane never fired, nothing to price
  assert.equal(sealPlanCensusRow({ back: B(0, 0, 0, 0), prev: B(0, 0, 0, 0), cur: B(0, 0, 0, 0) }), null)
  // the fence fail rides null
  assert.equal(sealPlanCensusRow(null), null)
  assert.equal(sealPlanCensusRow({ back: B(0, 0, 0, 0), prev: B(0, 0, 0), cur: B(0, 0, 0, 0) }), null)
})

test('emitter grammar: the fleet19 template must stand', () => {
  const src = readFileSync(fileURLToPath(new URL('../../testbed/fleet19.mjs', import.meta.url)), 'utf8')
  assert.ok(src.includes('tunnel: seal plan: anchor '), 'the seal plan emitter template moved - the word\'s grammar must follow')
  assert.ok(src.includes(' - the seal-and-cross is '), 'the seal plan verdict tail moved - the word\'s grammar must follow')
})
