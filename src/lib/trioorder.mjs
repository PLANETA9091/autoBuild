// (v0.976.343) THE TRIO'S OWN ORDER - the boot conversation's own save
// flush the word prices across the faces - the ORDER cell (the middle
// print's own dimension class the trio's three 'Saving chunks for
// level' prints ride: the_end the middle print's skin, the flush rode
// overworld -> the_end -> the_nether, or the_nether the middle print's
// skin, the flush rode overworld -> the_nether -> the_end - the
// overworld never leaves the first print the faces keep). The .341
// save trio clock word prices the trio's own COUNT and CLOCK cells
// (the SAME-SECOND lane the completion's own breath keeps) and
// declared the order SHAPE ONLY (their ORDER LAW: the dimension cells
// ride shape only, the count and the clock the order never touches) -
// the ORDER cell itself never priced, this word's own seat beside
// theirs (co-existence by seat never by duplication). THE TWO-VALUE
// LAW THE FACES KEEP: the REAL THIRTY-face arc F501-F530 keeps
// SEVENTEEN end-middle faces and THIRTEEN nether-middle faces, no
// third order the faces ever voiced (the overworld-first law 30/30
// the tail never swaps into any other arrangement) - BOTH values
// speak, the seat LIVE, the born-constant decline never rides. THE
// SAME-SECOND RE-VOICE THE AUDIT PAYS: the trio's own print second
// and the Done line's own second ride the same second THIRTY of
// THIRTY faces (the .341 word's four-face law the whole archive
// re-keeps - run68's own fixture face the same law holds). THE HAND:
// the LAST complete trio's middle print the order keeps (the
// LAST-PRINT-WINS law the .333 hand holds - a re-boot face the
// newest boot's own flush keeps; the face ending mid-trio the
// trailing partial the drop law refuses - only complete trios the
// census reads). THE PARTIAL PHASE'S OWN HONESTY: the face fewer
// than three trio prints (or no trio at all) prices the order NULL
// honest - zero is a REAL class here (the nether-middle skin the
// thirteen faces voice), the null the only shape the never-read
// keeps (the .341 clock-null law the class cell inherits: the cell
// never lies a middle the lane never rode). THE GRAMMAR: the census
// re-rides the strict frame the .341 word holds byte-exact (the
// '[(HH:MM:SS)] [Server thread/INFO]: ' head the INFO frame
// convention, the 'Saving chunks for level 'ServerLevel[world]'/
// minecraft:<dim>' body the level cell byte-locked (a foreign level
// name the near-miss the lane refuses), the dimension cell the three
// class skins overworld|the_nether|the_end ride shape only, LINE END
// tail boundary the .288 precedent). THE FENCE: the class cell's own
// law (null honest, else 0 or 1 integer - the two-value record the
// arc's own law the tests re-voice, never the fence). CENSUS GUARD:
// zero fleet wiring, zero new fleet log lines - the word rides the
// reader's fold through the SECOND carrier lane the server-console
// faces ride (the argv[6..8] tail the .278 contract extends, the
// .281 through .342 folds the neighbours hold), the fleet's own
// console never changes.

const TRIO_ORDER_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Saving chunks for level 'ServerLevel\[world\]'\/minecraft:(overworld|the_nether|the_end)$/

/**
 * The save trio's own order census - the middle print's dimension
 * class the face voiced (the LAST complete trio's middle print).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{trioEndMiddle: number|null}|null} 1 the_end-middle /
 *   0 the_nether-middle / null the partial trio / null (non-array)
 */
export function trioOrderCensus (lines) {
  if (!Array.isArray(lines)) return null
  const dims = []
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = TRIO_ORDER_RE.exec(l)
    if (m) dims.push(m[4]) // every print in file order - the middle the cell reads
  }
  const full = dims.length - (dims.length % 3) // the complete trios the face keeps
  if (full < 3) return { trioEndMiddle: null } // the partial phase - the middle never invented
  const middle = dims[full - 2] // the LAST complete trio's middle print - the .333 hand
  return { trioEndMiddle: middle === 'the_end' ? 1 : 0 }
}

/**
 * The fence - the class cell's own law (null honest, else 0 or 1).
 *
 * @param {{back: {trioEndMiddle: number|null}, prev: {trioEndMiddle: number|null}, cur: {trioEndMiddle: number|null}}} e
 * @returns {boolean}
 */
export function trioOrderConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (v) => v === null || v === 0 || v === 1
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.trioEndMiddle) && ok(e.prev.trioEndMiddle) && ok(e.cur.trioEndMiddle))
}

/**
 * The trio order weather's own two-step shape across three faces.
 *
 * @param {{back: {trioEndMiddle: number|null}, prev: {trioEndMiddle: number|null}, cur: {trioEndMiddle: number|null}}} e
 * @returns {string|null} the row or the honest silence
 */
export function trioOrderTrendRow (e) {
  if (!trioOrderConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.trioEndMiddle
  const p = prev.trioEndMiddle
  const c = cur.trioEndMiddle
  // the partial face's own window - the honest silence (the null the
  // never-read keeps, the row never invents a class the lane missed)
  if (b === null || p === null || c === null) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the order never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the .341 save trio clock word prices the trio's own count and clock cells (the SAME-SECOND lane the completion's own breath keeps - the order the cell this word prices beside theirs, co-existence by seat never by duplication) and the .330 Done clock sibling the SAME-SECOND law's own partner and the .332 boot open clock and the .331 spawn selection and the .340 pick reach and the .337 boot quiet span siblings and the NIBBLE LAW the .342 pick nibble word keeps and the .333 closing clock and the .335 loss width and the .338 fleet ride and the .339 loss width shape classifier and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the login family's thirteen hands the .314 headcount keeps and the .336 join echo drift seat and the .310/.311 class counts and the leave sibling and the deathcause/dupclock seats and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the trio order's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own trio order trend (v0.976.343): the fleet's own save flush fade ran two steps deep - ${arc} - the fleet's own flush traded its middle dim back each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own trio order trend (v0.976.343): the fleet's own save flush swell ran two steps deep - ${arc} - the fleet's own flush grew its end-middle breath each face, ${tail}`
  }
  return `the fleet's own trio order trend (v0.976.343): the fleet's own save flush swing - ${arc} - the fleet's own flush traded its middle dim between the faces, ${tail}`
}
