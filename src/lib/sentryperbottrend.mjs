// (v0.976.256) THE SENTRY ATTRIBUTION'S OWN ROW MASS - the report frame's
// own per-bot sentry cells the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own report blocks carry): the
// final report prints 'sentry per-bot: F2 g0/r5 F3 g0/r1 ... | 9 g0/r0'
// (run39170522050's own face, F477) - statcarry.mjs's sentryAttributionRow
// (v0.195.0) the emitter, testbed/fleet19.mjs's report line (one print per
// face, ALWAYS printed - the 05:00 ledger-skip lesson: an all-zero fleet
// prints 'all N g0/r0' instead of silence) - and no book owned the frame
// across the faces: the sentry census (v0.422.0) reads the water lane's
// own sight seats within one face, the rescue-economy decode judges the
// storm's own share within one face, the hound's drowned-kill per-bot and
// the transit per-bot and the breath-mirror per-bot keep their own lanes -
// the attribution row itself (the WHO axis the run190 blind-spot decodes
// burned three lanes to land in the log) rode unread across the faces.
// THIS WORD TAKES THE SEAT: the strict grammar one emitter one shape
// (the fleet's own template byte-exact - the frame, the named tokens
// 'F<n> g<g>/r<r>' in fleet order each with a non-zero counter, the pipe
// tail '| <silent> g0/r0', the all-skin 'all <silent> g0/r0' the
// never-attributed face keeps, the proven integer cells no leading zero
// no sign (the .248 house law)), the near-miss lanes never ride (the
// drowned-kill per-bot line, the transit per-bot line, the breath-mirror
// per-bot line, the rescue-economy decode row, the bot-tagged prefix, the
// pretty spacing, the missing pipe tail, the empty named body, the
// named-zero token the emitter never prints, the leading zero, the
// negative count, the truncated tail, the wrong frame), the law
// LAST-PRINT-WINS - the frame speaks once per face, the last print the
// freshest state the face held.
//
// THE CELLS: named, silent, g, r (the attribution's own end counts - the
// proven integer cells, the zero lawful - the all-silent face keeps the
// healthy-looking zeros: named 0, the silent count the fleet held). The
// trend reads the r mass's arc two steps deep (the family's own two-step
// shape): both steps down = the rescue mass's own fade (the sentry's own
// quiet water), both steps up = the rescue mass's own swell (the drown
// weather grows the attributed rescues), a trade = the swing. The g mass
// (the storm witness - F474's own g236 the air-glitch fingerprint rides)
// and the named width (the bots that own the counters) ride the read's
// own side-cars. A held step prices no direction - the honest silence
// (the family's own held law); a three-face zero r mass prices nothing -
// the sentry attributed no rescue the whole arc (the lawful silence the
// zeros keep; the g-only face prices nothing - the storm witness rides
// only beside a living rescue mass).
//
// THE CROSS-CHECK (the field's own law the word keeps): the row's r sum
// IS the FLEET RESULT's rescues cell and the g sum IS the airGlitches
// cell - the fieldproof priced all four cached faces equal
// (44/236, 102/0, 18/0, 36/0 - scripts/fieldread-sentry-0643.mjs).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const SENTRY_PER_BOT_TAIL_RE = /^sentry per-bot: (.+) \| (0|[1-9]\d*) g0\/r0$/
const SENTRY_PER_BOT_ALL_RE = /^sentry per-bot: all (0|[1-9]\d*) g0\/r0$/
const SENTRY_NAME_RE = /^F(0|[1-9]\d*)$/
const SENTRY_CELLS_RE = /^g(0|[1-9]\d*)\/r(0|[1-9]\d*)$/

/**
 * The census - the family's own strict grammar, the face's own end
 * frame (the report's own sentry per-bot line; LAST-PRINT-WINS - the
 * last print the freshest state the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{named: number, silent: number, g: number, r: number}}
 *   the attribution cells, or the zeros when the lines themselves are
 *   junk (a face whose lines hold no report print is the LAWFUL ZERO -
 *   the never-attributed face keeps the healthy-looking zeros), null
 *   when the input itself is not an array
 */
export function sentryPerBotCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { named: 0, silent: 0, g: 0, r: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const all = SENTRY_PER_BOT_ALL_RE.exec(l)
    if (all) {
      mass.named = 0
      mass.silent = Number(all[1])
      mass.g = 0
      mass.r = 0
      continue
    }
    const m = SENTRY_PER_BOT_TAIL_RE.exec(l)
    if (!m) continue
    const parts = m[1].split(' ')
    // the named entries ride PAIRS ('F2' 'g0/r5') - an odd part count is
    // the emitter's own never-shape (the grammar refuses)
    if (parts.length % 2 !== 0) continue
    let named = 0
    let g = 0
    let r = 0
    let ok = true
    for (let i = 0; i < parts.length; i += 2) {
      const nm = SENTRY_NAME_RE.exec(parts[i])
      const cm = SENTRY_CELLS_RE.exec(parts[i + 1])
      if (!nm || !cm) { ok = false; break }
      const gv = Number(cm[1])
      const rv = Number(cm[2])
      // the named entry always carries a non-zero counter (the emitter's
      // own law - a g0/r0 named token is the never-shape)
      if (gv === 0 && rv === 0) { ok = false; break }
      named++
      g += gv
      r += rv
    }
    if (!ok) continue
    mass.named = named
    mass.silent = Number(m[2])
    mass.g = g
    mass.r = r
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold all four
 * proven integer cells (the zero lawful - the all-silent face). Extra
 * keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {named,silent,g,r}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function sentryPerBotConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.named) && numOk(s.silent) && numOk(s.g) && numOk(s.r)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the attribution's own r mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the sentry attributed no
 * rescue - nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {named,silent,g,r}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function sentryPerBotTrendRow (e) {
  if (!sentryPerBotConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.r
  const p = prev.r
  const c = cur.r
  // the sentry attributed no rescue across the three faces - the lawful
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const gArc = `the storm witness rode ${back.g} -> ${prev.g} -> ${cur.g}`
  const namedArc = `the named width rode ${back.named} -> ${prev.named} -> ${cur.named}`
  const tail = "(the sentry row's own lane alone, co-existence by seat never by duplication - the rescue-economy decode keeps its own storm seat, the drowned-kill per-bot keeps the hound's lane, the transit per-bot keeps the transit's lane, the breath-mirror per-bot keeps the freeze's lane, the FLEET RESULT's rescues cell keeps the whole-fleet seat)"
  if (first < 0 && second < 0) {
    return `the sentry attribution trend (v0.976.256): the rescue mass's own fade ran two steps deep - ${arc} - the rescue mass's own fade, ${gArc}, ${namedArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the sentry attribution trend (v0.976.256): the rescue mass's own swell ran two steps deep - ${arc} - the rescue mass's own swell, ${gArc}, ${namedArc} ${tail}`
  }
  return `the sentry attribution trend (v0.976.256): the rescue mass's own swing - ${arc} - the fade and the swell traded seats between the faces, ${gArc}, ${namedArc} ${tail}`
}
