// (v0.976.22) THE UNCLOSED STARTS' OWN BLIND SEAT - the -1 air byte's
// own name. The field named it (the FACE 316 = 38487495082 read: F17's
// unclosed start rode 'oxygen -1' and the airs' own folds priced it
// 'unnamed' - the \d+ fork dropped the byte the line rode): the
// emitter's own grammar NAMES the byte - ARM_O2_RE reads
// 'oxygen (-1|\d+)' whole-anchored (the one parser, the emitter's own
// law) and the arm's own band law says 'The blind skin rides -1 (the
// sensor's own death before the arm)' - the arm's own BLIND byte, a
// first-class citizen of the line's grammar, not an air reading at
// all. The airs' own spread cannot price it (the blind is not air -
// the spread's min would lie); the blind seat prices it here.
//
// The carrier: the ledger's own unclosed book - the verbatim start
// lines the episodes that never closed rode (the rescue-ledger's own
// walk, zero re-classification). The fold reads each line through the
// emitter's own ARM_O2_RE (imported whole, never forked - the
// one-parser law): the line that matches with air = -1 rides the
// blind seat; a line that matches with air >= 0 belongs to the airs'
// own words (the oxygen spread, the thin air's band); a line the
// emitter's own grammar cannot read (the '(start line unavailable)'
// fallback, a junk line) rides the unmatchable count - the honest
// junk the fold refuses to name.
//
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits.

import { ARM_O2_RE } from './o2arm.mjs'

/**
 * The fold - the unclosed book's own blind count, read through the
 * emitter's own grammar. Pure: reads, never mutates. Junk-safe:
 * non-array input reads null, a non-string line lies nothing (null).
 *
 * @param {string[]} [unclosedLines] the ledger's own unclosed book
 * @returns {{blind: number, unmatchable: number}|null}
 */
export function rescueUnclosedBlind (unclosedLines) {
  if (!Array.isArray(unclosedLines)) return null
  let blind = 0
  let unmatchable = 0
  for (const l of unclosedLines) {
    if (typeof l !== 'string') return null
    const m = ARM_O2_RE.exec(l)
    if (!m) {
      unmatchable++
      continue
    }
    if (Number(m[2]) === -1) blind++
  }
  return { blind, unmatchable }
}

/**
 * The fence - the fold's own image must prove itself before the word
 * rides. A fold that cannot prove itself prices nothing (the fence
 * law: the word never rides a lie).
 *
 * @param {object|null} [f] the blind fold
 * @returns {boolean}
 */
export function rescueUnclosedBlindConsistent (f) {
  if (!f || typeof f !== 'object' || Array.isArray(f)) return false
  if (!Number.isInteger(f.blind) || f.blind < 0) return false
  if (!Number.isInteger(f.unmatchable) || f.unmatchable < 0) return false
  return true
}

/**
 * The word - one line, the blind byte's own seat. The honest null when
 * the blind never rode (no -1 air in the unclosed book - the airs' own
 * words own the book, the blind prices nothing).
 *
 * @param {object|null} [f] the blind fold
 * @returns {string|null} the row byte, or null
 */
export function rescueUnclosedBlindRow (f) {
  if (!rescueUnclosedBlindConsistent(f)) return null
  if (!(f.blind > 0)) return null
  return `the unclosed starts' own blind (v0.976.22): ${f.blind} unclosed start(s) rode the -1 air byte - the emitter's own grammar names the blind skin: the sensor's own death before the arm`
}
