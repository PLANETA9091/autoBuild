//
// drown-site.test.mjs - THE DROWN KIND'S OWN SPOT BOOK (v0.956.0)
//
// The kind-anatomy family's own third member (the v0.897.0 falls' own
// anatomy, the v0.898.0 mob book's own anatomy - the drown kind joins).
// WHERE the drown kind's own deaths own: the verb's own split (the
// server's canonical 'drowned'), the band's own split (the same surface
// edge the falls and the mob kills priced), and the site's own repeat
// (the anchor = the first member's x/z in line order, Chebyshev <= 8,
// no transitive drift). The front's own shape: face 215's five drowns
// put THREE bots (F16, F1, F9) at the SAME spot [-121,48,398] - one
// pool's own levy the raw bucket rode unnamed. The book reads the LOG
// LINES directly (the v0.898.0 book-only precedent - zero census shape
// change), server-verdict drown rows only (the v0.117.0 doctrine rides
// the grammar); an inconsistent book prices nothing (the fence rides
// the print); junk never invents a site.
//
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { deathKindCensus } from '../../src/lib/deathkinds.mjs'
import {
  drownAnatomyBook,
  drownAnatomyConsistent,
  drownAnatomyRow
} from '../../src/lib/deathkinds.mjs'

// The server's own drown verdict, byte-true off the live faces (face
// 209's F18/F6 pair rode this exact grammar; the inferred tail's own
// spot read joins per row).
const drown = (bot, x, y, z, corroboration = 'the inference corroborates the server verdict') =>
  `${bot} [${bot}] died - respawning (cause: server: drowned [kind=drown] | inferred: drowning (0s before death at [${x},${y},${z}]) [${corroboration}])`

// The face-215 gate's own shape: three bots, one spot (the pool's own
// levy), two more drowns riding their own water - the raw bucket rode
// the geography unnamed.
const FACE215_GATE = [
  drown('F16', -121, 48, 398),
  drown('F1', -121, 48, 398),
  drown('F9', -121, 48, 398),
  drown('F12', -101, 43, 383),
  drown('F6', -134, 50, 413)
]

test('the face-215 gate: the site repeat prices the drown cell live (the book, the fence, the row byte-exact)', () => {
  const c = deathKindCensus(FACE215_GATE)
  assert.equal(c.byKind.drown, 5)
  const b = drownAnatomyBook(FACE215_GATE)
  assert.equal(b.drowns, 5)
  assert.equal(b.drowned, 5)
  assert.deepEqual(b.otherVerbs, {})
  assert.equal(b.underground, 4)
  assert.equal(b.surface, 1)
  assert.equal(b.blind, 0)
  assert.equal(b.clustered, 3)
  assert.equal(b.unclustered, 2)
  assert.deepEqual(b.sites, [{ anchor: [-121, 398], members: ['F16', 'F1', 'F9'] }])
  assert.equal(drownAnatomyConsistent(b), true)
  assert.equal(drownAnatomyRow(b), "the drown book's own anatomy (v0.956.0): drowns 5 - drowned 5, underground 4/surface 1, clustered 3 of 5 (1 site: F16+F1+F9) - THE WATER'S OWN GATE: the drown deaths' own spot prices the water the raw bucket rode unnamed - the pool's own levy")
})

test('the site radius: the pair within Chebyshev 8 seats one site, the pair past it rides its own water', () => {
  const b = drownAnatomyBook([drown('F3', -121, 48, 398), drown('F4', -113, 47, 398)])
  assert.equal(b.drowns, 2)
  assert.equal(b.clustered, 2)
  assert.deepEqual(b.sites, [{ anchor: [-121, 398], members: ['F3', 'F4'] }])
  assert.equal(drownAnatomyConsistent(b), true)
  const far = drownAnatomyBook([drown('F3', -121, 48, 398), drown('F4', -112, 47, 398)])
  assert.equal(far.drowns, 2)
  assert.equal(far.clustered, 0)
  assert.equal(far.unclustered, 2)
  assert.deepEqual(far.sites, [])
  assert.equal(drownAnatomyConsistent(far), true)
})

