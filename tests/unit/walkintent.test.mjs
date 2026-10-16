// Tests for the fleet walk-intent board in src/lib/walkintent.mjs.
// The measured decision-concurrency storm this module closes: FACE 262
// (run 38260766817, the v0.973.0 fleet) carried 34 no-path ledger records
// and 13 of them were repeats - but only ONE printed the v0.863.0 90s
// escalation (the expired-prior path). TWELVE printed ttl 15s - the
// ABSORBED shape: the prior verdict was STILL LIVE at each re-refusal,
// the walks simply DECIDED before it landed ([-128,72,384] x3: F11 -> F16
// -> F12 overlapped inside the ~4.5s A*-exhaustion window; every repeat
// paid a full walk AND a full sync A* that blocked all 19 bots). No
// record-side window can prevent a walk whose decision predated the
// verdict - the walk itself must speak BEFORE it starts. These pins guard
// the board's contract: an intent is fleet-wide, the owner's own intents
// never answer, the hit is cell-tight, the clear owns the resolve, and
// nothing fires on junk.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  WALK_INTENT_TTL_MS, WALK_INTENT_RADIUS, WALK_INTENT_DY, WALK_INTENT_CAP,
  recordWalkIntent, nearWalkIntent, clearWalkIntent
} from '../../src/lib/walkintent.mjs'

test('policy constants stay sane', () => {
  assert.equal(WALK_INTENT_TTL_MS, 90000, 'the crash-safety bound rides the v0.62.0 ruler (the resolve clears it, the ttl only bounds a lost clear)')
  assert.equal(WALK_INTENT_RADIUS, 1, 'XZ hit radius TIGHT: the v0.65.0 lesson - a walk to chest A must never skip chest B')
  assert.equal(WALK_INTENT_DY, 2, 'Y tolerance: the doomed-goal skip\'s own dy parity')
  assert.equal(WALK_INTENT_CAP, 24, 'cap parity with the verdict ledgers')
})

test('recordWalkIntent: append, prune, cap-keeps-newest, and the input is NEVER mutated', () => {
  const t0 = 1000000
  const cell = { x: -128, y: 72, z: 384 }
  const empty = recordWalkIntent(undefined, cell, 'F11', t0)
  assert.equal(empty.length, 1, 'a junk board still records')
  assert.deepEqual([empty[0].x, empty[0].y, empty[0].z], [-128, 72, 384])
  assert.equal(empty[0].bot, 'F11', 'the owner rides the entry')

  const board = [{ x: 0, y: 0, z: 0, bot: 'F1', at: t0 - WALK_INTENT_TTL_MS - 1 }, { x: 5, y: 72, z: 410, bot: 'F2', at: t0 - 10 }]
  const before = JSON.stringify(board)
  const next = recordWalkIntent(board, cell, 'F11', t0)
  assert.equal(JSON.stringify(board), before, 'the shared array is rewritten by the CALLER, not mutated here')
  assert.equal(next.length, 2, 'the dead entry is pruned, the live one kept, the new one appended')

  // cap: 26 records, cap 24 - the OLDEST drop off the front
  let grown = []
  for (let i = 0; i < 26; i++) grown = recordWalkIntent(grown, { x: i, y: 0, z: i }, `F${(i % 19) + 1}`, t0 + i)
  assert.equal(grown.length, WALK_INTENT_CAP)
  assert.equal(grown[0].x, 2, 'the two oldest cells left the front')
  assert.equal(grown[grown.length - 1].x, 25, 'the newest is last')

  // junk cells never enter
  assert.equal(recordWalkIntent([], null, 'F1', t0).length, 0)
  assert.equal(recordWalkIntent([], { x: NaN, y: 1, z: 1 }, 'F1', t0).length, 0)
  assert.equal(recordWalkIntent([], 'chest', 'F1', t0).length, 0)
})

