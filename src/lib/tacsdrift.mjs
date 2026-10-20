// (v0.976.345) THE TACS ECHO'S OWN DRIFT - the save flush's own
// completion echo the word prices across the faces - the DRIFT cell
// (the echo's own print second vs the Done line's own second the
// same face keeps: SAME-SECOND the echo rides the Done second, DRIFT
// the echo lands one second after). The .344 tacs order word prices
// the TACS trio's own middle storage cell and names this seat their
// ledger's own next (their words: 'the drift cell the ledger's own
// next seat'); the .341 save trio clock word prices the 'Saving
// chunks' flush's own COUNT and CLOCK cells; the .343 trio order word
// prices the flush's own dimension ORDER cell - the TACS echo's own
// DRIFT cell never priced, this word's own seat beside theirs
// (co-existence by seat never by duplication: the order the storage
// mass's cell, the drift the echo's own clock cell, two cells one
// echo two words). THE TWO-VALUE LAW THE FACES KEEP: the REAL
// THIRTY-face arc F501-F530 keeps TWENTY-SIX same-second faces and
// FOUR drift faces (F507/F519/F523/F525, the echo one second later
// each) - BOTH values speak, the seat LIVE, the born-constant
// decline never rides. THE HAND THE FACES KEEP: the echo's own
// second-set the census reads - all three TACS prints one second
// every face the archive voices (the trio's own echo the one-second
// mass keeps), so the set-size-one law the drift reads (a split set
// the faces never voice - the census prices it NULL honest, the
// never-read the only shape the null keeps - the .341 clock-null law
// the class cell inherits); the Done line the reference clock keeps
// (the no-Done face the drift never reads - NULL honest, the .330
// Done clock word's own lane the frame borrows). THE GRAMMAR: the
// census re-rides the strict frames the .344 word pins byte-exact
// (the '[(HH:MM:SS)] [Server thread/INFO]: ' head the INFO frame
// convention, the 'ThreadedAnvilChunkStorage (<storage>): All chunks
// are saved' body the emitter cell byte-locked, the 'Done (N.NNNs)!
// For help, type "help"' body the reference clock's own frame
// byte-locked, the 'All dimensions are saved' summary skin the
// near-miss the lane refuses, LINE END tail boundary the .288
// precedent). THE FENCE: the class cell's own law (null honest, else
// 0 or 1 integer - the two-value record the arc's own law the tests
// re-voice, never the fence). CENSUS GUARD: zero fleet wiring, zero
// new fleet log lines - the word rides the reader's fold through the
// SECOND carrier lane (the argv[6..8] tail the .278 contract
// extends, the .281 through .344 folds the neighbours hold), the
// fleet's own console never changes.

const TACS_DRIFT_TACS_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: ThreadedAnvilChunkStorage \((world|DIM1|DIM-1)\): All chunks are saved$/
const TACS_DRIFT_DONE_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Done \(\d+\.\d{3}s\)! For help, type "help"$/

const clockOf = (m) => Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])

/**
 * The TACS echo's own drift census - the echo's own second vs the
 * Done line's own second (the same-second family's own two-value
 * cell).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{tacsDrift: number|null}|null} 0 same-second / 1 drift
 *   (+1s the faces voice) / null the never-read / null (non-array)
 */
export function tacsDriftCensus (lines) {
  if (!Array.isArray(lines)) return null
  let doneSec = null
  let tacsSecs = new Set()
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const dm = TACS_DRIFT_DONE_RE.exec(l)
    if (dm) { doneSec = clockOf(dm); tacsSecs = new Set(); continue } // the LAST Done clock the reference keeps (the .333 hand) - the newer boot the echo set resets
    if (doneSec === null) continue // the echo print before any Done clock - the older boot's frame the read refuses
    const tm = TACS_DRIFT_TACS_RE.exec(l)
    if (tm) tacsSecs.add(clockOf(tm)) // every echo print's own second inside the current boot's frame
  }
  if (doneSec === null) return { tacsDrift: null } // no Done line - the reference clock never spoke
  if (tacsSecs.size !== 1) return { tacsDrift: null } // a split set the faces never voice - the drift never invented
  const [echoSec] = tacsSecs
  return { tacsDrift: echoSec === doneSec ? 0 : 1 }
}

/**
 * The fence - the class cell's own law (null honest, else 0 or 1).
 *
 * @param {{back: {tacsDrift: number|null}, prev: {tacsDrift: number|null}, cur: {tacsDrift: number|null}}} e
 * @returns {boolean}
 */
export function tacsDriftConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (v) => v === null || v === 0 || v === 1
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.tacsDrift) && ok(e.prev.tacsDrift) && ok(e.cur.tacsDrift))
}

/**
 * The TACS echo drift's own two-step shape across three faces.
 *
 * @param {{back: {tacsDrift: number|null}, prev: {tacsDrift: number|null}, cur: {tacsDrift: number|null}}} e
 * @returns {string|null} the row or the honest silence
 */
export function tacsDriftTrendRow (e) {
  if (!tacsDriftConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.tacsDrift
  const p = prev.tacsDrift
  const c = cur.tacsDrift
  // the never-read face's own window - the honest silence (the null
  // the never-read keeps, the row never invents a class the lane
  // missed)
  if (b === null || p === null || c === null) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the drift never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .344 tacs order word prices the echo's own middle storage cell and names the drift the ledger's own next seat and the .341 save trio clock word prices the 'Saving chunks' flush's own count and clock cells and the .343 trio order word prices the flush's own dimension order - the echo's own clock cell the cell this word prices beside theirs, co-existence by seat never by duplication - and the .330 Done clock sibling the reference clock's own word and the .332 boot open clock and the .331 spawn selection and the .340 pick reach and the .337 boot quiet span siblings and the NIBBLE LAW the .342 pick nibble word keeps and the .333 closing clock and the .335 loss width and the .338 fleet ride and the .339 loss width shape classifier and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the login family's thirteen hands the .314 headcount keeps and the .336 join echo drift seat and the .310/.311 class counts and the leave sibling and the deathcause/dupclock seats and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the TACS drift's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own TACS drift trend (v0.976.345): the fleet's own echo fade ran two steps deep - ${arc} - the fleet's own echo fell back behind the Done clock each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own TACS drift trend (v0.976.345): the fleet's own echo swell ran two steps deep - ${arc} - the fleet's own echo lagged the Done clock one breath deeper each face, ${tail}`
  }
  return `the fleet's own TACS drift trend (v0.976.345): the fleet's own echo swing - ${arc} - the fleet's own echo traded the Done clock's own second between the faces, ${tail}`
}
