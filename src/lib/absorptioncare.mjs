// (v0.976.400) THE ABSORPTIONCARE WORD - the care lane's eleventh sibling.
// toolcare prices the worn hands, armorcare the worn arms, foodcare the
// hunger bar, healthcare the health bar, breathcare the oxygen bar,
// xpcare the experience bar, raincare the sky the bars walk under,
// freezecare the frost, saturationcare the hidden half-bar, firecare the
// flame - this word prices the GOLDEN SHIELD the HUD paints above the
// health bar (the vanilla absorption buffer: the golden apple's
// Absorption I, the enchanted one's Absorption IV, the damage-eater
// that spends itself first so the health bar does not have to). Pure
// arithmetic over the vanilla 26.2 absorption law - consult only, the
// word never eats and never golden-apples; the apple and the potion
// stay the inventory's and the future lanes' own. Honest refusal on
// junk input (no throw); the unshielded bot is the caller's silence.

// The vanilla bounds the word prices:
//   ABSORPTION_GOLDEN_APPLE - the golden apple's Absorption I: 2 points
//     (one golden heart), the standard shield the orchard prices free
//   ABSORPTION_ENCHANTED_GOLDEN_APPLE - the enchanted apple's Absorption
//     IV: 8 points (four golden hearts), the dungeon-lore shield
//   ABSORPTION_SHIELD_AT - the 2-golden-heart line (half the enchanted
//     apple's shield): at or above it the buffer has real mass; below
//     it the shield is THIN - the next bite breaks it
//   the hearts the HUD paints ride half-heart precision: 4 points = 2
//     golden hearts exactly, the odd point the half heart rides
export const ABSORPTION_GOLDEN_APPLE = 2
export const ABSORPTION_ENCHANTED_GOLDEN_APPLE = 8
export const ABSORPTION_SHIELD_AT = 4

// The shield's own hearts: the HUD's honest translation. Junk reads
// null (never a silent 0 - the no-bar law's cousin); the liar negative
// read floors at the unshielded zero.
export function absorptionHearts (absorption) {
  if (!Number.isFinite(absorption)) return null
  return Math.max(0, absorption) / 2
}

// The word: one decision per state read.
//   refuse/junk-input   - absorption provided but non-finite (the
//                         boolean too - the numeric lane is not the
//                         firecare flag's own shape)
//   keep/no-bar         - the read is missing entirely (undefined/null)
//                         - the metadata may not ride on this version,
//                         the breathcare law holds: never trust a
//                         missing bar with a 0
//   keep/unshielded     - the true zero (the real reading, not the
//                         silence - the apple's shield spent itself,
//                         the health bar rides alone)
//   watch/thin-shield   - under the 2-golden-heart line: the shield
//                         the next bite breaks (the band the word's
//                         voice rides - thin outranks, danger first)
//   keep/shielded       - at or above the line (the buffer has mass,
//                         the caller stays silent)
// absorption clamps at the floor only (a negative reading is the liar
// read - the shield never owes hearts; no ceiling - a high reading is
// an honest longer shield, the cap the countdown's clock needs the
// damage-eater's buffer does not).
export function decideAbsorptionAction (opts = {}) {
  const { absorption } = opts
  if (absorption == null) {
    return { action: 'keep', reason: 'no-bar', absorption: null, hearts: null }
  }
  if (!Number.isFinite(absorption)) {
    return { action: 'refuse', reason: 'junk-input', absorption: 0, hearts: 0 }
  }
  const a = Math.max(0, absorption)
  const hearts = a / 2
  if (a === 0) return { action: 'keep', reason: 'unshielded', absorption: 0, hearts: 0 }
  if (a < ABSORPTION_SHIELD_AT) return { action: 'watch', reason: 'thin-shield', absorption: a, hearts }
  return { action: 'keep', reason: 'shielded', absorption: a, hearts }
}
