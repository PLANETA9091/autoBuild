// (v0.976.31) THE KIND'S OWN SEAT ECHO - the death book's own head
// kind across faces. The field priced BOTH shapes by hand eleven
// faces deep before the word existed: the mob kind's own DYNASTY -
// FACE 313 through FACE 317's book rode mob as the head kind five
// faces straight (4, 1, 3, 4, 10 of 12 - the 317 siege the dynasty's
// own peak) - then the CHURN ERA: FACE 318's drown took the seat the
// mob rode, and no kind held two faces straight again (319's
// explosion, 320's mob, 321's fall, 322's explosion 4 of 7, 323's mob
// 7 of 7 - six faces, six turns) while the deaths' own kind seat
// (v0.784.0) priced each face's owner WITHIN the face and the
// owner's cross-face story rode unnamed.
//
// The branch law: the head kind is the book's own argmax under the
// family's tie law (counts desc, name asc bytewise - the seat's tie
// law, the deathkinds.mjs idiom); a REPEATING head prices the
// dynasty (the same kind's own seat two faces straight), a CHANGING
// head prices the turn (the seat changing hands), an EMPTY book
// prices the honest silence (an empty book has no seat - and a
// birth prices no echo: the echo needs a prior holder, the one-face
// law's own shape).
//
// The carrier: decompose's prior-face argument (the promise's own
// cross-face leg, v0.471.0). The fold receives the census's own head
// images { kind, deaths } per face (deathKindCensus owns the buckets
// - one-parser law, the same parser runs over the prior face's lines,
// never a fork; the head is the census's own argmax, never a
// re-count). The head kind's own mass rides the row as context bytes
// (co-existence reported, causation never guessed - the v0.471.0
// idiom). The explosion book's own echo (v0.976.29) rides the same
// prev census - the voice and the owner are different subjects,
// co-existence by seat never by duplication.
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.

/** The family's own tie law byte-for-byte: counts desc, name asc
 *  (bytewise - the deathkinds.mjs idiom, never forked). */
const SEAT_TIE_LAW = (a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1)

/**
 * The head - the book's own argmax kind under the tie law. An empty
 * book (no buckets) reads null (the empty book has no seat); a junk
 * bucket never invents a body.
 *
 * @param {object} [byKind] the census's own kind tally
 * @returns {{kind: string, deaths: number}|null} the head image, or null
 */
export function kindSeatHead (byKind) {
  if (!byKind || typeof byKind !== 'object' || Array.isArray(byKind)) return null
  const ranked = Object.entries(byKind).filter(([k, v]) => typeof k === 'string' && k.length > 0 && Number.isInteger(v) && v > 0)
  if (!ranked.length) return null
  ranked.sort(SEAT_TIE_LAW)
  return { kind: ranked[0][0], deaths: ranked[0][1] }
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie). A null head is a legal shape (the
 * empty book's own silence); a present head must carry a non-empty
 * kind byte and a non-negative integer mass.
 *
 * @param {object|null} [e] the echo fold: { prev, cur } per-face
 *   head images { kind, deaths } or null (the empty book)
 * @returns {boolean}
 */
export function kindEchoConsistent (e) {
  if (!e || typeof e !== 'object' || Array.isArray(e)) return false
  const faceOk = (s) => {
    if (s === null) return true // the empty book's own silence is a legal shape
    if (!s || typeof s !== 'object' || Array.isArray(s)) return false
    const { kind, deaths } = s
    if (typeof kind !== 'string' || !kind.length) return false
    if (!Number.isInteger(deaths) || deaths < 0) return false
    return true
  }
  return faceOk(e.prev) && faceOk(e.cur)
}

/**
 * The word - one line, the death book's own head kind across faces.
 * The honest null when the fence fails, an empty book rides either
 * face (an empty book has no seat; a birth prices no echo), or the
 * junk seats lie. A repeating head prices the dynasty; a changing
 * head prices the turn (co-existence reported, causation never
 * guessed).
 *
 * @param {object|null} [e] the echo fold
 *   { prev: {kind, deaths}|null, cur: {kind, deaths}|null }
 * @returns {string|null} the row byte, or null
 */
export function kindEchoRow (e) {
  if (!kindEchoConsistent(e)) return null
  const { prev, cur } = e
  // the honest silences: an empty book has no seat, and a birth
  // prices no echo (the echo needs a prior holder)
  if (!cur || !prev) return null
  if (cur.kind === prev.kind) {
    return `the kind's own seat echo (v0.976.31): the ${cur.kind} kind's own seat repeated - ${cur.deaths} death(s) this face against ${prev.deaths} prior - the dynasty holding (co-existence reported, causation never guessed)`
  }
  return `the kind's own seat echo (v0.976.31): the ${cur.kind} kind took the seat the ${prev.kind} kind rode - ${cur.deaths} death(s) this face against ${prev.deaths} prior - the seat's own turn (no dynasty rode unnamed)`
}
