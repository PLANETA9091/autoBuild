// (v0.976.409) THE SACKCARE WORD - the care lane's twentieth
// sibling. toolcare prices the worn hands, armorcare the worn arms,
// foodcare the hunger bar, healthcare the health bar, breathcare the
// oxygen bar, xpcare the experience bar, raincare the sky the bars
// walk under, freezecare the frost, saturationcare the hidden
// half-bar, firecare the flame, absorptioncare the golden shield,
// potioncare the effects shelf, exhaustioncare the drain meter,
// fallcare the fall, totemcare the second life, levitationcare the
// float, hurttimecare the window, nightcare the sky clock, voidcare
// the floor - this word prices the SACK the HUD never prints (the
// pocket's slot fill: the vanilla 26.2 player inventory is 36 slots,
// 9 hotbar + 27 main, and no bar anywhere counts them). The deposit
// lane prices the pocket's UNITS (the 256u bankability floor the
// dusk plan prices) and the CHEST's capacity (the 27-stack
// CHEST_SLOTS the full-chest ledger prices) - nobody prices the
// SLOT fill the despawn toll rides: the deposit lesson's own face
// prices it (mined units evaporated as despawned drops from full
// pockets - the seat the next pickup needs, gone). Pure arithmetic
// over the vanilla 26.2 inventory law - consult only, the word
// never steers and never deposits; the bank walk stays the deposit
// lane's own mover. Honest refusal on junk input (no throw); the
// unread inventory is the caller's silence.

// The vanilla bounds the word prices:
//   INVENTORY_SLOTS (36) - the player inventory's seat count (the
//     9 hotbar + 27 main the vanilla 26.2 layout carries - the
//     statcarry law's own number restated so the seat stands
//     alone): the fill region is 1..36, the rim 36 exact is the
//     full sack the next pickup cannot enter
//   CHEST_PRESS_AT (27) - the CHEST_SLOTS sibling's own number
//     restated (deposit.mjs prices the single chest's 27-stack
//     capacity): a full chest's worth of distinct stacks riding in
//     the pocket is the pressure line the watch band opens at
export const SACKCARE_INVENTORY_SLOTS = 36
export const SACKCARE_CHEST_PRESS_AT = 27

// The free seats' own translation: the empty slots the next
// vein's drops land in (the HUD never prints this either). Junk
// reads null (never a silent 0 - the no-bar law's cousin); a
// finite read floors at the zero (an over-capacity desync read
// still has NO free seat - the floor law keeps the translation
// honest, free never negative).
export function freeSlotsFromSack (slotsUsed) {
  if (!Number.isFinite(slotsUsed)) return null
  return Math.max(0, SACKCARE_INVENTORY_SLOTS - slotsUsed)
}

// The word: one decision per state read.
//   refuse/junk-input   - slotsUsed provided but not the honest
//                         shapes (a string, a number NaN, an object,
//                         an array, a boolean - the numeric lane is
//                         not the firecare flag's own shape, the
//                         sack has no binary form)
//   keep/no-bar         - the read is missing entirely (undefined
//                         and null) - the inventory may not ride on
//                         this version, the breathcare law holds:
//                         never trust a missing bar with a 0
//   keep/sack-empty     - the true zero (0, the floored liar too -
//                         the negative read is the liar read the
//                         floor law clamps into the empty sack) -
//                         the real empty the no-bar silence never
//                         speaks for, every seat free
//   keep/roomy          - 1..26 (the honest silence - the pockets
//                         carry room the next vein's drops land in)
//   watch/sack-pressed  - 27..35 (the pressure line: a full
//                         single chest's worth of distinct stacks
//                         riding in the pocket - the CHEST_SLOTS
//                         sibling's own number, the bank's shadow
//                         pressing, the next drops find seats but
//                         the hop is one swap away)
//   refuse/sack-full    - 36 and above (the rim 36 exact is the
//                         capacity inclusive - the next pickup has
//                         no seat, the despawn toll's own face the
//                         deposit lesson prices; no cap: an
//                         over-capacity read is the desynced window
//                         the STALE_VIEW lesson names, priced LIVE
//                         - the read speaks the number it saw, the
//                         word never clamps the honest log line,
//                         the translation floors the free seats at
//                         the zero)
// the polarity is the ONE-SIDED kind (the voidcare lesson's own
// shape: only one side of the line speaks) - the sack admits no
// band on the empty side (the empty pockets are legitimate room
// the word never defers): the fill crosses the pressure line and
// the rim, each speaks once per crossing (the edge-refractory
// keeps the repeat silence).
export function decideSackAction (opts = {}) {
  const { slotsUsed } = opts
  if (typeof slotsUsed === 'boolean') {
    return { action: 'refuse', reason: 'junk-input', slotsUsed: null, freeSlots: null }
  }
  if (slotsUsed == null) {
    return { action: 'keep', reason: 'no-bar', slotsUsed: null, freeSlots: null }
  }
  if (!Number.isFinite(slotsUsed)) {
    return { action: 'refuse', reason: 'junk-input', slotsUsed: null, freeSlots: null }
  }
  const used = Math.max(0, slotsUsed)
  if (used === 0) {
    return { action: 'keep', reason: 'sack-empty', slotsUsed: 0, freeSlots: SACKCARE_INVENTORY_SLOTS }
  }
  if (used < SACKCARE_CHEST_PRESS_AT) {
    return { action: 'keep', reason: 'roomy', slotsUsed: used, freeSlots: SACKCARE_INVENTORY_SLOTS - used }
  }
  if (used < SACKCARE_INVENTORY_SLOTS) {
    return { action: 'watch', reason: 'sack-pressed', slotsUsed: used, freeSlots: SACKCARE_INVENTORY_SLOTS - used }
  }
  return { action: 'refuse', reason: 'sack-full', slotsUsed: used, freeSlots: freeSlotsFromSack(used) }
}
