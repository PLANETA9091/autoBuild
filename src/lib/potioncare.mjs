// (v0.976.401) THE POTIONCARE WORD - the care lane's twelfth sibling.
// toolcare prices the worn hands, armorcare the worn arms, foodcare the
// hunger bar, healthcare the health bar, breathcare the oxygen bar,
// xpcare the experience bar, raincare the sky the bars walk under,
// freezecare the frost, saturationcare the hidden half-bar, firecare
// the flame, absorptioncare the golden shield - the HUD's own bars are
// priced, this word opens the EFFECTS SHELF the bars cannot show: the
// vanilla 26.2 status effects the bot carries (the wither that eats the
// health bar no armor stops, the poison that drips it, the hunger that
// starves the food bar, the magic that bites it, and the afflictions
// that slow, blind and levitate without spilling a drop). Pure
// arithmetic over the vanilla 26.2 effect law - consult only, the word
// never drinks the milk and never quaffs the cure; the bucket and the
// potion stay the inventory's and the future lanes' own. Honest
// refusal on junk input (no throw); the clean bot is the caller's
// silence.

// The vanilla bounds the word prices (the 26.2 effect ids the shelves
// name):
//   POTION_DRAIN_IDS - the health bar's own eaters: instant damage (7),
//     hunger (17), poison (19), wither (20) - the drops the bar pays
//     while the effect rides (wither the worst: no armor stops it, no
//     regeneration outpaces it at II)
//   POTION_AFFLICT_IDS - the debuffs that hurt the WORK, not the bar:
//     slowness (2), mining fatigue (4), nausea (9), blindness (15),
//     levitation (24), unluck (26), bad omen (30), darkness (32)
//   the rest of the shelf is the positive half (speed, haste,
//     regeneration, resistance...) - the caller's silence rides it
export const POTION_DRAIN_IDS = new Set([7, 17, 19, 20])
export const POTION_AFFLICT_IDS = new Set([2, 4, 9, 15, 24, 26, 30, 32])
export const POTION_NAME_BY_ID = {
  2: 'slowness',
  4: 'mining-fatigue',
  7: 'instant-damage',
  9: 'nausea',
  15: 'blindness',
  17: 'hunger',
  19: 'poison',
  20: 'wither',
  24: 'levitation',
  26: 'unluck',
  30: 'bad-omen',
  32: 'darkness'
}

// The shelf's own scan: the harmful rides the bot carries, the longest
// first (the worst clock outranks). The container may ride as the
// mineflayer map (id -> effect) or the plain array - both are the
// honest shelf; the individual junk slots (the holes the map's deletes
// leave, the entries the version does not fill) are skipped, never
// guessed - the container's junk alone is the refusal.
export function harmfulOf (effects) {
  if (effects == null) return null
  if (typeof effects !== 'object') return null
  const list = Array.isArray(effects) ? effects : Object.values(effects)
  const harmful = []
  for (const e of list) {
    if (e == null || typeof e !== 'object') continue
    if (!Number.isFinite(e.id)) continue
    if (!POTION_DRAIN_IDS.has(e.id) && !POTION_AFFLICT_IDS.has(e.id)) continue
    if (!Number.isFinite(e.duration) || e.duration <= 0) continue
    harmful.push({ id: e.id, name: POTION_NAME_BY_ID[e.id], duration: e.duration, amplifier: Number.isFinite(e.amplifier) ? e.amplifier : 0 })
  }
  harmful.sort((a, b) => b.duration - a.duration)
  return harmful
}

// The word: one decision per state read.
//   refuse/junk-input   - the shelf itself is junk (a string, a number,
//                         a boolean - never an object or an array)
//   keep/no-bar         - the shelf is missing entirely
//                         (undefined/null) - the read may not ride on
//                         this version, the breathcare law holds:
//                         never trust a missing bar with a 0
//   keep/clean          - the shelf scanned and no harmful ride (the
//                         true zero, the real reading)
//   treat/draining      - any health bar's eater rides (the wither, the
//                         poison, the hunger, the magic bite - the bar
//                         is paying NOW, danger outranks the clock:
//                         a short poison outranks a long blindness)
//   watch/afflicted     - the debuffs ride without the drain (the work
//                         hurts, the bar does not)
// the verdict carries the harmful shelf (longest first), its count,
// and the worst ride itself (null when clean).
export function decidePotionAction (opts = {}) {
  const { effects } = opts
  if (effects == null) {
    return { action: 'keep', reason: 'no-bar', harmful: [], count: 0, worst: null }
  }
  if (typeof effects !== 'object') {
    return { action: 'refuse', reason: 'junk-input', harmful: [], count: 0, worst: null }
  }
  const harmful = harmfulOf(effects) || []
  if (harmful.length === 0) {
    return { action: 'keep', reason: 'clean', harmful: [], count: 0, worst: null }
  }
  const worst = harmful[0]
  const draining = harmful.some(h => POTION_DRAIN_IDS.has(h.id))
  if (draining) {
    return { action: 'treat', reason: 'draining', harmful, count: harmful.length, worst }
  }
  return { action: 'watch', reason: 'afflicted', harmful, count: harmful.length, worst }
}
