// (v0.976.267) THE COUNTERS UPGRADED CELL'S OWN SMITH MASS - the counters line's
// own upgraded cell the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own counters lines carry): the
// final report prints '... reboots=0 upgraded=19 swords=20 alive=19 ...'
// (F478's own face, run 39174346168) and '... upgraded=14 ...' (F479,
// run 39178460638) and '... upgraded=17 ...' (F480, run 39184044983)
// and '... upgraded=12 ...' (F481, run 39188700500) and '...
// reboots=1 upgraded=15 swords=17 ...' (F482, run 39193658512) -
// testbed/fleet19.mjs's counters line (fleet19.mjs:4682), one print
// per face, the upgraded cell the per-bot stats sums (the tool
// upgrades the smith chain landed - the pickaxe and the axe and the
// sword the fleet re-forged at the bench) - and no book owned the
// cell's own mass across the faces: the finalbody census prices the
// body's bots/alive cells only (its head chain anchors the upgraded
// cell's bytes, its census never prices it), the killstrend word (the
// .265 word) prices the kills cell beside, the counterrescuetrend word
// (the .266 word) prices the rescues cell beside, the toolupgrade
// machinery owns the smith chain's own runtime (the upgrade
// machinery's own lane) - the upgrade mass itself rode unread (19 ->
// 14 -> 17 -> 12 -> 15 the five-face arc no row read). THIS WORD TAKES
// THE SEAT.
//
// THE LAW: the strict grammar one emitter one shape (the counters
// line's own head chain byte-exact - the 'bots=' head the anchor rides
// whole through the reboots cell, the emitter's own template order,
// the priced cell no leading zero no sign (the .248 house law), the
// tail boundary the cell ends at whitespace or line end never
// mid-token - the fused-tail skin the grammar refuses), the near-miss
// lanes never ride (the bare cell without the frame, the pretty
// spacing, the altered order, the leading zero, the negative count,
// the bot-tagged prefix, the drifted template, the truncated head, the
// wrong frame), the law LAST-PRINT-WINS - the counters line speaks
// once per face, the last print the freshest body the face held.
//
// THE CELLS: upgraded (the smith's own mass - the proven integer cell,
// the zero lawful - the never-upgrading face keeps the healthy zero),
// reboots (the rollback tally the side-car holds - the smith's other
// hand: the upgrade the reboot paid, the five faces' own 0 -> 0 -> 1
// -> 0 -> 1 arc). The trend reads the upgrade mass's arc two steps
// deep (the family's own two-step shape): both steps down = the smith
// weather's own fade (the bench went quiet), both steps up = the smith
// weather's own swell (the re-forge surge), a trade = the swing. A
// held step prices no direction - the honest silence (the family's
// own held law); a three-face zero upgrade mass prices nothing - the
// fleet never upgraded the whole arc (the lawful silence the .255
// churn ceiling's own lawful-zero birth the precedent holds).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const UPGRADE_RE = /^bots=(\d+) spawned=(\d+) reconnects=(\d+) kicks=(\d+) tools=(\d+) recovered=(\d+) reboots=(\d+) upgraded=(0|[1-9]\d*)(?=$| )/

/**
 * The census - the family's own strict grammar, the face's own end
 * read (the counters line's own upgraded cell; LAST-PRINT-WINS - the
 * counters line speaks once per face, the last print the freshest
 * body the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{upgraded: number, reboots: number}|null}
 *   the cells, or the zeros when the lines themselves are junk
 *   (a face whose lines hold no counters line is the LAWFUL ZERO -
 *   the never-counted face keeps the healthy-looking zeros), null
 *   when the input itself is not an array
 */
export function counterUpgradeCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { upgraded: 0, reboots: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = UPGRADE_RE.exec(l)
    if (!m) continue
    mass.reboots = Number(m[7]) // the head chain's own capture order: bots..recovered ride m[1..6], the side-car rides m[7], the priced cell rides m[8]
    mass.upgraded = Number(m[8])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold both proven
 * integer cells (the zero lawful - the never-upgrading face). Extra
 * keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {upgraded,reboots}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function counterUpgradeConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.upgraded) && numOk(s.reboots)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the upgrade mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the fleet never upgraded -
 * nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {upgraded,reboots}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function counterUpgradeTrendRow (e) {
  if (!counterUpgradeConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.upgraded
  const p = prev.upgraded
  const c = cur.upgraded
  // the fleet never upgraded across the three faces - the lawful silence
  // (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const rebootsArc = `the reboots rode ${back.reboots} -> ${prev.reboots} -> ${cur.reboots}`
  const tail = "(the toolupgrade machinery keeps the smith chain's own runtime seat, the finalbody census keeps the body's bots/alive seat, the kills cell's own seat keeps its lane (the .265 word), the rescues cell's own seat keeps its lane (the .266 word) - the upgrade mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the counters upgrade trend (v0.976.267): the smith weather's own fade ran two steps deep - ${arc} - the upgrade mass's own fade, ${rebootsArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the counters upgrade trend (v0.976.267): the smith weather's own swell ran two steps deep - ${arc} - the upgrade mass's own swell, ${rebootsArc} ${tail}`
  }
  return `the counters upgrade trend (v0.976.267): the smith weather's own swing - ${arc} - the fade and the swell traded seats between the faces, ${rebootsArc} ${tail}`
}