test('the anchor law: the anchor is the first member in line order, no transitive drift (the chain past the radius stays outside)', () => {
  const b = drownAnatomyBook([drown('F2', 0, 44, 0), drown('F5', 8, 44, 0), drown('F7', 16, 44, 0)])
  assert.equal(b.drowns, 3)
  assert.equal(b.clustered, 2)
  assert.equal(b.unclustered, 1)
  assert.deepEqual(b.sites, [{ anchor: [0, 0], members: ['F2', 'F5'] }])
  assert.equal(drownAnatomyConsistent(b), true)
})

test('the blind skin: the pos-less drown counts in the book and judges nothing in the bands or the sites', () => {
  const blindRow = 'F8 [F8] died - respawning (cause: server: drowned [kind=drown] | inferred: drowning (0s before death) [the inference corroborates the server verdict])'
  const b = drownAnatomyBook([blindRow, drown('F6', -121, 48, 398), drown('F9', -121, 48, 398)])
  assert.equal(b.drowns, 3)
  assert.equal(b.drowned, 3)
  assert.equal(b.blind, 1)
  assert.equal(b.underground, 2)
  assert.equal(b.surface, 0)
  assert.equal(b.clustered, 2)
  assert.equal(b.unclustered, 0)
  assert.equal(drownAnatomyConsistent(b), true)
  assert.equal(drownAnatomyRow(b), "the drown book's own anatomy (v0.956.0): drowns 3 - drowned 3, underground 2/blind 1, clustered 2 of 3 (1 site: F6+F9) - THE WATER'S OWN GATE: the drown deaths' own spot prices the water the raw bucket rode unnamed - the pool's own levy")
})

test('the kind fence: the fall, the mob and the blast stay OUTSIDE (the drown book subject is the drown kind alone)', () => {
  const fallRow = 'F14 [F14] died - respawning (cause: server: fell from a high place [kind=fall] | inferred: fall/env (0s before death at [-132,45,405]) [the inference corroborates the server verdict])'
  const mobRow = 'F13 [F13] died - respawning (cause: server: was slain by Zombie [kind=mob by Zombie] | inferred: zombie@1.2 (0s before death at [-128,61,393]) [the inference corroborates the server verdict])'
  const blastRow = 'F11 [F11] died - respawning (cause: server: was blown up by Creeper [kind=explosion by Creeper] | inferred: fall/env (0s before death at [-108,66,423]) [the inference is blind to this kind - the hint is noise by construction (the server kind stays the authority)])'
  const b = drownAnatomyBook([fallRow, mobRow, blastRow, drown('F5', -146, 61, 395)])
  assert.equal(b.drowns, 1)
  assert.equal(b.drowned, 1)
  assert.equal(b.surface, 1)
  assert.equal(b.clustered, 0)
  assert.equal(drownAnatomyConsistent(b), true)
})

test('the verb split: the server\'s canonical \'drowned\' rides the verdict cell, any other phrasing rides the otherVerbs cell', () => {
  const exotic = 'F9 [F9] died - respawning (cause: server: drowned while fighting [kind=drown] | inferred: drowning (0s before death at [-121,48,398]) [the inference corroborates the server verdict])'
  const b = drownAnatomyBook([drown('F16', -121, 48, 398), exotic])
  assert.equal(b.drowns, 2)
  assert.equal(b.drowned, 1)
  assert.deepEqual(b.otherVerbs, { 'drowned while fighting': 1 })
  assert.equal(b.clustered, 2)
  assert.equal(drownAnatomyConsistent(b), true)
  assert.equal(drownAnatomyRow(b), "the drown book's own anatomy (v0.956.0): drowns 2 - drowned 1/other 1, underground 2, clustered 2 of 2 (1 site: F16+F9) - THE WATER'S OWN GATE: the drown deaths' own spot prices the water the raw bucket rode unnamed - the pool's own levy")
})

test('the silence branch: every drown rode its own water this face (the face-209 pair, the row byte-exact)', () => {
  const b = drownAnatomyBook([drown('F18', -101, 43, 383), drown('F6', -134, 50, 413)])
  assert.equal(b.drowns, 2)
  assert.equal(b.clustered, 0)
  assert.equal(b.unclustered, 2)
  assert.deepEqual(b.sites, [])
  assert.equal(drownAnatomyConsistent(b), true)
  assert.equal(drownAnatomyRow(b), "the drown book's own anatomy (v0.956.0): drowns 2 - drowned 2, underground 1/surface 1 - the sites' own silence: every drown rode its own water this face - THE WATER'S OWN SPREAD, not one pool's repeat")
})

