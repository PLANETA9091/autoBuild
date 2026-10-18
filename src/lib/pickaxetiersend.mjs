// (v0.976.251) THE PICKAXE LADDER'S OWN END MASS - the report frame's
// own tier counts the word prices across the faces.
// THE EVIDENCE (the seat the fleet faces' own report blocks carry): the
// final report prints 'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,
// iron_pickaxe -> wooden=35 stone=11 iron=0' (run39160949802's own face,
// F474) - testbed/fleet19.mjs's report line (one print per face, the
// tool ladder's own end read: the tiers the ladder holds, the counts the
// fleet's inventories end with) - and no book owned the frame: the
// toolupgrade.mjs module owns the ladder's own climb (PICK_TIERS the
// frozen constant), the smelting and the deposit lanes' own prose names
// the iron wall the counts speak (6-run-old THE IRON WALL stands -
// pickaxe tiers at end: iron=0), the blocks mined's own productivity
// meter keeps the .247 word's seat and the server guard's own verdict
// keeps the .249 word's seat beside - the tier counts themselves (the
// wooden mass, the stone mass, the iron rung, the ladder's own held
// total) rode unread across the faces. The reservation the neighbours
// priced twice: the blocksminedtrend.test's own near-miss pin and the
// serverguardcensus.test's own near-miss pin BOTH keep this line out
// by name - the .238 precedent's reserved seat, this word takes it.
// THIS WORD TAKES THE SEAT: the strict grammar one emitter one shape
// (the fleet's own template byte-exact - the frame, the frozen tier
// list the emitter's own constant holds 'wooden_pickaxe,stone_pickaxe,
// iron_pickaxe' comma-joined no spaces, the ' -> ' arrow, the three
// 'rung=count' pairs space-joined, the rung keys the ladder's own
// first segments 'wooden' 'stone' 'iron' in the ladder's own order,
// the counts the proven integers no leading zero no sign; the
// emitter's own derivation the census holds - the keys ride the tiers
// list's own first segments, a reordered or extended or shortened
// ladder never rides), the near-miss lanes never ride (the server
// guard's own verdict line, the blocks mined's own meter, the loot
// ledger's own accounting, the materials dump's own JSON, the
// bot-tagged prefix, the pretty spacing the join never prints, the
// missing arrow, the extra pair, the missing pair, the diamond rung
// the ladder never held, the leading zero, the negative count, the
// altered prose, the truncated tail, the wrong frame), the law
// LAST-PRINT-WINS - the frame speaks once per face, the last print
// the freshest state the face held.
//
// THE CELLS: wooden and stone and iron (the rung counts the fleet's
// inventories end with - the proven integer cells, the zero lawful -
// the iron wall's own standing read the history holds). The trend
// reads the ladder's own held mass arc two steps deep (the family's
// own two-step shape): the mass the rungs sum (every pickaxe the
// fleet ends with, the ladder's own height) - both steps down = the
// held mass's own fade (the fleet's end inventory thins), both steps
// up = the held mass's own swell (the ladder's own height grows), a
// trade = the swing. The iron arc and the wooden arc and the stone
// arc ride the read's own side-cars (the top rung's own mass beside
// the height, the bottom rung's residue, the middle rung's own share).
// A held step prices no direction - the honest silence (the family's
// own held law); a three-face zero mass prices nothing - the fleet
// ended pickaxe-less the whole arc (the lawful silence the zeros
// keep).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits (the
// .247 word's own law; the analysis side - scripts/fleet-mining/
// decompose.mjs - owns the fold, the fleet's own console never changes).

const PICKAXE_TIERS_END_RE = /^pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=(0|[1-9]\d*) stone=(0|[1-9]\d*) iron=(0|[1-9]\d*)$/

/**
 * The census - the family's own strict grammar, the face's own end
 * frame (the report's own pickaxe tiers line; LAST-PRINT-WINS - the
 * last print the freshest state the face held).
 *
 * @param {string[]|null} [lines] the face's own log lines
 * @returns {{wooden: number, stone: number, iron: number}}
 *   the rung cells, or the zeros when the lines themselves are junk (a
 *   face whose lines hold no report print is the LAWFUL ZERO - the
 *   never-printed face keeps the healthy-looking zeros)
 */
export function pickaxeTiersEndCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { wooden: 0, stone: 0, iron: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = PICKAXE_TIERS_END_RE.exec(l)
    if (!m) continue
    mass.wooden = Number(m[1])
    mass.stone = Number(m[2])
    mass.iron = Number(m[3])
  }
  return mass
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). Every face must hold all three
 * proven integer cells (the zero lawful - the never-printed face).
 * Extra keys never rejected.
 *
 * @param {object|null} [e] the trend fold:
 *   { back: {wooden,stone,iron}, prev: {...}, cur: {...} }
 * @returns {boolean}
 */
export function pickaxeTiersEndConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const numOk = (v) => Number.isInteger(v) && v >= 0
  const faceOk = (s) => {
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    return numOk(s.wooden) && numOk(s.stone) && numOk(s.iron)
  }
  return faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the ladder's own held mass's two-step shape.
 * The honest null when a step held (no direction - the family's own
 * held law), the three-face mass is zero (the fleet ended pickaxe-less
 * - nothing to price), or the fold fails the fence.
 *
 * @param {object|null} [e] the trend fold
 *   { back: {wooden,stone,iron}, prev: {...}, cur: {...} }
 * @returns {string|null} the row byte, or null
 */
export function pickaxeTiersEndRow (e) {
  if (!pickaxeTiersEndConsistent(e)) return null
  const { back, prev, cur } = e
  const total = (s) => s.wooden + s.stone + s.iron
  const b = total(back)
  const p = total(prev)
  const c = total(cur)
  // the fleet ended pickaxe-less across the three faces - the lawful
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bars never invent)
  if (first === 0 || second === 0) return null
  const ironArc = `the iron rung rode ${back.iron} -> ${prev.iron} -> ${cur.iron}`
  const woodArc = `the wooden rung rode ${back.wooden} -> ${prev.wooden} -> ${cur.wooden}`
  const stoneArc = `the stone rung rode ${back.stone} -> ${prev.stone} -> ${cur.stone}`
  const tail = "(the server guard's own verdict keeps the .249 word's seat beside, the blocks mined's own productivity meter keeps the .247 word's seat, the materials dump's own stockpile keeps the .248 word's seat, the loot ledger's own accounting keeps its own lane - the pickaxe tiers' end row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the pickaxe tiers end trend (v0.976.251): the held mass's own fade ran two steps deep - ${arc} - the ladder mass's own fade, ${ironArc}, ${woodArc}, ${stoneArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the pickaxe tiers end trend (v0.976.251): the held mass's own swell ran two steps deep - ${arc} - the ladder mass's own swell, ${ironArc}, ${woodArc}, ${stoneArc} ${tail}`
  }
  return `the pickaxe tiers end trend (v0.976.251): the ladder mass's own swing - ${arc} - the fade and the swell traded seats between the faces, ${ironArc}, ${woodArc}, ${stoneArc} ${tail}`
}
