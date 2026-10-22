// (v0.976.393) THE HEALTHCARE WORD - the care lane's fourth sibling.
// toolcare prices the worn hands, armorcare the worn arms, foodcare the
// hunger bar, this word prices the HEALTH bar. Pure arithmetic over the
// vanilla 26.2 health/food points - consult only, the word never retreats
// and never eats; the acts belong to the movers and the future lanes.
// Honest refusal on junk input (no throw); the satisfied bot is the
// caller's silence.

// The vanilla bounds the word prices:
//   health 0..20 (20 = ten hearts full)
//   HEALTHCARE_RETREAT_AT - at/below this the band is critical (the mob
//     tolls the death census prices arrive fast under three hearts)
//   HEALTHCARE_REGEN_FOOD - the vanilla natural-regen gate (food 18+)
export const HEALTHCARE_RETREAT_AT = 6
export const HEALTHCARE_REGEN_FOOD = 18

// The word: one decision per state read.
//   refuse/junk-input      - health non-finite (food reads lenient, 0)
//   retreat/critical-health - health at/below the critical band (the band
//                             outranks the regen band - danger first)
//   regen/regen-band       - hurt above critical AND food pays the vanilla
//                            regen gate (stay safe, the bar refills)
//   defer/hurt-no-regen    - hurt above critical, the food gate closed
//   keep/healthy           - the full bar (the caller stays silent)
// health clamps to [0, 20]; food floors to >= 0.
export function decideHealthAction (opts = {}) {
  const { health } = opts
  const food = Number.isFinite(opts.food) ? Math.max(0, Math.floor(opts.food)) : 0
  if (!Number.isFinite(health)) {
    return { action: 'refuse', reason: 'junk-input', health: 0, food }
  }
  const h = Math.max(0, Math.min(20, health))
  if (h <= HEALTHCARE_RETREAT_AT) return { action: 'retreat', reason: 'critical-health', health: h, food }
  if (h < 20 && food >= HEALTHCARE_REGEN_FOOD) return { action: 'regen', reason: 'regen-band', health: h, food }
  if (h < 20) return { action: 'defer', reason: 'hurt-no-regen', health: h, food }
  return { action: 'keep', reason: 'healthy', health: h, food }
}