test('the inferred-only fence: the shape the server verdict never rode prices nothing (the drown-less face is the honest null)', () => {
  assert.equal(drownAnatomyBook([]), null)
  assert.equal(drownAnatomyBook(['junk line', 'F5 [F5] chat: hello']), null)
  assert.equal(drownAnatomyBook(undefined), null)
  assert.equal(drownAnatomyBook(null), null)
})

test('the fence: a tampered book prices nothing (the cells lie, the mirror recounts)', () => {
  const b = drownAnatomyBook(FACE215_GATE)
  assert.equal(drownAnatomyConsistent(b), true)
  // the drowns cell lies
  assert.equal(drownAnatomyConsistent({ ...b, drowns: 6 }), false)
  // the drowned cell lies
  assert.equal(drownAnatomyConsistent({ ...b, drowned: 4 }), false)
  // the band cells lie
  assert.equal(drownAnatomyConsistent({ ...b, underground: 5 }), false)
  // the cluster cells lie
  assert.equal(drownAnatomyConsistent({ ...b, clustered: 2, unclustered: 3 }), false)
  // the sites lie (a member the rows never rode)
  assert.equal(drownAnatomyConsistent({ ...b, sites: [{ anchor: [-121, 398], members: ['F16', 'F1', 'F9', 'F12'] }] }), false)
  // the unseated law: a positioned row outside every live radius must ride unclustered
  assert.equal(drownAnatomyConsistent({ ...b, sites: [{ anchor: [-121, 398], members: ['F16', 'F1'] }], clustered: 2, unclustered: 3 }), false)
  // junk shapes price nothing
  assert.equal(drownAnatomyConsistent(null), false)
  assert.equal(drownAnatomyConsistent(undefined), false)
  assert.equal(drownAnatomyConsistent('book'), false)
  assert.equal(drownAnatomyConsistent([]), false)
})

test('the row branch law: junk never prints a row (the cells lie, the row is null)', () => {
  assert.equal(drownAnatomyRow(null), null)
  assert.equal(drownAnatomyRow(undefined), null)
  assert.equal(drownAnatomyRow('book'), null)
  assert.equal(drownAnatomyRow([]), null)
  const b = drownAnatomyBook(FACE215_GATE)
  assert.equal(drownAnatomyRow({ ...b, drowns: -1 }), null)
  assert.equal(drownAnatomyRow({ ...b, drowned: 9 }), null)
  // the branch law: a clustered>0 book without sites is a lie
  assert.equal(drownAnatomyRow({ ...b, sites: [] }), null)
  // the branch law: a cluster-free book with sites is a lie
  const silent = drownAnatomyBook([drown('F18', -101, 43, 383), drown('F6', -134, 50, 413)])
  assert.equal(drownAnatomyRow({ ...silent, sites: [{ anchor: [-101, 383], members: ['F18', 'F6'] }] }), null)
})

test('the prose stays in the lib (the decompose rides the row, never the prose)', () => {
  const libSrc = readFileSync(new URL('../../src/lib/deathkinds.mjs', import.meta.url), 'utf8')
  assert.ok(libSrc.includes("THE WATER'S OWN GATE: the drown deaths' own spot prices the water the raw bucket rode unnamed"), 'the gate tail rides the lib')
  const decSrc = readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(!decSrc.includes("THE WATER'S OWN GATE: the drown deaths' own spot prices"), 'the prose stays in the lib')
})

test('WIRING: the decompose rides the drown spot book beside the anatomy family (the v0.956.0 block)', () => {
  const src = readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.equal(/const drab = drownAnatomyBook\(lines\)/.test(src), true)
  assert.equal(/if \(drab && drownAnatomyConsistent\(drab\)\)/.test(src), true)
  assert.equal(/const drar = drownAnatomyRow\(drab\)/.test(src), true)
  assert.equal(/if \(drar\) console\.log\(`\s*\$\{drar\}`\)/.test(src), true)
})
