import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinStormSixthBreathCensus, rejoinStormSixthBreathConsistent, rejoinStormSixthBreathTrendRow } from '../../src/lib/rejoinstormsixthbreath.mjs'
import { rejoinStormFifthBreathCensus } from '../../src/lib/rejoinstormfifthbreath.mjs'

// the REAL columns the rebuilt archive keeps (the fire-0843 method the
// fire-1243/1343/1543 fires re-ride - the faces the alignment
// byte-exact anchored and the F-map the census slide the eight
// anchors lock the same ids price: F1 = 37403158305 one hit, the
// F552 cancelled and the F557 artifact hole the holes the F-order
// keeps)

const REAL_F501 = [
  "[20:40:21] [Server thread/INFO]: YardSurvey joined the game",
  "[20:40:36] [Server thread/INFO]: F1 joined the game",
  "[20:40:38] [Server thread/INFO]: F2 joined the game",
  "[20:40:40] [Server thread/INFO]: F3 joined the game",
  "[20:40:43] [Server thread/INFO]: F4 joined the game",
  "[20:40:45] [Server thread/INFO]: F5 joined the game",
  "[20:40:48] [Server thread/INFO]: F6 joined the game",
  "[20:40:50] [Server thread/INFO]: F7 joined the game",
  "[20:40:53] [Server thread/INFO]: F8 joined the game",
  "[20:40:55] [Server thread/INFO]: F9 joined the game",
  "[20:40:58] [Server thread/INFO]: F10 joined the game",
  "[20:41:00] [Server thread/INFO]: F11 joined the game",
  "[20:41:03] [Server thread/INFO]: F12 joined the game",
  "[20:41:05] [Server thread/INFO]: F13 joined the game",
  "[20:41:08] [Server thread/INFO]: F14 joined the game",
  "[20:41:12] [Server thread/INFO]: F15 joined the game",
  "[20:41:15] [Server thread/INFO]: F16 joined the game",
  "[20:41:17] [Server thread/INFO]: F17 joined the game",
  "[20:41:19] [Server thread/INFO]: F18 joined the game",
  "[20:41:21] [Server thread/INFO]: F19 joined the game",
  "[20:45:29] [Server thread/INFO]: F1 joined the game",
  "[20:47:46] [Server thread/INFO]: F19 joined the game",
  "[20:47:51] [Server thread/INFO]: F14 joined the game",
  "[20:47:51] [Server thread/INFO]: F18 joined the game",
  "[20:48:34] [Server thread/INFO]: F2 joined the game",
  "[20:48:42] [Server thread/INFO]: F1 joined the game",
  "[20:48:42] [Server thread/INFO]: F7 joined the game",
  "[20:48:44] [Server thread/INFO]: F4 joined the game",
  "[20:48:50] [Server thread/INFO]: F3 joined the game",
  "[20:48:57] [Server thread/INFO]: F8 joined the game",
  "[20:49:06] [Server thread/INFO]: F10 joined the game",
  "[20:49:19] [Server thread/INFO]: F11 joined the game",
  "[20:49:45] [Server thread/INFO]: F5 joined the game",
  "[20:49:49] [Server thread/INFO]: F12 joined the game",
  "[20:50:05] [Server thread/INFO]: F16 joined the game",
  "[20:50:07] [Server thread/INFO]: F17 joined the game",
  "[20:50:09] [Server thread/INFO]: F9 joined the game",
  "[20:50:17] [Server thread/INFO]: F4 joined the game",
  "[20:50:26] [Server thread/INFO]: F6 joined the game",
]

const REAL_F502 = [
  "[21:40:43] [Server thread/INFO]: YardSurvey joined the game",
  "[21:40:57] [Server thread/INFO]: F1 joined the game",
  "[21:40:59] [Server thread/INFO]: F2 joined the game",
  "[21:41:01] [Server thread/INFO]: F3 joined the game",
  "[21:41:04] [Server thread/INFO]: F4 joined the game",
  "[21:41:06] [Server thread/INFO]: F5 joined the game",
  "[21:41:09] [Server thread/INFO]: F6 joined the game",
  "[21:41:11] [Server thread/INFO]: F7 joined the game",
  "[21:41:14] [Server thread/INFO]: F8 joined the game",
  "[21:41:16] [Server thread/INFO]: F9 joined the game",
  "[21:41:20] [Server thread/INFO]: F10 joined the game",
  "[21:41:22] [Server thread/INFO]: F11 joined the game",
  "[21:41:25] [Server thread/INFO]: F12 joined the game",
  "[21:41:28] [Server thread/INFO]: F13 joined the game",
  "[21:41:30] [Server thread/INFO]: F14 joined the game",
  "[21:41:32] [Server thread/INFO]: F15 joined the game",
  "[21:41:35] [Server thread/INFO]: F16 joined the game",
  "[21:41:37] [Server thread/INFO]: F17 joined the game",
  "[21:41:40] [Server thread/INFO]: F18 joined the game",
  "[21:41:42] [Server thread/INFO]: F19 joined the game",
  "[21:46:44] [Server thread/INFO]: F13 joined the game",
  "[21:47:38] [Server thread/INFO]: F2 joined the game",
  "[21:47:59] [Server thread/INFO]: F2 joined the game",
  "[21:48:24] [Server thread/INFO]: F11 joined the game",
  "[21:48:50] [Server thread/INFO]: F8 joined the game",
  "[21:50:18] [Server thread/INFO]: F15 joined the game",
  "[21:50:28] [Server thread/INFO]: F6 joined the game",
  "[21:50:45] [Server thread/INFO]: F15 joined the game",
  "[21:50:47] [Server thread/INFO]: F7 joined the game",
  "[21:50:56] [Server thread/INFO]: F3 joined the game",
]

