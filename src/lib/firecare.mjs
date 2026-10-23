// (v0.976.399) THE FIRECARE WORD - the care lane's tenth sibling.
// toolcare prices the worn hands, armorcare the worn arms, foodcare the
// hunger bar, healthcare the health bar, breathcare the oxygen bar,
// xpcare the experience bar, raincare the sky the bars walk under,
// freezecare the frost the powder snow packs, saturationcare the hidden
// half-bar - this word prices the FLAME the bot walks through (the
// vanilla burn ticks, the freezecare's own mirror: the frost's counter
// climbs while the bot stands in the powder snow, the fire's counter
// COUNTS DOWN from the moment of the catch - a high reading is not a
// liar read, it is a longer burn). Pure arithmetic over the vanilla
// 26.2 burning law - consult only, the word never douses and never
// flees; the water bucket and the fire resist stay the inventory's and
// the future lanes' own. Honest refusal on junk input (no throw); the
// unburning bot is the caller's silence.

// The vanilla bounds the word prices:
//   fire ticks count DOWN: the catch sets the clock (the fire block
//     8s = 160 ticks, the lava 15s = 300, the blaze fireball 5s = 100)
//     and the burn drains it to the extinguished zero
//   FIRE_DOUSE_AT - 5+ seconds of burn still on the clock: the bot is
//     burning HARD, the verdict is the douse (the band outranks the
//     watch band - danger first)
//   FIRE_WATCH_AT - 1+ second still burning: the early warning band,
//     the embers not yet out
//   FIRE_TICKS_PER_SECOND - the vanilla 20-ticks clock
//   FIRE_DAMAGE_INTERVAL_TICKS - the flame bites every 20 ticks (1s)
//     while the burn lasts (the freezecare's 40-tick bite's hot twin)
export const FIRE_DOUSE_AT = 100
export const FIRE_WATCH_AT = 20
export const FIRE_TICKS_PER_SECOND = 20
export const FIRE_DAMAGE_INTERVAL_TICKS = 20

// The burn's own seconds: the tick clock's honest translation. Junk
// reads null (never a silent 0 - the no-bar law's cousin).
export function burnSecondsFromTicks (ticks) {
  if (!Number.isFinite(ticks)) return null
  return ticks / FIRE_TICKS_PER_SECOND
}

// The word: one decision per state read.
//   refuse/junk-input   - fireTicks provided but non-finite
//   keep/no-bar         - the read is missing entirely (undefined/null
//                         and no binary flag) - the metadata may not
//                         ride on this version, the breathcare law
//                         holds: never trust a missing bar with a 0
//   douse/on-fire-binary- the reader offers the binary flag only (the
//                         on-fire bit without the tick clock, the
//                         mineflayer entity flag's own shape): burning
//                         with the length unknown - the honest read
//                         assumes the worst, not the silence
//   keep/extinguished   - the binary false, or the true zero (the real
//                         reading, not the silence)
//   douse/burning-hard  - at the 5s band (the bite rides every second)
//   watch/watch-band    - the last second of burn (the embers)
//   keep/dying-embers   - under the watch band (the caller stays
//                         silent)
// fireTicks clamps at the floor only (a negative reading is the liar
// read - the clock never counts below the extinguished zero; no ceiling
// - the countdown's high reading is an honest longer burn, the cap the
// frost's climbing counter needs the flame's falling counter does not).
export function decideFireAction (opts = {}) {
  const { fireTicks, onFire } = opts
  if (typeof fireTicks === 'boolean') {
    if (fireTicks) return { action: 'douse', reason: 'on-fire-binary', fireTicks: null, seconds: 0 }
    return { action: 'keep', reason: 'extinguished', fireTicks: 0, seconds: 0 }
  }
  if (fireTicks == null) {
    if (onFire === true) return { action: 'douse', reason: 'on-fire-binary', fireTicks: null, seconds: 0 }
    if (onFire === false) return { action: 'keep', reason: 'extinguished', fireTicks: 0, seconds: 0 }
    return { action: 'keep', reason: 'no-bar', fireTicks: null, seconds: 0 }
  }
  if (!Number.isFinite(fireTicks)) {
    return { action: 'refuse', reason: 'junk-input', fireTicks: 0, seconds: 0 }
  }
  const t = Math.max(0, fireTicks)
  const seconds = t / FIRE_TICKS_PER_SECOND
  if (t === 0) return { action: 'keep', reason: 'extinguished', fireTicks: 0, seconds: 0 }
  if (t >= FIRE_DOUSE_AT) return { action: 'douse', reason: 'burning-hard', fireTicks: t, seconds }
  if (t >= FIRE_WATCH_AT) return { action: 'watch', reason: 'watch-band', fireTicks: t, seconds }
  return { action: 'keep', reason: 'dying-embers', fireTicks: t, seconds }
}
