// (v0.976.240) THE WET SHIFT TUNNEL'S OWN YIELD MASS - the final climb's
// own shift-tunnel verdict lines the word prices across the faces. THE
// EVIDENCE (the fleet19 emitter, testbed/fleet19.mjs, the v0.338.0
// pricing face): 'F12 final climb: wet shift tunnel: 2 blocks in 3s
// (stalled)' - the shift's own verdict line, printed per attempt whenever
// the wet shift's tunnel call returns (the surface book's own MEASURED
// notes hold the ninth face's sample). The v0.338.0 law named the want:
// 'the duration speaks at EVERY verdict now - the floor's next pricing
// rides the tunnel's real distribution' - the emitter kept the promise
// and no book prices the mass the verdicts hold across the faces.
//
// THIS WORD TAKES THE SEAT: the strict grammar one emitter one shape
// (the fleet19 line speaks - the 'final climb: wet shift tunnel:' frame,
// the done count, the seconds count, every term byte-exact; the done='?'
// skin the junk return prices is refused - the word prices only the
// proven firings), the near-miss lanes never ride (the stall line's own
// 'wet shift stalled (tunnel done=...)' verdict - a different lane; the
// 'shift pre-seal swallowed:' account; the tunnelled verb variant; the
// prefix-less retell), the mass SUMS every firing the face carries (the
// emitter speaks per attempt, the face's own mass is the sum - no
// last-print-wins here, the attempt's own yield is a vote).
//
// THE CELLS: blocks / seconds / firings / stopped (the yield mass, the
// time mass, the attempt count, the stopped-reason count). The trend
// reads the BLOCKS mass arc two steps deep (the yield the crossing
// carries): both steps down = the yield's own fade (the crossings run
// short - the stalls' own grip), both steps up = the yield's own swell
// (the crossings run long - the slice's own pace), a trade = the swing.
// The seconds mass and the stopped count ride the read's own side-cars
// (the time's own burn beside the yield, the gate's own grip beside
// both). A held step prices no direction - the honest silence (the
// family's own held law); a three-face zero mass prices nothing - the
// lane never fired (the lawful silence the zeros keep).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .237 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const WET_SHIFT_TUNNEL_RE = /^(\S+) final climb: wet shift tunnel: (\d+) blocks in (\d+)s(?: \(([^)]+)\))?$/

/**
 * The census - the family's own strict grammar, the face's own mass
 * (every attempt's own yield a vote, the sum the mass keeps).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{blocks: number, seconds: number, firings: number, stopped: number}|null}
 *   the yield mass, or null when the lines themselves are junk (a
 *   face whose lines hold no shift-tunnel print is the LAWFUL ZERO -
 *   the lane never fired, the zeros speak)
 */
export function wetShiftTunnelCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { blocks: 0, seconds: 0, firings: 0, stopped: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = WET_SHIFT_TUNNEL_RE.exec(l)
    if (!m) continue
    mass.blocks += Number(m[2])
    mass.seconds += Number(m[3])
    mass.firings++
    if (m[4] !== undefined) mass.stopped++
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold all four
 * proven integer counts (the zero lawful - the lane never fired).
 * Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {blocks,seconds,firings,stopped}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function wetShiftTunnelCensusConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.blocks) && s.blocks >= 0 &&
      Number.isInteger(s.seconds) && s.seconds >= 0 &&
      Number.isInteger(s.firings) && s.firings >= 0 &&
      Number.isInteger(s.stopped) && s.stopped >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the blocks mass's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law), the
 * three-face mass is zero (the lane never fired - nothing to price), or
 * the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {...}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function wetShiftTunnelCensusRow (e) {
  if (!wetShiftTunnelCensusConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.blocks
  const p = prev.blocks
  const c = cur.blocks
  // the lane never fired across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const secs = `the seconds rode ${back.seconds} -> ${prev.seconds} -> ${cur.seconds}`
  const stops = `the stopped count rode ${back.stopped} -> ${prev.stopped} -> ${cur.stopped}`
  const scope = `the cur face's own firings ${cur.firings}`
  const tail = "(the stall line's own lane prices the gate's own refusals, the pre-seal's own swallow prices the shift's own account, the sealed trend's own seat prices the tunnel sealed's own lane - the tunnel's mass row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the wet shift tunnel trend (v0.976.240): the yield's own fade ran two steps deep - ${arc} - the blocks mass's own fade, ${secs}, ${stops}, ${scope} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the wet shift tunnel trend (v0.976.240): the yield's own swell ran two steps deep - ${arc} - the blocks mass's own swell, ${secs}, ${stops}, ${scope} ${tail}`
  }
  return `the wet shift tunnel trend (v0.976.240): the blocks mass's own swing - ${arc} - the fade and the swell traded seats between the faces, ${secs}, ${stops}, ${scope} ${tail}`
}