const REAL_F504 = [
  "[23:15:03] [Server thread/INFO]: YardSurvey joined the game",
  "[23:15:17] [Server thread/INFO]: F1 joined the game",
  "[23:15:19] [Server thread/INFO]: F2 joined the game",
  "[23:15:22] [Server thread/INFO]: F3 joined the game",
  "[23:15:24] [Server thread/INFO]: F4 joined the game",
  "[23:15:27] [Server thread/INFO]: F5 joined the game",
  "[23:15:29] [Server thread/INFO]: F6 joined the game",
  "[23:15:32] [Server thread/INFO]: F7 joined the game",
  "[23:15:34] [Server thread/INFO]: F8 joined the game",
  "[23:15:37] [Server thread/INFO]: F9 joined the game",
  "[23:15:39] [Server thread/INFO]: F10 joined the game",
  "[23:15:42] [Server thread/INFO]: F11 joined the game",
  "[23:15:45] [Server thread/INFO]: F12 joined the game",
  "[23:15:47] [Server thread/INFO]: F13 joined the game",
  "[23:15:50] [Server thread/INFO]: F14 joined the game",
  "[23:15:52] [Server thread/INFO]: F15 joined the game",
  "[23:15:55] [Server thread/INFO]: F16 joined the game",
  "[23:15:57] [Server thread/INFO]: F17 joined the game",
  "[23:16:00] [Server thread/INFO]: F18 joined the game",
  "[23:16:02] [Server thread/INFO]: F19 joined the game",
  "[23:21:22] [Server thread/INFO]: F12 joined the game",
  "[23:21:45] [Server thread/INFO]: F12 joined the game",
  "[23:22:08] [Server thread/INFO]: F1 joined the game",
  "[23:23:15] [Server thread/INFO]: F16 joined the game",
  "[23:23:19] [Server thread/INFO]: F16 joined the game",
  "[23:23:25] [Server thread/INFO]: F16 joined the game",
  "[23:23:31] [Server thread/INFO]: F16 joined the game",
  "[23:24:31] [Server thread/INFO]: F12 joined the game",
  "[23:24:45] [Server thread/INFO]: F12 joined the game",
  "[23:24:55] [Server thread/INFO]: F12 joined the game",
]

const REAL_F532 = [
  "[23:01:45] [Server thread/INFO]: YardSurvey joined the game",
  "[23:01:59] [Server thread/INFO]: F1 joined the game",
  "[23:02:01] [Server thread/INFO]: F2 joined the game",
  "[23:02:03] [Server thread/INFO]: F3 joined the game",
  "[23:02:06] [Server thread/INFO]: F4 joined the game",
  "[23:02:08] [Server thread/INFO]: F5 joined the game",
  "[23:02:11] [Server thread/INFO]: F6 joined the game",
  "[23:02:13] [Server thread/INFO]: F7 joined the game",
  "[23:02:16] [Server thread/INFO]: F8 joined the game",
  "[23:02:20] [Server thread/INFO]: F9 joined the game",
  "[23:02:21] [Server thread/INFO]: F10 joined the game",
  "[23:02:24] [Server thread/INFO]: F11 joined the game",
  "[23:02:27] [Server thread/INFO]: F12 joined the game",
  "[23:02:29] [Server thread/INFO]: F13 joined the game",
  "[23:02:32] [Server thread/INFO]: F14 joined the game",
  "[23:02:34] [Server thread/INFO]: F15 joined the game",
  "[23:02:37] [Server thread/INFO]: F16 joined the game",
  "[23:02:39] [Server thread/INFO]: F17 joined the game",
  "[23:02:42] [Server thread/INFO]: F18 joined the game",
  "[23:02:44] [Server thread/INFO]: F19 joined the game",
  "[23:07:30] [Server thread/INFO]: F13 joined the game",
  "[23:08:57] [Server thread/INFO]: F13 joined the game",
  "[23:09:44] [Server thread/INFO]: F13 joined the game",
  "[23:09:50] [Server thread/INFO]: F13 joined the game",
  "[23:10:14] [Server thread/INFO]: F17 joined the game",
  "[23:10:22] [Server thread/INFO]: F17 joined the game",
  "[23:11:21] [Server thread/INFO]: F17 joined the game",
  "[23:11:38] [Server thread/INFO]: F13 joined the game",
]

