// (v0.976.407) THE NIGHTCARE WORD - the care lane's eighteenth
// sibling. toolcare prices the worn hands, armorcare the worn arms,
// foodcare the hunger bar, healthcare the health bar, breathcare the
// oxygen bar, xpcare the experience bar, raincare the sky the bars
// walk under, freezecare the frost, saturationcare the hidden
// half-bar, firecare the flame, absorptioncare the golden shield,
// potioncare the effects shelf, exhaustioncare the drain meter,
// fallcare the fall, totemcare the second life, levitationcare the
// float, hurttimecare the window - this word prices the CLOCK the
// sky runs (the vanilla day cycle: the countdown to the dusk fence
// the walks die at, the countdown to the dawn fence the holds end
// at). The nightsafety sibling GATES the clock (walkForbidden reads
// the same ticks and answers yes/no); this word PRICES the clock -
// the seconds the HUD never prints, the budget a walk spends and a
// hold waits out. Pure arithmetic over the vanilla 26.2 day law -
// consult only, the word never gates and never steers; the fence
// stays the nightsafety law's own. Honest refusal on junk input
// (no throw); the clock-less bot is the caller's silence.

// The vanilla bounds the word prices:
//   the day clock WRAPS at 24000 ticks (0 = sunrise, the cycle
//     restarts - a 25000 read is tomorrow's 1000, a -1200 read is
//     22800 tonight): the word's honest law is the MODULO wrap, not
//     the floor clamp - the cyclical clock has no liar tail, every
//     integer is a true position on the ring
//   NIGHTCARE_DAY_TICKS - the wrap's own width (the vanilla day)
//   NIGHTCARE_DUSK_FENCE_TICKS (12400) - the fleet's own dusk margin
//     (the nightsafety law's NIGHT_WALK_START: a walk STARTED at
//     12300 is still running at 12610, so the walks die at 12400)
//   NIGHTCARE_DAWN_FENCE_TICKS (23600) - the fleet's own dawn margin
//     (the nightsafety law's NIGHT_WALK_END: the spawn pressure
//     ends at 23460, the fence adds the dawn tail)
//   NIGHTCARE_SKY_MARGIN_TICKS (1200 = 60s) - the band the countdown
//     crosses from watch to speak: a budget at or under the margin
//     is the window's own shadow (the walk the dusk eats, the hold
//     the dawn repays)
//   NIGHTCARE_TICKS_PER_SECOND - the vanilla 20-ticks clock
export const NIGHTCARE_DAY_TICKS = 24000
export const NIGHTCARE_DUSK_FENCE_TICKS = 12400
export const NIGHTCARE_DAWN_FENCE_TICKS = 23600
export const NIGHTCARE_SKY_MARGIN_TICKS = 1200
export const NIGHTCARE_TICKS_PER_SECOND = 20

// The clock's own position on the ring: the honest normalization.
// Junk reads null (never a silent 0 - the no-bar law's cousin); the
// wrap is the CYCLICAL law - ((t % day) + day) % day lands every
// integer in [0, 24000), the negative and the overfull both honest
// clock positions (the ring has no liar tail to floor).
export function normalizeDayTick (ticks) {
  if (!Number.isFinite(ticks)) return null
  return ((ticks % NIGHTCARE_DAY_TICKS) + NIGHTCARE_DAY_TICKS) % NIGHTCARE_DAY_TICKS
}

// The budget's own seconds: the tick clock's honest translation for
// the phase the read sits in. Junk reads null; the arithmetic floors
// at the zero (the modulo wrap already guarantees a positive budget,
// the floor is the belt the translation wears).
export function nightBudgetSecondsFromTick (ticks) {
  if (!Number.isFinite(ticks)) return null
  const tod = normalizeDayTick(ticks)
  if (tod == null) return null
  const night = tod >= NIGHTCARE_DUSK_FENCE_TICKS && tod < NIGHTCARE_DAWN_FENCE_TICKS
  const fence = night ? NIGHTCARE_DAWN_FENCE_TICKS : NIGHTCARE_DUSK_FENCE_TICKS
  const budget = ((fence - tod) % NIGHTCARE_DAY_TICKS + NIGHTCARE_DAY_TICKS) % NIGHTCARE_DAY_TICKS
  return Math.max(0, budget) / NIGHTCARE_TICKS_PER_SECOND
}

// The word: one decision per state read.
//   refuse/junk-input   - timeOfDay provided but not the honest
//                         shapes (a string, a number NaN, an object,
//                         a boolean - the numeric lane is not the
//                         firecare flag's own shape, the clock has
//                         no binary form)
//   keep/no-bar         - the read is missing entirely (undefined
//                         and null) - the clock may not ride on
//                         this version, the breathcare law holds:
//                         never trust a missing bar with a 0
//   watch/daylight      - the day sky with the walk budget above
//                         the margin (the walks run on - the gate
//                         stays the nightsafety law's own, the word
//                         prices the runway)
//   defer/dusk-soon     - the day sky with the walk budget at or
//                         under the margin (the walk STARTED now
//                         dies in the window - the shadow the
//                         nightsafety header's own arithmetic names)
//   defer/night-hold    - the night sky with the dawn budget above
//                         the margin (the hold the fence keeps -
//                         the digs in, the walks wait)
//   watch/dawn-soon     - the night sky with the dawn budget at or
//                         under the margin (the hold pays off - the
//                         dawn the walks wait for is in sight)
// the polarity rides TWO skies (the levitationcare lesson's own
// shape: the countdown's meaning flips with the phase) - the day
// countdown CLOSES a budget (walks spend it), the night countdown
// CLOSES a sentence (holds wait it out); both seconds ride the same
// honest translation.
export function decideNightAction (opts = {}) {
  const { timeOfDay } = opts
  if (typeof timeOfDay === 'boolean') {
    return { action: 'refuse', reason: 'junk-input', timeOfDay: 0, seconds: 0 }
  }
  if (timeOfDay == null) {
    return { action: 'keep', reason: 'no-bar', timeOfDay: null, seconds: 0 }
  }
  if (!Number.isFinite(timeOfDay)) {
    return { action: 'refuse', reason: 'junk-input', timeOfDay: 0, seconds: 0 }
  }
  const tod = normalizeDayTick(timeOfDay)
  const night = tod >= NIGHTCARE_DUSK_FENCE_TICKS && tod < NIGHTCARE_DAWN_FENCE_TICKS
  const fence = night ? NIGHTCARE_DAWN_FENCE_TICKS : NIGHTCARE_DUSK_FENCE_TICKS
  const budget = ((fence - tod) % NIGHTCARE_DAY_TICKS + NIGHTCARE_DAY_TICKS) % NIGHTCARE_DAY_TICKS
  const seconds = Math.max(0, budget) / NIGHTCARE_TICKS_PER_SECOND
  if (budget <= NIGHTCARE_SKY_MARGIN_TICKS) {
    return night
      ? { action: 'watch', reason: 'dawn-soon', timeOfDay: tod, seconds }
      : { action: 'defer', reason: 'dusk-soon', timeOfDay: tod, seconds }
  }
  return night
    ? { action: 'defer', reason: 'night-hold', timeOfDay: tod, seconds }
    : { action: 'watch', reason: 'daylight', timeOfDay: tod, seconds }
}
