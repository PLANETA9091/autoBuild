// (v0.976.291) THE REPORT WRITE RECEIPT'S OWN MASS - the report line's
// own write receipt the word prices across the faces. THE EVIDENCE (the
// seat the fleet faces' own stdout carries): the teardown prints
// 'report: data/fleet-report.json written' (F494's own face, run
// 39268802792) - testbed/fleet19.mjs's write receipt (the atomicsave
// write's own echo: the fleet writes data/fleet-report.json through the
// atomic save and then console.log('report: data/fleet-report.json
// written') - the emitter's own atomicsave test pins the exact print),
// one print per face, the write's own receipt - and no book owned the
// receipt across the faces: the fate word (the v0.546.0 facefate)
// prices the account's fate from the FLEET RESULT block and the
// partial's own evidence lines (its law: result outranks partial, a
// junk or empty read is 'none' with the honest why) - the receipt line
// itself the fate never prices, the write's own echo rode unread. THE
// MASS IS THE OOM CLASS'S OWN SIGNATURE: every face that survives to
// the teardown carries the receipt exactly once; the faces the OOM
// killer or the CI cancel takes before the teardown carry none (the
// REAL zero face run36292057377's own body: the stormguard FATAL lines
// the face ends on, no receipt line anywhere - the run53/35647216505
// OOM class the receipt's absence names). the census sums the receipt
// lines whole (the .232 census law - the count never caps), the fence
// prices the proven non-negative integer, the trend row the receipt
// weather's two-step shape (fade the faces lost the write, swell the
// faces reached the write again, swing the write and the death traded
// seats - the REAL arc's own 1 -> 0 -> 1 the OOM class rode between
// the faces), the held step the honest silence - the family's own held
// law; the three-face zero mass prices nothing - the whole arc the
// write never landed (the lawful silence the .255 churn ceiling's own
// lawful-zero birth the precedent holds). The REAL arc the faces carry:
// the run185/run188/run190 faces the receipt 1 each, the
// run36284626465/run36286821015/run36289053811 faces 1 each, the
// run36292057377 face 0 (the OOM face), the run36295859380 and
// run36301385048 faces 1 each, the F492/F493/F494 faces 1 each - the
// windows the arc holds: W36289053811-36292057377-36295859380 the
// swing 1 -> 0 -> 1 the death traded and the write returned, the
// W36292057377-36295859380-36301385048 the 0 -> 1 -> 1 the held law
// keeps silent (the arrival rode unnamed - the family's own held
// precedent).
//
// GRAMMAR: the whole-line anchor - 'report: data/fleet-report.json
// written' byte-exact, LINE END tail boundary (the .288 word's own
// precedent: the receipt is the line's own last byte); the near-miss
// lanes never ride - the bot-tagged prefix, the pretty spacing, the
// missing tail, the altered tail verb, the temp path skin (the
// writeFileAtomic lesson's own .tmp name), the leading whitespace, the
// trailing junk, the plural head, the other path, the uppercase head,
// the CR tail the LF fleet never prints.
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits.

const RECEIPT_RE = /^report: data\/fleet-report\.json written$/

/**
 * The receipt census - the count the face's own lines hold.
 *
 * @param {string[]} lines - the face's own stdout lines
 * @returns {{receipts: number}} the receipt lines the face carried
 */
export function reportReceiptCensus (lines) {
  let receipts = 0
  if (Array.isArray(lines)) {
    for (const line of lines) {
      if (typeof line === 'string' && RECEIPT_RE.test(line)) receipts++
    }
  }
  return { receipts }
}

/**
 * The fence - every face the proven non-negative integer cell.
 *
 * @param {{back: {receipts: number}, prev: {receipts: number}, cur: {receipts: number}}} e
 * @returns {boolean}
 */
export function reportReceiptConsistent (e) {
  if (!e || typeof e !== 'object') return false
  const numOk = (n) => Number.isInteger(n) && n >= 0
  return Boolean(e.back && e.prev && e.cur &&
    numOk(e.back.receipts) && numOk(e.prev.receipts) && numOk(e.cur.receipts))
}

/**
 * The receipt weather's own two-step shape across three faces.
 *
 * @param {{back: {receipts: number}, prev: {receipts: number}, cur: {receipts: number}}} e
 * @returns {string|null} the row or the honest silence
 */
export function reportReceiptTrendRow (e) {
  if (!reportReceiptConsistent(e)) return null
  const { back, prev, cur } = e
  const b = back.receipts
  const p = prev.receipts
  const c = cur.receipts
  // the three-face zero mass - the family's own shape keeps the
  // silence (the zeros never invent a trend)
  if (b === 0 && p === 0 && c === 0) return null
  const first = p - b
  const second = c - p
  const arc = `${b} -> ${p} (${first >= 0 ? '+' : ''}${first}) -> ${c} (${second >= 0 ? '+' : ''}${second})`
  // a held step is no direction - the honest silence (the family's
  // own held law: the receipt never invents - the REAL faces' own
  // held prairie the completed-run windows the silence prices)
  if (first === 0 || second === 0) return null
  const tail = "(the fate word keeps the fate lane (the v0.546.0 facefate's own result/partial/none rows - the account's fate the result block prices, the receipt the write's own echo the fate never prices), the atomicsave write's own emitter law keeps its test seat (the fleet19.mjs print the atomicsave test pins), the report frame's own words keep their seats (the .255 ceiling word, the .258 duck word, the .256 sentry row), the launch line the .279 bootstrap word prices, the counters band the .261-.288 words keep, the gc band the .281/.289/.290 words keep - the receipt mass's row alone, co-existence by seat never by duplication)"
  if (first < 0 && second < 0) {
    return `the report receipt trend (v0.976.291): the write receipt's own fade ran two steps deep - ${arc} - the faces lost the write (the teardown stopped carrying the echo), ${tail}`
  }
  if (first > 0 && second > 0) {
    return `the report receipt trend (v0.976.291): the write receipt's own swell ran two steps deep - ${arc} - the faces reached the write again (the teardown's own echo rebuilt), ${tail}`
  }
  return `the report receipt trend (v0.976.291): the write receipt's own swing - ${arc} - the write and the death traded seats between the faces (the receipt the OOM class takes), ${tail}`
}