test('recordWalkIntent: the owner\'s own live intent for the SAME cell is REPLACED (one truthful intent per bot per cell)', () => {
  const t0 = 2000000
  const cell = { x: -128, y: 72, z: 384 }
  let board = recordWalkIntent([], cell, 'F11', t0)
  // a foreign bot's intent on the same cell is KEPT (the board is the
  // picture of reality: several walks may genuinely overlap)
  board = recordWalkIntent(board, cell, 'F16', t0 + 1000)
  assert.equal(board.length, 2, 'the foreign intent appended')
  // the owner re-commits (the retry): its own entry is replaced, the
  // foreign one stands
  board = recordWalkIntent(board, cell, 'F11', t0 + 2000)
  assert.equal(board.length, 2, 'the owner\'s re-record replaced its own entry, not appended')
  assert.equal(board.filter(e => e.bot === 'F11').length, 1, 'exactly one F11 intent')
  assert.equal(board.find(e => e.bot === 'F11').at, t0 + 2000, 'the fresh intent owns the clock')
})

test('nearWalkIntent: the foreign hit, the owner never blocks itself, the tight radius decides', () => {
  const t0 = 3000000
  const cell = { x: -128, y: 72, z: 384 }
  const board = recordWalkIntent([], cell, 'F11', t0)
  // a foreign bot's read: hit
  assert.equal(nearWalkIntent(board, cell, t0 + 100, { excludeBot: 'F16' }).hit, true)
  assert.equal(nearWalkIntent(board, cell, t0 + 100, { excludeBot: 'F16' }).bot, 'F11', 'the holder rides the hit')
  // the OWNER's own read: never blocked (the retry re-walks freely)
  assert.equal(nearWalkIntent(board, cell, t0 + 100, { excludeBot: 'F11' }).hit, false, 'the owner\'s own intent never answers')
  // no excludeBot (a caller without a username): the intent answers
  assert.equal(nearWalkIntent(board, cell, t0 + 100, {}).hit, true)
  // radius 1 TIGHT: 2 blocks away is a DIFFERENT chest - miss
  assert.equal(nearWalkIntent(board, { x: -126, y: 72, z: 384 }, t0 + 100, { excludeBot: 'F16' }).hit, false, 'the v0.65.0 tight lesson holds')
  // the Y band: dy 2 hits, dy 3 misses
  assert.equal(nearWalkIntent(board, { x: -128, y: 74, z: 384 }, t0 + 100, { excludeBot: 'F16' }).hit, true)
  assert.equal(nearWalkIntent(board, { x: -128, y: 75, z: 384 }, t0 + 100, { excludeBot: 'F16' }).hit, false)
  // the ttl boundary: live inside, dead at the bound
  assert.equal(nearWalkIntent(board, cell, t0 + WALK_INTENT_TTL_MS - 1, { excludeBot: 'F16' }).hit, true, '1ms before the ttl: live')
  assert.equal(nearWalkIntent(board, cell, t0 + WALK_INTENT_TTL_MS, { excludeBot: 'F16' }).hit, false, 'AT the ttl: dead (age < ttl is the contract)')
})

test('nearWalkIntent: the freshest matching intent wins the age (several walks may overlap)', () => {
  const t0 = 4000000
  let board = recordWalkIntent([], { x: 10, y: 64, z: 10 }, 'F11', t0)
  board = recordWalkIntent(board, { x: 10, y: 64, z: 10 }, 'F16', t0 + 5000)
  assert.equal(board.length, 2, 'two overlapping intents both live - the board is the picture of reality')
  const r = nearWalkIntent(board, { x: 10, y: 64, z: 10 }, t0 + 6000, { excludeBot: 'F3' })
  assert.equal(r.hit, true)
  assert.equal(r.ageMs, 1000, 'the freshest intent answers, not the first seen')
})

