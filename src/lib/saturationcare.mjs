// (v0.976.398) THE SATURATIONCARE WORD - the care lane's ninth sibling.
// toolcare prices the worn hands, armorcare the worn arms, foodcare the
// hunger bar, healthcare the health bar, breathcare the oxygen bar,
// xpcare the experience bar, raincare the sky, freezecare the frost,
// this word prices the HIDDEN HALF-BAR the hunger bar keeps behind it
// (the vanilla saturation, 0..20 - the reserve the regen and the sprint
// spend before the hunger bar itself pays). The foodcare sibling's own
// comment held the seat open ("saturation deliberately unpriced - the
// survival floor is the hunger bar") - this word closes it. Pure
// arithmetic over the vanilla 26.2 saturation law - consult only, the
// word never eats and never sprints; the eating act stays the
// foodcare's future lane. Honest refusal on junk input (no throw); the
// lean bot is the ONLY voice the word carries (the reserved bot stays
// silent - the buffer held needs no line).

// The vanilla bounds the word prices:
//   saturation 0..20 (the cap the hunger itself sets - the bar can
//     never exceed the hunger it hides behind)
//   SATURATION_MAX - the vanilla ceiling (20)
//   EXHAUSTION_PER_POINT - the vanilla drain law: every 4.0 exhaustion
//     spent burns ONE saturation point before the hunger pays
export const SATURATION_MAX = 20
export const EXHAUSTION_PER_POINT = 4

// The cap the vanilla clamps: saturation never exceeds the hunger it
// hides behind (junk hunger reads the honest ceiling 20 - the cap the
// bar's own bounds keep; junk-safe, no throw).
export function saturationCap (hunger) {
  if (!Number.isFinite(hunger)) return SATURATION_MAX
  return Math.max(0, Math.min(SATURATION_MAX, hunger))
}

// The word: one decision per state read.
//   refuse/junk-input      - saturation provided but non-finite
//   keep/no-bar            - the hidden bar is missing (undefined/null) -
//                            the metadata may not ride on this version,
//                            the breathcare law holds: never trust a
//                            missing bar with a 0, the clock decides
//   lean/reserve-spent     - saturation at the floor (0): the NEXT toll
//                            the hunger bar pays itself - the
//                            foodcare sibling's own bar the drain
//                            reaches (the word's only voice)
//   keep/reserved          - saturation above the floor: the buffer the
//                            regen and the sprint spend first (the
//                            caller stays silent - the reserve held
//                            needs no line)
// saturation clamps to [0, 20]; hunger reads lenient (the cap follows
// the vanilla clamp law, the junk the ceiling keeps).
export function decideSaturationAction (opts = {}) {
  const { saturation } = opts
  if (saturation == null) return { action: 'keep', reason: 'no-bar', saturation: null, cap: saturationCap(opts.hunger) }
  if (!Number.isFinite(saturation)) {
    return { action: 'refuse', reason: 'junk-input', saturation: 0, cap: saturationCap(opts.hunger) }
  }
  const s = Math.max(0, Math.min(SATURATION_MAX, saturation))
  const cap = saturationCap(opts.hunger)
  if (s <= 0) return { action: 'lean', reason: 'reserve-spent', saturation: s, cap }
  return { action: 'keep', reason: 'reserved', saturation: s, cap }
}
