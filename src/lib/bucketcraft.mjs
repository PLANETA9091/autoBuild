// (v0.976.436) Bucket craft decision for the bot fleet.
//
// THE PROBLEM: the shearscraft word prices the shepherd lane's own hands
// (2 iron -> 1 shears, v0.976.435), the shieldcraft word the defense leg
// (v0.976.428) - but the iron's own CARRY consumer never priced: a bot
// iron-rich (>= 3 ingots) and bucket-poor walks past every pond, lava
// pool and milk cow while the ingots it already carries ARE the carrier
// (3 iron ingots -> 1 bucket, vanilla). The bucket is the water-carry
// leg the pocket already affords - the drown contexts the filter prices,
// the farm lane the arms machine tends. THE FIX: decideBucketCraft()
// prices the CARRY POVERTY - one pocket map to ONE craft word with ONE
// reason:
//   'keep'   - a bucket already held (the carry lane owns that story)
//   'craft'  - iron >= 3 (the crafts the pocket affords, the honest yield)
//   'defer'  - iron short of one craft (the honest shortage)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the iron consumers are separate lanes - the toolcraft
// lane (the pick itself), the armorcraft lane (the armor economy
// v0.976.420), the shield lane (the defense leg v0.976.428), the shears
// lane (the shepherd leg v0.976.435), this word's carry leg - a bot
// holding spare iron it does not want still earns its bucket if the iron
// affords it, no other lane's face gates here. THE BUCKET FAMILY LAW:
// the empty bucket and every filled bucket (water, lava, milk, powder
// snow, the fish buckets) ARE the carry lane's own story - the census
// rides its own family (exact 'bucket' + every *_bucket), the census
// never splits. Junk inputs never throw: they return a refuse with the
// junk-input reason so a caller bug degrades into a log line, not a
// crash loop. Negative counts floor to zero (a lying census must not
// poison the arithmetic); they are read, not refused - the honesty
// lives in the clamp. No cap: an iron-rich pocket prices every bucket
// craft it affords, an honest longer yield never clamped. The pure read
// mutates nothing.

// the vanilla iron cost one bucket craft carries (3 iron -> 1 bucket)
export const BUCKETCRAFT_IRON_PER_CRAFT = 3
// the vanilla bucket yield one bucket craft produces
export const BUCKETCRAFT_BUCKETS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a bucket craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.bucketCount=0] the bucket family on hand (empty +
 *                                      filled, the caller's census never
 *                                      splits)
 * @param {number} [opts.ironIngotCount=0] iron ingots on hand
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, bucketsYield: number, ironSurplus: number, cost: number}}
 */
export function decideBucketCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['bucketCount', 'ironIngotCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, bucketsYield: 0, ironSurplus: 0, cost: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const buckets = floor0(opts.bucketCount)
  const iron = floor0(opts.ironIngotCount)
  // a bucket already held: the carry lane's own story - the arms machine
  // prices the carrying, the bucket economy stays silent (the pieces-held
  // law's twin, the craft family's own keep gate).
  if (buckets >= 1) {
    return { action: 'keep', reason: 'bucket-held', crafts: 0, bucketsYield: 0, ironSurplus: iron, cost: 0 }
  }
  // the pocket's own arithmetic: every three ingots price their bucket
  // honestly, the caller picks how many buckets the carry lane needs -
  // the word never rounds the yield into a lie and never caps the pocket.
  if (iron >= BUCKETCRAFT_IRON_PER_CRAFT) {
    const crafts = Math.floor(iron / BUCKETCRAFT_IRON_PER_CRAFT)
    return {
      action: 'craft',
      reason: 'iron-affordable',
      crafts,
      bucketsYield: crafts * BUCKETCRAFT_BUCKETS_PER_CRAFT,
      ironSurplus: iron % BUCKETCRAFT_IRON_PER_CRAFT,
      cost: BUCKETCRAFT_IRON_PER_CRAFT
    }
  }
  // iron-poor and bucket-poor: the honest shortage names the one craft's
  // own floor price - the smelt trip the caller re-tasks to, never a
  // guessed craft
  return { action: 'defer', reason: 'iron-short', crafts: 0, bucketsYield: 0, ironSurplus: iron, cost: BUCKETCRAFT_IRON_PER_CRAFT }
}
