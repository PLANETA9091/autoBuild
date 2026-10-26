// (v0.976.500) Map rotate decision for the bot fleet.
//
// THE PROBLEM: the WorldMap assignment's own rotation walked
// unpriced. The maptarget word (.488) prices the assignment lane's
// own COUNT - assigned = min(bots, free), the zero-clash law's own
// ceiling - but never WHICH slot the ask takes. The map's own
// nearest answer hands the head record every ask: the bot that
// finishes its walk and asks again re-takes the same nearest slot
// the fleet already walked, the free tail starves beside the head
// the walks pile onto (the assignment spread prices the INSTANT,
// the across-time never priced). THE FIX: decideMapRotate() prices
// the ask's own slot - the ring the free stock names, one ask to
// ONE word with ONE reason:
//   'rotate' - the ask rides the ring past the head (THE ROTATION
//              LAW: slot = cursor mod free - no ask re-takes a slot
//              until the ring closes, the map's own nearest-hand
//              never names this slot on its own)
//   'keep'   - the head stands (THE HEAD LAW: cursor mod free === 0
//              - the map's own nearest answer already names this
//              slot, the rotation's own silence, the keep never a
//              dead state)
//   'defer'  - the free stock dry (the maptarget word's own
//              ALL-CLAIMED defer owns that story - the rotation
//              never names a slot the stock doesn't afford)
//   'refuse' - junk input (never throws into the fleet loop)
// THE RING LAW: slot = cursor mod free - the fractional cursor
// floors first (whole asks the lane trades), negatives floor to
// zero (a lying cursor must not poison the arithmetic - the
// honesty lives in the clamp). THE FAIRNESS PIN: free consecutive
// asks touch every free slot exactly once - the ring's own period
// is the free stock itself (the spread across time the maptarget
// word's own instant spread never priced), the ringPeriod rides
// the read so the caller names the cycle's own length. THE CENSUS
// LAW: the counts the CALLER'S OWN reads (the cursor the fleet's
// own ask order - the bot's own index the runBot signature
// carries, the free the maptarget word's own arithmetic - the
// word never reads the map itself, the pure function stays pure).
// Junk inputs never throw: they return a refuse with the
// junk-input reason so a caller bug degrades into a log line, not
// a crash loop. No cap beyond the ring: the period the free stock
// names is the law's own bound, never an artificial clamp. The
// pure read mutates nothing.

// the ring's own head slot (the HEAD LAW's own unit - the map's
// own nearest answer names this slot, the rotation's own silence)
export const MAPROTATE_HEAD_SLOT = 0

/**
 * Decide which slot one bot's ask takes on the assignment ring.
 *
 * @param {object} [opts]
 * @param {number} [opts.asksCount=0] the fleet's own ask order cursor
 *                                    (the bot's own index the runBot
 *                                    signature carries - the asks
 *                                    answered before this one)
 * @param {number} [opts.freeCount=0] the free stock the maptarget
 *                                    word's own arithmetic named
 *                                    (targets minus claims, the
 *                                    caller's own read)
 * @returns {{action: 'rotate'|'keep'|'defer'|'refuse', reason: string, asks: number, free: number, slot: number, ringPeriod: number}}
 */
export function decideMapRotate (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['asksCount', 'freeCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', asks: 0, free: 0, slot: 0, ringPeriod: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const asks = Math.floor(floor0(opts.asksCount))
  const free = Math.floor(floor0(opts.freeCount))
  // the free stock dry: the maptarget word's own ALL-CLAIMED defer
  // owns that story (the claims' own hold releases the slot) - the
  // rotation never names a slot the stock doesn't afford.
  if (free < 1) {
    return { action: 'defer', reason: 'free-dry', asks, free, slot: 0, ringPeriod: 0 }
  }
  // the ring's own arithmetic: the cursor rides the free stock's own
  // ring - the head slot the map's own nearest answer already names
  // (the HEAD LAW's own keep, the rotation's honest silence), the
  // past-head slot the map's own hand never names (the ROTATION
  // LAW's own body). The ringPeriod rides the read - the fairness
  // pin's own cycle length, the free stock itself.
  const slot = asks % free
  if (slot === MAPROTATE_HEAD_SLOT) {
    return { action: 'keep', reason: 'head-stands', asks, free, slot, ringPeriod: free }
  }
  return {
    action: 'rotate',
    reason: 'ring-rotates',
    asks,
    free,
    slot,
    ringPeriod: free
  }
}
