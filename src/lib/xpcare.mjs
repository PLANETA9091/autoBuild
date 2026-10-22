// (v0.976.395) THE XPCARE WORD - the care lane's sixth sibling.
// toolcare prices the worn hands, armorcare the worn arms, foodcare the
// hunger bar, healthcare the health bar, breathcare the oxygen bar, this
// word prices the EXPERIENCE bar (bot.experience.level - the levels the
// death erases). Pure arithmetic over the vanilla 26.2 death-orb law -
// consult only, the word never enchants and never spends; the enchanting
// table belongs to the craft lanes and the movers. Honest refusal on junk
// input (no throw); the lean bot is the caller's silence.

// The vanilla bounds the word prices:
//   level 0.. (unbounded above; the bar's own floor 0 - the death resets
//     the whole bar, the negative read is the glitch the clamp prices)
//   XP_ORBS_PER_LEVEL - the vanilla death-orb rate (7 points per level)
//   XP_ORB_CAP - the vanilla cap (the dropped orbs never exceed 100
//     points - the high level the death erases the cap prices)
//   XP_BANK_AT - the bank band (the vanilla enchanting benchmark 30 - the
//     level the death toll prices heaviest; the band outranks the watch
//     band - danger first)
//   XP_WATCH_AT - the watch band (the early warning the death toll's own
//     arithmetic starts pricing)
export const XP_ORBS_PER_LEVEL = 7
export const XP_ORB_CAP = 100
export const XP_BANK_AT = 30
export const XP_WATCH_AT = 10

// The orbs the death drops: 7 points per level, capped at 100 points (the
// vanilla law - the whole bar erased, the fraction refunded). Clamps to
// [0, 100]; fractional levels floor (2.7 levels = 2 the bar shows); junk
// reads null - never trust junk with a 0 (the breathcare sibling's own
// lesson, the honest null the derived quantity carries).
export function orbsOnDeath (level) {
  if (!Number.isFinite(level)) return null
  const l = Math.max(0, Math.floor(level))
  return Math.min(XP_ORB_CAP, l * XP_ORBS_PER_LEVEL)
}

// The word: one decision per state read.
//   refuse/junk-input  - level provided but non-finite (the honest null
//     rides - junk prices nothing)
//   keep/no-bar        - the bar is missing (undefined/null) - the
//     breathcare law holds: never trust a missing bar with a 0, the
//     experience object may not exist yet
//   bank/rich-at-risk  - at/above the bank band (the death erases the
//     whole bar, the cap refunds a fraction - the vanilla law the orbs
//     price; danger first)
//   watch/watch-band   - at/above the watch band (the early warning)
//   keep/lean          - below the watch band (the caller stays silent)
// level clamps to the bar's own floor 0 (the negative the glitch reads);
// fractional levels floor (the bar shows whole levels).
export function decideXpAction (opts = {}) {
  const { level } = opts
  if (level == null) return { action: 'keep', reason: 'no-bar', level: null, orbs: null }
  if (!Number.isFinite(level)) {
    return { action: 'refuse', reason: 'junk-input', level: null, orbs: null }
  }
  const l = Math.max(0, Math.floor(level))
  const orbs = orbsOnDeath(l)
  if (l >= XP_BANK_AT) return { action: 'bank', reason: 'rich-at-risk', level: l, orbs }
  if (l >= XP_WATCH_AT) return { action: 'watch', reason: 'watch-band', level: l, orbs }
  return { action: 'keep', reason: 'lean', level: l, orbs }
}
