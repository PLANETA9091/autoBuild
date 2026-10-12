// (v0.437.0) THE WALK-OUT WITNESS LENS - the relog walk-out enforcer's own
// read. The v0.425.0 enforcer wired the promise's enforcement (the walk-out
// the relog line promises gets a witness and an escalation ladder: rung 1
// resets the walk gates, rung 2 releases the wedged goal slot, rung 3 names
// the honest shift exit); the decompose carries only a RAW counter
// ('stalled windows' + per-bot) - the window's own numbers rode unread.
// Attempt 4 is the fleet's first run with the wiring live: this lens reads
// the witness lines BEFORE the first one lands (the v0.433.0 hound
// precedent - the read ready when the field speaks, not after).
//
// THE EMITTER (one line, src/lib/relogwalkout.mjs's walkoutStallLine via
// miner.mjs's stalled branch - the walked-out verdict deletes the witness
// SILENTLY, the promise held needs no line):
//   F10 [F10] water: relog walk-out stalled (window 30s, 1.2 blocks of the
//   3.0 progress bar) - rung 1: the walk gates and stalls reset, the funnel
//   admits fresh walks
//   ... the unmeasured class (a lost position read never spends a rung -
//   the Number(null) lesson): '... , displacement unmeasured) - rung N: ...'
// The tag is the fleet's double anatomy (the harness prefixes the username;
// the miner's tag param is '[F10]'). The why tail is the rung's own prose
// (walkoutEscalation's vocabulary) - captured verbatim, never classified
// (the log already named it).
//
// THE FIELD QUESTIONS: (1) how DEEP does the ladder reach in the field
// (rung 3 on any face = the F10 shape reproduced, the shift exit named);
// (2) the displacement series against the printed progress bar - how CLOSE
// the wedged clients walk before the verdict; (3) the unmeasured share -
// how often the position read is lost at the exact moment the verdict needs
// it. One parser per emitter; mining-surface only: zero fleet wiring, zero
// new log lines (the v0.379.0 precedent).

const TAG = '^(F\\d+) \\[F\\d+\\] '

const WALKOUT_STALL_RE = new RegExp(TAG +
  'water: relog walk-out stalled \\(window (\\d+)s, (?:(\\d+(?:\\.\\d+)) blocks of the (\\d+(?:\\.\\d+)) progress bar|displacement unmeasured)\\) - rung (\\d+): (.+)$')

/**
 * Parse one walk-out stall witness line, or null.
 * @param {string} [line]
 * @returns {null|{bot: string, windowS: number, displacement: number|null, progressBar: number|null, rung: number, why: string}}
 */
export function parseWalkoutStall (line) {
  if (typeof line !== 'string') return null
  const m = line.match(WALKOUT_STALL_RE)
  if (!m) return null
  return {
    bot: m[1],
    windowS: Number(m[2]),
    // the unmeasured class rides null - the evidence, never a zero lie
    displacement: m[3] === undefined ? null : Number(m[3]),
    progressBar: m[4] === undefined ? null : Number(m[4]),
    rung: Number(m[5]),
    why: m[6]
  }
}

/**
 * The walk-out witness census over a whole face log (pure; the decompose
 * field read). Accepts an array of lines or a raw text blob.
 * @param {string[]|string} [lines] the face log
 * @returns {{windows: {n: number, byBot: {}, byRung: {}, windowS: {n: number, min: number|null, max: number|null, sum: number}, displacement: {n: number, min: number|null, max: number|null, sum: number, unmeasured: number}, barMax: number|null}, unparsed: number}}
 */
export function walkoutWitnessCensus (lines) {
  const rows = Array.isArray(lines)
    ? lines
    : (typeof lines === 'string' ? lines.split('\n') : [])
  const windows = {
    n: 0, byBot: {}, byRung: {},
    windowS: { n: 0, min: null, max: null, sum: 0 },
    displacement: { n: 0, min: null, max: null, sum: 0, unmeasured: 0 },
    barMax: null
  }
  let unparsed = 0
  for (const l of rows) {
    const p = parseWalkoutStall(l)
    if (p) {
      windows.n++
      windows.byBot[p.bot] = (windows.byBot[p.bot] || 0) + 1
      windows.byRung[p.rung] = (windows.byRung[p.rung] || 0) + 1
      if (windows.windowS.min === null || p.windowS < windows.windowS.min) windows.windowS.min = p.windowS
      if (windows.windowS.max === null || p.windowS > windows.windowS.max) windows.windowS.max = p.windowS
      windows.windowS.sum += p.windowS
      windows.windowS.n++
      if (p.displacement === null) {
        windows.displacement.unmeasured++
      } else {
        if (windows.displacement.min === null || p.displacement < windows.displacement.min) windows.displacement.min = p.displacement
        if (windows.displacement.max === null || p.displacement > windows.displacement.max) windows.displacement.max = p.displacement
        windows.displacement.sum += p.displacement
        windows.displacement.n++
      }
      if (p.progressBar !== null && (windows.barMax === null || p.progressBar > windows.barMax)) windows.barMax = p.progressBar
      continue
    }
    // the escape hatch: a walk-out-lane-shaped line every parser refused
    if (/^F\d+ \[F\d+\] water: relog walk-out/.test(l)) unparsed++
  }
  return { windows, unparsed }
}