test('clearWalkIntent: the resolve clears the owner\'s own intents only - the foreign ones stand', () => {
  const t0 = 5000000
  const cell = { x: -128, y: 72, z: 384 }
  let board = recordWalkIntent([], cell, 'F11', t0)
  board = recordWalkIntent(board, cell, 'F16', t0 + 1000)
  board = recordWalkIntent(board, { x: -149, y: 72, z: 400 }, 'F11', t0 + 1500)
  const before = JSON.stringify(board)
  const cleared = clearWalkIntent(board, cell, 'F11', t0 + 2000)
  assert.equal(JSON.stringify(board), before, 'the input board is NEVER mutated (the purity law)')
  assert.equal(cleared.length, 2, 'F11\'s intent on the chest and F11\'s OTHER chest intent... only the chest cell cleared')
  assert.equal(cleared.some(e => e.bot === 'F11' && e.z === 384), false, 'the chest intent is gone')
  assert.equal(cleared.some(e => e.bot === 'F16'), true, 'the foreign intent stands')
  assert.equal(cleared.some(e => e.bot === 'F11' && e.z === 400), true, 'the owner\'s OTHER chest intent stands (the clear is per-cell)')
  // the dead-entry prune rides the clear too (the resolve tidies the board)
  const pruned = clearWalkIntent([{ x: 1, y: 1, z: 1, bot: 'F1', at: t0 - WALK_INTENT_TTL_MS - 1 }], { x: 9, y: 9, z: 9 }, 'F2', t0)
  assert.equal(pruned.length, 0, 'the dead entry left on the way out')
  // junk safety: the resolve must never throw (the finally owns it)
  assert.deepEqual(clearWalkIntent(null, cell, 'F11', t0), [])
  assert.deepEqual(clearWalkIntent(undefined, cell, 'F11', t0), [])
  assert.deepEqual(clearWalkIntent(42, cell, 'F11', t0), [])
  assert.deepEqual(clearWalkIntent(board, null, 'F11', t0).length, 3, 'a junk cell clears nothing but still prunes nothing live')
})

test('nearWalkIntent: junk never skips a chest (a skip costs the deposit, the hop only costs CPU)', () => {
  assert.equal(nearWalkIntent(undefined, { x: 1, y: 1, z: 1 }, 1000).hit, false, 'junk board = no hit')
  assert.equal(nearWalkIntent([], null, 1000).hit, false, 'junk cell = no hit')
  assert.equal(nearWalkIntent([{ x: 1, y: 1, z: 1 }], { x: 1, y: 1, z: 1 }, 1000).hit, false, 'an entry without .at is junk')
  assert.equal(nearWalkIntent([{ x: 1, y: 1, z: 1, at: 900, bot: 'F1' }], 'chest', 1000).hit, false, 'a junk query cell never hits')
  assert.equal(nearWalkIntent([{ x: NaN, y: 1, z: 1, at: 900, bot: 'F1' }], { x: 1, y: 1, z: 1 }, 1000).hit, false, 'a junk entry never hits')
  const r = nearWalkIntent([{ x: 1, y: 1, z: 1, at: 900, bot: 42 }], { x: 1, y: 1, z: 1 }, 1000, {})
  assert.equal(r.hit, true, 'a junk BOT name still answers (the entry is real)')
  assert.equal(r.bot, null, 'the holder read degrades honestly')
})

// ---- THE FACE 262 REGRESSION SHAPE ----
// The measured rent: F11 walks [-128,72,384] and refuses; F16 and F12's
// walks DECIDED before F11's verdict landed - the verdict could not stop
// them (12 of 13 repeats rode this shape). The board closes it: F16's SCAN
// (any time after F11's intent lands) reads the intent and skips.

test('the FACE 262 regression shape: the second walker skips while the first walk is in flight', () => {
  const t0 = 6000000
  const door = { x: -128, y: 72, z: 384 }
  let board = []
  // F11 commits (the walk-intent record) - the walk + A* now run for seconds
  board = recordWalkIntent(board, door, 'F11', t0)
  // F16's scan at t+2s: the intent is live, the chest skips
  const f16 = nearWalkIntent(board, door, t0 + 2000, { excludeBot: 'F16' })
  assert.equal(f16.hit, true, 'the second walker\'s scan reads the walk in flight')
  assert.equal(f16.bot, 'F11', 'the line names the holder')
  // F12's scan at t+4s: the same answer (the ttl still has 86s)
  assert.equal(nearWalkIntent(board, door, t0 + 4000, { excludeBot: 'F12' }).hit, true)
  // F11's own retry consult: never blocked
  assert.equal(nearWalkIntent(board, door, t0 + 4000, { excludeBot: 'F11' }).hit, false)
  // the walk resolves (refusal recorded, the finally clears)
  board = clearWalkIntent(board, door, 'F11', t0 + 6000)
  assert.equal(board.length, 0, 'the board is clean after the resolve')
  // NOW a foreign scan reads no intent - the VERDICT ledger owns the aftermath
  assert.equal(nearWalkIntent(board, door, t0 + 7000, { excludeBot: 'F12' }).hit, false)
})

