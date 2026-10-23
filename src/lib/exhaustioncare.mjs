// (v0.976.402) THE EXHAUSTIONCARE WORD - the care lane's thirteenth sibling.
// toolcare prices the worn hands, armorcare the worn arms, foodcare the
// hunger bar, healthcare the health bar, breathcare the oxygen bar,
// xpcare the experience bar, raincare the sky the bars walk under,
// freezecare the frost, saturationcare the hidden half-bar, firecare the
// flame, absorptioncare the golden shield, potioncare the effects shelf -
// this word prices the DRAIN METER the hunger bar hides behind them all
// (the vanilla exhaustion counter: the sprint's 0.1 a metre, the jump's
// 0.05, the attack's 0.1, the bite of damage 0.1 - every accumulation
// reaches the 4.0 line and the TOLL fires, the saturation pays first
// and the hunger bar pays after; the meter the server keeps and the
// hunger bar's own receipt). Pure arithmetic over the vanilla 26.2
// exhaustion law - consult only, the word never eats and never rests;
// the apple and the sprint stay the inventory's and the legs' own.
// Honest refusal on junk input (no throw); the missing read is the
// no-bar silence the saturationcare twin keeps (the protocol carries
// the field, the reader may not yet - never trust a missing bar with
// a 0).

// The vanilla bounds the word prices:
//   EXHAUSTION_TOLL_AT - the 4.0 line: the drain law's own trigger,
//     the accumulation spends itself and the bar pays the toll
//   EXHAUSTION_WATCH_AT - the meter's own half (2.0): the toll is
//     coming, the early warning band
//   the sprint's costs ride the meter: 0.1 a metre sprinting, 0.05 a
//     jump (0.2 the sprint-jump), 0.1 an attack, 0.1 a damage bite -
//     a dozen sprint-jumps fill the meter's own half
export const EXHAUSTION_TOLL_AT = 4
export const EXHAUSTION_WATCH_AT = 2

// The meter's own progress toward the next toll: the honest fraction.
// Junk reads null (never a silent 0 - the no-bar law's cousin); the
// liar negative read floors at the clean zero; the over-full read is
// an honest over-1 fraction (the toll already due, no cap rides).
export function tollProgressFromExhaustion (exhaustion) {
  if (!Number.isFinite(exhaustion)) return null
  return Math.max(0, exhaustion) / EXHAUSTION_TOLL_AT
}

// The word: one decision per state read.
//   refuse/junk-input    - exhaustion provided but non-finite (the
//                          boolean too - the numeric lane is not the
//                          firecare flag's own shape)
//   keep/no-bar          - the read is missing entirely
//                          (undefined/null) - the metadata may not
//                          ride on this version, the breathcare law
//                          holds: never trust a missing bar with a 0
//   watch/toll-bites     - at the 4.0 line: the drain fires, the
//                          saturation pays first and the hunger bar
//                          after (the band outranks the watch band -
//                          danger first)
//   watch/pre-toll       - at the meter's own half: the toll is
//                          coming (the early warning band, the word's
//                          other voice)
//   keep/lean            - under the half: the accumulation is the
//                          game's own breathing, the real zero rides
//                          inside (the caller stays silent)
// exhaustion clamps at the floor only (a negative reading is the liar
// read - the meter never owes work; no ceiling - a high reading is an
// honest longer accumulation, the toll the over-full read already
// owes).
export function decideExhaustionAction (opts = {}) {
  const { exhaustion } = opts
  if (exhaustion == null) {
    return { action: 'keep', reason: 'no-bar', exhaustion: null, progress: null }
  }
  if (!Number.isFinite(exhaustion)) {
    return { action: 'refuse', reason: 'junk-input', exhaustion: 0, progress: 0 }
  }
  const e = Math.max(0, exhaustion)
  const progress = e / EXHAUSTION_TOLL_AT
  if (e >= EXHAUSTION_TOLL_AT) return { action: 'watch', reason: 'toll-bites', exhaustion: e, progress }
  if (e >= EXHAUSTION_WATCH_AT) return { action: 'watch', reason: 'pre-toll', exhaustion: e, progress }
  return { action: 'keep', reason: 'lean', exhaustion: e, progress }
}
