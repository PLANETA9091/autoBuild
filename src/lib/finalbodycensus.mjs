// (v0.976.243) THE FINAL BODY'S OWN SURVIVOR MASS - the FLEET RESULT
// block's own body line the word prices across the faces. THE EVIDENCE
// (the fleet19 emitter, testbed/fleet19.mjs, printFinalReport's own
// tally): 'bots=19 spawned=19 reconnects=24 kicks=15 tools=19
// recovered=2 reboots=0 upgraded=15 swords=17 alive=19 climbs=26
// banked=627 smelted=4 ...' - the F470 face printed the body and the
// report named its own end 'normal end - deadline 600s reached': the
// ALIVE cell is the fleet's own vitality mass - the runners that rode
// the whole face and stood alive at the report; the F469 face's own
// watchdog report held the parked anatomy (the boards' live cells),
// the body's alive cell the SAME story's survivor side tells.
//
// THIS WORD TAKES THE SEAT: the strict grammar one emitter one body
// (the 'bots=' frame, the nine counters' fixed order through the alive
// cell, the 'climbs=' closing anchor byte-exact - the emitter's own
// counter order the template holds), the near-miss lanes never ride
// (the report frame line the facefate seat names, the '[fleet] partial:
// alive=...' kill row the same fate seat prices, the hard-kill report's
// own death row, the truncated body cut before the alive cell, the
// reordered counters, the alien count, the case flip), the law is
// LAST-PRINT-WINS (the body speaks once per face at the final report -
// the last print the face's own closing word).
//
// THE CELLS: bots / alive (the roster and the survivors - the body's
// own two cells the word prices; the body's OTHER counters their own
// seats price - the climb lane and the bank words and the counter gap
// and the reconnect trend the trend seats own). The trend reads the
// ALIVE MASS arc two steps deep: both steps down = the vitality's own
// fade (the deaths ate the roster), both steps up = the vitality's own
// swell (the fleet heals), a trade = the swing. The cur face's own
// roster rides the read's own side-car. A held step prices no
// direction - the honest silence (the family's own held law); a
// three-face zero alive is the whole roster dead - no direction the
// arc prices (the honest silence; the face's fate the facefate seat
// names).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .240/.241/.242 words' own law; the analysis side - scripts/
// fleet-mining/decompose.mjs - owns the fold, the fleet's own console
// never changes).

const FINAL_BODY_ALIVE_RE = /^bots=(\d+) spawned=(\d+) reconnects=(\d+) kicks=(\d+) tools=(\d+) recovered=(\d+) reboots=(\d+) upgraded=(\d+) swords=(\d+) alive=(\d+) climbs=/

/**
 * The census - the body's own strict grammar, the face's own closing
 * word (the body speaks once, the last print wins).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{bots: number, alive: number}|null}
 *   the survivor mass, or null when the lines themselves are junk (a
 *   face whose lines hold no body print is the LAWFUL ZERO - the
 *   report never reached the tally, the zeros speak)
 */
export function finalBodyCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { bots: 0, alive: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = FINAL_BODY_ALIVE_RE.exec(l)
    if (m) {
      mass.bots = Number(m[1])
      mass.alive = Number(m[10])
    }
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer counts (the zero lawful - the body never spoke). Extra keys
 * never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {bots,alive}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function finalBodyCensusConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return Number.isInteger(s.bots) && s.bots >= 0 &&
      Number.isInteger(s.alive) && s.alive >= 0
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the survivor mass's own two-step shape. The
 * honest null when a step held (no direction - the family's own held
 * law), the three-face zero alive (the whole roster dead - the face's
 * fate the facefate seat names), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {...}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function finalBodyCensusRow (e) {
  if (!finalBodyCensusConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.alive
  const p = prev.alive
  const c = cur.alive
  // the whole roster rode the three faces dead - no direction the arc
  // prices (the honest silence; the fate the facefate seat names)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const split = `the cur face's own roster bots ${cur.bots}`
  const tail = "(the report frame the facefate seat names, the partial row the same fate seat prices, the body's other counters their own seats price - the climb lane and the bank words and the counter gap and the reconnect trend the trend seats own - the survivor mass row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the final body survivor trend (v0.976.243): the vitality's own fade ran two steps deep - ${arc} - the survivor mass's own fade, ${split} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the final body survivor trend (v0.976.243): the vitality's own swell ran two steps deep - ${arc} - the survivor mass's own swell, ${split} ${tail}`
  }
  return `the final body survivor trend (v0.976.243): the survivor mass's own swing - ${arc} - the fade and the swell traded seats between the faces, ${split} ${tail}`
}
