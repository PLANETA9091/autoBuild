// (v0.433.0) THE HOUND-PRESENCE LENS - the drowned-hound census's blind side
// cured (the deathsweep v0.389.0 lesson: one parser per emitter, the honest
// sweep). The v0.371.0 census read exactly two surfaces - the WET flee line
// ('combat: flee toward shore (...) vs drowned (proximity)') and the hound-won
// death ('death: drowned-kill context') - and eight faces of 'hound absent'
// were read off those rows. The held logs prove the read blind, not the hound
// gone: face 27 (36870593766) carries FOUR answer moments vs drowned - F10
// sheltered and fled one on DRY land, F9 and F14 fought and KILLED theirs
// ('fight ended vs drowned (mob down ... weapon wooden_sword ...)') - while
// every legacy hound row printed zero. The hound's dry flee, the
// stand-and-fight, the shelter try, the fleet's wins and the cornered
// no-verified-shore flee (v0.243.0's own class) rode invisible. The combat
// layer already prints its whole anatomy on every engagement; this module is
// the pure parser (the shootercensus v0.390.0 shape), the decompose is the
// field read. Mining-surface only: zero fleet wiring, zero new log lines - the
// v0.379.0 precedent.
//
// THE BUCKETS (one primary bucket per line, first match wins):
//   fight       'combat: fighting drowned (dist ...)' - the stand-and-fight answer
//   fleeDry     'combat: fleeing drowned (dist ...)' - the dry flee (the v0.373.0
//               dry-shore arena - the hound chased the flee ashore)
//   shelter     'combat: shelter try vs drowned' / 'shelter ring try' /
//               'sheltering from drowned' - the seal answer
//   fleeShore   'combat: flee toward shore (...) vs drowned (...)' - the wet
//               flee, ANY reason suffix; fleeShorePlain keeps the v0.371.0
//               row's exact '(proximity)' count and the delta names the blind
//               share (sentry / re-verdict flees never counted)
//   shoreNoCell 'combat: aquatic flee: no verified shore cell - bearing the
//               nearest shore (...) vs drowned (...)' - the cornered wet flee
//   other       anchored combat lines mentioning drowned matching none of the
//               above - the escape hatch: visible, counted, sampled (the
//               honest-sweep law - never silently dropped)
// presence = fight + fleeDry + shelter + fleeShore + shoreNoCell + other - the
// ANSWER moments (line counts, the legacy census's own semantics; a
// re-engaged hound re-counts - the pressure IS the signal).
// The episode's OTHER lines carry their own rows and never enter presence:
//   fightsWon      'fight ended vs drowned (mob down, ...)' - the fleet WON
//   fightEndsOther the other fight exits (deadline / threat gone / chase
//                  ceiling / verdict ignore / bot down)
//   fleeHops       the flee waypoints ('flee ladder', 'flee bearing rotated',
//                  'flee kite hop') vs drowned - one episode prints several
//   verdictFlips   'verdict flipped to flee vs drowned (hp ...)'
//   reVerdicts     the re-engage suffix '(proximity|sentry re-verdict)' -
//                  CROSS-CUTTING: it rides any answer form (a shore flee or a
//                  sheltering can each carry it), so it counts beside whatever
//                  bucket owned the line; the v0.371.0 row's exact
//                  'proximity' shape stays in decompose untouched
// The death side (the outcomes):
//   kills          'death: drowned-kill context' - the hound won
//   killsDryShore / killsInWater / killsWaterline - the v0.262.0 arena
//                  classes (the decompose v0.373.0 row printed two of the
//                  three; the sum may trail kills only on a junk class)
//   drownContexts  'death: drown context' - the water did it (NOT the hound;
//                  face 27's three drown deaths are o2-reset rows here, the
//                  hound never touched them)
// Junk-safe: non-string rows judge nothing (the v0.358.0 lesson). The combat
// buckets anchor on the fleet's double-tag anatomy (^F\\d+ \\[F\\d+\\] combat:)
// - the substring-pollution class the 1030 fire named ('hound census
// polluted by the fleet-wide substring') never matches. Pure: reads, never
// mutates, never fabricates.

// The fleet's combat-line anatomy: name [tag] then the combat payload.
const ANCHOR_RE = /^F\d+ \[F\d+\] combat: /
// The death-context anatomy (the deathsweep's own double-tag law).
const DEATH_ANCHOR_RE = /^F\d+ \[F\d+\] death: /