// (v0.968.0) THE DRIVE'S OWN LENS - the walk-out drive's field instrument.
// The v0.968.0 lever gave the hold's promise its first walker (the drive
// aims ONE dry walk per witness at a held page); this lens reads the drive
// lines back so the next face's read prices the lever WITHOUT a re-mine:
// how many aims fired, how many scans read sealed, and the displacement the
// bot had already ridden at the drive's instant. The emitter (one line per
// witness, src/lib/relogwalkout.mjs's walkoutDriveLine via miner.mjs's
// hold branch):
//   F10 [F10] water: walk-out drive aims the held page's walk (0.4 blocks
//   from the relog cell, goal [-127,50,398]) - the promise's own walker, the
//   window judges
//   F10 [F10] water: walk-out drive finds no dry aim (0.4 blocks from the
//   relog cell, the bounded ring reads sealed) - the promise waits, the
//   ladder keeps its rungs
// One parser per emitter (the one-parser law); the line's vocabulary is
// worded OUT of the witness stall lane ('relog walk-out') and the relog
// counter's lane ('frozen client relog') - this census counts DRIVES, the
// witness census counts STALLS, and the escape hatch reads the drive line
// as foreign (its prefix gate demands 'relog walk-out'). Mining surface
// only: zero fleet wiring added by the lens (the v0.379.0 precedent).
const WALKOUT_DRIVE_RE = new RegExp(TAG +
  "water: walk-out drive (aims the held page's walk|finds no dry aim) \\((\\d+(?:\\.\\d+)) blocks from the relog cell(?:, goal \\[(-?\\d+),(-?\\d+),(-?\\d+)\\])?(?:, the bounded ring reads sealed)?\\)")

/**
 * Parse one walk-out drive line, or null.
 * @param {string} [line]
 * @returns {null|{bot: string, kind: 'aimed'|'sealed', displacement: number, goal: {x: number, y: number, z: number}|null}}
 */
export function parseWalkoutDrive (line) {
  if (typeof line !== 'string') return null
  const m = line.match(WALKOUT_DRIVE_RE)
  if (!m) return null
  const kind = m[2] === "aims the held page's walk" ? 'aimed' : 'sealed'
  const d = Number(m[3])
  if (!Number.isFinite(d) || d < 0) return null
  let goal = null
  if (m[4] !== undefined) {
    const gx = Number(m[4])
    const gy = Number(m[5])
    const gz = Number(m[6])
    if (Number.isFinite(gx) && Number.isFinite(gy) && Number.isFinite(gz)) goal = { x: gx, y: gy, z: gz }
  }
  return { bot: m[1] || null, kind, displacement: d, goal }
}

/**
 * The drive census over a face log (pure; the decompose field read).
 * Accepts an array of lines or a raw text blob; anything else reads null
 * (the junk convention). A face with zero drive lines reads null - the
 * honest silence (the lever never fired, the promise's walker idle).
 * @param {string[]|string} [lines] the face log
 * @returns {null|{drives: {n: number, aimed: number, sealed: number, byBot: Object<string, number>}, displacement: {n: number, min: number|null, max: number|null, sum: number}, aimedGoals: number}}
 */
export function walkoutDriveCensus (lines) {
  const src = Array.isArray(lines)
    ? lines
    : (typeof lines === 'string' ? lines.split('\n') : null)
  if (!src) return null
  const rows = []
  for (const l of src) {
    const p = parseWalkoutDrive(l)
    if (p) rows.push(p)
  }
  if (rows.length === 0) return null
  const drives = { n: rows.length, aimed: 0, sealed: 0, byBot: {} }
  const displacement = { n: 0, min: null, max: null, sum: 0 }
  let aimedGoals = 0
  for (const r of rows) {
    if (r.kind === 'aimed') aimedGoals++
    else drives.sealed++
    if (r.bot) drives.byBot[r.bot] = (drives.byBot[r.bot] || 0) + 1
    if (displacement.min === null || r.displacement < displacement.min) displacement.min = r.displacement
    if (displacement.max === null || r.displacement > displacement.max) displacement.max = r.displacement
    displacement.sum += r.displacement
    displacement.n++
  }
  drives.aimed = aimedGoals
  return { drives, displacement, aimedGoals }
}

/**
 * The drive census's own row (the byte-exact verdict line). Guards: a null
 * census, a non-object, a zero-drive book or any non-finite cell read the
 * honest silence null (the row never invents).
 * @param {null|object} [c] walkoutDriveCensus's own read
 * @returns {null|string}
 */
export function walkoutDriveRow (c) {
  if (!c || typeof c !== 'object' || Array.isArray(c)) return null
  const dr = c.drives
  if (!dr || typeof dr !== 'object') return null
  const dp = c.displacement
  if (!dp || typeof dp !== 'object') return null
  const cells = [dr.n, dr.aimed, dr.sealed, dp.n]
  if (!cells.every((n) => Number.isFinite(n))) return null
  if (!(dr.n > 0)) return null
  const dpPart = dp.n > 0 && Number.isFinite(dp.min) && Number.isFinite(dp.max)
    ? `, the displacement at the drive ${dp.min}..${dp.max} blocks`
    : ''
  const sealedPart = dr.sealed > 0
    ? `; ${dr.sealed} sealed ring(s) - the aim never invents a walk it cannot see`
    : ''
  return `the walk-out drive's own read (v0.968.0): ${dr.n} drive(s), ${dr.aimed} aimed / ${dr.sealed} sealed${dpPart}${sealedPart} - the promise's first walker rode the hold; the stall rate prices the cure on the next read`
}