const REAL_F534 = [
  "[00:59:28] [Server thread/INFO]: YardSurvey joined the game",
  "[00:59:41] [Server thread/INFO]: F1 joined the game",
  "[00:59:43] [Server thread/INFO]: F2 joined the game",
  "[00:59:46] [Server thread/INFO]: F3 joined the game",
  "[00:59:48] [Server thread/INFO]: F4 joined the game",
  "[00:59:51] [Server thread/INFO]: F5 joined the game",
  "[00:59:53] [Server thread/INFO]: F6 joined the game",
  "[00:59:56] [Server thread/INFO]: F7 joined the game",
  "[00:59:58] [Server thread/INFO]: F8 joined the game",
  "[01:00:01] [Server thread/INFO]: F9 joined the game",
  "[01:00:03] [Server thread/INFO]: F10 joined the game",
  "[01:00:06] [Server thread/INFO]: F11 joined the game",
  "[01:00:08] [Server thread/INFO]: F12 joined the game",
  "[01:00:11] [Server thread/INFO]: F13 joined the game",
  "[01:00:13] [Server thread/INFO]: F14 joined the game",
  "[01:00:16] [Server thread/INFO]: F15 joined the game",
  "[01:00:18] [Server thread/INFO]: F16 joined the game",
  "[01:00:21] [Server thread/INFO]: F17 joined the game",
  "[01:00:23] [Server thread/INFO]: F18 joined the game",
  "[01:00:26] [Server thread/INFO]: F19 joined the game",
  "[01:07:30] [Server thread/INFO]: F17 joined the game",
  "[01:07:38] [Server thread/INFO]: F17 joined the game",
  "[01:07:46] [Server thread/INFO]: F17 joined the game",
  "[01:07:54] [Server thread/INFO]: F17 joined the game",
  "[01:08:08] [Server thread/INFO]: F17 joined the game",
  "[01:08:28] [Server thread/INFO]: F9 joined the game",
  "[01:09:09] [Server thread/INFO]: F15 joined the game",
  "[01:09:30] [Server thread/INFO]: F19 joined the game",
  "[01:09:37] [Server thread/INFO]: F10 joined the game",
]

const REAL_F549 = [
  "[11:50:06] [Server thread/INFO]: YardSurvey joined the game",
  "[11:50:21] [Server thread/INFO]: F1 joined the game",
  "[11:50:23] [Server thread/INFO]: F2 joined the game",
  "[11:50:25] [Server thread/INFO]: F3 joined the game",
  "[11:50:28] [Server thread/INFO]: F4 joined the game",
  "[11:50:30] [Server thread/INFO]: F5 joined the game",
  "[11:50:33] [Server thread/INFO]: F6 joined the game",
  "[11:50:35] [Server thread/INFO]: F7 joined the game",
  "[11:50:38] [Server thread/INFO]: F8 joined the game",
  "[11:50:41] [Server thread/INFO]: F9 joined the game",
  "[11:50:43] [Server thread/INFO]: F10 joined the game",
  "[11:50:46] [Server thread/INFO]: F11 joined the game",
  "[11:50:48] [Server thread/INFO]: F12 joined the game",
  "[11:50:51] [Server thread/INFO]: F13 joined the game",
  "[11:50:53] [Server thread/INFO]: F14 joined the game",
  "[11:50:56] [Server thread/INFO]: F15 joined the game",
  "[11:51:00] [Server thread/INFO]: F16 joined the game",
  "[11:51:02] [Server thread/INFO]: F17 joined the game",
  "[11:51:04] [Server thread/INFO]: F18 joined the game",
  "[11:51:07] [Server thread/INFO]: F19 joined the game",
  "[11:54:48] [Server thread/INFO]: F2 joined the game",
  "[11:59:58] [Server thread/INFO]: F14 joined the game",
  "[11:59:58] [Server thread/INFO]: F13 joined the game",
  "[12:00:10] [Server thread/INFO]: F10 joined the game",
  "[12:00:12] [Server thread/INFO]: F12 joined the game",
  "[12:00:12] [Server thread/INFO]: F18 joined the game",
  "[12:00:14] [Server thread/INFO]: F19 joined the game",
  "[12:00:15] [Server thread/INFO]: F1 joined the game",
  "[12:00:17] [Server thread/INFO]: F4 joined the game",
]

const REAL_F561 = [
  "[21:35:20] [Server thread/INFO]: YardSurvey joined the game",
  "[21:35:34] [Server thread/INFO]: F1 joined the game",
  "[21:35:36] [Server thread/INFO]: F2 joined the game",
  "[21:35:38] [Server thread/INFO]: F3 joined the game",
  "[21:35:41] [Server thread/INFO]: F4 joined the game",
  "[21:35:43] [Server thread/INFO]: F5 joined the game",
  "[21:35:46] [Server thread/INFO]: F6 joined the game",
  "[21:35:49] [Server thread/INFO]: F7 joined the game",
  "[21:35:51] [Server thread/INFO]: F8 joined the game",
  "[21:35:54] [Server thread/INFO]: F9 joined the game",
  "[21:35:56] [Server thread/INFO]: F10 joined the game",
  "[21:35:59] [Server thread/INFO]: F11 joined the game",
  "[21:36:01] [Server thread/INFO]: F12 joined the game",
  "[21:36:04] [Server thread/INFO]: F13 joined the game",
  "[21:36:06] [Server thread/INFO]: F14 joined the game",
  "[21:36:09] [Server thread/INFO]: F15 joined the game",
  "[21:36:11] [Server thread/INFO]: F16 joined the game",
  "[21:36:14] [Server thread/INFO]: F17 joined the game",
  "[21:36:16] [Server thread/INFO]: F18 joined the game",
  "[21:36:19] [Server thread/INFO]: F19 joined the game",
  "[21:41:26] [Server thread/INFO]: F3 joined the game",
  "[21:41:55] [Server thread/INFO]: F17 joined the game",
  "[21:42:00] [Server thread/INFO]: F9 joined the game",
  "[21:43:53] [Server thread/INFO]: F7 joined the game",
  "[21:44:15] [Server thread/INFO]: F19 joined the game",
  "[21:44:21] [Server thread/INFO]: F19 joined the game",
  "[21:45:18] [Server thread/INFO]: F19 joined the game",
  "[21:45:19] [Server thread/INFO]: F1 joined the game",
  "[21:45:25] [Server thread/INFO]: F4 joined the game",
  "[21:45:25] [Server thread/INFO]: F12 joined the game",
  "[21:45:26] [Server thread/INFO]: F2 joined the game",
]

