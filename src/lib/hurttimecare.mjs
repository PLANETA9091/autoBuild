// (v0.976.406) THE HURTTIMECARE WORD - the care lane's seventeenth
// sibling. toolcare prices the worn hands, armorcare the worn arms,
// foodcare the hunger bar, healthcare the health bar, breathcare the
// oxygen bar, xpcare the experience bar, raincare the sky the bars
// walk under, freezecare the frost, saturationcare the hidden
// half-bar, firecare the flame, absorptioncare the golden shield,
// potioncare the effects shelf, exhaustioncare the drain meter,
// fallcare the fall, totemcare the second life, levitationcare the
// float - this word prices the WINDOW the flesh grants free (the
// vanilla hurt time: the ten ticks of invulnerability every landed
// bite deals the body - the bar no HUD paints, the meter the
// healthcare sibling's own face rides between: the bites the bar
// NEVER pays while the window runs). Pure arithmetic over the
// vanilla 26.2 hurt law - consult only, the word never flees and
// never swings; the dodge and the strike stay the movers' and the
// combat lanes' own. Honest refusal on junk input (no throw); the
// unbitten bot is the caller's silence.

// The vanilla bounds the word prices:
//   hurt time counts DOWN from the bite: every landed hit sets the
//     clock (the window 10 ticks = 0.5s - the bites inside it the
//     bar never pays), the clock drains to the exposed zero
//   HURTTIME_WINDOW_TICKS - the vanilla window's own width (the
//     width the bite deals, the word's honest yardstick)
//   HURTTIME_TICKS_PER_SECOND - the vanilla 20-ticks clock
export const HURTTIME_WINDOW_TICKS = 10
export const HURTTIME_TICKS_PER_SECOND = 20

// The window's own seconds: the tick clock's honest translation.
// Junk reads null (never a silent 0 - the no-bar law's cousin); the
// liar negative floors at the zero.
export function hurtSecondsFromTicks (ticks) {
  if (!Number.isFinite(ticks)) return null
  return Math.max(0, ticks) / HURTTIME_TICKS_PER_SECOND
}

// The word: one decision per state read.
//   refuse/junk-input   - hurtTime provided but not the honest shapes
//                         (a string, a number NaN, an object, a
//                         boolean - the numeric lane is not the
//                         firecare flag's own shape, the window has
//                         no binary form)
//   keep/no-bar         - the read is missing entirely (undefined and
//                         null) - the metadata may not ride on this
//                         version, the breathcare law holds: never
//                         trust a missing bar with a 0
//   keep/exposed        - the true zero (the real reading, not the
//                         silence - the window is spent, the NEXT
//                         bite the bar pays full)
//   watch/hurt-window   - the window rides (the free armor - the
//                         bites inside it cost nothing, the seconds
//                         the HUD never prints; no cap: a high read
//                         is an honest longer window, the cap the
//                         frost's climbing counter needs the hurt's
//                         falling countdown does not)
// hurtTime clamps at the floor only (a negative reading is the liar
// read - the clock never counts below the exposed zero).
export function decideHurtTimeAction (opts = {}) {
  const { hurtTime } = opts
  if (typeof hurtTime === 'boolean') {
    return { action: 'refuse', reason: 'junk-input', hurtTime: 0, seconds: 0 }
  }
  if (hurtTime == null) {
    return { action: 'keep', reason: 'no-bar', hurtTime: null, seconds: 0 }
  }
  if (!Number.isFinite(hurtTime)) {
    return { action: 'refuse', reason: 'junk-input', hurtTime: 0, seconds: 0 }
  }
  const t = Math.max(0, hurtTime)
  if (t === 0) return { action: 'keep', reason: 'exposed', hurtTime: 0, seconds: 0 }
  return { action: 'watch', reason: 'hurt-window', hurtTime: t, seconds: t / HURTTIME_TICKS_PER_SECOND }
}
