// (v0.976.442) Bow craft decision for the bot fleet.
//
// THE PROBLEM: the fletchercraft word priced the volley (v0.976.441) -
// 1 flint + 1 stick + 1 feather -> 4 arrows - but a volley without a
// launcher is a pocket full of straight sticks: a bot stick-rich and
// string-rich shoots nothing while the wood and the cord it already
// carries ARE the bow (3 sticks + 3 string -> 1 bow, vanilla). The bow
// is the fletcher lane's own launcher - the arrow lane's own story
// closed at both ends: the volley priced, now the bow that delivers
// it. THE FIX: decideBowCraft() prices the LAUNCHER POVERTY - one
// pocket map to ONE craft word with ONE reason:
//   'keep'   - a bow already held (the fletcher lane owns that story
//              - the launcher never doubles)
//   'craft'  - sticks >= 3 AND string >= 3 (the SHORTER leg prices the
//              yield, the leftover of BOTH legs named)
//   'defer'  - one leg short, the missing leg NAMED
//   'refuse' - junk input (never throws into the fleet loop)
// THE CONSUMER LAW: the stick consumers are separate lanes - the
// stickcraft chain (v0.976.421), the sign lane (the marker leg
// v0.976.433), the rail lane (the tie leg v0.976.437), the fletcher
// lane's shaft leg (v0.976.441), this word's limb leg - a bot holding
// spare sticks it does not want still earns its launcher if the legs
// afford them, no other lane's face gates here. The STRING consumers:
// this word's string leg - THE FIRST STRING CONSUMER PRICED, the hunt
// lane's own yield finally priced (the spider trip the ground
// surrenders, never a guessed craft), no other lane's face gates here.
// THE LAUNCHER FAMILY LAW: the bow IS a singleton launcher - the
// census rides exact 'bow' and nothing else, no variant kin; the
// crossbow IS a different lane's own word (the honest future named),
// the census never splits and never adopts another lane's kin. Junk
// inputs never throw: they return a refuse with the junk-input reason
// so a caller bug degrades into a log line, not a crash loop.
// Negative counts floor to zero (a lying census must not poison the
// arithmetic); they are read, not refused - the honesty lives in the
// clamp. No cap: a leg-rich pocket prices every bow craft it affords,
// an honest longer yield never clamped. The pure read mutates nothing.

// the vanilla stick cost one launcher craft carries (3 sticks shape the limbs)
export const BOWCRAFT_STICKS_PER_CRAFT = 3
// the vanilla string cost one launcher craft carries (3 strings make the cord)
export const BOWCRAFT_STRING_PER_CRAFT = 3
// the vanilla launcher yield one bow craft produces
export const BOWCRAFT_BOWS_PER_CRAFT = 1

/**
 * Decide whether one bot's pocket earns a launcher craft word.
 *
 * @param {object} [opts]
 * @param {number} [opts.bowCount=0]   bows already held (the singleton
 *                                     census - exact 'bow')
 * @param {number} [opts.stickCount=0] sticks on hand (the stickcraft
 *                                     chain's own yield)
 * @param {number} [opts.stringCount=0] string on hand (the hunt lane's
 *                                     own yield)
 * @returns {{action: 'craft'|'defer'|'refuse'|'keep', reason: string, crafts: number, bowsYield: number, sticksLeft: number, stringLeft: number, bows: number}}
 */
export function decideBowCraft (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['bowCount', 'stickCount', 'stringCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', crafts: 0, bowsYield: 0, sticksLeft: 0, stringLeft: 0, bows: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const sticks = floor0(opts.stickCount)
  const string = floor0(opts.stringCount)
  const held = floor0(opts.bowCount)
  // a launcher already held: the fletcher lane's own story - the arrow
  // lane owns the volley, the launcher economy stays silent (the
  // pieces-held law's twin, the craft family's own keep gate).
  if (held >= 1) {
    return { action: 'keep', reason: 'bow-held', sticksLeft: sticks, stringLeft: string, bows: held, crafts: 0, bowsYield: 0 }
  }
  // the pocket's own arithmetic: every trio of sticks plus its string
  // trio prices one launcher honestly, the SHORTER leg prices the
  // crafts - the word never rounds the yield into a lie and never caps
  // the pocket, the leftover of BOTH legs named.
  if (sticks >= BOWCRAFT_STICKS_PER_CRAFT && string >= BOWCRAFT_STRING_PER_CRAFT) {
    const crafts = Math.min(Math.floor(sticks / BOWCRAFT_STICKS_PER_CRAFT), Math.floor(string / BOWCRAFT_STRING_PER_CRAFT))
    return {
      action: 'craft',
      reason: 'sticks-string-affordable',
      crafts,
      bowsYield: crafts * BOWCRAFT_BOWS_PER_CRAFT,
      sticksLeft: sticks - crafts * BOWCRAFT_STICKS_PER_CRAFT,
      stringLeft: string - crafts * BOWCRAFT_STRING_PER_CRAFT,
      bows: 0
    }
  }
  // one leg short: the honest shortage names the missing leg - the
  // stick leg first (the word's own base wood - the limbs ARE the
  // stickcraft chain's re-task, never a guessed craft), the string leg
  // second (the hunt lane's own yield - the spider trip the ground
  // surrenders, never a guessed craft)
  if (sticks < BOWCRAFT_STICKS_PER_CRAFT) {
    return { action: 'defer', reason: 'sticks-short', sticksLeft: sticks, stringLeft: string, bows: 0, crafts: 0, bowsYield: 0 }
  }
  return { action: 'defer', reason: 'string-short', sticksLeft: sticks, stringLeft: string, bows: 0, crafts: 0, bowsYield: 0 }
}
