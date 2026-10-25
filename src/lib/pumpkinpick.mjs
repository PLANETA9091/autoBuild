// (v0.976.482) Pumpkin pick decision for the bot fleet.
//
// THE PROBLEM: the crop lane priced its feast's other two legs - the
// sugar (the sugarmill word, v0.976.480) and the egg (the coop word,
// v0.976.481) - but the GOURD never priced: the pumpkinpie word
// (v0.976.479) prices the pie from a pocket pumpkin while the field
// it crosses stands full of grown gourds - and the PICK IS THE
// FIELD'S OWN HAND (one pumpkin block breaks into one pocket pumpkin,
// vanilla - the deterministic break's own drop, no craft grid, no
// fuel, the plain hand's own even exchange). THE NAMING CHAIN CLOSED
// THRICE OVER: the pumpkinpie word defers pumpkin-short naming "the
// gourd the harvest's own story, the farm trip's own cargo" - this
// word prices the harvest's own pick; the sugarmill word minted the
// sugar-short mill twin; the coop word minted the egg-short coop
// twin - the pie's THREE legs all priced, the feast's own chain
// whole. THE FIX: decidePumpkinPick() prices the PICK LANE - one
// pocket-and-field map to ONE word with ONE reason:
//   'keep'   - the pocket pumpkin already held (THE GOURD KEEP: the
//              pie's gourd leg already rides - the pick walk never
//              doubles the field's own coin, the coop word's own
//              MORNING LAW's sibling, the keep-gate-first law reads
//              the held gourd beats any promise the field makes) OR
//              the field stands bare of grown gourds (THE FIELD LAW:
//              the grown-gourd-empty reads the KEEP, never a defer -
//              the coop word's own PEN LAW's twin: the grown gourd
//              either stands in reach or the stem's own clock owes
//              it, the word never guesses which)
//   'pick'   - grown gourds in reach and the pocket bare (one grown
//              gourd earns its own pick pass and mints one pocket
//              pumpkin - no cap, every pass the field affords
//              priced)
//   'refuse' - junk input (never throws into the fleet loop)
// THE NO-DEFER LAW: the keep-two word - the coop word's own reading
// (the egg's lane's sibling): no honest shortage lives past the two
// keeps (the gourd either rides the pocket or the field's own pick
// mints the cargo; the stem's clock the only coin the lane cannot
// price). THE PICK LAW: the break is vanilla's own even hand - one
// block into one item, the yield the pick's own deterministic mint
// (the coop word's own GATHER LAW's opposite: the egg the world's
// clock lays and the walk never mints; the gourd the hand breaks and
// the pick mints honestly - the FORTUNE and the SILKTOUCH never
// priced, the plain hand's own reading). THE CENSUS LAW: exact
// 'pumpkin' (the pocket's own gourd; the CARVED PUMPKIN the helmet's
// own form never adopted, the PUMPKIN SEEDS the replant lane's own
// form never adopted - the two forms the family's census law already
// named in the pie word's own reading); the grown gourd the CALLER'S
// OWN BLOCK CENSUS (the field's own stock the world holds - never a
// pocket item; the PUMPKIN STEM the vine's own form never counted as
// the fruit, the growing gourd's own mother never priced here). Junk
// inputs never throw: they return a refuse with the junk-input
// reason so a caller bug degrades into a log line, not a crash
// loop. Negative counts floor to zero (a lying census must not
// poison the arithmetic); they are read, not refused - the honesty
// lives in the clamp. No cap: a field-rich bare-pocket read prices
// every pick it affords, an honest longer census never clamped.
// Fractional counts floor honestly with the remainder named. The
// pure read mutates nothing.

// the vanilla pick-pass cost one harvest carries per grown gourd in
// reach (the field's own unit - each gourd earns its own pass)
export const PUMPKINPICK_PICKS_PER_GOURD = 1
// the vanilla pumpkin yield one pick mints (the break's own even
// hand - one block into one item, the deterministic drop)
export const PUMPKINPICK_PUMPKINS_PER_PICK = 1

/**
 * Decide whether one bot's pocket earns a pumpkin pick word.
 *
 * @param {object} [opts]
 * @param {number} [opts.pumpkinsCount=0] pocket pumpkins (the exact
 *                                        'pumpkin' name - the CARVED
 *                                        form and the SEEDS never
 *                                        adopted)
 * @param {number} [opts.gourdsCount=0]   grown pumpkin blocks in
 *                                        reach (the caller's own
 *                                        block census - the field's
 *                                        own stock the world holds,
 *                                        never a pocket item; the
 *                                        STEM never counted as the
 *                                        fruit)
 * @returns {{action: 'pick'|'keep'|'refuse', reason: string, picks: number, pumpkinsYield: number, pumpkinsLeft: number, gourdsLeft: number}}
 */
export function decidePumpkinPick (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['pumpkinsCount', 'gourdsCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', picks: 0, pumpkinsYield: 0, pumpkinsLeft: 0, gourdsLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const pumpkins = floor0(opts.pumpkinsCount)
  const gourds = floor0(opts.gourdsCount)
  // the pocket pumpkin already held: the pie's gourd leg already
  // rides - the pick walk never doubles the field's own coin (the
  // MINT-ON-DEMAND keep law's sibling; keep-gate-first: the held
  // gourd beats any promise the field makes).
  if (pumpkins >= 1) {
    return { action: 'keep', reason: 'pumpkin-held', picks: 0, pumpkinsYield: 0, pumpkinsLeft: pumpkins, gourdsLeft: gourds }
  }
  // the field stands bare of grown gourds: the grown gourd either
  // stands in reach or the stem's own clock owes it - the word never
  // guesses which (the PEN LAW's twin: the KEEP, never a defer - no
  // honest shortage lives past the empty gate).
  if (gourds < PUMPKINPICK_PICKS_PER_GOURD) {
    return { action: 'keep', reason: 'field-empty', picks: 0, pumpkinsYield: 0, pumpkinsLeft: pumpkins, gourdsLeft: gourds }
  }
  // the field's own arithmetic: every grown gourd in reach earns its
  // own pick pass honestly and mints one pocket pumpkin - the break's
  // own even hand, the yield the pick's own deterministic mint, the
  // word never rounds the census into a lie and never caps the field.
  const picks = Math.floor(gourds / PUMPKINPICK_PICKS_PER_GOURD)
  return {
    action: 'pick',
    reason: 'gourds-in-reach',
    picks,
    pumpkinsYield: picks * PUMPKINPICK_PUMPKINS_PER_PICK,
    pumpkinsLeft: pumpkins,
    gourdsLeft: gourds - picks * PUMPKINPICK_PICKS_PER_GOURD
  }
}
