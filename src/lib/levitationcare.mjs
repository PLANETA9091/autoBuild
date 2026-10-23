// (v0.976.405) THE LEVITATIONCARE WORD - the care lane's sixteenth
// sibling. toolcare prices the worn hands, armorcare the worn arms,
// foodcare the hunger bar, healthcare the health bar, breathcare the
// oxygen bar, xpcare the experience bar, raincare the sky the bars
// walk under, freezecare the frost, saturationcare the hidden
// half-bar, firecare the flame, absorptioncare the golden shield,
// potioncare the effects shelf, exhaustioncare the drain meter,
// fallcare the fall, totemcare the second life - this word prices the
// FLOAT the shelf carries and no bar shows (the vanilla levitation,
// registry id 25 - the slot potioncare's afflic set never named): the
// climb a Shulker's bolt or a levitation potion deals, and the fall
// the float ENDS IN - the danger runs OPPOSITE the flame's clock, the
// countdown's LOW reading is the honest danger (the soften window
// before the meter hands the fall to the fallcare sibling), a high
// reading is not a liar read, it is a longer float. Pure arithmetic
// over the vanilla 26.2 levitation law - consult only, the word never
// steers and never dumps the water, never swings at the Shulker; the
// landing act stays the movers' and the fallcare meter's own. Honest
// refusal on junk input (no throw); the grounded bot is the caller's
// silence.

// The vanilla bounds the word prices:
//   LEVITATION_ID - the registry id the effect shelf slots the float
//     under (the map key the consult reads)
//   LEVITATION_WATCH_AT - the countdown line (100 ticks = 5s): at or
//     under it the float's end rides close enough that the landing
//     prep is the voice - the soften window the fall meter inherits
//   LEVITATION_TICKS_PER_SECOND - the vanilla 20-ticks clock
//   LEVITATION_CLIMB_PER_LEVEL - the vanilla ascent price: 0.9 blocks
//     a second per effect level (the amplifier's own units)
export const LEVITATION_ID = 25
export const LEVITATION_WATCH_AT = 100
export const LEVITATION_TICKS_PER_SECOND = 20
export const LEVITATION_CLIMB_PER_LEVEL = 0.9

// The float's own seconds: the tick clock's honest translation. Junk
// reads null (never a silent 0 - the no-bar law's cousin); the liar
// negative floors at the zero.
export function levitationSecondsFromTicks (ticks) {
  if (!Number.isFinite(ticks)) return null
  return Math.max(0, ticks) / LEVITATION_TICKS_PER_SECOND
}

// The climb the float carries: the vanilla 0.9 blocks a second per
// level. The missing read climbs null (never guessed); the liar
// negative amplifier floors at the zeroth level.
export function levitationClimbFromAmplifier (amplifier) {
  if (!Number.isFinite(amplifier)) return null
  return (Math.max(0, amplifier) + 1) * LEVITATION_CLIMB_PER_LEVEL
}

// The word: one decision per state read.
//   refuse/junk-input   - duration provided but not the honest shapes
//                         (a string, a number NaN, an object, a
//                         boolean - the numeric lane is not the
//                         firecare flag's own shape, the float has no
//                         binary form)
//   keep/no-bar         - the read is missing entirely (undefined and
//                         null) - the shelf may not ride on this
//                         version, the breathcare law holds: never
//                         trust a missing bar with a 0
//   keep/expired        - the true zero (the real reading, not the
//                         silence - the float is over, the meter hands
//                         the fall to the fallcare sibling; the climb
//                         rides null, the active float it priced is
//                         done)
//   land/landing-soon   - the countdown at or under the watch line:
//                         the drop is next, the soften window is NOW
//                         (the danger band - the polarity the flame's
//                         clock runs opposite)
//   watch/floating      - the long float (the climb the HUD never
//                         shows - the honest longer ride, no cap: the
//                         countdown's high reading is a longer float,
//                         the cap the frost's climbing counter needs
//                         the levitation's falling countdown does not)
// duration clamps at the floor only (a negative reading is the liar
// read - the clock never counts below the expired zero).
// The climb rides ONLY the active float's verdicts - the expired and
// the untrusted reads climb null, never a guessed number.
export function decideLevitationAction (opts = {}) {
  const { duration, amplifier } = opts
  if (typeof duration === 'boolean') {
    return { action: 'refuse', reason: 'junk-input', duration: 0, seconds: 0, climb: null }
  }
  if (duration == null) {
    return { action: 'keep', reason: 'no-bar', duration: null, seconds: 0, climb: null }
  }
  if (!Number.isFinite(duration)) {
    return { action: 'refuse', reason: 'junk-input', duration: 0, seconds: 0, climb: null }
  }
  const t = Math.max(0, duration)
  if (t === 0) return { action: 'keep', reason: 'expired', duration: 0, seconds: 0, climb: null }
  const seconds = t / LEVITATION_TICKS_PER_SECOND
  const climb = levitationClimbFromAmplifier(amplifier)
  if (t <= LEVITATION_WATCH_AT) return { action: 'land', reason: 'landing-soon', duration: t, seconds, climb }
  return { action: 'watch', reason: 'floating', duration: t, seconds, climb }
}
