// (v0.976.403) THE FALLCARE WORD - the care lane's fourteenth sibling.
// toolcare prices the worn hands, armorcare the worn arms, foodcare the
// hunger bar, healthcare the health bar, breathcare the oxygen bar,
// xpcare the experience bar, raincare the sky the bars walk under,
// freezecare the frost, saturationcare the hidden half-bar, firecare
// the flame, absorptioncare the golden shield, potioncare the effects
// shelf, exhaustioncare the drain meter - this word prices the FALL the
// gravity keeps its own meter for (the vanilla fall distance the entity
// carries while the bot hangs in the air - the bar no HUD paints, the
// ground the verdict belongs to the movers, the arithmetic the word
// prices honestly: past the third block the fall starts paying the
// health bar, at the twenty-third it pays the WHOLE bar). Pure
// arithmetic over the vanilla 26.2 falling law - consult only, the
// word never steers and never places the water; the landing act stays
// the movers' and the future lanes' own. Honest refusal on junk input
// (no throw); the grounded bot is the caller's silence.

// The vanilla bounds the word prices:
//   FALL_HURT_AT - the third block: below it the fall is free (the
//     vanilla damage = ceil(distance - 3), zero under the offset),
//     above it every extra block is a half-heart the health bar pays
//   FALL_DAMAGE_OFFSET - the 3-block grace the vanilla law keeps (the
//     first word of the damage arithmetic)
//   FALL_DEADLY_AT - the twenty-third block: the damage the full
//     health bar pays (ceil(23 - 3) = 20 = the ten hearts) - the
//     soften band, the landing decided BEFORE the ground speaks
export const FALL_HURT_AT = 3
export const FALL_DAMAGE_OFFSET = 3
export const FALL_DEADLY_AT = 23

// The fall's own damage: the vanilla arithmetic (ceil past the offset,
// zero under it - the free fall the grace prices). Junk reads null
// (never a silent 0 - the no-bar law's cousin); the liar negative
// floors at the free fall.
export function fallDamageFrom (distance) {
  if (!Number.isFinite(distance)) return null
  return Math.max(0, Math.ceil(distance - FALL_DAMAGE_OFFSET))
}

// The word: one decision per state read.
//   refuse/junk-input   - fallDistance provided but non-finite (the
//                         boolean too - the numeric lane is not the
//                         firecare flag's own shape)
//   keep/no-bar         - the read is missing entirely (undefined/null)
//                         - the metadata may not ride on this version,
//                         the breathcare law holds: never trust a
//                         missing bar with a 0
//   keep/grounded       - the true zero (the real reading, not the
//                         silence - the bot stands, the meter empty)
//   keep/low            - within the grace (the fall the vanilla prices
//                         free, the caller stays silent)
//   watch/fall-band     - past the grace, short of the deadly line (the
//                         half-hearts the landing will cost, the band
//                         the word's voice rides)
//   land/soften         - at or past the deadly line (the WHOLE bar the
//                         fall pays - danger outranks, the landing
//                         decided before the ground speaks)
// fallDistance clamps at the floor only (a negative reading is the
// liar read - the meter never owes altitude; no ceiling - a high read
// is an honest longer fall, the cap the countdown's clock needs the
// climbing meter does not).
export function decideFallAction (opts = {}) {
  const { fallDistance } = opts
  if (fallDistance == null) {
    return { action: 'keep', reason: 'no-bar', fallDistance: null, damage: null }
  }
  if (!Number.isFinite(fallDistance)) {
    return { action: 'refuse', reason: 'junk-input', fallDistance: 0, damage: 0 }
  }
  const t = Math.max(0, fallDistance)
  const damage = fallDamageFrom(t)
  if (t === 0) return { action: 'keep', reason: 'grounded', fallDistance: 0, damage: 0 }
  if (t <= FALL_HURT_AT) return { action: 'keep', reason: 'low', fallDistance: t, damage }
  if (t < FALL_DEADLY_AT) return { action: 'watch', reason: 'fall-band', fallDistance: t, damage }
  return { action: 'land', reason: 'soften', fallDistance: t, damage }
}
