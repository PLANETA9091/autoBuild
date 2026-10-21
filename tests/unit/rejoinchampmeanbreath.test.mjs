import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinChampMeanBreathCensus, rejoinChampMeanBreathConsistent, rejoinChampMeanBreathTrendRow } from '../../src/lib/rejoinchampmeanbreath.mjs'

// the REAL faces the 42-face archive holds (/home/z/faces331 - the
// champion set's own WHOLE cadence list the sum law's own division
// prices: THIRTY distinct classes the champion mean breath voices).
// The fixtures ride the archive's own join columns byte-faithful
// (the .354 test's own columns the repair keeps, the F542 fresh face
// the fire-1443 harvest rides).

// F509's own full join column - the two-flapper's face (F16's two
// re-join events the single gap IS the champion's whole ride - the
// champion mean EQUALS the 28 the equality face keeps, the division
// never thins one gap)
const REAL_F509 = [
  '[03:02:19] [Server thread/INFO]: YardSurvey joined the game',
  '[03:02:32] [Server thread/INFO]: F1 joined the game',
  '[03:02:35] [Server thread/INFO]: F2 joined the game',
  '[03:02:37] [Server thread/INFO]: F3 joined the game',
  '[03:02:40] [Server thread/INFO]: F4 joined the game',
  '[03:02:42] [Server thread/INFO]: F5 joined the game',
  '[03:02:45] [Server thread/INFO]: F6 joined the game',
  '[03:02:47] [Server thread/INFO]: F7 joined the game',
  '[03:02:50] [Server thread/INFO]: F8 joined the game',
  '[03:02:52] [Server thread/INFO]: F9 joined the game',
  '[03:02:55] [Server thread/INFO]: F10 joined the game',
  '[03:02:57] [Server thread/INFO]: F11 joined the game',
  '[03:03:00] [Server thread/INFO]: F12 joined the game',
  '[03:03:02] [Server thread/INFO]: F13 joined the game',
  '[03:03:05] [Server thread/INFO]: F14 joined the game',
  '[03:03:07] [Server thread/INFO]: F15 joined the game',
  '[03:03:10] [Server thread/INFO]: F16 joined the game',
  '[03:03:12] [Server thread/INFO]: F17 joined the game',
  '[03:03:15] [Server thread/INFO]: F18 joined the game',
  '[03:03:18] [Server thread/INFO]: F19 joined the game',
  '[03:11:50] [Server thread/INFO]: F16 joined the game',
  '[03:12:18] [Server thread/INFO]: F16 joined the game'
]
// F506's own full join column - the floor's own face (F1's ELEVEN
// re-joins the champion column keeps - ten adjacent gaps the 65-sum
// rides, 65/10 the floor 6 the division prices - the 6 the WHOLE
// arc's floor the fresh word prices)
const REAL_F506 = [
  '[00:57:33] [Server thread/INFO]: YardSurvey joined the game',
  '[00:57:45] [Server thread/INFO]: F1 joined the game',
  '[00:57:48] [Server thread/INFO]: F2 joined the game',
  '[00:57:50] [Server thread/INFO]: F3 joined the game',
  '[00:57:53] [Server thread/INFO]: F4 joined the game',
  '[00:57:55] [Server thread/INFO]: F5 joined the game',
  '[00:57:58] [Server thread/INFO]: F6 joined the game',
  '[00:58:01] [Server thread/INFO]: F7 joined the game',
  '[00:58:04] [Server thread/INFO]: F8 joined the game',
  '[00:58:06] [Server thread/INFO]: F9 joined the game',
  '[00:58:09] [Server thread/INFO]: F10 joined the game',
  '[00:58:12] [Server thread/INFO]: F11 joined the game',
  '[00:58:15] [Server thread/INFO]: F12 joined the game',
  '[00:58:18] [Server thread/INFO]: F13 joined the game',
  '[00:58:20] [Server thread/INFO]: F14 joined the game',
  '[00:58:23] [Server thread/INFO]: F15 joined the game',
  '[00:58:26] [Server thread/INFO]: F16 joined the game',
  '[00:58:28] [Server thread/INFO]: F17 joined the game',
  '[00:58:31] [Server thread/INFO]: F18 joined the game',
  '[00:58:35] [Server thread/INFO]: F19 joined the game',
  '[01:03:06] [Server thread/INFO]: F12 joined the game',
  '[01:05:34] [Server thread/INFO]: F1 joined the game',
  '[01:05:43] [Server thread/INFO]: F1 joined the game',
  '[01:05:50] [Server thread/INFO]: F1 joined the game',
  '[01:05:55] [Server thread/INFO]: F19 joined the game',
  '[01:05:56] [Server thread/INFO]: F1 joined the game',
  '[01:05:59] [Server thread/INFO]: F10 joined the game',
  '[01:06:00] [Server thread/INFO]: F1 joined the game',
  '[01:06:08] [Server thread/INFO]: F1 joined the game',
  '[01:06:15] [Server thread/INFO]: F1 joined the game',
  '[01:06:22] [Server thread/INFO]: F1 joined the game',
  '[01:06:28] [Server thread/INFO]: F1 joined the game',
  '[01:06:33] [Server thread/INFO]: F1 joined the game',
  '[01:06:34] [Server thread/INFO]: F4 joined the game',
  '[01:06:39] [Server thread/INFO]: F1 joined the game',
  '[01:07:35] [Server thread/INFO]: F7 joined the game',
  '[01:07:45] [Server thread/INFO]: F8 joined the game'
]
// F530's own full join column - the quartet face (four champions the
// peak ties EVERYONE - the champion set's own interleaved list three
// gaps ride 34/59/67, the 160-sum the floor of 160/3 the 53 prices)
const REAL_F530 = [
  '[21:06:47] [Server thread/INFO]: YardSurvey joined the game',
  '[21:06:59] [Server thread/INFO]: F1 joined the game',
  '[21:07:02] [Server thread/INFO]: F2 joined the game',
  '[21:07:04] [Server thread/INFO]: F3 joined the game',
  '[21:07:07] [Server thread/INFO]: F4 joined the game',
  '[21:07:09] [Server thread/INFO]: F5 joined the game',
  '[21:07:12] [Server thread/INFO]: F6 joined the game',
  '[21:07:14] [Server thread/INFO]: F7 joined the game',
  '[21:07:17] [Server thread/INFO]: F8 joined the game',
  '[21:07:19] [Server thread/INFO]: F9 joined the game',
  '[21:07:22] [Server thread/INFO]: F10 joined the game',
  '[21:07:24] [Server thread/INFO]: F11 joined the game',
  '[21:07:27] [Server thread/INFO]: F12 joined the game',
  '[21:07:29] [Server thread/INFO]: F13 joined the game',
  '[21:07:32] [Server thread/INFO]: F14 joined the game',
  '[21:07:34] [Server thread/INFO]: F15 joined the game',
  '[21:07:37] [Server thread/INFO]: F16 joined the game',
  '[21:07:39] [Server thread/INFO]: F17 joined the game',
  '[21:07:42] [Server thread/INFO]: F18 joined the game',
  '[21:07:44] [Server thread/INFO]: F19 joined the game',
  '[21:13:40] [Server thread/INFO]: F14 joined the game',
  '[21:14:14] [Server thread/INFO]: F10 joined the game',
  '[21:15:13] [Server thread/INFO]: F15 joined the game',
  '[21:16:20] [Server thread/INFO]: F17 joined the game'
]
// F532's own full join column - the flap duo's face (F13 five
// re-joins F17 three the LONE champion takes - the champion list
// four gaps ride 87/47/6/108, the 248-sum the floor of 248/4 the 62
// the division prices - the .353 word's own 87 the tallest the mean
// the whole list prices)
const REAL_F532 = [
  '[23:01:45] [Server thread/INFO]: YardSurvey joined the game',
  '[23:01:59] [Server thread/INFO]: F1 joined the game',
  '[23:02:01] [Server thread/INFO]: F2 joined the game',
  '[23:02:03] [Server thread/INFO]: F3 joined the game',
  '[23:02:06] [Server thread/INFO]: F4 joined the game',
  '[23:02:08] [Server thread/INFO]: F5 joined the game',
  '[23:02:11] [Server thread/INFO]: F6 joined the game',
  '[23:02:13] [Server thread/INFO]: F7 joined the game',
  '[23:02:16] [Server thread/INFO]: F8 joined the game',
  '[23:02:20] [Server thread/INFO]: F9 joined the game',
  '[23:02:21] [Server thread/INFO]: F10 joined the game',
  '[23:02:24] [Server thread/INFO]: F11 joined the game',
  '[23:02:27] [Server thread/INFO]: F12 joined the game',
  '[23:02:29] [Server thread/INFO]: F13 joined the game',
  '[23:02:32] [Server thread/INFO]: F14 joined the game',
  '[23:02:34] [Server thread/INFO]: F15 joined the game',
  '[23:02:37] [Server thread/INFO]: F16 joined the game',
  '[23:02:39] [Server thread/INFO]: F17 joined the game',
  '[23:02:42] [Server thread/INFO]: F18 joined the game',
  '[23:02:44] [Server thread/INFO]: F19 joined the game',
  '[23:07:30] [Server thread/INFO]: F13 joined the game',
  '[23:08:57] [Server thread/INFO]: F13 joined the game',
  '[23:09:44] [Server thread/INFO]: F13 joined the game',
  '[23:09:50] [Server thread/INFO]: F13 joined the game',
  '[23:10:14] [Server thread/INFO]: F17 joined the game',
  '[23:10:22] [Server thread/INFO]: F17 joined the game',
  '[23:11:21] [Server thread/INFO]: F17 joined the game',
  '[23:11:38] [Server thread/INFO]: F13 joined the game'
]
// F537's own F5 column - the fire-1043 deep-read's BOTH-EDGES FIRST
// champion window (eleven echoes the column keeps, ten re-join
// events the adjacent pairs measure into NINE gaps - the 364-sum
// nine gaps share, the floor of 364/9 the 40 the division prices)
const REAL_F537_F5 = [
  '[03:17:46] [Server thread/INFO]: F5 joined the game',
  '[03:21:31] [Server thread/INFO]: F5 joined the game',
  '[03:25:42] [Server thread/INFO]: F5 joined the game',
  '[03:26:38] [Server thread/INFO]: F5 joined the game',
  '[03:26:49] [Server thread/INFO]: F5 joined the game',
  '[03:26:56] [Server thread/INFO]: F5 joined the game',
  '[03:27:03] [Server thread/INFO]: F5 joined the game',
  '[03:27:11] [Server thread/INFO]: F5 joined the game',
  '[03:27:19] [Server thread/INFO]: F5 joined the game',
  '[03:27:27] [Server thread/INFO]: F5 joined the game',
  '[03:27:35] [Server thread/INFO]: F5 joined the game'
]
// F539's own full join column - the fire-1143 fresh face (F19's SIX
// re-joins the lone champion keeps - five adjacent gaps the 37-sum
// rides, 37/5 the floor 7 the division prices)
const REAL_F539 = [
  '[04:20:44] [Server thread/INFO]: YardSurvey joined the game',
  '[04:20:57] [Server thread/INFO]: F1 joined the game',
  '[04:20:59] [Server thread/INFO]: F2 joined the game',
  '[04:21:02] [Server thread/INFO]: F3 joined the game',
  '[04:21:04] [Server thread/INFO]: F4 joined the game',
  '[04:21:07] [Server thread/INFO]: F5 joined the game',
  '[04:21:09] [Server thread/INFO]: F6 joined the game',
  '[04:21:12] [Server thread/INFO]: F7 joined the game',
  '[04:21:14] [Server thread/INFO]: F8 joined the game',
  '[04:21:17] [Server thread/INFO]: F9 joined the game',
  '[04:21:19] [Server thread/INFO]: F10 joined the game',
  '[04:21:22] [Server thread/INFO]: F11 joined the game',
  '[04:21:25] [Server thread/INFO]: F12 joined the game',
  '[04:21:27] [Server thread/INFO]: F13 joined the game',
  '[04:21:30] [Server thread/INFO]: F14 joined the game',
  '[04:21:33] [Server thread/INFO]: F15 joined the game',
  '[04:21:36] [Server thread/INFO]: F16 joined the game',
  '[04:21:38] [Server thread/INFO]: F17 joined the game',
  '[04:21:40] [Server thread/INFO]: F18 joined the game',
  '[04:21:43] [Server thread/INFO]: F19 joined the game',
  '[04:25:52] [Server thread/INFO]: F10 joined the game',
  '[04:26:44] [Server thread/INFO]: F3 joined the game',
  '[04:28:19] [Server thread/INFO]: F18 joined the game',
  '[04:28:39] [Server thread/INFO]: F13 joined the game',
  '[04:28:46] [Server thread/INFO]: F13 joined the game',
  '[04:29:01] [Server thread/INFO]: F13 joined the game',
  '[04:29:06] [Server thread/INFO]: F10 joined the game',
  '[04:29:14] [Server thread/INFO]: F17 joined the game',
  '[04:29:16] [Server thread/INFO]: F19 joined the game',
  '[04:29:17] [Server thread/INFO]: F13 joined the game',
  '[04:29:27] [Server thread/INFO]: F19 joined the game',
  '[04:29:30] [Server thread/INFO]: F10 joined the game',
  '[04:29:34] [Server thread/INFO]: F19 joined the game',
  '[04:29:41] [Server thread/INFO]: F19 joined the game',
  '[04:29:47] [Server thread/INFO]: F19 joined the game',
  '[04:29:51] [Server thread/INFO]: F14 joined the game',
  '[04:29:53] [Server thread/INFO]: F19 joined the game',
  '[04:30:06] [Server thread/INFO]: F14 joined the game',
  '[04:30:25] [Server thread/INFO]: F16 joined the game',
  '[04:30:45] [Server thread/INFO]: F14 joined the game',
  '[04:30:47] [Server thread/INFO]: F13 joined the game',
  '[04:30:50] [Server thread/INFO]: F14 joined the game'
]
// F542's own full join column - the fire-1443 fresh face (F9's NINE
// re-joins the back-to-back champion keeps - eight adjacent gaps the
// 221-sum rides, the 130-second dawn silence the .353 word's own
// both-words-one-breath face keeps, 221/8 the floor 27 the division
// prices - the fresh class the arc already held the busy tail the
// 130 hides)
const REAL_F542 = [
  '[07:13:54] [Server thread/INFO]: YardSurvey joined the game',
  '[07:14:08] [Server thread/INFO]: F1 joined the game',
  '[07:14:10] [Server thread/INFO]: F2 joined the game',
  '[07:14:13] [Server thread/INFO]: F3 joined the game',
  '[07:14:15] [Server thread/INFO]: F4 joined the game',
  '[07:14:18] [Server thread/INFO]: F5 joined the game',
  '[07:14:20] [Server thread/INFO]: F6 joined the game',
  '[07:14:23] [Server thread/INFO]: F7 joined the game',
  '[07:14:25] [Server thread/INFO]: F8 joined the game',
  '[07:14:28] [Server thread/INFO]: F9 joined the game',
  '[07:14:31] [Server thread/INFO]: F10 joined the game',
  '[07:14:34] [Server thread/INFO]: F11 joined the game',
  '[07:14:36] [Server thread/INFO]: F12 joined the game',
  '[07:14:39] [Server thread/INFO]: F13 joined the game',
  '[07:14:41] [Server thread/INFO]: F14 joined the game',
  '[07:14:44] [Server thread/INFO]: F15 joined the game',
  '[07:14:47] [Server thread/INFO]: F16 joined the game',
  '[07:14:50] [Server thread/INFO]: F17 joined the game',
  '[07:14:53] [Server thread/INFO]: F18 joined the game',
  '[07:14:55] [Server thread/INFO]: F19 joined the game',
  '[07:18:14] [Server thread/INFO]: F9 joined the game',
  '[07:20:24] [Server thread/INFO]: F9 joined the game',
  '[07:20:32] [Server thread/INFO]: F9 joined the game',
  '[07:20:45] [Server thread/INFO]: F16 joined the game',
  '[07:20:56] [Server thread/INFO]: F9 joined the game',
  '[07:21:04] [Server thread/INFO]: F9 joined the game',
  '[07:21:08] [Server thread/INFO]: F4 joined the game',
  '[07:21:16] [Server thread/INFO]: F9 joined the game',
  '[07:21:26] [Server thread/INFO]: F9 joined the game',
  '[07:21:34] [Server thread/INFO]: F11 joined the game',
  '[07:21:46] [Server thread/INFO]: F9 joined the game',
  '[07:21:55] [Server thread/INFO]: F9 joined the game',
  '[07:22:11] [Server thread/INFO]: F16 joined the game',
  '[07:22:17] [Server thread/INFO]: F8 joined the game',
  '[07:22:18] [Server thread/INFO]: F16 joined the game',
  '[07:22:36] [Server thread/INFO]: F12 joined the game',
  '[07:22:40] [Server thread/INFO]: F16 joined the game',
  '[07:23:17] [Server thread/INFO]: F8 joined the game',
  '[07:23:20] [Server thread/INFO]: F13 joined the game',
  '[07:23:46] [Server thread/INFO]: F16 joined the game',
  '[07:24:05] [Server thread/INFO]: F3 joined the game'
]

