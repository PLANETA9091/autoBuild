// (v0.974.0) THE WALK'S OWN INTENT BOARD - the decision-concurrency's own cure.
//
// MEASURED (FACE 262 = 38260766817, the v0.973.0 fleet): 34 no-path ledger
// records rode the face, and 13 of them were REPEATS (a refusal on a chest
// that had already refused earlier in the face). The v0.863.0 repeat's own
// half-life caught exactly ONE of the 13 (the ttl-90s record: a verdict that
// had EXPIRED and refused again - the designed price). The other TWELVE
// printed ttl 15s - the ABSORBED shape (the v0.96.0 law): at each re-refusal
// the prior verdict was STILL LIVE. A live verdict that a walker never
// consulted means the walk DECIDED before the verdict landed: the three
// walks on [-128,72,384] (F11 -> F16 -> F12) overlapped inside the ~4.5s
// A*-exhaustion window, each paying a full walk AND a full synchronous A*
// that blocked all 19 bots (the v0.62.0 storm arithmetic, x12 this face).
// The rent is NOT a ttl problem - no record-side window can prevent a walk
// whose decision predated the verdict. It is a DECISION-CONCURRENCY problem:
// the skip consults at scan time, but the verdict only exists at walk END.
//
// The board closes the gap the only honest way: the walk itself speaks
// BEFORE it starts. A bot that commits to walking a chest records an INTENT
// (its username + the chest cell); the other bots' scans consult the board
// beside the verdict ledgers and skip a chest another bot's walk already
// owns - the second walker picks the next chest in the ring instead of
// queueing behind a doomed (or even a healthy) first walker's A*. The
// verdict ledger still owns the AFTERMATH (a refusal records the 15s/90s
// window exactly as before); the board owns the DURING. Clear-on-resolve
// (the walk's own try/finally) keeps the board truthful; the ttl is only
// the crash-safety bound (a lost clear expires, it never immortalizes -
// the v0.96.0 law's shape).
//
// Same discipline as src/lib/nopath.mjs (the verdict ledger this board
// complements) and src/lib/drowning.mjs: pure functions, a NEW array per
// record, prune-then-append, the cap keeps the newest entries. One process,
// so one shared array reaches every bot (the ClaimBoard pattern without
// the broadcast) - the array rides fleet19 -> createMiner -> depositToChests
// beside noPathLedger.

/** An intent lives this long at most. The walk's own resolve clears it
 * (try/finally at the walk site), so the ttl only bounds a LOST clear -
 * 90s: the v0.62.0 ruler's own window (a genuinely re-routable chest is
 * back inside two), and the walks it covers refuse within ~5-15s. */
export const WALK_INTENT_TTL_MS = 90000

/** XZ distance under which an intent counts as the same chest. TIGHT
 * (radius 1): the doomed-goal skip's own lesson (the v0.65.0 tight-radius
 * law) - yard rows pack 2 blocks apart and a wider probe skipped a GOOD
 * chest 1.41 blocks away. A walk to chest A must never skip chest B. */
export const WALK_INTENT_RADIUS = 1

/** Y tolerance: chest rows are flat (same y); this only covers a bot
 * reading the chest from a staircase above/below (the doomed-goal skip's
 * own dy=2 parity). */
export const WALK_INTENT_DY = 2

/** Cap: one live intent per walking bot per chest (19 bots worst case);
 * 24 keeps the newest verdicts (nopath.mjs cap parity). */
export const WALK_INTENT_CAP = 24

function floorCell (cell) {
  if (!cell || typeof cell !== 'object') return null
  const x = Math.floor(Number(cell.x))
  const y = Math.floor(Number(cell.y))
  const z = Math.floor(Number(cell.z))
  if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) return null
  return { x, y, z }
}

function distXZ (a, b) {
  const dx = a.x - b.x
  const dz = a.z - b.z
  return Math.sqrt(dx * dx + dz * dz)
}

/**
 * Record a walk intent for `cell` owned by `bot`. Pure: returns a NEW array
 * (the input is never mutated), prunes dead entries first, REPLACES the
 * recording bot's own live intents for the same cell (one truthful intent
 * per bot per cell - a retry re-walk speaks once), then appends. A foreign
 * bot's intent on the same cell is KEPT (the board is the picture of
 * reality: several walks may genuinely overlap). Junk-tolerant: a junk
 * cell or a non-array input returns a usable array.
 * @param {Array<{x:number,y:number,z:number,bot:string,at:number,ttl:number}>} [entries] the shared board (may be junk)
 * @param {Vec3-like|null} cell the chest block position (floored inside)
 * @param {string|null} bot the walking bot's username
 * @param {number} now Date.now() at the commit
 * @param {object} [p]
 * @param {number} [p.ttl] entry lifetime ms (default WALK_INTENT_TTL_MS)
 * @param {number} [p.cap] max live entries (default WALK_INTENT_CAP)
 * @returns {Array} the new board
 */
