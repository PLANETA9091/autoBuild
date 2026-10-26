// (v0.976.486) Geode trip decision for the bot fleet.
//
// THE PROBLEM: the amethyst economy priced TWO demand legs - the
// spyglass word (v0.976.457, 2 shards + 1 glass -> 1 spyglass, the
// watch lane's own instrument) and the tintedglass word (v0.976.458,
// 4 shards + 1 glass -> 2 tinted glass, the light's own block) -
// while the lane's own SUPPLY walked unpriced: BOTH words defer
// shard-short to the same named story "the geode trip owns that
// story" - and THE GEODE IS THE SHARD'S OWN GROVE (one mature
// amethyst cluster breaks into FOUR shards, vanilla - no craft grid,
// no fuel, the geode's own even hand). THE NAMING CHAIN CLOSED: the
// spyglass word named the trip, the tintedglass word named it again
// - this word PRICES the walk the two consumers both awaited (the
// shard the geode's own child). THE FIX: decideGeodeTrip() prices
// the SUPPLY LANE - one pocket-and-geode map to ONE word with ONE
// reason:
//   'keep'   - no cluster in reach (THE GEODE-EMPTY GATE: the
//              endportal word's own FRAME GATE's twin, the orchard
//              word's own GROVE LAW's reading - the gate reads
//              first, no geode = no trip regardless of the pocket;
//              the deep-slate either stands in reach or the cave
//              story owes it, the word never guesses which)
//   'defer'  - the pick leg starves (THE PICK-SHORT LAW: the defer
//              names the toolcraft word's own mint - a qualifying
//              pick the pocket's own coin, 3 head + 2 sticks the
//              mint's own price; the trip the mint's own child)
//   'break'  - both legs afford (every mature cluster in reach
//              earns its own break - no cap, the orchard word's own
//              reading's supply twin)
//   'refuse' - junk input (never throws into the fleet loop)
// THE CLUSTER LAW: one mature cluster breaks into FOUR shards -
// vanilla's own deterministic even hand (the family's first
// deterministic world-drop multiplier: the orchard word's own leaf
// the DICE decides, the cluster the HAND's own four - the honest
// opposite named; the FORTUNE the enchant's own dice named never
// priced here, the word prices the PLAIN HAND only; the SILK TOUCH
// the collector's own form - the cluster kept whole - named never
// adopted). THE TIER LAW: vanilla drops NOTHING from a cluster
// broken below iron - the qualifying ladder the caller's own item
// census sums ('iron_pickaxe', 'diamond_pickaxe',
// 'netherite_pickaxe' - the GOLDEN the harvest-zero lie never
// adopted, golden mines at the wooden level; the STONE and the
// WOODEN the too-soft tiers never adopted; the mixed-tier
// durability the tiers' own numbers - 250, 1561, 2031 - never
// averaged into a lie, the WORN pick the toolcare word's own swap
// story named never priced here: the qualifying pick GATES the
// trip, it never multiplies it). THE CENSUS LAW: the cluster the
// CALLER'S OWN BLOCK CENSUS over 'amethyst_cluster' (the MATURE
// form only - the SMALL and the MEDIUM and the LARGE amethyst buds
// the young forms drop nothing, never adopted; the BUDDING
// AMETHYST the mother block never breaks, never counted - the
// geode's own heart the world grows from, never a pocket item).
// Junk inputs never throw: they return a refuse with the
// junk-input reason so a caller bug degrades into a log line, not
// a crash loop. Negative counts floor to zero (a lying census must
// not poison the arithmetic); they are read, not refused - the
// honesty lives in the clamp. No cap: a geode-rich pocket prices
// every break it affords, an honest longer census never clamped.
// Fractional counts floor honestly with the remainder named. The
// pure read mutates nothing.

// the vanilla shard yield one mature cluster breaks into (the
// geode's own even hand - the deterministic four, fortune named
// never priced)
export const GEODE_SHARDS_PER_CLUSTER = 4
// the vanilla cluster price one break carries (the even hand's own
// one-to-one - every cluster earns its own break)
export const GEODE_CLUSTERS_PER_BREAK = 1

/**
 * Decide whether one bot's pocket earns a geode trip word.
 *
 * @param {object} [opts]
 * @param {number} [opts.clustersCount=0]  mature amethyst clusters in
 *                                         reach (the caller's own
 *                                         block census over
 *                                         'amethyst_cluster' - the
 *                                         geode's own stock the world
 *                                         holds; the buds and the
 *                                         budding mother never
 *                                         adopted)
 * @param {number} [opts.picksCount=0]     qualifying picks on hand
 *                                         (the caller's census over
 *                                         the iron-and-above ladder -
 *                                         iron, diamond, netherite
 *                                         summed; the golden and the
 *                                         stone and the wooden the
 *                                         harvest-zero lies never
 *                                         adopted)
 * @returns {{action: 'break'|'defer'|'keep'|'refuse', reason: string, breaks: number, shardsYield: number, clustersLeft: number}}
 */
export function decideGeodeTrip (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['clustersCount', 'picksCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', breaks: 0, shardsYield: 0, clustersLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const clusters = floor0(opts.clustersCount)
  const picks = floor0(opts.picksCount)
  // the geode-empty gate reads first: no cluster = no trip regardless
  // of the pocket (the FRAME GATE's twin - the word never guesses
  // which the cave story owes).
  if (clusters < GEODE_CLUSTERS_PER_BREAK) {
    return { action: 'keep', reason: 'geode-empty', breaks: 0, shardsYield: 0, clustersLeft: clusters }
  }
  // the pick leg starves: the honest shortage names the toolcraft
  // word's own mint (a qualifying pick the pocket's own coin - 3
  // head + 2 sticks the mint's own price; the trip the mint's own
  // child).
  if (picks < 1) {
    return { action: 'defer', reason: 'pick-short', breaks: 0, shardsYield: 0, clustersLeft: clusters }
  }
  // the geode's own arithmetic: every mature cluster in reach earns
  // its own break honestly - the CLUSTER LAW's own four per break,
  // the word never rounds the census into a lie and never caps the
  // geode (the fortune's own dice named never priced).
  const breaks = Math.floor(clusters / GEODE_CLUSTERS_PER_BREAK)
  return {
    action: 'break',
    reason: 'clusters-and-pick-afford',
    breaks,
    shardsYield: breaks * GEODE_SHARDS_PER_CLUSTER,
    clustersLeft: clusters - breaks * GEODE_CLUSTERS_PER_BREAK
  }
}
