// (v0.976.292) THE SERVER FILL'S OWN VOLUME MASS - the server console's
// own fill result lines the word prices across the faces. THE EVIDENCE
// (the seat the fleet-server-log artifact lane carries): the vanilla
// server's own broadcast prints '[14:42:43] [Server thread/INFO]:
// Successfully filled 1537 block(s)' (F494's own face, run
// 39268802792) - the server's own echo of the fleet's fill commands
// (the shelter walls and the yard barrier the builders lay), one print
// per fill command the server executed, the volume cell N the blocks
// the fill placed - and no book owned the mass across the faces: the
// .278 advancement word prices the same console's own advancement
// lines (its grammar refuses the fill line by shape), the .281/.289/
// .290 gc words price the same console's own [gc] band (their frames
// refuse the INFO thread lines), the deathcause module prices the
// join/leave/death lines, the 'Changed the block at' echo lane and the
// 'Could not set the block' refusal lane keep their own rows beside
// (the same fill conversation's siblings this word never prices) - the
// fill mass itself rode unread (the REAL seven-face arc the faces
// carry: run36284626465 filled 1810 across 12 fills, run36286821015
// filled 2503 across 12, run36289053811 filled 1815 across 12,
// run36292057377 filled 2362 across 12, F492 filled 2259 across 11,
// F493 filled 1840 across 11, F494 filled 2236 across 11 - the five
// REAL windows the arc holds: W1 the swing 1810 -> 2503 (+693) ->
// 1815 (-688), W2 the swing 2503 -> 1815 (-688) -> 2362 (+547), W3
// the swing 1815 -> 2362 (+547) -> 2259 (-103), W4 the fade 2362 ->
// 2259 (-103) -> 1840 (-419) - the builders' own quiet the fade names,
// W5 the swing 2259 -> 1840 (-419) -> 2236 (+396) - FIVE REAL WINDOWS
// FIVE SPEAKS THE WORD BORN SPEAKING FIVE DEEP).
//
// GRAMMAR: the server's own frame byte-exact - the
// '[(HH:MM:SS)] [Server thread/INFO]: ' head the .278 word's own frame
// convention holds, the 'Successfully filled ' body, the N cell the
// proven integer no leading zero no sign (the .248 house law), the
// ' block(s)' tail, LINE END tail boundary (the .288 word's own
// precedent); the near-miss lanes never ride - the bot-tagged prefix,
// the pretty spacing, the singular skin (the server never prints
// 'block'), the missing tail, the altered verb, the leading-zero N,
// the negative N, the float N, the leading whitespace, the trailing
// junk, the plural head, the CR tail.
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold through the SECOND carrier lane the
// server-console faces ride (the argv[6..8] tail the .278 contract
// extends, the .281/.289/.290 folds the neighbours hold), the fleet's
// own console never changes.

const FILL_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: Successfully filled (0|[1-9]\d*) block\(s\)$/

/**
 * The fill census - the volume the face's fills placed.
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{filled: number, fills: number}|null} the mass or null (non-array)
 */
export function fillVolumeCensus (lines) {
  if (!Array.isArray(lines)) return null
  const mass = { filled: 0, fills: 0 }
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = FILL_RE.exec(l)
    if (!m) continue
    mass.filled += Number(m[2]) // the volume the lane sums whole (the .232 census law)
    mass.fills += 1 // one line one fill (the count hand the same lane holds - the .289 pauses side-car precedent)
  }
  return mass
}

/**
 * The fence - every face the proven non-negative integer cells.
 *
 * @param {{back: {filled: number, fills: number}, prev: {filled: number, fills: number}, cur: {filled: number, fills: number}}} e
 * @returns {boolean}
 */
export function fillVolumeConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n) && n >= 0
  const faceOk = (f) => Boolean(f) && numOk(f.filled) && numOk(f.fills)
  return Boolean(e.back && e.prev && e.cur && faceOk(e.back) && faceOk(e.prev) && faceOk(e.cur))
}

/**
 * The fill weather's own two-step shape across three faces.
 *
 * @param {{back: {filled: number, fills: number}, prev: {filled: number, fills: number}, cur: {filled: number, fills: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function fillVolumeTrendRow (e) {
  if (!fillVolumeConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.filled
  const p = prev.filled
  const c = cur.filled
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the fill never invents - the REAL faces' own held
  // prairie the equal-volume windows the silence prices)
  if (first === 0 || second === 0) return null
  const fillsArc = `the fills hand rode ${back.fills} -> ${prev.fills} -> ${cur.fills}`
  const tail = "(the advancement word keeps the same console's own achievement seat (the .278 word - whose frame refuses the fill line by shape), the gc band keeps the same console's own JVM seats (the .281 pause word and the .289 heap word and the .290 concurrent word - their frames refuse the INFO thread lines), the deathcause module keeps the join/leave/death lines, the 'Changed the block at' echo lane and the 'Could not set the block' refusal lane keep their own rows beside (the same fill conversation's siblings this word never prices) - the fill mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the server fill trend (v0.976.292): the builders' own fade ran two steps deep - ${arc} - the volume thinned, ${fillsArc} ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the server fill trend (v0.976.292): the builders' own swell ran two steps deep - ${arc} - the volume surged, ${fillsArc} ${tail}`
  }
  return `the server fill trend (v0.976.292): the builders' own swing - ${arc} - the volume traded between the faces, ${fillsArc} ${tail}`
}
