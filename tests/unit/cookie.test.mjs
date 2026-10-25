// (v0.976.477) Unit tests for the cookie word - the treat lane's
// own craft decision (2 wheat + 1 cocoa beans -> 8 cookies, vanilla).
import test from 'node:test'
import assert from 'node:assert/strict'
import {
  decideCookie,
  COOKIE_WHEAT_PER_CRAFT,
  COOKIE_COCOA_PER_CRAFT,
  COOKIE_COOKIES_PER_CRAFT
} from '../../src/lib/cookie.mjs'

test('junk cookieCount refuses honest', () => {
  const r = decideCookie({ cookieCount: NaN, wheatCount: 4, cocoaCount: 2 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
  assert.equal(r.crafts, 0)
})

test('junk wheatCount (string) refuses honest', () => {
  const r = decideCookie({ cookieCount: 0, wheatCount: '5', cocoaCount: 2 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk cocoaCount (boolean) refuses honest', () => {
  const r = decideCookie({ cookieCount: 0, wheatCount: 4, cocoaCount: true })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk Infinity refuses honest', () => {
  const r = decideCookie({ cookieCount: 0, wheatCount: Infinity, cocoaCount: 2 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('negative counts floor to zero and defer, never throw', () => {
  const r = decideCookie({ cookieCount: -3, wheatCount: -4, cocoaCount: -1 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'wheat-short')
  assert.equal(r.wheatLeft, 0)
  assert.equal(r.cocoaLeft, 0)
  assert.equal(r.cookies, 0)
})

test('keep-gate-first: cookies held keep, legs ride their lefts untouched', () => {
  const r = decideCookie({ cookieCount: 2, wheatCount: 10, cocoaCount: 5 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'cookie-held')
  assert.equal(r.wheatLeft, 10)
  assert.equal(r.cocoaLeft, 5)
  assert.equal(r.cookies, 2)
  assert.equal(r.crafts, 0)
})

test('keep-gate-first wins over empty legs (held beats shortage)', () => {
  const r = decideCookie({ cookieCount: 1, wheatCount: 0, cocoaCount: 0 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'cookie-held')
})

test('vanilla pin: exact 2 wheat + 1 cocoa -> 8 cookies', () => {
  const r = decideCookie({ cookieCount: 0, wheatCount: 2, cocoaCount: 1 })
  assert.equal(r.action, 'craft')
  assert.equal(r.reason, 'wheat-cocoa-affordable')
  assert.equal(r.crafts, 1)
  assert.equal(r.cookiesYield, 8)
  assert.equal(r.wheatLeft, 0)
  assert.equal(r.cocoaLeft, 0)
})

test('vanilla constants pin the shaped row (2 / 1 / 8)', () => {
  assert.equal(COOKIE_WHEAT_PER_CRAFT, 2)
  assert.equal(COOKIE_COCOA_PER_CRAFT, 1)
  assert.equal(COOKIE_COOKIES_PER_CRAFT, 8)
})

test('min law binds both legs: wheat-rich cocoa-poor caps on cocoa', () => {
  const r = decideCookie({ cookieCount: 0, wheatCount: 10, cocoaCount: 2 })
  assert.equal(r.action, 'craft')
  assert.equal(r.crafts, 2)
  assert.equal(r.cookiesYield, 16)
  assert.equal(r.wheatLeft, 6)
  assert.equal(r.cocoaLeft, 0)
})

test('min law binds both legs: cocoa-rich wheat-poor caps on wheat', () => {
  const r = decideCookie({ cookieCount: 0, wheatCount: 4, cocoaCount: 9 })
  assert.equal(r.action, 'craft')
  assert.equal(r.crafts, 2)
  assert.equal(r.cookiesYield, 16)
  assert.equal(r.wheatLeft, 0)
  assert.equal(r.cocoaLeft, 7)
})

test('no cap: a rich pocket prices every batch it affords', () => {
  const r = decideCookie({ cookieCount: 0, wheatCount: 200, cocoaCount: 100 })
  assert.equal(r.action, 'craft')
  assert.equal(r.crafts, 100)
  assert.equal(r.cookiesYield, 800)
})

test('defer wheat-short names the binding two-per leg first', () => {
  const r = decideCookie({ cookieCount: 0, wheatCount: 1, cocoaCount: 5 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'wheat-short')
  assert.equal(r.wheatLeft, 1)
  assert.equal(r.cocoaLeft, 5)
})

test('defer cocoa-short names the jungle pod second', () => {
  const r = decideCookie({ cookieCount: 0, wheatCount: 8, cocoaCount: 0 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'cocoa-short')
  assert.equal(r.wheatLeft, 8)
  assert.equal(r.cocoaLeft, 0)
})

test('fractional counts floor honestly (0.5 the binary-exact remainder)', () => {
  const r = decideCookie({ cookieCount: 0, wheatCount: 2.5, cocoaCount: 1.5 })
  assert.equal(r.action, 'craft')
  assert.equal(r.crafts, 1)
  assert.equal(r.cookiesYield, 8)
  assert.equal(r.wheatLeft, 0.5)
  assert.equal(r.cocoaLeft, 0.5)
})

test('empty pocket defers wheat-short, never throws', () => {
  const r = decideCookie({})
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'wheat-short')
  assert.equal(r.wheatLeft, 0)
})

test('pure read mutates nothing', () => {
  const opts = { cookieCount: 0, wheatCount: 6, cocoaCount: 3 }
  const snapshot = JSON.stringify(opts)
  decideCookie(opts)
  assert.equal(JSON.stringify(opts), snapshot)
})
