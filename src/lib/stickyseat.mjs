// stickyseat.mjs - THE STICKY BOOK'S OWN SEAT (v0.923.0)
//
// WHICH bot owns the rescue ends the lane did not close cleanly. The
// rescue book's own seats: the v0.774.0 cast named WHICH BOT spends the
// starts, the v0.780.0 bill named WHICH CLASS owns the ends - the bot
// axis on the ends never rode a seat (face 195's own ledger rode raw:
// 'per-bot ends: F11{starts=3,frozenStanddown=3} F6{starts=18,...,
// timeout=2}' beside the class bill's released seat - the sticky mass
// sat unnamed). The fire-0641 read named the lever: the arms arrive and
// the saves don't hold - the cure prices the END book, and the sticky
// ends (the freeze, the timeout, the death, the gone, the error) are the
// book's own non-closes.
//
// THE BILL LAW (the ledger's own perBot cells, zero re-parsing - the
// v0.780.0 bill's own precedent, the bot instead of the class): the fold
// reads ONLY the five sticky classes per bot row - frozenStanddown,
// timeout, dead, botGone, abortedError (the RESCUE_END_CLASS_LABELS'
// own keys, never forked). The clean closes (complete,
// completeStandingWet, released) stay out - they are the lane's own
// chosen ends, not the sticky book. The unclosed class never joins
// (the v0.780.0 fence: the FATAL-face class, not an end the lane chose).
//
// THE STRICT-MAJORITY LAW: the top bot owns the sticky book only above
// half; a tie owns nothing (the honest null - the spread needs the
// riders, not a named owner; the storm-has-no-seat precedent; face 195's
// own book was the tie's field witness: F11 x3 of 6 = exactly half).
// The byte order decides the scan (the bot's own bytes).
//
// THE RIDERS - the seat's own silence's companion (the v0.780.0 riders'
// own shape, the v0.919.0 branch law's own fence): a MEASURE, never a
// verdict-owner - the top two bots' own concentration prices the shape
// the solo law refused to name. THE BRANCH LAW (never both): the riders
// speak only when the solo bot rode silent (the fence lives in the lib -
// the seat's own law re-judged here, a second seat would recurse the
// defect). THE BYTE LAW: counts desc, then the bot's own byte asc.
//
// Junk never invents a book: a non-object perBot, a malformed bot key
// (the decompose perBot idiom - 'F11', the census's own emitter law), a
// non-object bot row, a non-finite or non-positive cell (skipped - the
// real cells still tally), or a zero-sum book reads the honest silence
// (null).
//
// Pure: reads, never mutates. Zero fleet wiring, zero new log lines -
// the row rides decompose beside the per-bot ends print (read-time
// tooling only, the CENSUS GUARD law).

// The five sticky classes - the ends the lane did not choose to close
// cleanly (the RESCUE_END_CLASS_LABELS' own keys, zero re-parsing).
const STICKY_CLASSES = ['frozenStanddown', 'timeout', 'dead', 'botGone', 'abortedError']

// The census's own emitter law: the decompose perBot idiom's own key
// shape ('F11') - the bot's own atom, never forked.
const BOT_RE = /^F\d+$/

const foldSticky = (perBot) => {
  if (!perBot || typeof perBot !== 'object' || Array.isArray(perBot)) return null
  const bots = []
  let total = 0
  for (const [bot, row] of Object.entries(perBot)) {
    if (typeof bot !== 'string' || !BOT_RE.test(bot)) continue
    if (!row || typeof row !== 'object' || Array.isArray(row)) continue
    let n = 0
    for (const key of STICKY_CLASSES) {
      const v = row[key]
      if (Number.isFinite(v) && v > 0) n += v
    }
    if (n <= 0) continue
    bots.push({ bot, n })
    total += n
  }
  if (bots.length === 0 || total <= 0) return null
  return { bots, total }
}

// (v0.923.0) the sticky book's own seat - the strict-majority law's
// verdict: the top bot owns the sticky book only above half; a tie owns
// nothing. The byte order decides the scan (the bot's own bytes).
export function stickySeat (perBot) {
  const fold = foldSticky(perBot)
  if (!fold) return null
  let topOwns = 0
  let topBot = null
  for (const { bot, n } of fold.bots.slice().sort((a, b) => (a.bot < b.bot ? -1 : a.bot > b.bot ? 1 : 0))) {
    if (n > topOwns) { topOwns = n; topBot = bot }
  }
  if (topBot === null || topOwns <= fold.total - topOwns) return null
  return { bot: topBot, owns: topOwns, ofSticky: fold.total, shareOfSticky: +(topOwns / fold.total).toFixed(3) }
}

