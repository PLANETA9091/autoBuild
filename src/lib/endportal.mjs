// (v0.976.485) End portal activation decision for the bot fleet.
//
// THE PROBLEM: the end economy priced TWO legs - the eyeofender word
// (v0.976.467, 1 ender pearl + 1 blaze powder -> 1 eye of ender) and
// the enderchest word (v0.976.473, 8 obsidian + 1 eye -> 1 ender
// chest, THE CONSUMER LAW's first priced demand) - while the lane's
// own TERMINAL demand walked unpriced: the enderchest word itself
// named it "the END PORTAL's own activation (the eyes the frame's
// own story) the end trip's own lane, named never priced here" - and
// the ACTIVATION IS THE END TRIP'S OWN GATE (one end portal frame
// socket takes one eye, vanilla; TWELVE sockets the frame's own
// dozen; the portal opens on the full dozen - no craft grid, no
// fuel, the frame's own exchange). THE NAMING CHAIN CLOSED: the
// eyeofender word minted the eye, the enderchest word spent the
// eye's first consumer demand and NAMED the frame - this word PRICES
// the frame's own dozen (the eye's terminal consumer the lane's own
// child). THE FIX: decideEndPortal() prices the ACTIVATION LANE -
// one pocket-and-frame map to ONE word with ONE reason:
//   'keep'   - no frame in reach (THE FRAME GATE: the hoetrip word's
//              own GROUND GATE's twin - the frame gate reads first,
//              no frame = no fill regardless of the pocket; the
//              stronghold either stands in reach or the eye-throw
//              story owes it, the word never guesses which - the
//              orchard word's own GROVE LAW's reading)
//   'defer'  - the eye leg starves (THE EYE-SHORT LAW: the defer
//              names the eyeofender word's own craft - the eye the
//              pocket's own coin, 1 pearl + 1 powder the mint's own
//              price; the activation the eye's own child)
//   'fill'   - both legs afford (the min law binds THREE legs - the
//              eye leg, the frame leg and the SOCKET leg: sockets =
//              min(eyes, frames, 12) - the hoetrip word's own min
//              reading grown one leg: every socket all three legs
//              afford priced)
//   'refuse' - junk input (never throws into the fleet loop)
// THE SOCKET LAW: the frame holds TWELVE exactly - the THIRTEENTH
// eye the frame refuses (vanilla's own shape, the dozen the
// stronghold's own form never guessed); the surplus stays POCKETED
// and NAMED - never clamped into a lie, never wasted (the
// enderchest word's own leg re-tasks the surplus eye). THE FAMILY'S
// FIRST HARD CEILING: the craft family's own no-cap law reads the
// YIELD never clamped (the orchard's passes, the till's tills) -
// this word prices a CONSUMPTION lane, the ceiling the FRAME'S OWN
// FORM (the EIGHT-FORM law's own reading grown to its terminal: 8
// obsidian wrap one chest, 12 sockets take the portal) - the
// socket's dozen a vanilla constant, the deficit the honesty's own
// name. THE DEFICIT LAW: the fill form names what the activation
// still asks - deficit = 12 - sockets (a partial fill rides PRICED,
// never deferred - the family's own no-defer spirit: the honest
// partial the word's own report; deficit 0 reads the ACTIVATION
// riding - the full dozen met). THE CENSUS LAW: exact
// 'eye_of_ender' (the eyeofender word's own EYE FAMILY LAW - the
// pearl and the powder the mint's own legs, never adopted); the
// frame the CALLER'S OWN BLOCK CENSUS over 'end_portal_frame' (the
// world's own stock - never a pocket item; the FILLED socket the
// world's own placement story, the stronghold seed's own dice named
// never guessed - the orchard word's own CHANCE LAW's sibling: the
// census counts the frame block, the pre-filled eye the seed
// already placed the word never guesses). Junk inputs never throw:
// they return a refuse with the junk-input reason so a caller bug
// degrades into a log line, not a crash loop. Negative counts floor
// to zero (a lying census must not poison the arithmetic); they are
// read, not refused - the honesty lives in the clamp. Fractional
// counts floor honestly with the remainder named. The pure read
// mutates nothing.

// the vanilla eye price one portal activation carries (the frame's
// own dozen - the stronghold's own form, the THIRTEENTH eye the
// frame refuses)
export const ENDPORTAL_EYES_PER_PORTAL = 12
// the vanilla eye price one frame socket carries (one eye per
// socket - the frame's own even exchange)
export const ENDPORTAL_EYES_PER_FRAME = 1

/**
 * Decide whether one bot's pocket earns an end portal fill word.
 *
 * @param {object} [opts]
 * @param {number} [opts.eyesCount=0]    eyes of ender on hand (the
 *                                       exact 'eye_of_ender' name -
 *                                       the eyeofender word's own
 *                                       EYE FAMILY LAW)
 * @param {number} [opts.framesCount=0]  end portal frames in reach
 *                                       (the caller's own block
 *                                       census over 'end_portal_frame'
 *                                       - the world's own stock,
 *                                       never a pocket item; the
 *                                       FILLED socket the seed's own
 *                                       dice, never guessed)
 * @returns {{action: 'fill'|'defer'|'keep'|'refuse', reason: string, sockets: number, deficit: number, eyesLeft: number, framesLeft: number}}
 */
export function decideEndPortal (opts = {}) {
  // the junk battery: a non-finite count is a caller bug - refuse honestly
  // instead of throwing into the fleet loop. A boolean rides the same law
  // (a true count is a flag, never a number).
  const KEYS = ['eyesCount', 'framesCount']
  for (const key of KEYS) {
    const v = opts[key]
    if (v !== undefined && (!Number.isFinite(v) || typeof v === 'boolean')) {
      return { action: 'refuse', reason: 'junk-input', sockets: 0, deficit: ENDPORTAL_EYES_PER_PORTAL, eyesLeft: 0, framesLeft: 0 }
    }
  }
  const floor0 = v => (Number.isFinite(v) ? Math.max(0, v) : 0)
  const eyes = floor0(opts.eyesCount)
  const frames = floor0(opts.framesCount)
  // the frame gate reads first: no frame = no fill regardless of the
  // pocket (the GROUND GATE's twin - the word never guesses which
  // the eye-throw story owes).
  if (frames < ENDPORTAL_EYES_PER_FRAME) {
    return { action: 'keep', reason: 'frame-absent', sockets: 0, deficit: ENDPORTAL_EYES_PER_PORTAL, eyesLeft: eyes, framesLeft: frames }
  }
  // the eye leg starves: the honest shortage names the eyeofender
  // word's own craft (the eye the pocket's own coin - 1 pearl + 1
  // powder the mint's own price; the activation the eye's own child).
  if (eyes < ENDPORTAL_EYES_PER_FRAME) {
    return { action: 'defer', reason: 'eye-short', sockets: 0, deficit: ENDPORTAL_EYES_PER_PORTAL, eyesLeft: eyes, framesLeft: frames }
  }
  // the min law binds THREE legs - the eye leg, the frame leg and
  // the SOCKET leg (the frame's own dozen): every socket all three
  // legs afford priced honestly, the word never rounds the census
  // into a lie, the surplus stays pocketed and named.
  const sockets = Math.min(Math.floor(eyes), frames, ENDPORTAL_EYES_PER_PORTAL)
  return {
    action: 'fill',
    reason: 'frame-and-eye-afford',
    sockets,
    deficit: ENDPORTAL_EYES_PER_PORTAL - sockets,
    eyesLeft: eyes - sockets,
    framesLeft: frames - sockets
  }
}