// ---- WIRING ----
// The deposit chain owns the board's lifecycle; the fleet threads the array.

test('the deposit chain wires the board: record+clear own the walk, the scan consults, the fleet threads the array', async () => {
  const fs = await import('node:fs')
  const deposit = fs.readFileSync(new URL('../../src/lib/deposit.mjs', import.meta.url), 'utf8')
  assert.match(deposit, /import \{ recordWalkIntent, nearWalkIntent, clearWalkIntent, WALK_INTENT_TTL_MS \} from '\.\/walkintent\.mjs'/, 'the board rides the deposit import band')
  assert.match(deposit, /walkIntents = null, \/\/ \(v0\.974\.0\) a SHARED array across the fleet/, 'depositToChest takes the board')
  // (v0.976.131) the signature grew deadLidLedger beside the board - the
  // dead-lid ledger threads the shared array into the hop loop; the board's
  // own seat is untouched.
  assert.match(deposit, /walkIntents = null, deadLidLedger = null, onVerticalDoom = null/, 'depositToChests takes the board')
  assert.match(deposit, /const walkOnceInner = async \(label, \{ rearm = false \} = \{\}\) => \{/, 'the inner walk keeps its name (the wrapper owns the lifecycle)')
  assert.match(deposit, /const freshIntents = recordWalkIntent\(walkIntents, intentCell, bot\.username, Date\.now\(\)\)/, 'the wrapper records the intent before the walk')
  assert.match(deposit, /return await walkOnceInner\(label, opts\)/, 'the wrapper calls the inner')
  assert.match(deposit, /const cleared = clearWalkIntent\(walkIntents, intentCell, bot\.username, Date\.now\(\)\)/, 'the finally clears the intent')
  assert.match(deposit, /walk-intent: chest at \[/, "the record's own voice rides the fleet log")
  assert.match(deposit, /chest skip \(walk in flight by \$\{wi\.bot \?\? 'bot'\} cached \$\{Math\.round\(wi\.ageMs \/ 1000\)\}s ago at/, 'the skip names the holder and the age')
  assert.match(deposit, /nearWalkIntent\(walkIntents, skipCell, Date\.now\(\), \{ excludeBot: bot\.username \}\)/, 'the scan consults the board beside the verdict ledgers')
  assert.match(deposit, /exclude: \[dead\], noPathLedger, walkIntents \}/, 'the v0.23.1 swap rides the board too')

  const miner = fs.readFileSync(new URL('../../src/bots/miner.mjs', import.meta.url), 'utf8')
  assert.match(miner, /walkIntents = null, \/\/ \(v0\.974\.0\) the fleet-wide walk-intent board/, 'createMiner takes the board')
  assert.match(miner, /depositToChests\(bot, \{ log, noPathLedger, fullChestLedger, walkIntents, deadLidLedger, \.\.\.opts \}\)/, 'the bank chain threads the board')

  const fleet = fs.readFileSync(new URL('../../testbed/fleet19.mjs', import.meta.url), 'utf8')
  assert.match(fleet, /const walkIntents = \[\] \/\/ \(v0\.974\.0\) shared fleet-wide walk intents/, 'the fleet owns ONE shared array')
  assert.match(fleet, /walkIntents, \/\/ \(v0\.974\.0\) shared fleet-wide walk intents/, 'createMiner receives the array')
  assert.match(fleet, /walk-intent board: \$\{walkIntents\.length\} live intent\(s\) at end phase/, 'the end-phase evidence line rides the report')

  const book = fs.readFileSync(new URL('../../src/lib/ledgerbook.mjs', import.meta.url), 'utf8')
  assert.match(book, /WALKINTENT_RECORD_RE/, 'the book parses the record line')
  assert.match(book, /WALKINTENT_SKIP_RE/, 'the book parses the skip line')
  assert.match(book, /'walk-intent': walkIntent/, 'the third family joins the book')
})

console.log('walkintent.test.mjs: all green')