const REAL_F563 = [
  "[00:18:01] [Server thread/INFO]: YardSurvey joined the game",
  "[00:18:14] [Server thread/INFO]: F1 joined the game",
  "[00:18:16] [Server thread/INFO]: F2 joined the game",
  "[00:18:19] [Server thread/INFO]: F3 joined the game",
  "[00:18:21] [Server thread/INFO]: F4 joined the game",
  "[00:18:24] [Server thread/INFO]: F5 joined the game",
  "[00:18:27] [Server thread/INFO]: F6 joined the game",
  "[00:18:29] [Server thread/INFO]: F7 joined the game",
  "[00:18:32] [Server thread/INFO]: F8 joined the game",
  "[00:18:35] [Server thread/INFO]: F9 joined the game",
  "[00:18:37] [Server thread/INFO]: F10 joined the game",
  "[00:18:40] [Server thread/INFO]: F11 joined the game",
  "[00:18:43] [Server thread/INFO]: F12 joined the game",
  "[00:18:46] [Server thread/INFO]: F13 joined the game",
  "[00:18:48] [Server thread/INFO]: F14 joined the game",
  "[00:18:51] [Server thread/INFO]: F15 joined the game",
  "[00:18:54] [Server thread/INFO]: F16 joined the game",
  "[00:18:57] [Server thread/INFO]: F17 joined the game",
  "[00:18:59] [Server thread/INFO]: F18 joined the game",
  "[00:19:02] [Server thread/INFO]: F19 joined the game",
  "[00:23:02] [Server thread/INFO]: F2 joined the game",
  "[00:23:34] [Server thread/INFO]: F12 joined the game",
  "[00:24:10] [Server thread/INFO]: F2 joined the game",
  "[00:24:55] [Server thread/INFO]: F12 joined the game",
  "[00:25:00] [Server thread/INFO]: F2 joined the game",
  "[00:25:07] [Server thread/INFO]: F2 joined the game",
  "[00:25:15] [Server thread/INFO]: F2 joined the game",
  "[00:25:24] [Server thread/INFO]: F2 joined the game",
  "[00:25:41] [Server thread/INFO]: F12 joined the game",
  "[00:25:45] [Server thread/INFO]: F1 joined the game",
  "[00:25:53] [Server thread/INFO]: F3 joined the game",
  "[00:25:55] [Server thread/INFO]: F11 joined the game",
  "[00:26:10] [Server thread/INFO]: F10 joined the game",
  "[00:26:16] [Server thread/INFO]: F3 joined the game",
  "[00:26:20] [Server thread/INFO]: F10 joined the game",
  "[00:26:26] [Server thread/INFO]: F5 joined the game",
  "[00:26:33] [Server thread/INFO]: F10 joined the game",
  "[00:26:41] [Server thread/INFO]: F5 joined the game",
  "[00:26:49] [Server thread/INFO]: F14 joined the game",
  "[00:26:51] [Server thread/INFO]: F5 joined the game",
  "[00:27:04] [Server thread/INFO]: F5 joined the game",
  "[00:27:13] [Server thread/INFO]: F5 joined the game",
  "[00:27:27] [Server thread/INFO]: F5 joined the game",
  "[00:27:40] [Server thread/INFO]: F5 joined the game",
  "[00:27:43] [Server thread/INFO]: F14 joined the game",
  "[00:27:47] [Server thread/INFO]: F5 joined the game",
  "[00:27:56] [Server thread/INFO]: F6 joined the game",
  "[00:27:57] [Server thread/INFO]: F5 joined the game",
  "[00:28:03] [Server thread/INFO]: F15 joined the game",
  "[00:28:07] [Server thread/INFO]: F2 joined the game",
  "[00:28:07] [Server thread/INFO]: F5 joined the game",
  "[00:28:13] [Server thread/INFO]: F10 joined the game",
]

const REAL_F567 = [
  "[06:45:08] [Server thread/INFO]: YardSurvey joined the game",
  "[06:45:22] [Server thread/INFO]: F1 joined the game",
  "[06:45:24] [Server thread/INFO]: F2 joined the game",
  "[06:45:26] [Server thread/INFO]: F3 joined the game",
  "[06:45:29] [Server thread/INFO]: F4 joined the game",
  "[06:45:31] [Server thread/INFO]: F5 joined the game",
  "[06:45:34] [Server thread/INFO]: F6 joined the game",
  "[06:45:36] [Server thread/INFO]: F7 joined the game",
  "[06:45:39] [Server thread/INFO]: F8 joined the game",
  "[06:45:42] [Server thread/INFO]: F9 joined the game",
  "[06:45:46] [Server thread/INFO]: F10 joined the game",
  "[06:45:48] [Server thread/INFO]: F11 joined the game",
  "[06:45:51] [Server thread/INFO]: F12 joined the game",
  "[06:45:53] [Server thread/INFO]: F13 joined the game",
  "[06:45:57] [Server thread/INFO]: F14 joined the game",
  "[06:45:59] [Server thread/INFO]: F15 joined the game",
  "[06:46:02] [Server thread/INFO]: F16 joined the game",
  "[06:46:04] [Server thread/INFO]: F17 joined the game",
  "[06:46:07] [Server thread/INFO]: F18 joined the game",
  "[06:46:09] [Server thread/INFO]: F19 joined the game",
  "[06:50:01] [Server thread/INFO]: F15 joined the game",
  "[06:52:48] [Server thread/INFO]: F13 joined the game",
  "[06:53:11] [Server thread/INFO]: F9 joined the game",
  "[06:53:36] [Server thread/INFO]: F5 joined the game",
  "[06:53:43] [Server thread/INFO]: F5 joined the game",
  "[06:53:47] [Server thread/INFO]: F16 joined the game",
  "[06:54:21] [Server thread/INFO]: F16 joined the game",
  "[06:54:36] [Server thread/INFO]: F4 joined the game",
]

