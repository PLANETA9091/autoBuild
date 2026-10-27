// (v0.976.511) THE CLAIM TAKE CENSUS - the claim board's own take lane priced
// from the F678 live face (the .509 tree's first fleet's own fleet19-log, the
// artifact the F678 read fetched and read whole): 301 takes ALL mono-shape
// ('F<n> claims: take - target-free (claims 0, cap 24, claimsLeft 23)') - the
// take lane the verdict wire never had to speak on (the |claimboardverdict
// consult rode ZERO lines live - the lawful keep=fresh silence, no claim aged
// past the half-TTL window inside 600s) - the lane's own arithmetic priced
// HERE: the per-bot take book (F14's own 78 of 301 THE CREST BOT - 25.9% the
// concentration the whole fleet's takes ride), the reason book (target-free
// the monopoly - ONE reason carries ALL the takes the face rode), the
// headroom floor (claimsLeft 23 of cap 24 the WHOLE RUN's own floor - the
// ledger never held a second claim at any take moment: 'claims 0' every line
// rode), the release book ZERO in the whole stream (the release the walk's
// own end rides OUTSIDE the 'claims:' family the F678 stream kept - the
// log-silent end the honest zero holds; the census counts the prefix family
// 'F<n> claims: release' whenever a stream rides one, the F678 face rode
// none). ONE-PARSER LAW: the same regex reads every line, never a fork; the
// take line's own five seats (bot, reason, claims, cap, claimsLeft) the
// single shape carries; a malformed seat (non-numeric arithmetic, a bare
// 'claims:' line, a take without the parens book) the shape refuses - the
// line never rode, the junk battery the honest gate keeps. THE ROW LAW: ONE
// emitter ('claim-takes: <n> take(s) across <b> bot(s) - <reason> carries
// <k> of <n> - headroom floor <min> of cap <cap> (bot <holder>) - crest
// <bot> rides <ck> (<p>%)'), the mono-shape face names the monopoly
// ('carries all <n> (the mono-shape lane)'); the zero-take face the row
// NEVER prints (the honest silence - a take-less stream prices no book).
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// decompose's own first claim-take read, the lane the reader never priced
// before this word.

const TAKE_RE = /^(F\d+) claims: take - ([a-z-]+) \(claims (\d+), cap (\d+), claimsLeft (\d+)\)$/
const RELEASE_RE = /^F\d+ claims: release\b/

export function censusClaimTakes (lines) {
  const census = {
    takes: 0,
    releases: 0,
    byBot: {},
    byReason: {},
    claimsMax: -1,
    claimsLeftMin: -1,
    claimsLeftMinHolder: null,
    capMax: -1
  }
  if (!Array.isArray(lines)) return census
  for (const raw of lines) {
    if (typeof raw !== 'string') continue
    const line = raw.trim()
    const take = TAKE_RE.exec(line)
    if (take) {
      const bot = take[1]
      const reason = take[2]
      const claims = Number(take[3])
      const cap = Number(take[4])
      const claimsLeft = Number(take[5])
      census.takes += 1
      census.byBot[bot] = (census.byBot[bot] || 0) + 1
      census.byReason[reason] = (census.byReason[reason] || 0) + 1
      if (claims > census.claimsMax) census.claimsMax = claims
      if (cap > census.capMax) census.capMax = cap
      if (census.claimsLeftMin < 0 || claimsLeft < census.claimsLeftMin) {
        census.claimsLeftMin = claimsLeft
        census.claimsLeftMinHolder = bot
      }
      continue
    }
    if (RELEASE_RE.test(line)) census.releases += 1
  }
  return census
}

export function claimTakeCensusRow (c) {
  if (!c || c.takes === 0) return null
  const reasons = Object.keys(c.byReason)
  let reasonFace = ''
  if (reasons.length === 1) {
    reasonFace = `${reasons[0]} carries all ${c.takes} (the mono-shape lane)`
  } else {
    let top = reasons[0]
    for (const r of reasons) if (c.byReason[r] > c.byReason[top]) top = r
    reasonFace = `${top} carries ${c.byReason[top]} of ${c.takes}`
  }
  let crest = null
  let crestKey = null
  for (const bot of Object.keys(c.byBot)) {
    if (crest === null || c.byBot[bot] > crest) {
      crest = c.byBot[bot]
      crestKey = bot
    }
  }
  const share = (crest / c.takes * 100).toFixed(1)
  return `claim-takes: ${c.takes} take(s) across ${Object.keys(c.byBot).length} bot(s) - ${reasonFace} - headroom floor ${c.claimsLeftMin} of cap ${c.capMax} (bot ${c.claimsLeftMinHolder}) - crest ${crestKey} rides ${crest} (${share}%)`
}
