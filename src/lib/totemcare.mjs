// (v0.976.404) THE TOTEMCARE WORD - the care lane's fifteenth sibling.
// toolcare prices the worn hands, armorcare the worn arms, foodcare the
// hunger bar, healthcare the health bar, breathcare the oxygen bar,
// xpcare the experience bar, raincare the sky the bars walk under,
// freezecare the frost, saturationcare the hidden half-bar, firecare
// the flame, absorptioncare the golden shield, potioncare the effects
// shelf, exhaustioncare the drain meter, fallcare the fall the gravity
// prices - this word prices the SECOND LIFE the offhand carries (the
// vanilla totem of undying: the cheat the death itself honors once -
// the bar none of the siblings can price, because the health bar it
// saves is the one that already ended). Pure arithmetic over the
// vanilla 26.2 offhand law - consult only, the word never equips and
// never crafts; the totem's own seat stays the inventory's and the
// future lanes' own. Honest refusal on junk input (no throw); the
// armed bot is the caller's silence.

// The vanilla bounds the word prices:
//   TOTEM_NAME - the registry name the undying cheat answers to (the
//     offhand's own item the death check reads the moment the fatal
//     blow lands)
export const TOTEM_NAME = 'totem_of_undying'

// The word: one decision per state read.
//   refuse/junk-input   - offhand provided but not the honest shapes
//                         (a string, a number, a boolean - never null,
//                         never the item object)
//   keep/no-bar         - the read is missing entirely (undefined) -
//                         the reader may not carry the offhand slot on
//                         this version, the breathcare law holds:
//                         never trust a missing bar with a 0
//   watch/empty-offhand - the true empty (null - the real reading, the
//                         second life ABSENT, the slot the word's own
//                         voice names)
//   keep/totem-armed    - the totem rides (the death the cheat honors
//                         once - the caller stays silent)
//   watch/no-totem      - the slot is spent on something else (the
//                         unreadable name too - the worst assumption
//                         the missing name rides, never the silence)
export function decideTotemAction (opts = {}) {
  const { offhand } = opts
  if (offhand === undefined) {
    return { action: 'keep', reason: 'no-bar', name: null }
  }
  if (offhand === null) {
    return { action: 'watch', reason: 'empty-offhand', name: null }
  }
  if (typeof offhand !== 'object') {
    return { action: 'refuse', reason: 'junk-input', name: null }
  }
  if (offhand.name === TOTEM_NAME) {
    return { action: 'keep', reason: 'totem-armed', name: offhand.name }
  }
  return { action: 'watch', reason: 'no-totem', name: typeof offhand.name === 'string' ? offhand.name : null }
}