const REAL_F568 = [
  "[08:56:13] [Server thread/INFO]: YardSurvey joined the game",
  "[08:56:26] [Server thread/INFO]: F1 joined the game",
  "[08:56:28] [Server thread/INFO]: F2 joined the game",
  "[08:56:31] [Server thread/INFO]: F3 joined the game",
  "[08:56:33] [Server thread/INFO]: F4 joined the game",
  "[08:56:36] [Server thread/INFO]: F5 joined the game",
  "[08:56:38] [Server thread/INFO]: F6 joined the game",
  "[08:56:41] [Server thread/INFO]: F7 joined the game",
  "[08:56:43] [Server thread/INFO]: F8 joined the game",
  "[08:56:46] [Server thread/INFO]: F9 joined the game",
  "[08:56:48] [Server thread/INFO]: F10 joined the game",
  "[08:56:51] [Server thread/INFO]: F11 joined the game",
  "[08:56:53] [Server thread/INFO]: F12 joined the game",
  "[08:56:56] [Server thread/INFO]: F13 joined the game",
  "[08:56:58] [Server thread/INFO]: F14 joined the game",
  "[08:57:01] [Server thread/INFO]: F15 joined the game",
  "[08:57:03] [Server thread/INFO]: F16 joined the game",
  "[08:57:06] [Server thread/INFO]: F17 joined the game",
  "[08:57:08] [Server thread/INFO]: F18 joined the game",
  "[08:57:11] [Server thread/INFO]: F19 joined the game",
  "[09:03:45] [Server thread/INFO]: F2 joined the game",
  "[09:04:31] [Server thread/INFO]: F12 joined the game",
  "[09:04:41] [Server thread/INFO]: F17 joined the game",
  "[09:05:43] [Server thread/INFO]: F8 joined the game",
  "[09:05:49] [Server thread/INFO]: F5 joined the game",
  "[09:05:56] [Server thread/INFO]: F5 joined the game",
  "[09:05:59] [Server thread/INFO]: F12 joined the game",
  "[09:06:20] [Server thread/INFO]: F5 joined the game",
  "[09:06:25] [Server thread/INFO]: F1 joined the game",
]

const REAL_ARC = [0,10,0,6,3,3,0,10,0,0,25,7,0,6,9,8,21,3,0,0,26,13,14,8,9,3,8,0,0,0,2,59,1,41,0,17,6,0,5,23,4,4,2,53,0,4,0,41,2,25,0,0,4,0,4,11,0,7,57,48,8,6,11,2,34,3]

test('REAL faces byte-exact - the storm sixth breath the sixth order statistic prices', () => {
  // the columns the archive voices - the census the value byte-exact
  // keeps (the F501 the REAL zero the 18-gap storm the same-second
  // sixth pair keeps, the F534 the ceiling 41, the F532 the tallest
  // 59, the F568 the fresh tail the sixth 3)
  const pins = [[REAL_F501, 0], [REAL_F502, 10], [REAL_F504, 6], [REAL_F532, 59], [REAL_F534, 41], [REAL_F549, 2], [REAL_F561, 57], [REAL_F563, 8], [REAL_F567, 34], [REAL_F568, 3]]
  for (const [col, want] of pins) {
    assert.equal(rejoinStormSixthBreathCensus(col).rejoinStormSixthBreath, want)
  }
})

