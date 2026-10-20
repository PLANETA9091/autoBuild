// (v0.976.344) THE TACS TRIO'S OWN STORAGE ORDER - the save flush's
// own completion echo the word prices across the faces - the ORDER
// cell (the middle print's own storage class the TACS trio's three
// 'ThreadedAnvilChunkStorage (<storage>): All chunks are saved'
// prints ride: DIM1 the middle skin the echo rode world -> DIM1 ->
// DIM-1, DIM-1 the middle skin the echo rode world -> DIM-1 -> DIM1
// - the world storage never leaves the first print the faces keep).
// The .341 save trio clock word prices the 'Saving chunks' trio's
// own COUNT and CLOCK cells and refused the TACS line a different
// emitter rides (their test's own words: 'the save's own echo a
// different emitter rides' - the lane this word owns); the .343 trio
// order word prices the 'Saving chunks' flush's own dimension ORDER
// cell - the TACS echo's own storage ORDER cell never priced, this
// word's own seat beside theirs (co-existence by seat never by
// duplication: the flush's dims and the echo's storages two lanes,
// two emitters, two words). THE TWO-VALUE LAW THE FACES KEEP: the
// REAL THIRTY-face arc F501-F530 keeps SEVENTEEN DIM1-middle faces
// and THIRTEEN DIM-1-middle faces, no third order the faces ever
// voiced (the world-first law 30/30 the tail never swaps into any
// other arrangement) - BOTH values speak, the seat LIVE, the
// born-constant decline never rides (the TACS COUNT cell the same
// audit declines born-constant: three prints every face the 30/30
// trio law keeps - the count the .341 count-law's own shape, the
// order the live cell this word prices). THE CLOCK'S OWN RE-VOICE
// THE AUDIT PAYS: the echo's own print second rides the Done line's
// own second TWENTY-SIX of THIRTY faces - the FOUR drift faces
// (F507/F519/F523/F525, the echo one second later each) the
// SAME-SECOND family's own variance the fresh archive keeps - the
// drift cell a live seat the ledger records (this word prices the
// ORDER, the drift the next seat beside). THE HAND: the LAST
// complete trio's middle print the order keeps (the LAST-PRINT-WINS
// law the .333 hand holds - a re-boot face the newest boot's own
// echo keeps; the face ending mid-trio the trailing partial the
// drop law refuses - only complete trios the census reads). THE
// PARTIAL PHASE'S OWN HONESTY: the face fewer than three TACS
// prints (or no echo at all) prices the order NULL honest - zero is
// a REAL class here (the DIM-1-middle skin the thirteen faces
// voice), the null the only shape the never-read keeps (the .341
// clock-null law the class cell inherits). THE GRAMMAR: the census
// re-rides the strict frame the .341 word's refusal battery pins
// byte-exact (the '[(HH:MM:SS)] [Server thread/INFO]: ' head the
// INFO frame convention, the 'ThreadedAnvilChunkStorage (<storage>):
// All chunks are saved' body the emitter cell byte-locked, the
// storage cell the three class skins world|DIM1|DIM-1 ride shape
// only, the 'All dimensions are saved' summary skin the near-miss
// the lane refuses, LINE END tail boundary the .288 precedent). THE
// FENCE: the class cell's own law (null honest, else 0 or 1 integer
// - the two-value record the arc's own law the tests re-voice, never
// the fence). CENSUS GUARD: zero fleet wiring, zero new fleet log
// lines - the word rides the reader's fold through the SECOND
// carrier lane (the argv[6..8] tail the .278 contract extends, the
// .281 through .343 folds the neighbours hold), the fleet's own
// console never changes.

const TACS_ORDER_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: ThreadedAnvilChunkStorage \((world|DIM1|DIM-1)\): All chunks are saved$/

/**
 * The TACS echo's own storage order census - the middle print's
 * storage class the face voiced (the LAST complete trio's middle
 * print).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{tacsDim1Middle: number|null}|null} 1 DIM1-middle /
 *   0 DIM-1-middle / null the partial trio / null (non-array)
 */
export function tacsOrderCensus (lines) {
  if (!Array.isArray(lines)) return null
  const stors = []
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = TACS_ORDER_RE.exec(l)
    if (m) stors.push(m[4]) // every print in file order - the middle the cell reads
  }
  const full = stors.length - (stors.length % 3) // the complete trios the face keeps
  if (full < 3) return { tacsDim1Middle: null } // the partial phase - the middle never invented
  const middle = stors[full - 2] // the LAST complete trio's middle print - the .333 hand
  return { tacsDim1Middle: middle === 'DIM1' ? 1 : 0 }
}

/**
 * The fence - the class cell's own law (null honest, else 0 or 1).
 *
 * @param {{back: {tacsDim1Middle: number|null}, prev: {tacsDim1Middle: number|null}, cur: {tacsDim1Middle: number|null}}} e
 * @returns {boolean}
 */
export function tacsOrderConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (v) => v === null || v === 0 || v === 1
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.tacsDim1Middle) && ok(e.prev.tacsDim1Middle) && ok(e.cur.tacsDim1Middle))
}

/**
 * The TACS storage order weather's own two-step shape across three
 * faces.
 *
 * @param {{back: {tacsDim1Middle: number|null}, prev: {tacsDim1Middle: number|null}, cur: {tacsDim1Middle: number|null}}} e
 * @returns {string|null} the row or the honest silence
 */
export function tacsOrderTrendRow (e) {
  if (!tacsOrderConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.tacsDim1Middle
  const p = prev.tacsDim1Middle
  const c = cur.tacsDim1Middle
  // the partial face's own window - the honest silence (the null the
  // never-read keeps, the row never invents a class the lane missed)
  if (b === null || p === null || c === null) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the order never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .341 save trio clock word prices the 'Saving chunks' flush's own count and clock cells and the .343 trio order word prices the flush's own dimension order - the TACS echo the different emitter their refusal named, the storage order the cell this word prices beside theirs, co-existence by seat never by duplication - and the .330 Done clock sibling the SAME-SECOND law's own partner and the .332 boot open clock and the .331 spawn selection and the .340 pick reach and the .337 boot quiet span siblings and the NIBBLE LAW the .342 pick nibble word keeps and the .333 closing clock and the .335 loss width and the .338 fleet ride and the .339 loss width shape classifier and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the login family's thirteen hands the .314 headcount keeps and the .336 join echo drift seat and the .310/.311 class counts and the leave sibling and the deathcause/dupclock seats and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the TACS order's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own TACS order trend (v0.976.344): the fleet's own save echo fade ran two steps deep - ${arc} - the fleet's own echo traded its middle storage back each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own TACS order trend (v0.976.344): the fleet's own save echo swell ran two steps deep - ${arc} - the fleet's own echo grew its DIM1-middle breath each face, ${tail}`
  }
  return `the fleet's own TACS order trend (v0.976.344): the fleet's own save echo swing - ${arc} - the fleet's own echo traded its middle storage between the faces, ${tail}`
}
