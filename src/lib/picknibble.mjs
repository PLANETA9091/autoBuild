// (v0.976.342) THE PICK'S OWN NIBBLE - the server console's own two
// lines the word prices across the faces - the NIBBLE cell (the spawn
// selection minus the version announcement, in seconds: the burst's
// own split the boot conversation's opening phase keeps - the
// distance between the vanilla server's own 'Starting minecraft
// server version N.N' announcement second and its own 'Selecting
// global world spawn...' picking second, the fresh spawn pick's own
// bite of time the announcement's own burst rides). The two INPUT
// edges the siblings price: the .332 boot open clock word prices the
// 'Starting minecraft server version' line's own clock cell (the
// conversation's own first second - the LAST print the .332 hand
// keeps, ONE-PRINT the faces keep) and the .331 spawn selection
// clock word prices the 'Selecting global world spawn...' line's own
// clock cell (the boot conversation's own picking second - the LAST
// print the .331 hand keeps, ONE-PRINT the faces keep) - the two
// edges this word's own inputs, the SPAN between them the cell it
// prices (co-existence by seat never by duplication; the .340 pick
// reach word's own tail NAMED this seat the open-to-select nibble
// the burst's own split - a {0,1} two-value cell the whole-arc audit
// prices or declines born-constant - THE AUDIT PRICES: the REAL
// TWENTY-EIGHT-face arc F501-F528 keeps TWENTY-TWO nibble-one faces
// and SIX nibble-zero faces, BOTH values speak, the seat LIVE the
// born-constant decline never rides). THE TWO-VALUE LAW THE NIBBLE
// KEEPS: the selection second rides the opening burst's own edge -
// the nibble zero, the selection lands the announcement's own second
// (the burst swallows the pick, the same-second identity the
// OPENING BURST law keeps: six faces - F507, F513, F517, F518, F521,
// F524 the burst swallowed) or the nibble one, the selection lands
// one second after (the fresh pick's own breath, twenty-two faces
// the harvest keeps) - no third value the faces ever voiced (the
// two-value record the whole-arc audit keeps). THE IDENTITY LAW THE
// SIBLINGS KEEP: the quiet minus the nibble the reach byte-equals
// (the .337 boot quiet word prices the outer span open - dawn, the
// .340 pick reach word prices the span select - dawn: quiet - nibble
// == reach the arithmetic the three words' own faces keep - the
// F524 face the proof the .340 word rode: the quiet 30, the nibble
// 0, the reach 30; the fresh F528 face the proof this round pays:
// the quiet 26, the nibble 1, the reach 25 - 26 - 1 = 25 the
// identity holds live). THE ORDERING LAW THE SPLIT KEEPS: the
// selection never precedes the announcement (the OPENING-PRECEDES
// ordering the .332 fieldread keeps, the nibble never negative the
// ordering guarantees - ONE-PRINT 28/28 the LAST==FIRST equivalence
// the faces keep both hands). THE EVIDENCE: the REAL TWENTY-EIGHT-
// face nibble arc mined from the fresh artifacts (F501-F528, the
// harvest the artifact IDs byte-agree the ledger; the F528 face the
// fire-0243 ledger's own next-fire debt this round pays - open
// 19:27:12 = 70032, select 19:27:13 = 70033, the nibble one, the
// face's own first read) - the nibble the census prices
// 1/1/1/1/1/1/0/1/1/1/1/1/0/1/1/1/0/0/1/1/0/1/1/0/1/1/1/1 - the
// honest two-value record (twenty-two ones, six zeros, no third
// value the faces ever voiced) - TWENTY-SIX REAL WINDOWS FOUR
// SPEAKS TWENTY-TWO HELD born speaking FOUR DEEP the thinnest
// speaks record the family keeps (the two-value cell's own honest
// silence the bulk of the arc rides - the sparse-arc precedent the
// .337 quiet family keeps; the W6/W12/W20/W23 swings the 1 -> 0 ->
// 1 alternations the burst's own heartbeat keeps - the pick's own
// breath lost and regained the window's own trade names; the
// W1-W5/W7-W11/W13-W19/W21-W22/W24-W26 held steps the honest
// silence prices). THE WRAP-AWARE LAW: the day the face crosses
// between the edges the arithmetic keeps (select < open numerically
// -> the wrap folds: nibble = select + 86400 - open) - never
// observed in the faces (the OPENING-PRECEDES ordering keeps the
// announcement and the selection the same day every face - the boot
// conversation seconds wide) yet the honest degenerate the census
// keeps (the wrap the .334/.335/.337/.340 law holds). THE PARTIAL
// PHASE'S OWN ZERO: the face missing either edge (no announcement
// print, or no selection print) prices the nibble zero honest (the
// phase never half-read - the .304/.306 convention holds; the
// no-print face the lawful zero). THE GRAMMAR: the census re-rides
// the two strict frames the .332/.331 words hold byte-exact - the
// '[(HH:MM:SS)] [Server thread/INFO]: ' head the INFO frame
// convention, the 'Starting minecraft server version N.N' body the
// .332 emitter's own skin (the version cell rides shape only), the
// 'Selecting global world spawn...' body the .331 emitter's own
// skin (the trailing ellipsis the cell's own shape), LINE END tail
// boundary (the .288 precedent); the LAST open print the open hand
// keeps (the .332 word's own hand byte-exact - ONE-PRINT the
// FIRST==LAST equivalence the faces keep) and the LAST select print
// the select hand keeps (the .331 word's own hand byte-exact - the
// re-boot face both hands the newest boot's own lines keep). THE
// FENCE: the clock words' own integer law plus the day ceiling
// 0..86399 the span arithmetic bounds (the nibble the two clocks'
// own distance never exceeds the day the domain keeps; the {0,1}
// record the arc's own law the tests re-voice, never the fence -
// the fence bounds the arithmetic, the arc the evidence keeps).
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold through the SECOND carrier lane the
// server-console faces ride (the argv[6..8] tail the .278 contract
// extends, the .281 through .340 folds the neighbours hold), the
// fleet's own console never changes.