test('the BOUND + DIALOG + CEILING laws - the edges the sixth order statistic bounds keep', () => {
  // the storm cadence hand the fixtures re-voice inline - the BOUND
  // law the .358 storm min <= sixth <= the .352 re-join gap and
  // sixth <= the .350 span's own stretch every voiced fixture (the
  // REAL archive audit GREEN the probe keeps)
  const read = (lines) => {
    const RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
    const tally = new Map()
    const revts = []
    for (const l of lines) {
      const m = RE.exec(l)
      if (!m) continue
      const n = (tally.get(m[4]) || 0) + 1
      tally.set(m[4], n)
      if (n > 1) revts.push(Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]))
    }
    const gaps = []
    for (let i = 1; i < revts.length; i++) {
      const cur = revts[i - 1]
      const nxt = revts[i]
      gaps.push(nxt >= cur ? nxt - cur : nxt + 86400 - cur)
    }
    return {
      sixth: gaps.length > 5 ? gaps[5] : 0,
      count: gaps.length,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      stretch: gaps.reduce((a, b) => a + b, 0),
      fifth: rejoinStormFifthBreathCensus(lines).rejoinStormFifthBreath
    }
  }
  const cols = [REAL_F501, REAL_F502, REAL_F504, REAL_F532, REAL_F534, REAL_F549, REAL_F561, REAL_F563, REAL_F567, REAL_F568]
  for (const col of cols) {
    const r = read(col)
    const sixth = rejoinStormSixthBreathCensus(col).rejoinStormSixthBreath
    assert.equal(sixth, r.sixth)
    // the bound the VOICED faces price (the fewer-than-six-gaps face
    // the lawful zero the bounds keep - the no-list-sample face the
    // min/max never bound)
    if (r.count >= 6) {
      assert.ok(sixth >= r.min && sixth <= r.max, `bound ${sixth} in [${r.min},${r.max}]`)
      assert.ok(sixth <= r.stretch)
    } else {
      assert.equal(sixth, 0)
    }
  }
  // the DIALOG's own edges the fixtures voice: the F501 under face
  // (0 UNDER the 8 the opener) and the F502 under face (10 UNDER the
  // 88) and the F568 under face (3 UNDER the 7 the fresh tail) and
  // the F504 level face (6 LEVEL the 6 the same-tempo keeps) and the
  // F532 above face (59 ABOVE the 8 the tallest face) and the F549
  // above face (2 ABOVE the 0 the .372's own zero-face the sixth
  // prices) and the F561 above face (57 ABOVE the 6) and the F567
  // above face (34 ABOVE the 4 the elder tail)
  assert.ok(read(REAL_F501).sixth < read(REAL_F501).fifth)
  assert.ok(read(REAL_F502).sixth < read(REAL_F502).fifth)
  assert.ok(read(REAL_F568).sixth < read(REAL_F568).fifth)
  assert.equal(read(REAL_F504).sixth, read(REAL_F504).fifth)
  assert.ok(read(REAL_F532).sixth > read(REAL_F532).fifth)
  assert.ok(read(REAL_F549).sixth > read(REAL_F549).fifth)
  assert.ok(read(REAL_F561).sixth > read(REAL_F561).fifth)
  assert.ok(read(REAL_F567).sixth > read(REAL_F567).fifth)
  // the CEILING's own face: the F534 sixth IS the storm cadence's
  // tallest silence (41) - and the F540 the honest difference prices
  // (the F540 the .372's own ceiling face the sixth 23 the fifth 154
  // the BELOW keeps)
  assert.equal(read(REAL_F534).sixth, read(REAL_F534).max)
  // the REAL zero vs the CONSTRUCTIVE zero: the F501 the 18-gap storm
  // the same-second sixth pair the zero the list voices, the F538 the
  // 11-gap storm the same-second pair the REAL zero the fresh window
  // prices, the F503 the four-gap and the F509 the ONE gap and the
  // F507 the five-gap faces the no-sixth-pair faces the constructive
  // branch keeps
  assert.ok(read(REAL_F501).count >= 6)
  assert.equal(read(REAL_F501).sixth, 0)
  // the synthetic branches: the one-echo face the zero keeps, the
  // single-gap and the two-gap and the three-gap and the four-gap and
  // the five-gap faces the constructive keeps (the sixth pair the
  // list never holds - the .372 convention extends), the six-gap face
  // the sixth the list voices, the co-reign tie the interleave the
  // sixth gap the FILE ORDER voices, the day-cyclic wrap the sixth
  // pair crossing the midnight cell prices
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinStormSixthBreathCensus(oneEcho), { rejoinStormSixthBreath: 0 })
  const singleGap = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinStormSixthBreathCensus(singleGap), { rejoinStormSixthBreath: 0 })
  const twoGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // F3's own first join 08:01 the tally's n=1 the storm list keeps
  // out - the storm events 08:02 / 08:03 / 08:09 the gaps [60, 360]
  // the TWO gaps the sixth pair the list never holds the constructive
  // zero the .372 convention extends
  assert.deepEqual(rejoinStormSixthBreathCensus(twoGaps), { rejoinStormSixthBreath: 0 })
  const threeGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 / 08:03 / 08:04 / 08:09 the gaps [60, 60,
  // 300] the THREE gaps the SIXTH pair the list never holds - the
  // constructive zero the .372 convention extends (the fifth breath's
  // own 300 the elder seat prices)
  assert.deepEqual(rejoinStormSixthBreathCensus(threeGaps), { rejoinStormSixthBreath: 0 })
  const fourGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:05:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 / 08:03 / 08:04 / 08:05 / 08:09 the gaps
  // [60, 60, 60, 240] the FOUR gaps the SIXTH pair the list never
  // holds - the constructive zero the .372 convention extends (the
  // fifth breath's own 240 the elder seat prices)
  assert.deepEqual(rejoinStormSixthBreathCensus(fourGaps), { rejoinStormSixthBreath: 0 })
  const fiveGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:05:00] [Server thread/INFO]: F3 joined the game',
    '[08:06:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 / 08:03 / 08:04 / 08:05 / 08:06 / 08:09
  // the gaps [60, 60, 60, 60, 180] the FIVE gaps the SIXTH pair the
  // list never holds - the constructive zero the .372 convention
  // extends (the fifth breath's own 180 the elder seat prices the
  // honest distinction the seats price)
  assert.deepEqual(rejoinStormSixthBreathCensus(fiveGaps), { rejoinStormSixthBreath: 0 })
  const sixGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:05:00] [Server thread/INFO]: F3 joined the game',
    '[08:06:00] [Server thread/INFO]: F3 joined the game',
    '[08:07:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 / 08:03 / 08:04 / 08:05 / 08:06 / 08:07 /
  // 08:09 the gaps [60, 60, 60, 60, 60, 120] the SIXTH pair 120 the
  // list voices (the 08:07 event the cadence keeps - the 08:07 ->
  // 08:09 jump the 120 the list voices, the elder five-gap face's own
  // 180 the fifth seat priced the sixth arc never rides)
  assert.deepEqual(rejoinStormSixthBreathCensus(sixGaps), { rejoinStormSixthBreath: 120 })
  const coReign = [
    '[09:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[09:01:00] [Server thread/INFO]: F3 joined the game',
    '[09:02:00] [Server thread/INFO]: F7 joined the game',
    '[09:04:00] [Server thread/INFO]: F3 joined the game',
    '[09:07:00] [Server thread/INFO]: F7 joined the game',
    '[09:08:00] [Server thread/INFO]: F3 joined the game',
    '[09:14:00] [Server thread/INFO]: F7 joined the game',
    '[09:15:00] [Server thread/INFO]: F3 joined the game',
    '[09:21:00] [Server thread/INFO]: F7 joined the game',
    '[09:27:00] [Server thread/INFO]: F3 joined the game'
  ]
  // F3's and F7's own co-reign the tie keeps - the storm events the
  // FILE ORDER rides (F3 09:04 / F7 09:07 / F3 09:08 / F7 09:14 / F3
  // 09:15 / F7 09:21 / F3 09:27) the gaps [180, 60, 360, 60, 360,
  // 360] the SIXTH 360 the interleave voices (the elder five-gap face
  // the fifth 360 the .372 seat priced the sixth extends)
  assert.deepEqual(rejoinStormSixthBreathCensus(coReign), { rejoinStormSixthBreath: 360 })
  const wrap = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[23:59:30] [Server thread/INFO]: F3 joined the game',
    '[00:01:30] [Server thread/INFO]: F3 joined the game',
    '[00:05:30] [Server thread/INFO]: F3 joined the game',
    '[00:07:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the day-cyclic wrap the .350 precedent keeps - the SIXTH pair
  // crosses the midnight cell (the storm events 08:02 / 08:03 /
  // 08:04 / 23:59:30 / 00:01:30 / 00:05:30 / 00:07:30 the gaps [60,
  // 60, 57330, 120, 240, 120] - 86370 - 29040 = 57330 the third pair
  // rides, 90 + 86400 - 86370 = 120 the fourth rides, 330 - 90 = 240
  // the fifth rides, 450 - 330 = 120 the sixth the list voices)
  assert.deepEqual(rejoinStormSixthBreathCensus(wrap), { rejoinStormSixthBreath: 120 })
})

