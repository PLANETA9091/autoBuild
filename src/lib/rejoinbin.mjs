// (v0.976.346) THE FLEET'S OWN RE-JOIN - the server console's own
// '<name> joined the game' lane the word prices across the faces -
// the RE-JOIN BIN (the count of mid-run re-join echoes the face
// voiced: a name's SECOND-and-later join the same face keeps - the
// balance's own inner shape the census never priced). The .314 join
// mass word prices the lane's own TOTAL (every echo the face holds)
// and the .336 join echo drift word prices the echo's own clock cell
// (the pair drift the login's own second keeps) - the bin the
// balance's own INNER shape never rode: joins equal losses every
// face the balance law keeps (24=24, 28=28) yet the first logins and
// the re-connections the total never splits (co-existence by seat
// never by duplication: the mass the total's own cell, the drift the
// echo's own clock cell, the bin the SECOND+ join's own count this
// word prices beside theirs). THE MULTI-CLASS LAW THE FACES KEEP:
// the REAL THIRTY-ONE-face arc F501-F531 keeps SEVENTEEN distinct
// classes (2,4,5,6,7,8,9,10,12,13,16,17,18,19,20,27,50) no face
// born-constant the arc's own churn keeps - the F524 face the churn
// monster's own 50 re-joins the ceiling rides (the seventy logins
// the .336 word's own tail names), F514's and F522's own 27 the
// storm class, F530's own 4 (F14/F10/F15/F17 the fire-0443 ledger
// named) and F531's own 8 (F13 twice the deep-read paid) the fresh
// faces the bin re-voices - MANY values speak, the seat LIVE, the
// born-constant decline never rides. THE HAND: every 'joined the
// game' echo the face voices the census reads in file order, the
// name's own join tally the bin keeps, the events beyond each name's
// FIRST the count sums (joins minus distinct names the arithmetic
// the tally keeps); the re-join never precedes its own first join
// (the bin never negative the tally guarantees - the face's own
// file order the read keeps). THE LAWFUL ZERO: the face no join
// echo voices prices the bin zero honest (the .304/.306 convention
// the count words keep - the never-joined face the lawful zero).
// THE GRAMMAR: the census re-rides the strict frame the .336 word
// holds byte-exact (the '[(HH:MM:SS)] [Server thread/INFO]: ' head
// the INFO frame convention, the name cell rides shape only the
// .321 word's own shape law keeps, the 'joined the game' tail the
// lane's own skin byte-locked, LINE END tail boundary the .288
// precedent). THE FENCE: the count words' own integer law plus the
// day ceiling 0..86399 (the bin never exceeding the join mass it
// rides the .336 fence law keeps). CENSUS GUARD: zero fleet wiring,
// zero new fleet log lines - the word rides the reader's fold
// through the SECOND carrier lane (the argv[6..8] tail the .278
// contract extends, the .281 through .345 folds the neighbours
// hold), the fleet's own console never changes.

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

/**
 * The fleet's own re-join census - the bin the balance's inner
 * shape keeps (the count of SECOND-and-later joins per name the
 * face voiced).
 *
 * @param {string[]} lines - the server console face's own lines
 * @returns {{rejoinBinEvents: number}|null} the mass or null (non-array)
 */
export function rejoinBinCensus (lines) {
  if (!Array.isArray(lines)) return null
  const tally = new Map()
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = JOIN_ECHO_RE.exec(l)
    if (m) tally.set(m[4], (tally.get(m[4]) || 0) + 1)
  }
  let events = 0
  for (const n of tally.values()) events += n - 1 // the joins beyond each name's first
  return { rejoinBinEvents: events }
}

/**
 * The fence - the count words' own integer law plus the day ceiling
 * 0..86399.
 *
 * @param {{back: {rejoinBinEvents: number}, prev: {rejoinBinEvents: number}, cur: {rejoinBinEvents: number}}} e
 * @returns {boolean}
 */
export function rejoinBinConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const ok = (n) => Number.isInteger(n) && n >= 0 && n <= 86399
  return Boolean(e.back && e.prev && e.cur &&
    ok(e.back.rejoinBinEvents) && ok(e.prev.rejoinBinEvents) && ok(e.cur.rejoinBinEvents))
}

/**
 * The re-join bin weather's own two-step shape across three faces.
 *
 * @param {{back: {rejoinBinEvents: number}, prev: {rejoinBinEvents: number}, cur: {rejoinBinEvents: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function rejoinBinTrendRow (e) {
  if (!rejoinBinConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.rejoinBinEvents
  const p = prev.rejoinBinEvents
  const c = cur.rejoinBinEvents
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the bin never invents)
  if (first === 0 || second === 0) return null
  const tail = "(the same join lane's own seats the siblings price: the .314 join mass word prices the lane's own TOTAL (every echo the face holds - the bin the SECOND+ joins the total never splits) and the .336 join echo drift word prices the echo's own clock cell (the pair drift the login's own second keeps - two cells one lane three words co-existence by seat never by duplication) and the deathcause join/leave counts and the leave sibling and the .321/.322 login dawn/dusk seats and the .312/.313 port pair and the .315/.316/.317/.318/.319/.320 login cell seats the login family's thirteen hands keep and the .310/.311 class counts and the loss lane the .333/.334/.335/.338/.339 words price and the .332 opening clock and the .331 selection and the .330 completion and the .341 save trio clock and the .343 trio order and the .344 TACS order and the .345 TACS drift and the .293 prep and .294/.324 done-ms hands and the spawn-set family .325/.326/.327/.328/.329 and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the re-join bin's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the fleet's own re-join trend (v0.976.346): the fleet's own re-join bin fade ran two steps deep - ${arc} - the fleet's own churn calmed each face, ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the fleet's own re-join trend (v0.976.346): the fleet's own re-join bin swell ran two steps deep - ${arc} - the fleet's own churn grew each face, ${tail}`
  }
  return `the fleet's own re-join trend (v0.976.346): the fleet's own re-join bin swing - ${arc} - the fleet's own churn traded between the faces, ${tail}`
}