const BOOT_OPEN_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Starting minecraft server version (\d+)\.(\d+)$/
const SPAWN_SELECT_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Selecting global world spawn\.\.\.$/

const toSec = (m) => Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])

/**
 * The spawn pick's own nibble census - the burst's own split the
 * face voiced (selection - announcement, seconds, wrap-aware).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{pickNibbleSec: number}|null} the mass or null (non-array)
 */
export function pickNibbleCensus (lines) {
  if (!Array.isArray(lines)) return null
  let open = null
  let sel = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const o = BOOT_OPEN_RE.exec(l)
    if (o) open = toSec(o) // the LAST open print - the .332 hand byte-exact (ONE-PRINT the equivalence keeps)
    const s = SPAWN_SELECT_RE.exec(l)
    if (s) sel = toSec(s) // the LAST select print - the .331 hand byte-exact (ONE-PRINT the equivalence keeps)
  }
  if (open === null || sel === null) return { pickNibbleSec: 0 } // the partial phase - the lawful zero
  const nib = sel >= open ? sel - open : sel + 86400 - open // the wrap the day boundary keeps
  return { pickNibbleSec: nib }
}

/**
 * The fence - the clock words' own integer law plus the day ceiling
 * 0..86399 the span arithmetic bounds.
 *
 * @param {{back: {pickNibbleSec: number}, prev: {pickNibbleSec: number}, cur: {pickNibbleSec: number}}} e
 * @returns {boolean}
 */
export function pickNibbleConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.pickNibbleSec) && ok(e.prev.pickNibbleSec) && ok(e.cur.pickNibbleSec))
}

/**
 * The pick nibble weather's own two-step shape across three faces.
 *
 * @param {{back: {pickNibbleSec: number}, prev: {pickNibbleSec: number}, cur: {pickNibbleSec: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function pickNibbleTrendRow (e) {
  if (!pickNibbleConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.pickNibbleSec
  const p = prev.pickNibbleSec
  const c = cur.pickNibbleSec
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the nibble never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the two input edges the clock hands keep: the .332 boot open clock word prices the 'Starting minecraft server version' line's own clock cell (this word's own open input - the announcement's own second the LAST hand keeps) and the .331 spawn selection clock word prices the 'Selecting global world spawn...' line's own clock cell (this word's own select input - the picking second the LAST hand keeps) and the .340 pick reach word prices the selection - dawn span (the reach the quiet's own span minus this nibble the NIBBLE LAW the sibling keeps - the identity quiet - nibble == reach the three words' faces hold) and the .337 boot quiet word prices the outer span open - dawn (the quiet the nibble's own first bite the split law keeps) and the .333 closing clock word prices the lane's own LAST print (the dusk edge the nibble never prices) and the .335 loss width word prices the lane's own inner span dusk - dawn and the .338 fleet ride word prices the done - dusk span and the .339 loss width shape word classifies the lane's own face shape and the .341 save trio clock word prices the flush's own second (the SAME-SECOND lane the completion's own breath keeps - the trio the burst's own downstream sibling) and the .330 completion and .293 prep and .294/.324 done-ms hands the boot conversation's own seconds keep and the spawn-set family .325/.326/.327/.328/.329 and the login family's thirteen hands the .314 headcount keeps and the .336 join echo drift word keeps the echo's own drift hand and the .310/.311 class counts and the leave sibling and the deathcause/dupclock seats and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the pick nibble's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own pick nibble trend (v0.976.342): the fleet's own pick nibble fade ran two steps deep - ${arc} - the fleet's own burst swallowed the pick deeper each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own pick nibble trend (v0.976.342): the fleet's own pick nibble swell ran two steps deep - ${arc} - the fleet's own pick grew its breath each face, ${tail}`
  }
  return `the fleet's own pick nibble trend (v0.976.342): the fleet's own pick nibble swing - ${arc} - the fleet's own fresh pick traded its burst between the faces, ${tail}`
}