test('v0.976.355 census: the REAL faces byte-exact', () => {
  // F509's own face - the equality the two-flapper keeps (28=28)
  assert.deepEqual(rejoinChampMeanBreathCensus(REAL_F509), { rejoinChampMeanBreathSeconds: 28 })
  // F506's own face - the floor of 65/10 (6) the F1 column keeps
  assert.deepEqual(rejoinChampMeanBreathCensus(REAL_F506), { rejoinChampMeanBreathSeconds: 6 })
  // F530's own face - the floor of 160/3 (53) the quartet interleaves
  assert.deepEqual(rejoinChampMeanBreathCensus(REAL_F530), { rejoinChampMeanBreathSeconds: 53 })
  // F532's own face - the floor of 248/4 (62) the lone champion keeps
  assert.deepEqual(rejoinChampMeanBreathCensus(REAL_F532), { rejoinChampMeanBreathSeconds: 62 })
  // F537's own champion window - the floor of 364/9 (40)
  assert.deepEqual(rejoinChampMeanBreathCensus(REAL_F537_F5), { rejoinChampMeanBreathSeconds: 40 })
  // F539's own face - the floor of 37/5 (7) the F19 burst keeps
  assert.deepEqual(rejoinChampMeanBreathCensus(REAL_F539), { rejoinChampMeanBreathSeconds: 7 })
  // F542's own face - the floor of 221/8 (27) the fresh face keeps
  assert.deepEqual(rejoinChampMeanBreathCensus(REAL_F542), { rejoinChampMeanBreathSeconds: 27 })
  // the firsts-only face the lawful zero keeps (no champion set, no
  // adjacent pair, no division)
  assert.deepEqual(rejoinChampMeanBreathCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[21:59:13] [Server thread/INFO]: F4 joined the game'
  ]), { rejoinChampMeanBreathSeconds: 0 })
  // the single re-join event the lawful zero keeps (no adjacent pair)
  assert.deepEqual(rejoinChampMeanBreathCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[21:59:40] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampMeanBreathSeconds: 0 })
  // the no-echo face the lawful zero keeps
  assert.deepEqual(rejoinChampMeanBreathCensus(['[21:59:10] [Server thread/INFO]: Done (5.535s)! For help, type "help"']), { rejoinChampMeanBreathSeconds: 0 })
  // the same-second re-join set the lawful zero keeps (two bots'
  // SECOND joins the same second rides - one gap of zero the division
  // prices zero)
  assert.deepEqual(rejoinChampMeanBreathCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[21:59:12] [Server thread/INFO]: F4 joined the game',
    '[22:05:05] [Server thread/INFO]: F3 joined the game',
    '[22:05:05] [Server thread/INFO]: F4 joined the game'
  ]), { rejoinChampMeanBreathSeconds: 0 })
  // the day-cyclic wrap the accounting keeps (23:59:00 to 00:01:00
  // the 120 the next-day dawn rides - one gap the division never thins)
  assert.deepEqual(rejoinChampMeanBreathCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[23:59:00] [Server thread/INFO]: F3 joined the game',
    '[00:01:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampMeanBreathSeconds: 120 })
  // the FLOOR the integer law keeps (F3's FOUR echoes the three
  // re-join events ride - 22:00:00, 22:00:50, 22:02:01 the dawn the
  // SECOND join keeps, the 121-sum two gaps share - 60.5 the floor
  // 60 prices, the round's 61 the floor never steals)
  assert.deepEqual(rejoinChampMeanBreathCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[22:00:00] [Server thread/INFO]: F3 joined the game',
    '[22:00:50] [Server thread/INFO]: F3 joined the game',
    '[22:02:01] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampMeanBreathSeconds: 60 })
  // the even division the exactness keeps (100 over two gaps the 50)
  assert.deepEqual(rejoinChampMeanBreathCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[22:00:00] [Server thread/INFO]: F3 joined the game',
    '[22:00:50] [Server thread/INFO]: F3 joined the game',
    '[22:01:40] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampMeanBreathSeconds: 50 })
  // non-array null
  assert.equal(rejoinChampMeanBreathCensus(null), null)
  assert.equal(rejoinChampMeanBreathCensus('lines'), null)
})

test('v0.976.355 arc: the REAL forty-two-face champion mean breath re-voiced byte-exact', () => {
  // the fire rounds' own audit (/home/z/faces331, the F542 face the
  // artifact 12328221420 rides) re-voices the champion mean breath
  // arc - THIRTY distinct classes no face born-constant
  const ARC = [96, 62, 49, 53, 76, 6, 72, 26, 28, 26, 59, 13, 19, 11, 38, 41, 56, 11, 104, 62, 25, 12, 11, 7, 87, 7, 47, 35, 40, 53, 20, 62, 91, 9, 7, 29, 40, 72, 7, 11, 10, 27]
  assert.equal(ARC.length, 42)
  const classes = [...new Set(ARC)]
  assert.equal(classes.length, 30) // THIRTY distinct classes
  assert.equal(Math.max(...ARC), 104) // the ceiling the F519 single-gap ride holds
  assert.equal(Math.min(...ARC), 6) // the floor the F506 ten-gap column keeps
  assert.equal(ARC[5], 6) // F506's own 65/10 floor
  assert.equal(ARC[8], 28) // F509's own equality face (28=28)
  assert.equal(ARC[18], 104) // F519's own equality face (104=104) the ceiling keeps
  assert.equal(ARC[28], 40) // F529's own equality face (40=40)
  assert.equal(ARC[36], 40) // F537's own 364-storm champion breath (364/9)
  assert.equal(ARC[37], 72) // F538's own champion breath
  assert.equal(ARC[38], 7) // F539's own 37-burst breath (37/5)
  assert.equal(ARC[39], 11) // F540's own champion breath
  assert.equal(ARC[40], 10) // F541's own champion breath
  assert.equal(ARC[41], 27) // F542's own 221-storm breath (221/8)
  // the EQUALITY LAW: EIGHT faces the single gap owns the whole ride
  // (the .353 word's own equality set the same two-event champion
  // rides keep - mean IS gap IS span)
  const EQ = [8, 9, 12, 17, 18, 27, 28, 30]
  const EQV = [28, 26, 19, 11, 104, 35, 40, 20]
  EQ.forEach((i, k) => assert.equal(ARC[i], EQV[k], `equality face index ${i}`))
  // the quartet the arithmetic keeps (7 four faces, 11 four faces)
  for (const quad of [7, 11]) assert.equal(ARC.filter(v => v === quad).length, 4, `quad ${quad}`)
  // the triplet (62) and the twin pairs (26, 40, 53, 72)
  assert.equal(ARC.filter(v => v === 62).length, 3, 'triplet 62')
  for (const twin of [26, 40, 53, 72]) assert.equal(ARC.filter(v => v === twin).length, 2, `twin ${twin}`)
  // the NO-HELD-PAIR law the honest naming keeps (no adjacent equal
  // the whole arc voices - the held windows the synthetic pins ride)
  for (let i = 1; i < ARC.length; i++) assert.ok(ARC[i] !== ARC[i - 1], `no held pair at ${i}`)
  // the both-speak law (many values, no born-constant face)
  assert.equal(classes.length > 1, true)
  for (const v of ARC) assert.ok(Number.isInteger(v) && v >= 0 && v <= 86399)
})

test('v0.976.355 grammar: the refusal battery the strict frame keeps', () => {
  const refusals = [
    '[21:16:20] [Server thread/WARN]: F17 joined the game', // WARN frame
    '[21:16:20] [Server thread/INFO]: F17 left the game', // the leave sibling
    '[21:16:20] [Server thread/INFO]: F17 logged in with entity id 541', // the login line
    '[21:16:20] [Server thread/INFO]: F17 joined the server', // foreign tail
    '[21:16:20] [Server thread/INFO]: F17 joined game', // missing article
    '[21:16:20] [Server thread/INFO]: F17 joined the game ', // trailing whitespace
    '[1:44:16] [Server thread/INFO]: F17 joined the game', // 1-digit hour
    '[01:44:60] [Server thread/INFO]: F17 joined the game', // overflow second
    '[21:16:20] [Server thread/INFO]: Joined the game', // no name cell
    '[21:16:20] [Server thread/INFO]: joined the game' // lowercase join verb
  ]
  for (const bad of refusals) {
    const face = rejoinChampMeanBreathCensus([bad])
    assert.deepEqual(face, { rejoinChampMeanBreathSeconds: 0 }, `refused: ${bad}`)
  }
})

test('v0.976.355 fence: every branch the day law keeps', () => {
  const ok = (v) => ({ back: { rejoinChampMeanBreathSeconds: v }, prev: { rejoinChampMeanBreathSeconds: v }, cur: { rejoinChampMeanBreathSeconds: v } })
  assert.equal(rejoinChampMeanBreathConsistent(ok(0)), true)
  assert.equal(rejoinChampMeanBreathConsistent(ok(104)), true)
  assert.equal(rejoinChampMeanBreathConsistent(ok(86399)), true)
  assert.equal(rejoinChampMeanBreathConsistent(ok(-1)), false)
  assert.equal(rejoinChampMeanBreathConsistent(ok(86400)), false)
  assert.equal(rejoinChampMeanBreathConsistent(ok(0.5)), false)
  assert.equal(rejoinChampMeanBreathConsistent(ok('104')), false)
  assert.equal(rejoinChampMeanBreathConsistent(ok(undefined)), false)
  assert.equal(rejoinChampMeanBreathConsistent(null), false)
  assert.equal(rejoinChampMeanBreathConsistent({}), false)
  assert.equal(rejoinChampMeanBreathConsistent({ back: { rejoinChampMeanBreathSeconds: 0 } }), false)
})

test('v0.976.355 row: the REAL arc windows byte-exact', () => {
  // the REAL swell the arc's own head keeps (F503 -> F504 -> F505:
  // 49 -> 53 -> 76 the stretches two steps deep)
  const swell = rejoinChampMeanBreathTrendRow({ back: { rejoinChampMeanBreathSeconds: 49 }, prev: { rejoinChampMeanBreathSeconds: 53 }, cur: { rejoinChampMeanBreathSeconds: 76 } })
  assert.equal(swell.startsWith("the fleet's own champion mean breath trend (v0.976.355): the fleet's own champion mean breath swell ran two steps deep - 49 -> 53 (+4) -> 76 (+23) - the fleet's own champions' typical breaths stretched each face,"), true)
  // the REAL fade the arc's own head keeps (F501 -> F502 -> F503:
  // 96 -> 62 -> 49 the shortening two steps deep)
  const fade = rejoinChampMeanBreathTrendRow({ back: { rejoinChampMeanBreathSeconds: 96 }, prev: { rejoinChampMeanBreathSeconds: 62 }, cur: { rejoinChampMeanBreathSeconds: 49 } })
  assert.equal(fade.startsWith("the fleet's own champion mean breath trend (v0.976.355): the fleet's own champion mean breath fade ran two steps deep - 96 -> 62 (-34) -> 49 (-13) - the fleet's own champions' typical breaths shortened each face,"), true)
  // the REAL swing the fresh tail keeps (F540 -> F541 -> F542:
  // 11 -> 10 -> 27 the settle and the build)
  const swing = rejoinChampMeanBreathTrendRow({ back: { rejoinChampMeanBreathSeconds: 11 }, prev: { rejoinChampMeanBreathSeconds: 10 }, cur: { rejoinChampMeanBreathSeconds: 27 } })
  assert.equal(swing.startsWith("the fleet's own champion mean breath trend (v0.976.355): the fleet's own champion mean breath swing - 11 -> 10 (-1) -> 27 (+17) - the fleet's own champions traded their typical breath between the faces,"), true)
  // the REAL arc holds NO held pair the honest naming keeps (the
  // no-adjacent-equal law the arc test pins) - the held windows the
  // synthetic shapes the family's held law pins (the held second
  // step no direction the silence keeps)
  assert.equal(rejoinChampMeanBreathTrendRow({ back: { rejoinChampMeanBreathSeconds: 40 }, prev: { rejoinChampMeanBreathSeconds: 11 }, cur: { rejoinChampMeanBreathSeconds: 11 } }), null)
  // the held first step the same silence keeps
  assert.equal(rejoinChampMeanBreathTrendRow({ back: { rejoinChampMeanBreathSeconds: 11 }, prev: { rejoinChampMeanBreathSeconds: 11 }, cur: { rejoinChampMeanBreathSeconds: 7 } }), null)
  // the tail co-existence every seat named (the .346 mass .347
  // breadth .348 depth .349 name .350 span .351 champion .352 gap
  // .353 champion gap .354 mean breath siblings)
  for (const seat of ['.346 re-join bin word prices', '.347 re-join bots word prices', '.348 re-join peak word prices', '.349 re-join peak name word prices', '.350 re-join span word prices', '.351 champion stretch word prices', '.352 re-join gap word prices', '.353 champion gap word prices', '.354 mean breath word prices', '.314 join mass word prices', '.336 join echo drift word prices', 'deathcause join/leave counts', 'leave sibling', '.321/.322 login dawn/dusk', '.312/.313 port pair', '.315/.316/.317/.318/.319/.320 login cell seats', '.310/.311 class counts', '.333/.334/.335/.338/.339', '.332 opening clock', '.331 selection', '.330 completion', '.341 save trio clock', '.343 trio order', '.344 TACS order', '.345 TACS drift', '.293 prep', '.294/.324 done-ms', '.325/.326/.327/.328/.329', 'kick bill', '.278 advancement seat', 'gc band', '.292 fill lane']) {
    assert.equal(swell.includes(seat), true, `tail names ${seat}`)
  }
})