// (v0.923.0) the sticky book's own riders - the seat's own silence's
// companion: a measure, never a verdict-owner. THE BRANCH LAW (never
// both): the riders speak only when the solo bot rode silent - the
// seat's own law re-judged here (the v0.919.0 crowd's own fence shape).
// Fewer than two sticky bots reads the honest silence (the solo face is
// the seat's own).
export function stickyRiders (perBot) {
  const fold = foldSticky(perBot)
  if (!fold) return null
  const ranked = fold.bots.slice().sort((a, b) => b.n - a.n || (a.bot < b.bot ? -1 : 1))
  const leader = ranked[0]
  if (leader.n > fold.total - leader.n) return null // the branch law: the solo row owns the owner's face
  if (ranked.length < 2) return null // the solo face is the seat's own (the belt-and-suspenders fence)
  const runner = ranked[1]
  const pairN = leader.n + runner.n
  return { leader: leader.bot, leaderN: leader.n, runner: runner.bot, runnerN: runner.n, pairN, ofSticky: fold.total, shareOfSticky: +(pairN / fold.total).toFixed(3), duet: leader.n === runner.n }
}

// (v0.923.0) the sticky seat's own row - THE STICKY BOOK'S OWN SEAT: one
// bot's own frozen and timed-out closes own the sticky book. Junk never
// prints a row (the honest silence's own row law): every field is
// guarded before the template speaks.
export function stickySeatRow (seat) {
  if (!seat || typeof seat !== 'object') return null
  const { bot, owns, ofSticky, shareOfSticky } = seat
  if (typeof bot !== 'string' || !bot ||
      !Number.isFinite(owns) || owns <= 0 ||
      !Number.isFinite(ofSticky) || ofSticky <= 0 || owns > ofSticky ||
      !Number.isFinite(shareOfSticky)) return null
  return `the sticky book's own bot (v0.923.0): ${bot} owns ${owns} of ${ofSticky} sticky end(s) (${(shareOfSticky * 100).toFixed(1)}%) - THE STICKY BOOK'S OWN SEAT: one bot's own frozen and timed-out closes own the sticky book - the reconnect lane's own front prices the bot the raw split rode unnamed`
}

// (v0.923.0) the sticky riders' own row - THE STICKY'S OWN MIX: a measure
// of the sticky book's own shape, never a named owner (the seat's tie law
// holds). Junk never prints a shape (the honest silence's own row law).
export function stickyRidersRow (r) {
  if (!r || typeof r !== 'object') return null
  const { leader, leaderN, runner, runnerN, pairN, ofSticky, shareOfSticky } = r
  if (typeof leader !== 'string' || !leader || typeof runner !== 'string' || !runner ||
      !Number.isFinite(leaderN) || leaderN <= 0 || !Number.isFinite(runnerN) || runnerN <= 0 ||
      !Number.isFinite(ofSticky) || ofSticky <= 0 ||
      !Number.isFinite(pairN) || pairN > ofSticky ||
      !Number.isFinite(shareOfSticky)) return null
  return `the sticky book's own riders (v0.923.0): no solo bot owns the majority - ${leader} x${leaderN} + ${runner} x${runnerN} own ${pairN} of ${ofSticky} sticky end(s) (${(shareOfSticky * 100).toFixed(1)}%) - THE STICKY'S OWN MIX: the seat's tie law held, the bots are the shape - the sticky ends' own spread prices the churn the solo law refused to seat`
}

// (v0.974.11) the sticky lane's own cells - the shadow fold's fourth
// lane's own inputs: the book's own fold re-shaped as the lane cells
// (the byBot map + the fleet total) the churn shadow reads. One fold,
// never re-spelled: the counts ride foldSticky's own walk (the v0.923.0
// law byte for byte - the five sticky classes, the BOT_RE emitter law,
// the zero-sum silence). The lane joins the shadow's plurality fold only
// - the throne's own three-lane strict-majority join stays byte-stable
// (the v0.961.0 law untouched).
export function stickyLaneCells (perBot) {
  const fold = foldSticky(perBot)
  if (!fold) return null
  const byBot = {}
  for (const { bot, n } of fold.bots) byBot[bot] = n
  return { byBot, total: fold.total }
}
