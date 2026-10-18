// (v0.976.249) THE SERVER GUARD'S OWN VERDICT MASS - the report frame's
// own verdict cells the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own report blocks carry): the
// final report prints 'server guard: losses=2 (window 0/10) relogins=22
// probe=n/a dead=no revives=0 restarts=0' (run36284626465's own face) -
// testbed/fleet19.mjs's report line (one print per face, the v0.52.0
// server-death verdict joining the report so a run whose server died
// mid-way is readable as such years later) - and no book owned the
// frame: the serverguard.mjs module the runtime owns (the watchdog's
// own SUSPECT/CLEARED verdicts the fleet-wired live lanes ride), the
// frozen-census battery holds the line as junk-control only - the
// report frame's own cells (the losses mass, the window fraction, the
// relogins, the probe skin, the dead skin, the revives, the restarts)
// rode unread across the faces.
// THIS WORD TAKES THE SEAT: the strict grammar one emitter one shape
// (the fleet's own template byte-exact - the frame, the losses cell,
// the window fraction cell, the relogins cell, the probe skin, the
// dead skin, the revives cell, the restarts cell; the skins the
// emitter's own space holds - the probe 'n/a'|'ok'|'refused'|'timeout'
// (probeServerPort's own answer set, 'n/a' the no-probe-yet skin the
// nullish coalescence prints - the probe loop rides the SUSPECT window
// only, the healthy face's probe cell the n/a skin keeps), the dead
// 'YES'|'no'; the emitter's own arithmetic the census holds - the
// window's own mass never exceeds the losses total it rode from (every
// push the total owns, the shift only shrinks the window), a forged
// meter never rides), the near-miss lanes never ride (the runtime's
// own '[fleet] server guard: SUSPECT -' and '[fleet] server guard:
// suspect CLEARED -' verdict lines the fleet-wired live lanes carry -
// a different frame the report census never parses - the bot-tagged
// prefix, the truncated tail, the lowercase dead skin, the uppercase
// probe skin, the bogus probe skin, the window over the total, the
// altered prose, the wrong frame), the law LAST-PRINT-WINS - the
// frame speaks once per face, the last print the freshest state the
// face held.
//
// THE CELLS: losses (the transport-loss total the face holds) and
// winLosses (the window's own mass) and winThreshold (the burst bar
// the guard holds) and relogins and revives and restarts (the proven
// integer cells) and probe (the skin the last probe held) and dead
// (the skin the verdict held). The trend reads the losses mass arc
// two steps deep (the family's own two-step shape): both steps down
// = the transport-loss mass's own fade (the links heal), both steps
// up = the transport-loss mass's own swell (the wave's own grip), a
// trade = the swing. The probe arc and the dead arc and the relogins
// arc ride the read's own side-cars (the verdict class beside the
// mass, the relog lane's own churn beside both). A held step prices
// no direction - the honest silence (the family's own held law); a
// three-face zero mass prices nothing - the fleet's links never broke
// the whole arc (the lawful silence the zeros keep).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const SERVER_GUARD_RE = /^server guard: losses=(\d+) \(window (\d+)\/(\d+)\) relogins=(\d+) probe=(n\/a|ok|refused|timeout) dead=(YES|no) revives=(\d+) restarts=(\d+)$/

// the emitter's own skin space - probeServerPort's own answer set plus
// the 'n/a' skin the nullish coalescence prints, and the verdict's own
// two skins the ternary prints (the grammar never forks a second voice)
export const LAWFUL_PROBES = ['n/a', 'ok', 'refused', 'timeout']
export const LAWFUL_DEADS = ['YES', 'no']

/**
 * The census - the family's own strict grammar, the face's own verdict
 * frame (the report's own server guard line; LAST-PRINT-WINS - the last
 * print the freshest state the face held; the emitter's own arithmetic
 * the census holds - a window over the total never rides).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{losses: number, winLosses: number, winThreshold: number,
 *   relogins: number, probe: string, dead: string, revives: number,
 *   restarts: number}}
 *   the verdict cells, or null when the lines themselves are junk (a
 *   face whose lines hold no report print is the LAWFUL ZERO - the
 *   healthy-looking zeros the never-printed face keeps speak)
 */
export function serverGuardCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { losses: 0, winLosses: 0, winThreshold: 0, relogins: 0, probe: 'n/a', dead: 'no', revives: 0, restarts: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = SERVER_GUARD_RE.exec(l)
    if (!m) continue
    const losses = Number(m[1])
    const winLosses = Number(m[2])
    // the emitter's own arithmetic the census holds - the window's own
    // mass never exceeds the losses total it rode from (a forged meter
    // never rides)
    if (winLosses > losses) continue
    mass.losses = losses
    mass.winLosses = winLosses
    mass.winThreshold = Number(m[3])
    mass.relogins = Number(m[4])
    mass.probe = m[5]
    mass.dead = m[6]
    mass.revives = Number(m[7])
    mass.restarts = Number(m[8])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold all six
 * proven integer cells (the zero lawful - the never-printed face) and
 * both skins from the emitter's own sets and the window's own mass
 * never over the total (the emitter's own arithmetic the fold holds).
 * Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {losses,winLosses,winThreshold,relogins,probe,dead,revives,restarts},
 *     prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function serverGuardCensusConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.losses) && numOk(s.winLosses) && numOk(s.winThreshold) &&
      numOk(s.relogins) && numOk(s.revives) && numOk(s.restarts) &&
      numOk(s.winLosses) && s.winLosses <= s.losses &&
      LAWFUL_PROBES.includes(s.probe) && LAWFUL_DEADS.includes(s.dead)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the losses mass's own two-step shape. The honest
 * null when a step held (no direction - the family's own held law), the
 * three-face mass is zero (the links never broke - nothing to price), or
 * the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {...}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function serverGuardTrendRow (e) {
  if (!serverGuardCensusConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.losses
  const p = prev.losses
  const c = cur.losses
  // the links never broke across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const probeArc = `the probe rode ${back.probe} -> ${prev.probe} -> ${cur.probe}`
  const deadArc = `the dead rode ${back.dead} -> ${prev.dead} -> ${cur.dead}`
  const relogArc = `the relogins rode ${back.relogins} -> ${prev.relogins} -> ${cur.relogins}`
  const tail = "(the runtime's own SUSPECT and CLEARED verdicts keep the fleet-wired lanes the guard's live lines ride, the blocks mined's own productivity meter keeps the .247 word's seat beside, the final body's own survivor mass keeps the roster's alive cell - the server guard's verdict row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server guard trend (v0.976.249): the transport-loss mass's own fade ran two steps deep - ${arc} - the losses mass's own fade, ${probeArc}, ${deadArc}, ${relogArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server guard trend (v0.976.249): the transport-loss mass's own swell ran two steps deep - ${arc} - the losses mass's own swell, ${probeArc}, ${deadArc}, ${relogArc} ${tail}`
  }
  return `the server guard trend (v0.976.249): the losses mass's own swing - ${arc} - the fade and the swell traded seats between the faces, ${probeArc}, ${deadArc}, ${relogArc} ${tail}`
}
