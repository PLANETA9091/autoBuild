// (v0.976.487) The sleep word - the bed's own USE, the night census.
//
// THE PROBLEM: the bedcraft word prices the bed's own MINT (v0.976.432:
// 3 wool + 3 planks -> 1 bed, the wool color law, the plank family
// law) - but the bed's own HOUR never priced: a bedded bot endures the
// whole night awake (the mobs the shieldcraft word's offhand blocks,
// the clock the nightcare word prices) while vanilla hands the sleep
// for free - one right-click skips the night (THE SLEEP'S OWN YIELD:
// the dark the fleet endures walked for nothing, the bed's own story
// the mint never told). THE FIX: decideSleep() prices the SLEEP lane's
// own word - one clock-and-bed map to ONE word with ONE reason:
//   'sleep'  - the bed held and the dark honest (THE DARK LAW: the
//              night's own dark OR the storm's - the THUNDER LAW
//              below; one sleep per dark, the yield named)
//   'keep'   - the clock not dark (THE DAY GATE: the sleep is not
//              owed at noon, the word never demands the mint for a
//              sleep the clock does not ask - the keep, never a
//              defer, the GROVE LAW's reading: the hours either ride
//              or they do not, the word never guesses)
//   'defer'  - the dark honest and the bed short (THE BED-SHORT
//              DEFER: the defer names the bedcraft word's own mint -
//              3 wool + 3 planks the bed's own price; the caller sees
//              which story owes the night)
//   'refuse' - junk input (never throws into the fleet loop)
// THE THUNDER LAW: vanilla reads the thunderstorm as the sleep-legal
// dark - the storm's own noon the night's own sibling (the word never
// hardcodes the wall-clock lie: the dark is a STATE, the clock and
// the sky both honest sources).
// THE UNITS LAW: one sleep per dark - THE FAMILY'S SECOND HARD
// CEILING (the endportal word's SOCKET LAW's sibling: the craft
// family's no-cap law reads the YIELD, this word prices a CONSUMPTION
// lane; the three-bed pocket sleeps the same ONE night - the second
// bed the pocket's own spare, never multiplied into a lie).
// THE RESPAWN LAW: the sleep's own price rides named - vanilla sets
// the spawn point on every sleep, the word never hides the cost (the
// one bed the spawn's own overwrite). THE CENSUS LAW: exact bed
// family (the caller's own census sums the *_bed item family - the
// bedcraft word's own 'any color family' reading; the wool and the
// planks the MINT's own legs, never adopted here - this word spends
// the bed, the mint prices the bed). The dark the CALLER'S OWN READ
// (the nightcare word's own fences or the storm's own sky - the
// word never reads the clock itself, the pure function stays pure).
// Junk inputs never throw: they return a refuse with the junk-input
// reason so a caller bug degrades into a log line, not a crash loop.
// Negative counts floor to zero (a lying census must not poison the
// arithmetic); they are read, not refused - the honesty lives in the
// clamp. The pure read mutates nothing.

// the vanilla sleep's own yield: one dark skipped per sleep
export const SLEEP_NIGHTS_SKIPPED = 1
// the vanilla sleep's own price: the spawn point overwritten per sleep
export const SLEEP_RESPAWN_RESETS = 1

/**
 * Decide whether one bot's pocket earns a sleep word.
 *
 * @param {object} [opts]
 * @param {number} [opts.bedsCount=0]  beds on hand (the caller's own
 *                                     census over the *_bed family -
 *                                     any color, the mint's own form)
 * @param {boolean} [opts.isNight=false] the clock's own dark read
 *                                       (the nightcare fences' law)
 * @param {boolean} [opts.isThunder=false] the storm's own dark read
 *                                         (the thunder law - the
 *                                         sleep-legal noon)
 * @returns {{action: 'sleep'|'keep'|'defer'|'refuse', reason: string, beds: number, nightsSkipped: number, respawnResets: number, bedsLeft: number}}
 */
export function decideSleep (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const v = opts.bedsCount
  if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
    return { action: 'refuse', reason: 'junk-input', beds: 0, nightsSkipped: 0, respawnResets: 0, bedsLeft: 0 }
  }
  // the dark flags ride their own battery: a non-boolean flag is a
  // caller bug (a string clock is a lie, never guessed into truth)
  for (const key of ['isNight', 'isThunder']) {
    const f = opts[key]
    if (f !== undefined && typeof f !== 'boolean') {
      return { action: 'refuse', reason: 'junk-input', beds: 0, nightsSkipped: 0, respawnResets: 0, bedsLeft: 0 }
    }
  }
  const floor0 = x => (Number.isFinite(x) ? Math.max(0, x) : 0)
  const beds = floor0(v)
  const dark = opts.isNight === true || opts.isThunder === true
  // the clock's own gate first: the sleep is not owed at noon - the
  // word never demands the mint for a sleep the clock does not ask
  // (the GROVE LAW's reading: the hours either ride or they do not).
  if (!dark) {
    return { action: 'keep', reason: 'day-waits', beds, nightsSkipped: 0, respawnResets: 0, bedsLeft: beds }
  }
  // the dark honest and the bed short: the defer names the bedcraft
  // word's own mint (3 wool + 3 planks the bed's own price - the
  // caller sees which story owes the night).
  if (beds < 1) {
    return { action: 'defer', reason: 'bed-short', beds, nightsSkipped: 0, respawnResets: 0, bedsLeft: 0 }
  }
  // the sleep's own arithmetic: one sleep per dark - the UNITS LAW's
  // own ceiling (the three-bed pocket sleeps the same ONE night, the
  // surplus the pocket's own spare), the respawn's own overwrite the
  // named price (the RESPAWN LAW).
  return {
    action: 'sleep',
    reason: 'dark-and-bedded',
    beds,
    nightsSkipped: SLEEP_NIGHTS_SKIPPED,
    respawnResets: SLEEP_RESPAWN_RESETS,
    bedsLeft: beds
  }
}
