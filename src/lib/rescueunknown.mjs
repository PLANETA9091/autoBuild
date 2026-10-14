// (v0.976.26) THE UNCLOSED STARTS' OWN UNKNOWN AIR - the '?' byte's
// own name. The field priced it by hand across the cached record:
// FACE 320 = 38498739267's read named it (F5's unclosed start rode
// 'oxygen ?' and every reader's fork priced it unnamed - ARM_O2_RE's
// '(-1|\d+)' fork dropped the byte the line rode, the airs' own
// UNCLOSED_OXYGEN_RE '\d+' fork priced it 'rode the air unnamed', the
// blind seat's fold held it in the honest junk count); the byte's own
// field history rode before the face that named it (the verbatim
// riders: face33's F7 x2, face294's F12 x2, face308's F6, FACE 320's
// F5 - and each start's next line rode 'pass 0 ... o2=20' - the
// sensor's first word rode the NEXT line: the emitter wrote the start
// before the sensor ever spoke).
//
// The emitter's own sentinel: the fleet's own start emitter writes
// 'oxygen ' + (bot.oxygenLevel ?? '?') - the '?' byte is the air the
// start line NEVER held (null or undefined at the start moment). Not
// a band byte (the arm's blind skin is -1 - the sensor's own death;
// the '?' holds no band at all), not an air reading (the airs' own
// spread's min would lie) - the sensor's own silence at the start.
//
// The lens: NARROW, the UNCLOSED_OXYGEN_RE precedent (the rescue-start
// line family already carries per-word parsers - each fold reads the
// byte its word owns). This lens reads ONLY the '?' byte - zero ripple
// into the arm classes (the blind arm window's own law), the blind
// fold's unmatchable count, or the airs' own words. The grammar that
// the other lenses read stays byte-for-byte what it was.
//
// The carrier: the ledger's own unclosed book - the verbatim start
// lines the episodes that never closed rode (the blind seat's own
// carrier, zero re-classification). A ? start that CLOSED rides the
// honest outside of this lens (the book's own fate filter prices the
// seat) - the lens prices the unclosed book's own rides.
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits.

/**
 * The lens - the emitter's own sentinel byte, whole-anchored. The
 * narrow fork: this regex prices the '?' byte and nothing else (the
 * numeric airs belong to the airs' own words, the -1 byte to the
 * blind seat, the junk to the honest unpriced count).
 */
export const RESCUE_UNKNOWN_RE = /^(F\d+) \[\1\] water: drowning rescue start \(drowning, oxygen \?\)$/

/**
 * The fold - the unclosed book's own unknown count, read through the
 * lens above. Pure: reads, never mutates. Junk-safe: non-array input
 * reads null, a non-string line lies nothing (null).
 *
 * @param {string[]} [unclosedLines] the ledger's own unclosed book
 * @returns {{unknown: number, unpriced: number}|null}
 */
export function rescueUnclosedUnknown (unclosedLines) {
  if (!Array.isArray(unclosedLines)) return null
  let unknown = 0
  let unpriced = 0
  for (const l of unclosedLines) {
    if (typeof l !== 'string') return null
    if (RESCUE_UNKNOWN_RE.test(l)) {
      unknown++
      continue
    }
    // the lines this lens defers: the airs' own words, the blind
    // seat's byte, the honest junk - each owns its own word already
    unpriced++
  }
  return { unknown, unpriced }
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie).
 *
 * @param {object|null} [f] the unknown fold
 * @returns {boolean}
 */
export function rescueUnclosedUnknownConsistent (f) {
  if (!f || typeof f !== 'object' || Array.isArray(f)) return false
  const int = (v) => Number.isInteger(v) && v >= 0
  if (!int(f.unknown) || !int(f.unpriced)) return false
  return true
}

/**
 * The word - one line, the '?' byte's own name. The honest null when
 * the book rode no ? byte (the byte's rest is not the subject - the
 * byte is).
 *
 * @param {object|null} [f] the unknown fold
 * @returns {string|null}
 */
export function rescueUnclosedUnknownRow (f) {
  if (!f || typeof f !== 'object') return null
  if (!rescueUnclosedUnknownConsistent(f)) return null
  if (f.unknown === 0) return null
  return `the unclosed starts' own unknown air (v0.976.26): ${f.unknown} unclosed start(s) rode the '?' byte - the emitter's own sentinel names the sensor's own silence: the air the start line never held`
}
