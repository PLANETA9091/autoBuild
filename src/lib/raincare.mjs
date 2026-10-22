// (v0.976.396) THE RAINCARE WORD - the care lane's seventh sibling.
// toolcare prices the worn hands, armorcare the worn arms, foodcare the
// hunger bar, healthcare the health bar, breathcare the oxygen bar,
// xpcare the experience bar, this word prices the SKY the bars walk
// under (bot.rainState / bot.thunderState, 0..2 - none/rain/thunder).
// Pure arithmetic over the vanilla 26.2 weather law - consult only, the
// word never flees and never shelters; the surface posture belongs to
// nightsafety and shelter (co-existence by seat never by duplication -
// the walk window prices the clock, this word prices the sky's own
// override: the dawn the RAIN delays). Honest refusal on junk input
// (no throw); the clear sky is the caller's silence.

// The vanilla bounds the word prices:
//   weather state 0..2 (0 = clear, 1 = rain, 2 = thunderstorm; mineflayer
//     reads rainState and thunderState off the weather packet)
//   the undead daylight burn the rain SUPPRESSES - the vanilla law the
//     skeleton and the zombie owe their dawn lives to: while rainState
//     >= 1 the sun no longer clears the surface, the night's mobs walk
//     into the morning (the walk window's dawn tail the sky extends)
//   the thunderstorm the danger outranks - the lightning fire, the
//     skeleton horse traps, the charged creepers the storm breeds
export const WEATHER_CLEAR = 0
export const WEATHER_RAIN = 1
export const WEATHER_THUNDER = 2

// The undead daylight burn the weather gates: the vanilla law prices the
// rain the burn's own suppressor. The unknown judges nothing (null - the
// breathcare sibling's own lesson: never trust junk with a verdict), the
// clear sky burns the undead free (false), any wet sky blocks the burn
// (true - rainState >= 1).
export function burnBlockedBy (rainState) {
  if (rainState == null || !Number.isFinite(rainState)) return null
  const r = Math.max(0, Math.min(2, Math.floor(rainState)))
  return r >= WEATHER_RAIN
}

// The word: one decision per state read.
//   refuse/junk-input      - a provided state non-finite (the honest null
//     rides - junk prices nothing)
//   keep/no-report         - both states missing (undefined/null) - the
//     breathcare law holds: never trust a missing bar with a 0, the
//     weather packet may not have arrived
//   thunder/storm-danger   - thunderState >= 2 (danger first - the band
//     outranks the rain band; the storm's own risks price loudest)
//   shelter-extends/burn-suppressed - rainState >= 1 below the storm (the
//     dawn the rain delays: the undead the sun no longer clears)
//   keep/clear-sky         - both below the rain band (the caller stays
//     silent)
// states clamp to the 0..2 band the weather packet carries; fractional
// states floor (the packet sends whole states).
export function decideRainAction (opts = {}) {
  const { rainState, thunderState } = opts
  const rainMissing = rainState == null
  const thunderMissing = thunderState == null
  if (rainMissing && thunderMissing) {
    return { action: 'keep', reason: 'no-report', rainState: null, thunderState: null, burnBlocked: null }
  }
  if ((!rainMissing && !Number.isFinite(rainState)) ||
      (!thunderMissing && !Number.isFinite(thunderState))) {
    return { action: 'refuse', reason: 'junk-input', rainState: null, thunderState: null, burnBlocked: null }
  }
  const r = rainMissing ? WEATHER_CLEAR : Math.max(0, Math.min(2, Math.floor(rainState)))
  const t = thunderMissing ? WEATHER_CLEAR : Math.max(0, Math.min(2, Math.floor(thunderState)))
  const blocked = burnBlockedBy(r)
  if (t >= WEATHER_THUNDER) {
    return { action: 'thunder', reason: 'storm-danger', rainState: r, thunderState: t, burnBlocked: blocked }
  }
  if (r >= WEATHER_RAIN) {
    return { action: 'shelter-extends', reason: 'burn-suppressed', rainState: r, thunderState: t, burnBlocked: blocked }
  }
  return { action: 'keep', reason: 'clear-sky', rainState: r, thunderState: t, burnBlocked: blocked }
}
