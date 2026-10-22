// (v0.976.394) THE BREATHCARE WORD - the care lane's fifth sibling.
// toolcare prices the worn hands, armorcare the worn arms, foodcare the
// hunger bar, healthcare the health bar, this word prices the OXYGEN bar
// (bot.oxygenLevel, 0..20 - the metadata air_supply over 15). Pure
// arithmetic over the vanilla 26.2 oxygen points - consult only, the word
// never swims and never surfaces; the rescue belongs to the drowning lane
// and the movers. Honest refusal on junk input (no throw); the breathing
// bot is the caller's silence.

// The vanilla bounds the word prices:
//   oxygen 0..20 (20 = ten bubbles full; each bubble = 2 points)
//   BREATH_SURFACE_AT - at/below this the band is critical (the drowning
//     tolls arrive fast under three bubbles; the band outranks the watch
//     band - danger first)
//   BREATH_WATCH_AT - at/below this the watch band speaks (the early
//     warning the rescue lane's own page does not name)
//   BREATH_TICKS_PER_POINT - the vanilla air_supply ticks per oxygen point
export const BREATH_SURFACE_AT = 6
export const BREATH_WATCH_AT = 12
export const BREATH_TICKS_PER_POINT = 15

// The bubbles the client draws: 10 bubbles over the 20 points, each bubble
// worth 2 points, the half bubble rounds UP (ceil - the honest pessimism).
// Clamps to [0, 10]; junk reads 0.
export function bubblesFromOxygen (o2) {
  if (!Number.isFinite(o2)) return 0
  const v = Math.max(0, Math.min(20, o2))
  return Math.max(0, Math.min(10, Math.ceil(v / 2)))
}

// The word: one decision per state read.
//   refuse/junk-input    - oxygen provided but non-finite
//   keep/no-bar          - the bar is missing (undefined/null) - the
//                          drowning lane's own law holds: never trust a
//                          missing bar with a 0, the clock decides
//   keep/dry-bar         - the bar reads low but the head reads DRY - the
//                          glitch seat the water guard owns ('co-existence
//                          by seat never by duplication', the
//                          airbarglitchtrend's own law); the word never
//                          double-speaks the liar bar
//   surface/critical-air - at/below the critical band (danger first)
//   watch/watch-band     - at/below the watch band (the early warning)
//   keep/breathing       - above the watch band (the caller stays silent)
// oxygen clamps to [0, 20]; trust reads the airBarTrust verdict vocabulary
// ('wet' | 'dry' | 'unknown' | null) - null/unknown judges nothing (the
// bar is believed, the drowning lane's own lesson: a kelp forest or an
// unloaded chunk reads unknown and the bar still drains).
export function decideBreathAction (opts = {}) {
  const { oxygen } = opts
  if (oxygen == null) return { action: 'keep', reason: 'no-bar', oxygen: null, bubbles: 0 }
  if (!Number.isFinite(oxygen)) {
    return { action: 'refuse', reason: 'junk-input', oxygen: 0, bubbles: 0 }
  }
  const o2 = Math.max(0, Math.min(20, oxygen))
  const bubbles = bubblesFromOxygen(o2)
  if (opts.trust === 'dry') {
    // the glitch seat: the water guard prices the liar bar, the word stays
    // silent (the override's own ratchet believes or ignores - never ours)
    if (o2 <= BREATH_SURFACE_AT) return { action: 'keep', reason: 'dry-bar', oxygen: o2, bubbles }
    return { action: 'keep', reason: 'breathing', oxygen: o2, bubbles }
  }
  if (o2 <= BREATH_SURFACE_AT) return { action: 'surface', reason: 'critical-air', oxygen: o2, bubbles }
  if (o2 <= BREATH_WATCH_AT) return { action: 'watch', reason: 'watch-band', oxygen: o2, bubbles }
  return { action: 'keep', reason: 'breathing', oxygen: o2, bubbles }
}
