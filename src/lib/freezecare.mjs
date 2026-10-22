// (v0.976.397) THE FREEZECARE WORD - the care lane's eighth sibling.
// toolcare prices the worn hands, armorcare the worn arms, foodcare the
// hunger bar, healthcare the health bar, breathcare the oxygen bar,
// xpcare the experience bar, raincare the sky the bars walk under, this
// word prices the FROST the powder snow packs (the vanilla freezing
// ticks, 0..140 - the entity metadata's own frozen counter). Pure
// arithmetic over the vanilla 26.2 freezing law - consult only, the
// word never steps out and never warms; the powder-snow exit belongs to
// the movers and the future lanes. Honest refusal on junk input (no
// throw); the unfrozen bot is the caller's silence.

// The vanilla bounds the word prices:
//   frozen 0..140 ticks (140 = fully frozen; the counter the metadata
//     carries while the bot stands inside the powder snow)
//   FREEZE_DANGER_AT - at the cap the frost BITES: 1 damage every 2
//     seconds the vanilla law keeps while fully frozen (the band
//     outranks the watch band - danger first)
//   FREEZE_WATCH_AT - the cap's own half (70 ticks): the seal forming,
//     the early warning the frost's own clock does not name
//   FREEZE_TICKS_PER_SECOND - the vanilla 20-ticks clock
//   FROST_DAMAGE_INTERVAL_TICKS - the frost bites every 40 ticks (2s)
export const FREEZE_DANGER_AT = 140
export const FREEZE_WATCH_AT = 70
export const FREEZE_TICKS_PER_SECOND = 20
export const FROST_DAMAGE_INTERVAL_TICKS = 40

// The frost's own percent: 140 ticks = the whole seal (100%), the half
// bubble rounds UP (ceil - the honest pessimism). Clamps to [0, 100];
// junk reads 0.
export function frostPercentFromTicks (t) {
  if (!Number.isFinite(t)) return 0
  const v = Math.max(0, Math.min(140, t))
  return Math.max(0, Math.min(100, Math.ceil(v / 1.4)))
}

// The word: one decision per state read.
//   refuse/junk-input   - frozen provided but non-finite
//   keep/no-bar         - the counter is missing (undefined/null) - the
//                         metadata may not ride on this version, the
//                         breathcare law holds: never trust a missing
//                         bar with a 0, the clock decides
//   thaw/frozen-solid   - at the cap (the frost bites every 2s - danger
//                         first)
//   watch/watch-band    - at the cap's own half (the seal forming)
//   keep/unfrozen       - below the watch band (the caller stays silent)
// frozen clamps to [0, 140] (the counter's own bounds - a reading above
// the cap is a liar reading, the cap the vanilla keeps, the clamp the
// honest pessimism rides).
export function decideFreezeAction (opts = {}) {
  const { frozen } = opts
  if (frozen == null) return { action: 'keep', reason: 'no-bar', frozen: null, percent: 0 }
  if (!Number.isFinite(frozen)) {
    return { action: 'refuse', reason: 'junk-input', frozen: 0, percent: 0 }
  }
  const t = Math.max(0, Math.min(FREEZE_DANGER_AT, frozen))
  const percent = frostPercentFromTicks(t)
  if (t >= FREEZE_DANGER_AT) return { action: 'thaw', reason: 'frozen-solid', frozen: t, percent }
  if (t >= FREEZE_WATCH_AT) return { action: 'watch', reason: 'watch-band', frozen: t, percent }
  return { action: 'keep', reason: 'unfrozen', frozen: t, percent }
}