test('REAL 66-face window arc byte-exact - 25 classes the seat LIVE', () => {
  // the arc the fieldproof re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 66)
  assert.equal(classes.size, 25)
  assert.equal(Math.min(...arc), 0) // the NINETEEN-face zero keeps (the constructive seventeen + the REAL two F501/F538)
  assert.equal(Math.max(...arc), 59) // the tallest voiced value F532 keeps
  // the zero faces the honest distinction prices (the F501 and the
  // F538 the REAL zeros the cadence's own same-second sixth pair
  // keeps, the constructive seventeen the fewer-than-six-gaps faces
  // the branch rides)
  assert.equal(arc[0], 0) // the F501 opener the REAL zero
  assert.equal(arc[1], 10) // the F502 keeps
  assert.equal(arc[2], 0) // the F503 constructive four-gap
  assert.equal(arc[10], 25) // the F511 keeps
  assert.equal(arc[30], 2) // the F531 the .372's own zero-face the sixth 2 the ABOVE prices
  assert.equal(arc[31], 59) // the F532 the tallest voiced
  assert.equal(arc[33], 41) // the F534 ceiling-face
  assert.equal(arc[48], 2) // the F549 keeps
  assert.equal(arc[58], 57) // the F561 second-tallest
  assert.equal(arc[64], 34) // the F567 elder tail
  assert.equal(arc[65], 3) // the F568 fresh tail
  // the held law: SEVEN held pairs the 66-face window keeps - the
  // F505/F506 threes and the F541/F542 fours and the FIVE
  // constructive-zero pairs the F509/F510 and the F519/F520 and the
  // F528/F529 and the F529/F530 and the F551/F553 (the .372 arc's own
  // SIX the sixth arc does NOT inherit - the F522/F523 eights and the
  // F560/F561 sixes and the F562/F563 sevens the honest distinction
  // the seats price)
  let held = 0
  for (let i = 1; i < arc.length; i++) if (arc[i] === arc[i - 1]) held++
  assert.equal(held, 7)
  // the multi-class law: the mode candidate the honest probe DECLINED
  // - the nineteen-face zero the tie-degenerate gravity the family prices
  const tally = new Map()
  for (const v of arc) tally.set(v, (tally.get(v) || 0) + 1)
  assert.equal(tally.get(0), 19)
  assert.equal(tally.get(3), 5)
  assert.equal(tally.get(4), 5)
  assert.equal(tally.get(2), 4)
  assert.equal(tally.get(6), 4)
  assert.equal(tally.get(8), 4)
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  // the census the strict frame keeps - the deformed lines the skip
  // rides, the honest zero the no-join face keeps
  assert.equal(rejoinStormSixthBreathCensus(null), null)
  assert.equal(rejoinStormSixthBreathCensus(undefined), null)
  assert.equal(rejoinStormSixthBreathCensus('not an array'), null)
  assert.equal(rejoinStormSixthBreathCensus(42), null)
  assert.deepEqual(rejoinStormSixthBreathCensus([]), { rejoinStormSixthBreath: 0 })
  assert.deepEqual(rejoinStormSixthBreathCensus(['', 'no joins here', null, 42]), { rejoinStormSixthBreath: 0 })
  // the malformed clock cells the strict frame never rides
  assert.deepEqual(rejoinStormSixthBreathCensus([
    '[24:00:00] [Server thread/INFO]: F3 joined the game', // the hour 24 the day never keeps
    '[12:60:00] [Server thread/INFO]: F3 joined the game', // the minute 60 the clock never keeps
    '[12:00:60] [Server thread/INFO]: F3 joined the game', // the second 60 the clock never keeps
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormSixthBreath: 0 })
  // the non-join lanes the lane law keeps out
  assert.deepEqual(rejoinStormSixthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 left the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the team', // the near-join the frame never rides
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormSixthBreath: 0 })
  // the kernel prefix the deformed line the skip keeps
  assert.deepEqual(rejoinStormSixthBreathCensus([
    'kernel: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormSixthBreath: 0 })
  // the multi-line join the trailing spaces the strict frame never rides
  assert.deepEqual(rejoinStormSixthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 joined the game ',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormSixthBreath: 0 })
})

test('fence - every branch the gap words own integer law keeps', () => {
  const c = (n) => ({ rejoinStormSixthBreath: n })
  assert.equal(rejoinStormSixthBreathConsistent(null), false)
  assert.equal(rejoinStormSixthBreathConsistent(undefined), false)
  assert.equal(rejoinStormSixthBreathConsistent('nope'), false)
  assert.equal(rejoinStormSixthBreathConsistent({}), false)
  assert.equal(rejoinStormSixthBreathConsistent({ back: c(0), prev: c(0) }), false) // the cur missing
  assert.equal(rejoinStormSixthBreathConsistent({ back: c(-1), prev: c(0), cur: c(0) }), false) // the negative the fence never rides
  assert.equal(rejoinStormSixthBreathConsistent({ back: c(0), prev: c(86399), cur: c(0) }), true) // the day ceiling 86399 the fence keeps (the .368 fence-fix lesson the same boundary voices)
  assert.equal(rejoinStormSixthBreathConsistent({ back: c(0), prev: c(86400), cur: c(0) }), false) // past the day the fence declines (the fence 0..86399 the module voices - the .366 line 445 / the .367 line 593 / the .368 line 647 / the .370 line 666 / the .372 line 679 the same shape)
  assert.equal(rejoinStormSixthBreathConsistent({ back: c(0), prev: c(86401), cur: c(0) }), false) // past the day the fence declines
  assert.equal(rejoinStormSixthBreathConsistent({ back: c(0), prev: c(1.5), cur: c(0) }), false) // the fraction the integer law never rides
  assert.equal(rejoinStormSixthBreathConsistent({ back: c(0), prev: c(0), cur: c(0) }), true)
  assert.equal(rejoinStormSixthBreathConsistent({ back: c(86399), prev: c(0), cur: c(59) }), true)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const c = (n) => ({ rejoinStormSixthBreath: n })
  // the swell the F513->F515 faces keep (0 -> 6 (+6) -> 9 (+3))
  const swell = rejoinStormSixthBreathTrendRow({ back: c(0), prev: c(6), cur: c(9) })
  assert.ok(swell.includes('swell ran two steps deep'))
  assert.ok(swell.includes('0 -> 6 (+6) -> 9 (+3)'))
  assert.ok(swell.includes('v0.976.374'))
  // the fade the F562->F564 faces keep (48 -> 8 (-40) -> 6 (-2))
  const fade = rejoinStormSixthBreathTrendRow({ back: c(48), prev: c(8), cur: c(6) })
  assert.ok(fade.includes('fade ran two steps deep'))
  assert.ok(fade.includes('48 -> 8 (-40) -> 6 (-2)'))
  // the swing the F566->F568 faces keep (2 -> 34 (+32) -> 3 (-31))
  const swing = rejoinStormSixthBreathTrendRow({ back: c(2), prev: c(34), cur: c(3) })
  assert.ok(swing.includes('swing'))
  assert.ok(swing.includes('2 -> 34 (+32) -> 3 (-31)'))
  // the held step the honest silence keeps (the row never invents -
  // the F505/F506 and the F541/F542 pairs the arc keeps)
  assert.equal(rejoinStormSixthBreathTrendRow({ back: c(3), prev: c(3), cur: c(0) }), null)
  assert.equal(rejoinStormSixthBreathTrendRow({ back: c(0), prev: c(4), cur: c(4) }), null)
  // the deformed triples the fence declines
  assert.equal(rejoinStormSixthBreathTrendRow(null), null)
  assert.equal(rejoinStormSixthBreathTrendRow({ back: c(-5), prev: c(0), cur: c(0) }), null)
  // the REAL arc's own windows the rows re-voice (the census the same
  // values the arc keeps - the indexes the TRUE F-numbers price: the
  // F513/F514/F515 the c3(12/13/14), the F562/F563/F564 the
  // c3(59/60/61), the F566/F567/F568 the c3(63/64/65) - the
  // fire-1243 off-by-one lesson the same hand keeps)
  const c3 = (i) => ({ rejoinStormSixthBreath: REAL_ARC[i] })
  assert.ok(rejoinStormSixthBreathTrendRow({ back: c3(12), prev: c3(13), cur: c3(14) }).includes('0 -> 6 (+6) -> 9 (+3)'))
  assert.ok(rejoinStormSixthBreathTrendRow({ back: c3(59), prev: c3(60), cur: c3(61) }).includes('48 -> 8 (-40) -> 6 (-2)'))
  assert.ok(rejoinStormSixthBreathTrendRow({ back: c3(63), prev: c3(64), cur: c3(65) }).includes('2 -> 34 (+32) -> 3 (-31)'))
})
