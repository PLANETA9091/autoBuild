// (v0.976.408) THE VOIDCARE WORD - the care lane's nineteenth
// sibling. toolcare prices the worn hands, armorcare the worn arms,
// foodcare the hunger bar, healthcare the health bar, breathcare the
// oxygen bar, xpcare the experience bar, raincare the sky the bars
// walk under, freezecare the frost, saturationcare the hidden
// half-bar, firecare the flame, absorptioncare the golden shield,
// potioncare the effects shelf, exhaustioncare the drain meter,
// fallcare the fall, totemcare the second life, levitationcare the
// float, hurttimecare the window, nightcare the sky clock - this
// word prices the FLOOR the world ends at (the vanilla 26.2 void
// line: below y=-64 the world stops, the damage ticks every tick,
// the fall rides to the depth the census stamps). The voidcensus
// sibling owns the DEATH side (the 'void context' stamp the death
// handler prints - cell, depth, leg); this word prices the LIVE
// side - the bot's own altitude against the floor line, spoken at
// the consult's own cadence while the fall rides, the death
// handler's health independent. THE MUTE-DEATH CATCHER the census's
// own front names: a void death whose stamp line is eaten surfaces
// as the consult's own voice - the depth the stamp would print,
// priced live. Pure arithmetic over the vanilla 26.2 world law -
// consult only, the word never steers and never rescues; nothing
// steers out of the void, the rescue stays the respawn's own.
// Honest refusal on junk input (no throw); the world-bound bot is
// the caller's silence.

// The vanilla bound the word prices:
//   VOID_FLOOR_Y (-64) - the overworld's floor (vanilla 26.2, the
//     1.18+ world bottom - the statcarry law's own number restated
//     so the seat stands alone): the damage region is y < -64, the
//     rim y = -64 exactly is the last alive tick, the world's own
//     edge the bedrock seals
export const VOID_FLOOR_Y = -64

// The depth's own translation: the blocks below the floor line the
// fall has paid (the census's own pricing - depth D, live). Junk
// reads null (never a silent 0 - the no-bar law's cousin); an alive
// read floors at the zero (the depth IS zero at and above the rim -
// the world-bound bot has paid none).
export function depthBelowFloor (y) {
  if (!Number.isFinite(y)) return null
  return Math.max(0, VOID_FLOOR_Y - y)
}

// The word: one decision per state read.
//   refuse/junk-input   - y provided but not the honest shapes (a
//                         string, a number NaN, an object, a boolean
//                         - the numeric lane is not the firecare
//                         flag's own shape, the altitude has no
//                         binary form)
//   keep/no-bar         - the read is missing entirely (undefined
//                         and null) - the position may not ride on
//                         this version, the breathcare law holds:
//                         never trust a missing bar with a 0
//   keep/world-bound    - y at or above the floor line (the honest
//                         silence - the alive bot, the surface bot,
//                         the deep-dig bot the diamond band carries:
//                         the deeps are legitimate dig territory the
//                         word never defers, the rim y=-64 exact is
//                         the last alive tick and it keeps too)
//   refuse/out-of-world - y below the floor line (the void's own
//                         tick - the fall the world already ended,
//                         the depth the census's stamp will price
//                         priced LIVE: the field record's own depths
//                         the word carries - the F12 fall to -90 is
//                         depth 26, the F3 fall to -148 is depth 84;
//                         no cap: a deeper fall is an honest longer
//                         ride, the cap nothing needs)
// the polarity is the ONE-SIDED kind (the hurttime lesson's own
// shape: only one side of the line speaks) - the world's own edge
// admits no watch band above (the deeps legitimate), no hold band
// inside (nothing holds in the void): the line crosses ONCE and the
// word names it once per crossing (the edge-refractory keeps the
// repeat silence).
export function decideVoidAction (opts = {}) {
  const { y } = opts
  if (typeof y === 'boolean') {
    return { action: 'refuse', reason: 'junk-input', y: 0, depth: 0 }
  }
  if (y == null) {
    return { action: 'keep', reason: 'no-bar', y: null, depth: 0 }
  }
  if (!Number.isFinite(y)) {
    return { action: 'refuse', reason: 'junk-input', y: 0, depth: 0 }
  }
  if (y < VOID_FLOOR_Y) {
    return { action: 'refuse', reason: 'out-of-world', y, depth: VOID_FLOOR_Y - y }
  }
  return { action: 'keep', reason: 'world-bound', y, depth: 0 }
}