const FIGHT_RE = /^F\d+ \[F\d+\] combat: fighting drowned \(/
const FLEE_DRY_RE = /^F\d+ \[F\d+\] combat: fleeing drowned \(/
const SHELTER_RE = /^F\d+ \[F\d+\] combat: (?:shelter (?:ring )?try vs drowned \(|sheltering from drowned \()/
const FLEE_SHORE_RE = /^F\d+ \[F\d+\] combat: flee toward shore \([0-9,-]+ step [0-9]+\) vs drowned \(/
// The v0.371.0 row's exact shape - the plain-proximity suffix only.
const FLEE_SHORE_PLAIN_RE = /combat: flee toward shore \([0-9,-]+ step [0-9]+\) vs drowned \(proximity\)/
const SHORE_NO_CELL_RE = /^F\d+ \[F\d+\] combat: aquatic flee: no verified shore cell - bearing the nearest shore \([0-9,-]+\) vs drowned \(/
const FIGHT_END_RE = /^F\d+ \[F\d+\] combat: fight ended vs drowned \(/
const MOB_DOWN_RE = /^F\d+ \[F\d+\] combat: fight ended vs drowned \(mob down,/
const FLEE_HOP_RE = /^F\d+ \[F\d+\] combat: flee (?:ladder|bearing rotated|kite hop) .*vs drowned \(/
const VERDICT_FLIP_RE = /^F\d+ \[F\d+\] combat: verdict flipped to flee vs drowned \(/
const REVERDICT_RE = /[,\(] ?(?:proximity|sentry) re-verdict\)/
// The hatch's net: any anchored combat line that names the hound at all
// ('vs drowned (...)', 'drowned@4.9' in a shelter-skip's threat read).
const DROWNED_MENTION_RE = /\bdrowned\b/

// (v0.731.0) the arenas' own bytes exported - the one-parser law by reuse
// (the o2gap grammar import precedent): the release toll's join rides the
// hound's own bytes, never a fork. The ANCHORED kill shape leads the join
// (the census's own killsDryShore alignment): a prose sample quoting the
// arena ('   ~ F12 ... drowned-kill context (dry-shore') fails the anchor
// and never counts.
export const KILL_RE = /^F\d+ \[F\d+\] death: drowned-kill context \(/i
export const KILL_DRY_SHORE_RE = /drowned-kill context \(dry-shore/
const KILL_IN_WATER_RE = /drowned-kill context \(in-water/
const KILL_WATERLINE_RE = /drowned-kill context \(waterline/
const DROWN_CTX_RE = /^F\d+ \[F\d+\] death: drown context \(/

const HATCH_SAMPLES_MAX = 5

/**
 * The hound-presence census over a whole face log (pure; the decompose field
 * read). Accepts an array of lines or a raw text blob (split on newline).
 * @param {string[]|string} [lines] the face log
 * @returns {{presence: number, fight: number, fleeDry: number, shelter: number, fleeShore: number, fleeShorePlain: number, shoreNoCell: number, other: number, fightsWon: number, fightEndsOther: number, fleeHops: number, verdictFlips: number, reVerdicts: number, kills: number, killsDryShore: number, killsInWater: number, killsWaterline: number, drownContexts: number, presenceByBot: Object<string,number>, fightsWonByBot: Object<string,number>, killsByBot: Object<string,number>, otherSamples: string[]}}
 */
export function houndCensus (lines) {
  const rows = Array.isArray(lines)
    ? lines.filter((l) => typeof l === 'string')
    : (typeof lines === 'string' ? lines.split('\n').filter((l) => typeof l === 'string') : [])
  const c = {
    presence: 0,
    fight: 0,
    fleeDry: 0,
    shelter: 0,
    fleeShore: 0,
    fleeShorePlain: 0,
    shoreNoCell: 0,
    other: 0,
    fightsWon: 0,
    fightEndsOther: 0,
    fleeHops: 0,
    verdictFlips: 0,
    reVerdicts: 0,
    kills: 0,
    killsDryShore: 0,
    killsInWater: 0,
    killsWaterline: 0,
    drownContexts: 0,
    presenceByBot: {},
    fightsWonByBot: {},
    killsByBot: {},
    otherSamples: []
  }
  const botOf = (l) => {
    const m = l.match(/^(F\d+)\b/)
    return m ? m[1] : null
  }
  const bump = (map, bot) => {
    if (bot) map[bot] = (map[bot] || 0) + 1
  }
  for (const l of rows) {
    // The death side rides its own anatomy first (a kill context is never a
    // combat line; the o2-reset drown deaths stay OUT of the hound's counts).
    if (DEATH_ANCHOR_RE.test(l)) {
      if (KILL_RE.test(l)) {
        c.kills++
        const bot = botOf(l)
        bump(c.killsByBot, bot)
        if (KILL_DRY_SHORE_RE.test(l)) c.killsDryShore++
        else if (KILL_IN_WATER_RE.test(l)) c.killsInWater++
        else if (KILL_WATERLINE_RE.test(l)) c.killsWaterline++
      } else if (DROWN_CTX_RE.test(l)) {
        c.drownContexts++
      }
      continue
    }
    if (!ANCHOR_RE.test(l)) continue
    const bot = botOf(l)
    // The re-engaged hound is cross-cutting: the suffix rides any answer form.
    if (DROWNED_MENTION_RE.test(l) && REVERDICT_RE.test(l)) c.reVerdicts++
    if (FIGHT_RE.test(l)) {
      c.fight++
      c.presence++
      bump(c.presenceByBot, bot)
      continue
    }
    if (FLEE_DRY_RE.test(l)) {
      c.fleeDry++
      c.presence++
      bump(c.presenceByBot, bot)
      continue
    }
    if (SHELTER_RE.test(l)) {
      c.shelter++
      c.presence++
      bump(c.presenceByBot, bot)
      continue
    }
    if (FLEE_SHORE_RE.test(l)) {
      c.fleeShore++
      if (FLEE_SHORE_PLAIN_RE.test(l)) c.fleeShorePlain++
      c.presence++
      bump(c.presenceByBot, bot)
      continue
    }
    if (SHORE_NO_CELL_RE.test(l)) {
      c.shoreNoCell++
      c.presence++
      bump(c.presenceByBot, bot)
      continue
    }
    if (FIGHT_END_RE.test(l)) {
      if (MOB_DOWN_RE.test(l)) {
        c.fightsWon++
        bump(c.fightsWonByBot, bot)
      } else {
        c.fightEndsOther++
      }
      continue
    }
    if (VERDICT_FLIP_RE.test(l)) {
      c.verdictFlips++
      continue
    }
    if (FLEE_HOP_RE.test(l)) {
      c.fleeHops++
      continue
    }
    // The escape hatch: an anchored combat line that names the hound in a
    // form the vocabulary does not know - visible, counted, sampled.
    if (DROWNED_MENTION_RE.test(l)) {
      c.other++
      c.presence++
      bump(c.presenceByBot, bot)
      if (c.otherSamples.length < HATCH_SAMPLES_MAX) c.otherSamples.push(l)
    }
  }
  return c
}

// (v0.791.0) THE HOUND KILL'S OWN ARENA - WHICH arena class owns the hound's
// own kill book. The census row named the arenas' counts ('hound kills (the
// hound won): 7 (dry-shore 5 / in-water 2 / waterline 0)' - face 81's own
// read: the hound speared FIVE bots on DRY land) while the WHO rode raw: no
// row ever said WHICH arena's own kills own the hound book. THE SEAT LAW
// (the census's own arena cells only, zero re-parsing - the v0.784.0
// kind-seat precedent, the v0.788.0 attacker seat's own shape): the
// strict-majority law - a solo arena owns the hound book only above half (a
// tie owns nothing); the arena mass is the arena cells' own sum (a junk
// class may trail the kills counter - the census's own counting law, the
// cell keeps its own book); junk never invents an arena (a missing or
// non-object census, a non-finite or non-positive cell, or no counted arena
// reads the honest silence - null, the decompose's own guard skips the row).
function houndArenaTally (census) {
  if (!census || typeof census !== 'object' || Array.isArray(census)) return null
  const cells = {
    'dry-shore': census.killsDryShore,
    'in-water': census.killsInWater,
    waterline: census.killsWaterline
  }
  const tallies = {}
  let total = 0
  for (const [arena, n] of Object.entries(cells)) {
    if (!Number.isFinite(n) || n <= 0) continue
    total += n
    tallies[arena] = (tallies[arena] || 0) + n
  }
  return total > 0 ? { tallies, total } : null
}

export function houndArenaSeat (census) {
  const t = houndArenaTally(census)
  if (!t) return null
  let topOwns = 0
  let topArena = null
  for (const [arena, n] of Object.entries(t.tallies)) {
    if (n > topOwns) { topOwns = n; topArena = arena }
  }
  if (topArena === null || topOwns <= t.total - topOwns) return null
  return { arena: topArena, owns: topOwns, ofKills: t.total, shareOfKills: +(topOwns / t.total).toFixed(3) }
}

// (v0.791.0) the arena seat's own row - THE ARENA'S OWN SEAT: the seat names
// WHICH arena owns the hound book; the arena's own front prices the cure
// (a dry-shore book is the shore protocol's own leak - the hound chased the
// flee ashore and won on LAND; an in-water book the swim's). Junk never
// prints a seat (the honest silence's own row law).
export function houndArenaSeatRow (seat) {
  if (!seat || typeof seat !== 'object') return null
  const { arena, owns, ofKills, shareOfKills } = seat
  if (typeof arena !== 'string' || !arena ||
      !Number.isFinite(owns) || owns <= 0 ||
      !Number.isFinite(ofKills) || ofKills <= 0 || owns > ofKills ||
      !Number.isFinite(shareOfKills)) return null
  return `the hound kill's own arena (v0.791.0): ${arena} owns ${owns} of ${ofKills} hound kill(s) (${(shareOfKills * 100).toFixed(1)}%) - THE ARENA'S OWN SEAT: one arena's own kills own the hound book - the arena's own front prices the deaths the raw split rode unnamed`
}

// (v0.791.0) THE HOUND KILL'S OWN ARENA RIDERS - the arena seat's own
// silence's companion. The seat names the solo arena under the
// strict-majority law; a no-majority arena mix rode raw with no row naming
// the shape. THE RIDER LAW (the census's own arena cells only, zero
// re-parsing - the seat's own precedent): a MEASURE, never a verdict-owner
// - the top two arenas' concentration prices the shape the solo law refused
// to name (the seat's owner case leaves the companion unprinted - the
// decompose's own branch law). Junk never invents a shape: a missing or
// non-object census, a non-finite or non-positive cell, or fewer than two
// counted arenas reads the honest silence (null). The order is
// deterministic (count desc, then the arena's own byte: 'dry-shore' <
// 'in-water' < 'waterline').
export function houndArenaRiders (census) {
  const t = houndArenaTally(census)
  if (!t) return null
  const ranked = Object.entries(t.tallies).sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1))
  if (ranked.length < 2) return null
  const [leader, leaderOwns] = ranked[0]
  const [runner, runnerOwns] = ranked[1]
  const pairOwns = leaderOwns + runnerOwns
  return { leader, leaderOwns, runner, runnerOwns, ofKills: t.total, pairOwns, shareOfKills: +(pairOwns / t.total).toFixed(3), duet: leaderOwns === runnerOwns }
}

// (v0.791.0) the arena riders' own row - THE ARENA'S OWN MIX: a measure of
// the shape, never a named owner (the seat's tie law holds); the pair
// prices the concentration the solo law refused to seat. Junk never prints
// a shape (the honest silence's own row law).
export function houndArenaRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, ofKills, pairOwns, shareOfKills } = r
  if (typeof leader !== 'string' || !leader || typeof runner !== 'string' || !runner ||
      !Number.isFinite(leaderOwns) || leaderOwns <= 0 || !Number.isFinite(runnerOwns) || runnerOwns <= 0 ||
      !Number.isFinite(ofKills) || ofKills <= 0 || !Number.isFinite(pairOwns) || pairOwns > ofKills ||
      !Number.isFinite(shareOfKills)) return null
  return `the hound kill's own arena riders (v0.791.0): no solo arena owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofKills} hound kill(s) (${(shareOfKills * 100).toFixed(1)}%) - THE ARENA'S OWN MIX: the seat's tie law held, the mix is the shape - the hound's own grounds price the arenas the solo law refused to name`
}

// (v0.925.0) THE ANSWER'S OWN SEAT - WHICH answer class owns the hound
// presence book. The hound book's own seats: the v0.791.0 arena named
// WHICH arena owns the KILL book - the presence book (the ANSWER moments:
// the pressure's own touches priced raw since v0.433.0) never rode a
// seat. Face 195's own split rode raw beside the arena's seat: 'fight 15 /
// flee-dry 3 / shelter 5 / flee-shore 1 / other 15' - the answer's own
// front sat unnamed (the fleet split its book evenly between real fights
// and the escape hatch's unclassified answers - the "other"'s own anatomy
// rides the verbatim samples).
//
// THE BILL LAW (the census's own presence cells, zero re-parsing - the
// v0.791.0 arena's own precedent, the class instead of the arena): the
// fold reads ONLY the six presence classes - fight, fleeDry, shelter,
// fleeShore, shoreNoCell, other (the census's own keys, the v0.433.0
// emitter's own vocabulary, never forked). fleeShorePlain never joins:
// it is fleeShore's own skin detail (the legacy-plain subset), not a
// class - a second count would recurse the defect. The episode's other
// books (fightsWon, fightEndsOther, fleeHops, verdictFlips, reVerdicts)
// carry their own rows and never enter presence (the census's own
// population law).
//
// THE STRICT-MAJORITY LAW: the top class owns the answer book only above
// half; a tie owns nothing (the honest null - the spread needs the
// riders, not a named owner; the storm-has-no-seat precedent; face 195's
// own book was the tie's field witness: fight 15 = other 15 of 39). The
// byte order decides the scan (the class's own bytes).
//
// THE RIDERS - the seat's own silence's companion (the v0.791.0 riders'
// own shape, the v0.919.0 branch law's own fence): a MEASURE, never a
// verdict-owner - the top two classes' own concentration prices the shape
// the solo law refused to name. THE BRANCH LAW (never both): the riders
// speak only when the solo class rode silent (the fence lives in the lib
// - the seat's own law re-judged here, a second seat would recurse the
// defect). THE BYTE LAW: counts desc, then the class's own byte asc.
//
// Junk never invents a book: a non-object census, a non-finite or
// non-positive cell (skipped - the real cells still tally), or a
// zero-sum book reads the honest silence (null).
//
// Pure: reads, never mutates. Zero fleet wiring, zero new log lines -
// the row rides decompose beside the v0.433.0 presence print (read-time
// tooling only, the CENSUS GUARD law).

// The six presence classes - the ANSWER moments (the census's own keys
// and the decompose print's own display bytes, zero re-parsing).
const ANSWER_CLASSES = [
  { key: 'fight', label: 'fight' },
  { key: 'fleeDry', label: 'flee-dry' },
  { key: 'shelter', label: 'shelter' },
  { key: 'fleeShore', label: 'flee-shore' },
  { key: 'shoreNoCell', label: 'shore-no-cell' },
  { key: 'other', label: 'other' }
]

const answerTally = (census) => {
  if (!census || typeof census !== 'object' || Array.isArray(census)) return null
  const tallies = {}
  let total = 0
  for (const { key, label } of ANSWER_CLASSES) {
    const n = census[key]
    if (!Number.isFinite(n) || n <= 0) continue
    tallies[key] = { n, label }
    total += n
  }
  if (total <= 0) return null
  return { tallies, total }
}

// (v0.925.0) the answer book's own seat - the strict-majority law's
// verdict: the top class owns the answer book only above half; a tie
// owns nothing. The byte order decides the scan (the class's own bytes).
export function houndAnswerSeat (census) {
  const t = answerTally(census)
  if (!t) return null
  let topOwns = 0
  let topKey = null
  for (const key of Object.keys(t.tallies).sort()) {
    const n = t.tallies[key].n
    if (n > topOwns) { topOwns = n; topKey = key }
  }
  if (topKey === null || topOwns <= t.total - topOwns) return null
  return { cls: t.tallies[topKey].label, owns: topOwns, ofMoments: t.total, shareOfMoments: +(topOwns / t.total).toFixed(3) }
}

// (v0.925.0) the answer book's own riders - the seat's own silence's
// companion: a measure, never a verdict-owner. THE BRANCH LAW (never
// both): the riders speak only when the solo class rode silent - the
// seat's own law re-judged here (the v0.919.0 crowd's own fence shape).
// Fewer than two counted classes reads the honest silence (the solo face
// is the seat's own).
export function houndAnswerRiders (census) {
  const t = answerTally(census)
  if (!t) return null
  const ranked = Object.entries(t.tallies)
    .map(([key, cell]) => ({ key, label: cell.label, n: cell.n }))
    .sort((a, b) => b.n - a.n || (a.key < b.key ? -1 : 1))
  const leader = ranked[0]
  if (leader.n > t.total - leader.n) return null // the branch law: the solo row owns the owner's face
  if (ranked.length < 2) return null // the solo face is the seat's own (the belt-and-suspenders fence)
  const runner = ranked[1]
  const pairOwns = leader.n + runner.n
  return { leader: leader.label, leaderOwns: leader.n, runner: runner.label, runnerOwns: runner.n, pairOwns, ofMoments: t.total, shareOfMoments: +(pairOwns / t.total).toFixed(3), duet: leader.n === runner.n }
}

// (v0.925.0) the answer seat's own row - THE ANSWER'S OWN SEAT: one
// answer's own moments own the hound book. Junk never prints a row (the
// honest silence's own row law): every field is guarded before the
// template speaks.
export function houndAnswerSeatRow (seat) {
  if (!seat || typeof seat !== 'object') return null
  const { cls, owns, ofMoments, shareOfMoments } = seat
  if (typeof cls !== 'string' || !cls ||
      !Number.isFinite(owns) || owns <= 0 ||
      !Number.isFinite(ofMoments) || ofMoments <= 0 || owns > ofMoments ||
      !Number.isFinite(shareOfMoments)) return null
  return `the answer book's own class (v0.925.0): ${cls} owns ${owns} of ${ofMoments} answer moment(s) (${(shareOfMoments * 100).toFixed(1)}%) - THE ANSWER'S OWN SEAT: one answer's own moments own the hound book - the class's own front prices the pressure the raw split rode unnamed`
}

// (v0.925.0) the answer riders' own row - THE ANSWER'S OWN MIX: a measure
// of the answers' own shape, never a named owner (the seat's tie law
// holds). Junk never prints a shape (the honest silence's own row law).
export function houndAnswerRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, pairOwns, ofMoments, shareOfMoments } = r
  if (typeof leader !== 'string' || !leader || typeof runner !== 'string' || !runner ||
      !Number.isFinite(leaderOwns) || leaderOwns <= 0 || !Number.isFinite(runnerOwns) || runnerOwns <= 0 ||
      !Number.isFinite(ofMoments) || ofMoments <= 0 ||
      !Number.isFinite(pairOwns) || pairOwns > ofMoments ||
      !Number.isFinite(shareOfMoments)) return null
  return `the answer book's own riders (v0.925.0): no solo answer owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofMoments} answer moment(s) (${(shareOfMoments * 100).toFixed(1)}%) - THE ANSWER'S OWN MIX: the seat's tie law held, the answers are the shape - the classes' own spread prices the pressure the solo law refused to seat`
}

// (v0.926.0) THE PREY'S OWN SEAT - WHICH bot owns the hound's kill book.
// The kill book's own seats: the v0.791.0 arena named WHICH ARENA owns the
// book - the WHO axis rode raw since v0.433.0 ('drowned-kill per-bot:
// F18=6 F15=3 F13=3 ...' - face 196's own print: eighteen kills across
// nine bots and no row ever said WHOSE deaths own the book; the prey is
// the mob's own favorite meal, the whale axis of the kill book).
//
// THE BILL LAW (the census's own killsByBot cells, zero re-parsing - the
// v0.791.0 arena's own precedent, the bot instead of the arena): the fold
// reads the census's own killsByBot map verbatim - the key IS the atom
// ('F18', the decompose perBot idiom's own shape, the census's own
// emitter law, never forked).
//
// THE STRICT-MAJORITY LAW: the top bot owns the kill book only above
// half; a tie owns nothing (the honest null - the spread needs the
// riders, not a named owner; the storm-has-no-seat precedent; face 196's
// own book was the riders' field witness: F18 x6 of 18 = 33.3%, the pair
// F18 x6 + F15 x3 rode 50.0%). The byte order decides the scan (the
// bot's own bytes).
//
// THE RIDERS - the seat's own silence's companion (the v0.791.0 riders'
// own shape, the v0.919.0 branch law's own fence): a MEASURE, never a
// verdict-owner - the top two bots' own concentration prices the shape
// the solo law refused to name. THE BRANCH LAW (never both): the riders
// speak only when the solo bot rode silent (the fence lives in the lib -
// the seat's own law re-judged here, a second seat would recurse the
// defect). THE BYTE LAW: counts desc, then the bot's own byte asc.
//
// Junk never invents a book: a non-object census, a malformed bot key
// (the census's own emitter law - the tagless kills never enter the
// book, the bump's own guard), a non-finite or non-positive cell
// (skipped - the real cells still tally), or a zero-sum book reads the
// honest silence (null).
//
// Pure: reads, never mutates. Zero fleet wiring, zero new log lines -
// the row rides decompose beside the drowned-kill per-bot print
// (read-time tooling only, the CENSUS GUARD law).

// The census's own emitter law: the decompose perBot idiom's own key
// shape ('F18') - the bot's own atom, never forked.
const PREY_BOT_RE = /^F\d+$/

const preyTally = (killsByBot) => {
  if (!killsByBot || typeof killsByBot !== 'object' || Array.isArray(killsByBot)) return null
  const bots = []
  let total = 0
  for (const [bot, n] of Object.entries(killsByBot)) {
    if (typeof bot !== 'string' || !PREY_BOT_RE.test(bot)) continue
    if (!Number.isFinite(n) || n <= 0) continue
    bots.push({ bot, n })
    total += n
  }
  if (bots.length === 0 || total <= 0) return null
  return { bots, total }
}

// (v0.926.0) the kill book's own prey seat - the strict-majority law's
// verdict: the top bot owns the kill book only above half; a tie owns
// nothing. The byte order decides the scan (the bot's own bytes).
export function houndPreySeat (census) {
  const killsByBot = census && typeof census === 'object' && !Array.isArray(census) ? census.killsByBot : census
  const t = preyTally(killsByBot)
  if (!t) return null
  let topOwns = 0
  let topBot = null
  for (const { bot, n } of t.bots.slice().sort((a, b) => (a.bot < b.bot ? -1 : a.bot > b.bot ? 1 : 0))) {
    if (n > topOwns) { topOwns = n; topBot = bot }
  }
  if (topBot === null || topOwns <= t.total - topOwns) return null
  return { bot: topBot, owns: topOwns, ofKills: t.total, shareOfKills: +(topOwns / t.total).toFixed(3) }
}

// (v0.926.0) the kill book's own prey riders - the seat's own silence's
// companion: a measure, never a verdict-owner. THE BRANCH LAW (never
// both): the riders speak only when the solo bot rode silent - the
// seat's own law re-judged here (the v0.919.0 crowd's own fence shape).
// Fewer than two prey bots reads the honest silence (the solo face is
// the seat's own).
export function houndPreyRiders (census) {
  const killsByBot = census && typeof census === 'object' && !Array.isArray(census) ? census.killsByBot : census
  const t = preyTally(killsByBot)
  if (!t) return null
  const ranked = t.bots.slice().sort((a, b) => b.n - a.n || (a.bot < b.bot ? -1 : 1))
  const leader = ranked[0]
  if (leader.n > t.total - leader.n) return null // the branch law: the solo row owns the owner's face
  if (ranked.length < 2) return null // the solo face is the seat's own (the belt-and-suspenders fence)
  const runner = ranked[1]
  const pairOwns = leader.n + runner.n
  return { leader: leader.bot, leaderOwns: leader.n, runner: runner.bot, runnerOwns: runner.n, pairOwns, ofKills: t.total, shareOfKills: +(pairOwns / t.total).toFixed(3), duet: leader.n === runner.n }
}

// (v0.926.0) the prey seat's own row - THE PREY'S OWN SEAT: one bot's own
// deaths own the hound's kill book. Junk never prints a row (the honest
// silence's own row law): every field is guarded before the template
// speaks.
export function houndPreySeatRow (seat) {
  if (!seat || typeof seat !== 'object') return null
  const { bot, owns, ofKills, shareOfKills } = seat
  if (typeof bot !== 'string' || !bot ||
      !Number.isFinite(owns) || owns <= 0 ||
      !Number.isFinite(ofKills) || ofKills <= 0 || owns > ofKills ||
      !Number.isFinite(shareOfKills)) return null
  return `the kill book's own prey (v0.926.0): ${bot} owns ${owns} of ${ofKills} hound kill(s) (${(shareOfKills * 100).toFixed(1)}%) - THE PREY'S OWN SEAT: one bot's own deaths own the hound's kill book - the prey's own front prices the pressure the raw split rode unnamed`
}

// (v0.926.0) the prey riders' own row - THE PREY'S OWN MIX: a measure of
// the hunted's own shape, never a named owner (the seat's tie law holds).
// Junk never prints a shape (the honest silence's own row law).
export function houndPreyRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, pairOwns, ofKills, shareOfKills } = r
  if (typeof leader !== 'string' || !leader || typeof runner !== 'string' || !runner ||
      !Number.isFinite(leaderOwns) || leaderOwns <= 0 || !Number.isFinite(runnerOwns) || runnerOwns <= 0 ||
      !Number.isFinite(ofKills) || ofKills <= 0 ||
      !Number.isFinite(pairOwns) || pairOwns > ofKills ||
      !Number.isFinite(shareOfKills)) return null
  return `the kill book's own prey (v0.926.0): no solo bot owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofKills} hound kill(s) (${(shareOfKills * 100).toFixed(1)}%) - THE PREY'S OWN MIX: the seat's tie law held, the hunted are the shape - the bots' own deaths price the prey the solo law refused to seat`
}

// (v0.928.0) THE MAGNET'S OWN SEAT - WHICH bot owns the hound's
// presence book. The presence book's own seats: the v0.925.0 answer seat
// named WHICH CLASS owns the book - the WHO axis rode raw since v0.433.0
// ('... per-bot: F15=23 F18=17 ...' - face 196's own print: ninety answer
// moments across eight bots and no row ever said WHOSE touches own the
// book; the magnet is the pressure's own whale axis, the v0.926.0 prey
// seat's own sibling on the presence side).
//
// THE BILL LAW (the census's own presenceByBot cells, zero re-parsing -
// the v0.926.0 prey fold's own precedent, the presence book instead of
// the kill book): the fold reads the census's own presenceByBot map
// verbatim - the key IS the atom ('F15', the decompose perBot idiom's
// own shape, the census's own emitter law, never forked; the tagless
// moments never enter the book - the bump's own guard).
//
// THE STRICT-MAJORITY LAW: the top bot owns the pressure book only above
// half; a tie owns nothing (the honest null - the spread needs the
// riders, not a named owner; the storm-has-no-seat precedent; face 196's
// own book was the riders' field witness: F15 x23 of 90 = 25.6%, the pair
// F15 x23 + F13 x17 rode 44.4%). The byte order decides the scan (the
// bot's own bytes).
//
// THE RIDERS - the seat's own silence's companion (the v0.791.0 riders'
// own shape, the v0.919.0 branch law's own fence): a MEASURE, never a
// verdict-owner - the top two bots' own concentration prices the shape
// the solo law refused to name. THE BRANCH LAW (never both): the riders
// speak only when the solo bot rode silent (the fence lives in the lib -
// the seat's own law re-judged here, a second seat would recurse the
// defect). THE BYTE LAW: counts desc, then the bot's own byte asc (face
// 196's own equal pair: F13 < F18 at the 17 - the census's own insertion
// order never owns the ranking).
//
// Junk never invents a book: a non-object census, a malformed bot key
// (the census's own emitter law - the tagless moments never enter the
// book, the bump's own guard), a non-finite or non-positive cell
// (skipped - the real cells still tally), or a zero-sum book reads the
// honest silence (null).
//
// Pure: reads, never mutates. Zero fleet wiring, zero new log lines -
// the row rides decompose beside the answer seat's own block (read-time
// tooling only, the CENSUS GUARD law).

// (v0.928.0) the pressure book's own tally - the presenceByBot map's own
// fold (the census's own emitter law: the key IS the bot atom, never
// forked; the same atom shape the prey fold reads - one emitter, two
// books, zero re-parsing).
const pressureTally = (presenceByBot) => {
  if (!presenceByBot || typeof presenceByBot !== 'object' || Array.isArray(presenceByBot)) return null
  const bots = []
  let total = 0
  for (const [bot, n] of Object.entries(presenceByBot)) {
    if (typeof bot !== 'string' || !PREY_BOT_RE.test(bot)) continue
    if (!Number.isFinite(n) || n <= 0) continue
    bots.push({ bot, n })
    total += n
  }
  if (bots.length === 0 || total <= 0) return null
  return { bots, total }
}

// (v0.928.0) the pressure book's own seat - the strict-majority law's
// verdict: the top bot owns the pressure book only above half; a tie owns
// nothing. The byte order decides the scan (the bot's own bytes).
export function houndPressureSeat (census) {
  const presenceByBot = census && typeof census === 'object' && !Array.isArray(census) ? census.presenceByBot : census
  const t = pressureTally(presenceByBot)
  if (!t) return null
  let topOwns = 0
  let topBot = null
  for (const { bot, n } of t.bots.slice().sort((a, b) => (a.bot < b.bot ? -1 : a.bot > b.bot ? 1 : 0))) {
    if (n > topOwns) { topOwns = n; topBot = bot }
  }
  if (topBot === null || topOwns <= t.total - topOwns) return null
  return { bot: topBot, owns: topOwns, ofMoments: t.total, shareOfMoments: +(topOwns / t.total).toFixed(3) }
}

// (v0.928.0) the pressure book's own riders - the seat's own silence's
// companion: a measure, never a verdict-owner. THE BRANCH LAW (never
// both): the riders speak only when the solo bot rode silent - the seat's
// own law re-judged here (the v0.919.0 crowd's own fence shape). Fewer
// than two magnet bots reads the honest silence (the solo face is the
// seat's own).
export function houndPressureRiders (census) {
  const presenceByBot = census && typeof census === 'object' && !Array.isArray(census) ? census.presenceByBot : census
  const t = pressureTally(presenceByBot)
  if (!t) return null
  const ranked = t.bots.slice().sort((a, b) => b.n - a.n || (a.bot < b.bot ? -1 : 1))
  const leader = ranked[0]
  if (leader.n > t.total - leader.n) return null // the branch law: the solo row owns the owner's face
  if (ranked.length < 2) return null // the solo face is the seat's own (the belt-and-suspenders fence)
  const runner = ranked[1]
  const pairOwns = leader.n + runner.n
  return { leader: leader.bot, leaderOwns: leader.n, runner: runner.bot, runnerOwns: runner.n, pairOwns, ofMoments: t.total, shareOfMoments: +(pairOwns / t.total).toFixed(3), duet: leader.n === runner.n }
}

// (v0.928.0) the pressure seat's own row - THE MAGNET'S OWN SEAT: one
// bot's own touches own the hound's presence book. Junk never prints a
// row (the honest silence's own row law): every field is guarded before
// the template speaks.
export function houndPressureSeatRow (seat) {
  if (!seat || typeof seat !== 'object') return null
  const { bot, owns, ofMoments, shareOfMoments } = seat
  if (typeof bot !== 'string' || !bot ||
      !Number.isFinite(owns) || owns <= 0 ||
      !Number.isFinite(ofMoments) || ofMoments <= 0 || owns > ofMoments ||
      !Number.isFinite(shareOfMoments)) return null
  return `the pressure book's own bot (v0.928.0): ${bot} owns ${owns} of ${ofMoments} hound moment(s) (${(shareOfMoments * 100).toFixed(1)}%) - THE MAGNET'S OWN SEAT: one bot's own touches own the hound book - the magnet's own front prices the pressure the raw split rode unnamed`
}

// (v0.928.0) the pressure riders' own row - THE MAGNET'S OWN MIX: a
// measure of the magnets' own shape, never a named owner (the seat's tie
// law holds). Junk never prints a shape (the honest silence's own row
// law).
export function houndPressureRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderOwns, runner, runnerOwns, pairOwns, ofMoments, shareOfMoments } = r
  if (typeof leader !== 'string' || !leader || typeof runner !== 'string' || !runner ||
      !Number.isFinite(leaderOwns) || leaderOwns <= 0 || !Number.isFinite(runnerOwns) || runnerOwns <= 0 ||
      !Number.isFinite(ofMoments) || ofMoments <= 0 ||
      !Number.isFinite(pairOwns) || pairOwns > ofMoments ||
      !Number.isFinite(shareOfMoments)) return null
  return `the pressure book's own riders (v0.928.0): no solo bot owns the majority - ${leader} x${leaderOwns} + ${runner} x${runnerOwns} own ${pairOwns} of ${ofMoments} hound moment(s) (${(shareOfMoments * 100).toFixed(1)}%) - THE MAGNET'S OWN MIX: the seat's tie law held, the magnets are the shape - the bots' own touches price the pressure the solo law refused to seat`
}
