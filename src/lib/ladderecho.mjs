// (v0.976.35) THE STREAK'S OWN ECHO - the reach owner's cross-face
// word. The field priced the seat's own story by hand before the word
// existed: FACE 312 = 38466304299's deepest rung #92 rode F9's own
// streak (92 of 157 ratchets, F1 64 to #58, F17 1 to #1), then FACE
// 324 = 38512359636's ladder woke with F6 owning 11 of 11 = 100.0%
// (the deepest rung #11), and FACE 325 = 38515694860's ladder emptied
// the seat into the tie (5 ratchets, the tie's own law held - no solo
// streak owns the reach). The within-face streak row (v0.976.16)
// prices WHO rode the deepest rung one face at a time; the OWNER'S
// CROSS-FACE story - the same streak repeating, or the seat trading
// hands - rode unnamed: one face cannot read persistence (the
// v0.471.0 law), and the echo is the streak's own subject.
//
// The branch law: ONE SEAT ONE WORD - the same bot owning the deepest
// rung both faces prices the STREAK'S OWN DYNASTY, a different bot
// owning it prices the STREAK'S OWN TURN, an ownerless face (the
// tie's own law: a tie owns nothing; the unnamed share; the quiet
// ladder) prices the honest silence - the word never seats a crowd
// (the family's own tie law). The co-existence law rides by seat: the
// within-face streak row prices WHO within the face, this word prices
// the seat's own cross-face story - never a retelling.
//
// The carrier: decompose's own prior-face argument (the promise's own
// cross-face leg, v0.471.0; the giant's echo's carrier, v0.976.19).
// The fold receives the census's own books per face (liarLadderReachBook
// owns the fold - one-parser law: the same census runs over the prior
// face's lines, never a fork; the SAME cells the reach and streak rows
// already hold). The fence rides the family's own law imported whole
// (liarLadderReachConsistent - never a re-declaration, the floor
// fiction lesson).
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

import { liarLadderReachConsistent } from './liarladder.mjs'

/**
 * The book's own owner read - the same cells the within-face streak
 * row holds (perBot's deepest against the book's own reach). One bot
 * owning the deepest rung names the seat; a tie names nothing (the
 * tie's own law); the unnamed share names nothing; a quiet ladder
 * names nothing.
 *
 * @param {object|null} [b] the liarLadderReachBook fold
 * @returns {object|null} { bot, pages, deepest, reach, ratchets } or null
 */
export function reachOwner (b) {
  if (!liarLadderReachConsistent(b)) return null
  if (b.ratchets === 0) return null
  const owners = Object.entries(b.perBot).filter(([, st]) => st.deepest === b.reach)
  if (owners.length !== 1) return null
  const [bot, st] = owners[0]
  return { bot, pages: st.pages, deepest: st.deepest, reach: b.reach, ratchets: b.ratchets }
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie).
 *
 * @param {object|null} [e] the echo fold: { prevBook, curBook } per
 *   face liarLadderReachBook folds
 * @returns {boolean}
 */
export function ladderEchoConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  return liarLadderReachConsistent(e.prevBook) && liarLadderReachConsistent(e.curBook)
}

/**
 * The word - one line, the reach owner's cross-face story. The honest
 * null when either face's seat rode ownerless (the tie's own law, the
 * unnamed share, the quiet ladder - the sparse law: a voiceless face
 * prices no echo).
 *
 * @param {object|null} [e] the echo fold { prevBook, curBook }
 * @returns {string|null} the row byte, or null
 */
export function ladderEchoRow (e) {
  if (!ladderEchoConsistent(e)) return null
  const prevOwner = reachOwner(e.prevBook)
  const curOwner = reachOwner(e.curBook)
  // the honest silences: a named seat needs both faces (the tie owns
  // nothing, the quiet ladder owns no streak - the bars never invent)
  if (!prevOwner || !curOwner) return null
  if (curOwner.bot === prevOwner.bot) {
    return `the ladder's own streak echo (v0.976.35): ${curOwner.bot}'s own reach repeated - the deepest rung rode the same streak again (#${prevOwner.reach} prior, #${curOwner.reach} this face, ${curOwner.pages} of ${curOwner.ratchets} ratchet(s)) - the streak's own dynasty holding (the reach's seat never traded)`
  }
  return `the ladder's own streak echo (v0.976.35): ${curOwner.bot} took the reach's seat ${prevOwner.bot} rode - the deepest rung's own owner traded between the walks (#${prevOwner.reach} prior, #${curOwner.reach} this face) - the streak's own turn (no dynasty rode unnamed)`
}
