// (v0.976.17) THE GIANT'S OWN WHEN - the giant's seat's own second
// sentence. The seat (v0.974.27) prices the stall's threshold-crossing
// and the ring's silence, and names the gauge's own address (ts=Ns) -
// but the stream's own lane rode unnamed: WHICH THIRD of the face's
// own clock did the thread's freeze ride? The cadence lens (the
// stream's own thirds, v0.976.11) prices the deaths' lanes by the same
// cut; the giant's own stall rode the same clock unnamed. The when
// word prices the stall's lane by the heartbeat series' own bookends
// (the rail's own clock - the same series the continuity row reads,
// the one-fold-one-truth law: the fold prices its own clock, never
// borrows another fold's endTs).
//
// The lane law: the starveclock cut's own formula (thirdS = endTs / 3,
// the boundary rides the later third - the one-formula law the o2
// fold's thirds rode since v0.976.11). One ts always owns exactly one
// lane - the lanes partition the clock, no tie is possible; the fold's
// fence still guards the address against outrunning the stream that
// priced it.
//
// The nouns: DAWN (the face's own opening) / NOON (the walk's own
// middle) / DUSK (the stream's own end) - the giant's own day-words,
// named by the lane the stall rode.
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits.

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie).
 *
 * @param {object|null} [b] the giant's when fold
 * @returns {boolean}
 */
export function giantWhenConsistent (b) {
  if (!b || typeof b !== 'object' || Array.isArray(b)) return false
  const { giantTsS, maxMainLateMs, firstTsS, lastTsS, freezes } = b
  const intOrNull = (v) => v === null || v === undefined || (Number.isInteger(v) && v >= 0)
  if (!intOrNull(giantTsS) || !intOrNull(maxMainLateMs) || !intOrNull(firstTsS)) return false
  // the pair rides together: the giant's address and the stall's own
  // size are set by the same branch of the census - one without the
  // other lies
  if ((giantTsS === null || giantTsS === undefined) !== (maxMainLateMs === null || maxMainLateMs === undefined)) return false
  // the clock's own image: no first beat prices no last beat
  if (firstTsS === null || firstTsS === undefined) {
    return lastTsS === null || lastTsS === undefined
  }
  if (!Number.isInteger(lastTsS) || lastTsS <= 0) return false
  if (firstTsS > lastTsS) return false
  if (!Number.isInteger(freezes) || freezes < 0) return false
  // the stall never outruns the stream that priced it
  if (giantTsS !== null && giantTsS !== undefined && giantTsS > lastTsS) return false
  return true
}

/**
 * The word - one line, the giant's own when. The honest null when the
 * seat never rode (no giant past the threshold, no clock, or the ring
 * dumped and the freeze row owns the story - the when word is the
 * seat's own second sentence, never a solo word).
 *
 * @param {object|null} [b] the giant's when fold
 *   { giantTsS, maxMainLateMs, firstTsS, lastTsS, freezes }
 * @returns {string|null} the row byte, or null
 */
export function giantWhenRow (b) {
  if (!giantWhenConsistent(b)) return null
  const { giantTsS, maxMainLateMs, firstTsS, lastTsS, freezes } = b
  // the seat's own law: a face the ring dumped has no giant's seat -
  // the freeze row owns their story, the when word rides nothing
  if (freezes > 0) return null
  // the honest silences: no giant address, or no clock to price the lane
  if (giantTsS === null || giantTsS === undefined) return null
  if (!Number.isInteger(lastTsS) || lastTsS <= 0) return null
  // the starveclock cut's own formula (thirdS = endTs / 3, the
  // boundary rides the later third - the one-formula law)
  const thirdS = lastTsS / 3
  const lane = giantTsS < thirdS ? 'early' : giantTsS < 2 * thirdS ? 'mid' : 'late'
  const noun = lane === 'early' ? "THE GIANT'S OWN DAWN" : lane === 'mid' ? "THE GIANT'S OWN NOON" : "THE GIANT'S OWN DUSK"
  const place = lane === 'early' ? "the face's own opening" : lane === 'mid' ? "the walk's own middle" : "the stream's own end"
  return `the giant's own when (v0.976.17): the ${maxMainLateMs}ms stall rode the stream's own ${lane} third (ts ${giantTsS} of the rail's ${firstTsS}..${lastTsS}s) - ${noun}: the thread's own freeze rode ${place}`
}
