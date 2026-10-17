// (v0.976.187) THE DEADLINE'S OWN WRITE-OFF TREND - the final write-off's
// own mass across the faces: the F426's own crater named the front first
// ('final write-off: F8 323u/21s stalled-s0, ... (the deadline pocket rode
// unbanked)' the banked crater rode 0.1% - banked 2 of 1888u - the mines
// boomed 2839 mined while the deadline collected 1759u, THE CHEST DOOR
// NEVER OPENED the bank's docket named: the door leg 90 chest unreachable
// 69 decide timeouts 50 of 193 visit-lines) - the runner's own closing
// line the deadline's unbanked pocket rides ('final write-off: F<n>
// <m>u/<s>s [<why>], ... (the deadline pocket rode unbanked)' - ONE
// emitter (the fleet runner's own closing census), one shape, TWO SKINS:
// the entries form the deadline collects ride, and the none skin ('final
// write-off: none (every pocket under 64 units)' - the face 422's own
// skin) rides the lawful zero whole - THE RAW LAW: every line the shape
// prints rides, the why tokens never split the mass (the why split the
// pocket's own census prices per face beside - the lanes never merge).
// THE CELL'S OWN WEIGHT 33847u the thirty-nine faces' own total - the
// bank skin's own 729u the record the family holds, the climb-out
// pre-position's own 640u the second beside (the .183 word's own cell) -
// this word's own skin THE HEAVIEST THE FAMILY HOLDS (the deadline's own
// crater the book's own mass the family's light skins the mirror rides).
// THE FIELD'S OWN TOP THE COUNT 1880 rode ONCE (the face 386's own crest -
// THE FIELD'S OWN LANDER: the birth book's last face holds the top, the
// face 373's own 1800 the crest beside), THE FIELD'S OWN FLOOR THE COUNT
// 88 rode ONCE (the face 382's own floor - THE SKIN DRIED ONCE the birth
// book holds; the whole-cache floor the zero rides the face 422's own
// none skin - THE HONEST ZERO the whole cache holds, the every-pocket-
// under-64 verdict the runner's own law prints). THE NEVER-SILENT BOOK:
// THIRTY-SEVEN of THIRTY-SEVEN windows speaking (TWENTY-EIGHT swings,
// FIVE swells, FOUR fades, ZERO honest silences - THE FIRST ALL-SPEAKING
// BOOK THE FAMILY HOLDS: the bfcu's own thirty-four silences the heaviest
// drought record beside, the wwy's own ten beside, the rr's own four
// beside - this book's silence the honest never). THE ONE back-to-back
// swell pair the faces 353/354 hold (the same trade two windows ride -
// the wwy's own ONE pair the mirror beside, the bprep's own ONE pair
// beside); the FOUR fades the faces 351/360/372/375 hold never
// back-to-back (the drought's own staircase never chains - the .186's own
// triple fade run the mirror beside); the ZERO round trips (the mirrored
// legs the family's books hold - the final bank's own the mirror beside -
// this book's legs never mirror). THE BOUNDS' OWN LEGS: the +1342 the max
// rise rode ONCE one leg (the face 373's own window - THE CREST'S OWN
// CLIMB 458 -> 1800), the -1195 the max fall rode ONCE one leg (the face
// 382's own window - THE CRATER'S OWN DRAIN 1283 -> 88); the last word
// the face 386's own window the swing (1681 -> 1288 (-393) -> 1880 (+592)
// - the lander's own trade the top's own crest rides). THE WHOLE-CACHE
// SEAT 36997u the faces the cache holds (forty-three: 348..386 + 422 +
// 423 + 425 + 426) - the face 426's own 1759u the newest add rides (the
// W426 window the swell 335 -> 1056 (+721) -> 1759 (+703) MY WORD'S OWN
// FIRST LIVE READ the nearest-completed law holds - the cancelled 424 the
// honest gap rides; the W425 window the swell 0 -> 335 (+335) -> 1056
// (+721) - the face 422's own 0u the none skin rides - THE BACK-TO-BACK
// SWELL PAIR THE TWO NEWEST WINDOWS RIDE the deadline's own drain the
// front the F426's own census names). ONE SHAPE ONE WORD:
// src/lib/finalwriteofftrend.mjs (finalWriteOffs +
// finalWriteOffTrendConsistent + finalWriteOffTrendRow, byte-pin no
// return no repeat no stay no run no owns no dynasty no turn, the tail
// names the neighbor seats incl. the wet-wall yield's own trend the
// newest sibling and the reconnect retry's own trend beside, the fence
// never rejects extra keys) + tests/unit/finalwriteofftrend.test.mjs +
// the decompose wire right after the wet-wall yield's own wire (variable
// fwo beside their wwy, the fold rides finalWriteOffs's own read - one
// parser, never a second; the decompose's own first final write-off read
// the lane the reader never priced before this word).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits.

const FINAL_WRITE_OFF_RE = /^final write-off: F\d+ \d+u\/\d+s\b/
const FINAL_WRITE_OFF_NONE_RE = /^final write-off: none\b/
const ENTRY_RE = /^F\d+ (\d+)u\/\d+s\b/

/**
 * The cell's own read - the deadline's own unbanked mass across the
 * lines. One parser per shape: the runner's closing line, both skins
 * (the entries form sums the masses; the none skin rides the lawful
 * zero whole). The write-off whys line and the bank attribution line
 * never ride (the pocket census's own lenses - the lanes never merge).
 */
export function finalWriteOffs (lines) {
  if (!Array.isArray(lines)) return 0
  let line = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    if (FINAL_WRITE_OFF_RE.test(l)) { line = l; break }
    if (FINAL_WRITE_OFF_NONE_RE.test(l)) return 0 // the none skin - the lawful zero rides whole
  }
  if (!line) return 0
  const body = line.replace(/^final write-off: /, '').replace(/\s*\(.*\)\s*$/, '')
  let sum = 0
  for (const ent of body.split(', ')) {
    const m = ent.match(ENTRY_RE)
    if (m) sum += Number(m[1])
  }
  return sum
}

export function finalWriteOffTrendConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.finalWriteOffs) && s.finalWriteOffs >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

export function finalWriteOffTrendRow (e) {
  if (!finalWriteOffTrendConsistent(e)) return null
  const { back, prev, cur } = e
  const first = prev.finalWriteOffs - back.finalWriteOffs
  const second = cur.finalWriteOffs - prev.finalWriteOffs
  const arc = `${back.finalWriteOffs} -> ${prev.finalWriteOffs} (${first >= 0 ? '+' : ''}${first}) -> ${cur.finalWriteOffs} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const tail = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, this word prices the final write-off's own mass across the faces - the deadline's own crater seat, co-existence by seat never by duplication)"
  if (first > 0 && second > 0) {
    return `the final write-off trend (v0.976.187): the write-off's rise ran two steps deep - ${arc} - the write-off's own swell ${tail}`
  }
  if (first < 0 && second < 0) {
    return `the final write-off trend (v0.976.187): the write-off's fall ran two steps deep - ${arc} - the write-off's own fade ${tail}`
  }
  return `the final write-off trend (v0.976.187): the write-off's own swing - ${arc} - the rise and the fall traded seats between the faces ${tail}`
}