export function recordWalkIntent (entries, cell, bot, now, { ttl = WALK_INTENT_TTL_MS, cap = WALK_INTENT_CAP } = {}) {
  const prev = Array.isArray(entries) ? entries : []
  const t = Number.isFinite(now) ? now : 0
  const life = Number.isFinite(ttl) && ttl >= 0 ? ttl : WALK_INTENT_TTL_MS
  const keep = Number.isFinite(cap) && cap > 0 ? Math.floor(cap) : WALK_INTENT_CAP
  const f = floorCell(cell)
  const owner = typeof bot === 'string' ? bot : (bot == null ? '' : String(bot))
  // the prune: dead entries leave, the bot's own live intents for THIS cell
  // are replaced (one truthful intent per bot per cell - the retry's voice)
  const fresh = prev.filter(e => {
    if (!e || !Number.isFinite(e.at)) return false
    const eLife = Number.isFinite(e.ttl) && e.ttl >= 0 ? e.ttl : life
    if (t - e.at >= eLife) return false
    if (f && e.x === f.x && e.y === f.y && e.z === f.z && e.bot === owner) return false
    return true
  })
  if (!f) return fresh
  fresh.push({ x: f.x, y: f.y, z: f.z, bot: owner, at: t, ttl: life })
  return fresh.length > keep ? fresh.slice(fresh.length - keep) : fresh
}

/**
 * Is there a LIVE intent on this cell from a bot OTHER than `excludeBot`?
 * Pure. Junk-safe: a junk cell, a junk board or a junk now reads as no hit
 * (a chest must never be skipped on garbage - the skip costs the deposit,
 * the hop only costs CPU; the nopath.mjs junk law verbatim). The owner's
 * own intent NEVER blocks the owner (the retry loop must re-walk freely).
 * @param {Array} [entries] the shared board
 * @param {Vec3-like|null} cell the chest block position
 * @param {number} now Date.now()
 * @param {object} [p]
 * @param {number} [p.ttl] entry lifetime ms (default WALK_INTENT_TTL_MS)
 * @param {number} [p.radius] XZ hit radius blocks (default WALK_INTENT_RADIUS)
 * @param {number} [p.dy] Y tolerance blocks (default WALK_INTENT_DY)
 * @param {string|null} [p.excludeBot] the asking bot's username (its own intents never answer)
 * @returns {{hit: boolean, ageMs: number, bot: string|null}} ageMs is the freshest matching entry's age (0 for no hit)
 */
export function nearWalkIntent (entries, cell, now, { ttl = WALK_INTENT_TTL_MS, radius = WALK_INTENT_RADIUS, dy = WALK_INTENT_DY, excludeBot = null } = {}) {
  const miss = { hit: false, ageMs: 0, bot: null }
  const prev = Array.isArray(entries) ? entries : []
  const f = floorCell(cell)
  if (!f) return miss
  const t = Number.isFinite(now) ? now : 0
  const life = Number.isFinite(ttl) && ttl >= 0 ? ttl : WALK_INTENT_TTL_MS
  const r = Number.isFinite(radius) && radius >= 0 ? radius : WALK_INTENT_RADIUS
  const yTol = Number.isFinite(dy) && dy >= 0 ? dy : WALK_INTENT_DY
  const skip = excludeBot == null ? null : String(excludeBot)
  let best = miss
  for (const e of prev) {
    if (!e || !Number.isFinite(e.at) || !Number.isFinite(e.x) || !Number.isFinite(e.y) || !Number.isFinite(e.z)) continue
    const age = t - e.at
    const eLife = Number.isFinite(e.ttl) && e.ttl >= 0 ? e.ttl : life
    if (age < 0 || age >= eLife) continue
    if (skip != null && e.bot === skip) continue
    if (Math.abs(e.y - f.y) > yTol) continue
    if (distXZ(e, f) > r) continue
    if (!best.hit || age < best.ageMs) best = { hit: true, ageMs: age, bot: typeof e.bot === 'string' ? e.bot : null }
  }
  return best
}

/**
 * Clear `bot`'s own LIVE intents for `cell` - the walk's resolve (any exit:
 * success, refusal, throw). Pure: returns a NEW array (the input is never
 * mutated); every other bot's intents stand. Junk-tolerant: a junk cell or
 * a non-array input returns a usable array (the resolve must never throw -
 * the finally owns it).
 * @param {Array} [entries] the shared board
 * @param {Vec3-like|null} cell the chest block position (floored inside)
 * @param {string|null} bot the resolving bot's username
 * @param {number} now Date.now() (dead entries are pruned on the way out)
 * @returns {Array} the new board
 */
export function clearWalkIntent (entries, cell, bot, now) {
  const prev = Array.isArray(entries) ? entries : []
  const t = Number.isFinite(now) ? now : 0
  const f = floorCell(cell)
  const owner = typeof bot === 'string' ? bot : (bot == null ? '' : String(bot))
  return prev.filter(e => {
    if (!e || !Number.isFinite(e.at)) return false
    const eLife = Number.isFinite(e.ttl) && e.ttl >= 0 ? e.ttl : WALK_INTENT_TTL_MS
    if (t - e.at >= eLife) return false
    if (f && e.x === f.x && e.y === f.y && e.z === f.z && e.bot === owner) return false
    return true
  })
}
