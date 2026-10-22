import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinStormFourthBreathCensus, rejoinStormFourthBreathConsistent, rejoinStormFourthBreathTrendRow } from '../../src/lib/rejoinstormfourthbreath.mjs'
import { rejoinStormThirdBreathCensus } from '../../src/lib/rejoinstormthirdbreath.mjs'

// the REAL columns the rebuilt archive keeps (the fire-0843 method the
// fire-1043 fire re-rides - the faces the alignment byte-exact anchored
// and the F-map the census slide the five anchors lock the same ids
// price: F558 = 39652892020 the honest id the .369 repair ledger
// prices, the F552 cancelled and the F557 artifact hole the holes the
// F-order keeps)

// REAL_F501 (face39319100730.log) - 39 join echoes
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

// REAL_F504 (face39338489283.log) - 30 join echoes
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

// REAL_F507 (face39353992759.log) - 26 join echoes
const REAL_F507 = [
  "[01:44:24] [Server thread/INFO]: YardSurvey joined the game",
  "[01:44:37] [Server thread/INFO]: F1 joined the game",
  "[01:44:40] [Server thread/INFO]: F2 joined the game",
  "[01:44:42] [Server thread/INFO]: F3 joined the game",
  "[01:44:45] [Server thread/INFO]: F4 joined the game",
  "[01:44:47] [Server thread/INFO]: F5 joined the game",
  "[01:44:50] [Server thread/INFO]: F6 joined the game",
  "[01:44:52] [Server thread/INFO]: F7 joined the game",
  "[01:44:55] [Server thread/INFO]: F8 joined the game",
  "[01:44:57] [Server thread/INFO]: F9 joined the game",
  "[01:45:00] [Server thread/INFO]: F10 joined the game",
  "[01:45:02] [Server thread/INFO]: F11 joined the game",
  "[01:45:05] [Server thread/INFO]: F12 joined the game",
  "[01:45:08] [Server thread/INFO]: F13 joined the game",
  "[01:45:10] [Server thread/INFO]: F14 joined the game",
  "[01:45:13] [Server thread/INFO]: F15 joined the game",
  "[01:45:18] [Server thread/INFO]: F16 joined the game",
  "[01:45:20] [Server thread/INFO]: F17 joined the game",
  "[01:45:23] [Server thread/INFO]: F18 joined the game",
  "[01:45:26] [Server thread/INFO]: F19 joined the game",
  "[01:50:04] [Server thread/INFO]: F9 joined the game",
  "[01:52:18] [Server thread/INFO]: F9 joined the game",
  "[01:53:21] [Server thread/INFO]: F17 joined the game",
  "[01:53:41] [Server thread/INFO]: F17 joined the game",
  "[01:54:26] [Server thread/INFO]: F3 joined the game",
  "[01:54:33] [Server thread/INFO]: F8 joined the game",
]

// REAL_F509 (face39360759429.log) - 22 join echoes
const REAL_F509 = [
  "[03:02:19] [Server thread/INFO]: YardSurvey joined the game",
  "[03:02:32] [Server thread/INFO]: F1 joined the game",
  "[03:02:35] [Server thread/INFO]: F2 joined the game",
  "[03:02:37] [Server thread/INFO]: F3 joined the game",
  "[03:02:40] [Server thread/INFO]: F4 joined the game",
  "[03:02:42] [Server thread/INFO]: F5 joined the game",
  "[03:02:45] [Server thread/INFO]: F6 joined the game",
  "[03:02:47] [Server thread/INFO]: F7 joined the game",
  "[03:02:50] [Server thread/INFO]: F8 joined the game",
  "[03:02:52] [Server thread/INFO]: F9 joined the game",
  "[03:02:55] [Server thread/INFO]: F10 joined the game",
  "[03:02:57] [Server thread/INFO]: F11 joined the game",
  "[03:03:00] [Server thread/INFO]: F12 joined the game",
  "[03:03:02] [Server thread/INFO]: F13 joined the game",
  "[03:03:05] [Server thread/INFO]: F14 joined the game",
  "[03:03:07] [Server thread/INFO]: F15 joined the game",
  "[03:03:10] [Server thread/INFO]: F16 joined the game",
  "[03:03:12] [Server thread/INFO]: F17 joined the game",
  "[03:03:15] [Server thread/INFO]: F18 joined the game",
  "[03:03:18] [Server thread/INFO]: F19 joined the game",
  "[03:11:50] [Server thread/INFO]: F16 joined the game",
  "[03:12:18] [Server thread/INFO]: F16 joined the game",
]

// REAL_F516 (face39391362502.log) - 33 join echoes - the REAL zero
// face the fourth same-second pair the storm keeps
const REAL_F516 = [
  "[08:22:52] [Server thread/INFO]: YardSurvey joined the game",
  "[08:23:07] [Server thread/INFO]: F1 joined the game",
  "[08:23:09] [Server thread/INFO]: F2 joined the game",
  "[08:23:11] [Server thread/INFO]: F3 joined the game",
  "[08:23:14] [Server thread/INFO]: F4 joined the game",
  "[08:23:16] [Server thread/INFO]: F5 joined the game",
  "[08:23:19] [Server thread/INFO]: F6 joined the game",
  "[08:23:21] [Server thread/INFO]: F7 joined the game",
  "[08:23:24] [Server thread/INFO]: F8 joined the game",
  "[08:23:26] [Server thread/INFO]: F9 joined the game",
  "[08:23:29] [Server thread/INFO]: F10 joined the game",
  "[08:23:33] [Server thread/INFO]: F11 joined the game",
  "[08:23:36] [Server thread/INFO]: F12 joined the game",
  "[08:23:38] [Server thread/INFO]: F13 joined the game",
  "[08:23:41] [Server thread/INFO]: F14 joined the game",
  "[08:23:44] [Server thread/INFO]: F15 joined the game",
  "[08:23:46] [Server thread/INFO]: F16 joined the game",
  "[08:23:50] [Server thread/INFO]: F17 joined the game",
  "[08:23:52] [Server thread/INFO]: F18 joined the game",
  "[08:23:55] [Server thread/INFO]: F19 joined the game",
  "[08:28:14] [Server thread/INFO]: F10 joined the game",
  "[08:29:05] [Server thread/INFO]: F9 joined the game",
  "[08:31:55] [Server thread/INFO]: F6 joined the game",
  "[08:31:59] [Server thread/INFO]: F11 joined the game",
  "[08:31:59] [Server thread/INFO]: F10 joined the game",
  "[08:32:01] [Server thread/INFO]: F9 joined the game",
  "[08:32:09] [Server thread/INFO]: F4 joined the game",
  "[08:32:11] [Server thread/INFO]: F9 joined the game",
  "[08:32:19] [Server thread/INFO]: F9 joined the game",
  "[08:32:24] [Server thread/INFO]: F10 joined the game",
  "[08:32:26] [Server thread/INFO]: F9 joined the game",
  "[08:32:34] [Server thread/INFO]: F9 joined the game",
  "[08:32:46] [Server thread/INFO]: F15 joined the game",
]

// REAL_F519 (face39407353321.log) - 26 join echoes
const REAL_F519 = [
  "[10:35:47] [Server thread/INFO]: YardSurvey joined the game",
  "[10:36:00] [Server thread/INFO]: F1 joined the game",
  "[10:36:02] [Server thread/INFO]: F2 joined the game",
  "[10:36:05] [Server thread/INFO]: F3 joined the game",
  "[10:36:07] [Server thread/INFO]: F4 joined the game",
  "[10:36:10] [Server thread/INFO]: F5 joined the game",
  "[10:36:12] [Server thread/INFO]: F6 joined the game",
  "[10:36:15] [Server thread/INFO]: F7 joined the game",
  "[10:36:17] [Server thread/INFO]: F8 joined the game",
  "[10:36:20] [Server thread/INFO]: F9 joined the game",
  "[10:36:22] [Server thread/INFO]: F10 joined the game",
  "[10:36:25] [Server thread/INFO]: F11 joined the game",
  "[10:36:27] [Server thread/INFO]: F12 joined the game",
  "[10:36:30] [Server thread/INFO]: F13 joined the game",
  "[10:36:32] [Server thread/INFO]: F14 joined the game",
  "[10:36:35] [Server thread/INFO]: F15 joined the game",
  "[10:36:38] [Server thread/INFO]: F16 joined the game",
  "[10:36:40] [Server thread/INFO]: F17 joined the game",
  "[10:36:43] [Server thread/INFO]: F18 joined the game",
  "[10:36:45] [Server thread/INFO]: F19 joined the game",
  "[10:44:02] [Server thread/INFO]: F2 joined the game",
  "[10:44:08] [Server thread/INFO]: F13 joined the game",
  "[10:45:30] [Server thread/INFO]: F4 joined the game",
  "[10:45:35] [Server thread/INFO]: F19 joined the game",
  "[10:45:46] [Server thread/INFO]: F2 joined the game",
  "[10:45:59] [Server thread/INFO]: F5 joined the game",
]

// REAL_F527 (face39475545027.log) - 28 join echoes - the arc ceiling
// face the fourth 110 the cadence's own tallest keeps
const REAL_F527 = [
  "[18:49:49] [Server thread/INFO]: YardSurvey joined the game",
  "[18:50:03] [Server thread/INFO]: F1 joined the game",
  "[18:50:05] [Server thread/INFO]: F2 joined the game",
  "[18:50:07] [Server thread/INFO]: F3 joined the game",
  "[18:50:10] [Server thread/INFO]: F4 joined the game",
  "[18:50:13] [Server thread/INFO]: F5 joined the game",
  "[18:50:16] [Server thread/INFO]: F6 joined the game",
  "[18:50:19] [Server thread/INFO]: F7 joined the game",
  "[18:50:22] [Server thread/INFO]: F8 joined the game",
  "[18:50:25] [Server thread/INFO]: F9 joined the game",
  "[18:50:28] [Server thread/INFO]: F10 joined the game",
  "[18:50:31] [Server thread/INFO]: F11 joined the game",
  "[18:50:34] [Server thread/INFO]: F12 joined the game",
  "[18:50:38] [Server thread/INFO]: F13 joined the game",
  "[18:50:40] [Server thread/INFO]: F14 joined the game",
  "[18:50:43] [Server thread/INFO]: F15 joined the game",
  "[18:50:46] [Server thread/INFO]: F16 joined the game",
  "[18:50:49] [Server thread/INFO]: F17 joined the game",
  "[18:50:52] [Server thread/INFO]: F18 joined the game",
  "[18:50:55] [Server thread/INFO]: F19 joined the game",
  "[18:57:38] [Server thread/INFO]: F12 joined the game",
  "[18:57:38] [Server thread/INFO]: F14 joined the game",
  "[18:57:46] [Server thread/INFO]: F7 joined the game",
  "[18:57:50] [Server thread/INFO]: F10 joined the game",
  "[18:59:40] [Server thread/INFO]: F18 joined the game",
  "[18:59:43] [Server thread/INFO]: F14 joined the game",
  "[18:59:51] [Server thread/INFO]: F14 joined the game",
  "[18:59:59] [Server thread/INFO]: F14 joined the game",
]

// REAL_F533 (face39517302612.log) - 35 join echoes
const REAL_F533 = [
  "[00:02:59] [Server thread/INFO]: YardSurvey joined the game",
  "[00:03:14] [Server thread/INFO]: F1 joined the game",
  "[00:03:16] [Server thread/INFO]: F2 joined the game",
  "[00:03:18] [Server thread/INFO]: F3 joined the game",
  "[00:03:21] [Server thread/INFO]: F4 joined the game",
  "[00:03:23] [Server thread/INFO]: F5 joined the game",
  "[00:03:26] [Server thread/INFO]: F6 joined the game",
  "[00:03:28] [Server thread/INFO]: F7 joined the game",
  "[00:03:31] [Server thread/INFO]: F8 joined the game",
  "[00:03:33] [Server thread/INFO]: F9 joined the game",
  "[00:03:36] [Server thread/INFO]: F10 joined the game",
  "[00:03:38] [Server thread/INFO]: F11 joined the game",
  "[00:03:42] [Server thread/INFO]: F12 joined the game",
  "[00:03:44] [Server thread/INFO]: F13 joined the game",
  "[00:03:46] [Server thread/INFO]: F14 joined the game",
  "[00:03:49] [Server thread/INFO]: F15 joined the game",
  "[00:03:52] [Server thread/INFO]: F16 joined the game",
  "[00:03:54] [Server thread/INFO]: F17 joined the game",
  "[00:03:57] [Server thread/INFO]: F18 joined the game",
  "[00:03:59] [Server thread/INFO]: F19 joined the game",
  "[00:08:58] [Server thread/INFO]: F14 joined the game",
  "[00:09:23] [Server thread/INFO]: F14 joined the game",
  "[00:11:20] [Server thread/INFO]: F16 joined the game",
  "[00:11:20] [Server thread/INFO]: F1 joined the game",
  "[00:11:22] [Server thread/INFO]: F13 joined the game",
  "[00:11:23] [Server thread/INFO]: F11 joined the game",
  "[00:11:24] [Server thread/INFO]: F6 joined the game",
  "[00:11:24] [Server thread/INFO]: F5 joined the game",
  "[00:11:26] [Server thread/INFO]: F1 joined the game",
  "[00:11:26] [Server thread/INFO]: F12 joined the game",
  "[00:11:49] [Server thread/INFO]: F18 joined the game",
  "[00:12:01] [Server thread/INFO]: F14 joined the game",
  "[00:12:04] [Server thread/INFO]: F17 joined the game",
  "[00:12:43] [Server thread/INFO]: F7 joined the game",
  "[00:12:58] [Server thread/INFO]: F13 joined the game",
]

// REAL_F544 (face39570206052.log) - 27 join echoes - the honest
// difference face the third 192 the tallest the fourth 43 keeps
const REAL_F544 = [
  "[08:48:53] [Server thread/INFO]: YardSurvey joined the game",
  "[08:49:07] [Server thread/INFO]: F1 joined the game",
  "[08:49:09] [Server thread/INFO]: F2 joined the game",
  "[08:49:12] [Server thread/INFO]: F3 joined the game",
  "[08:49:14] [Server thread/INFO]: F4 joined the game",
  "[08:49:17] [Server thread/INFO]: F5 joined the game",
  "[08:49:19] [Server thread/INFO]: F6 joined the game",
  "[08:49:22] [Server thread/INFO]: F7 joined the game",
  "[08:49:24] [Server thread/INFO]: F8 joined the game",
  "[08:49:27] [Server thread/INFO]: F9 joined the game",
  "[08:49:29] [Server thread/INFO]: F10 joined the game",
  "[08:49:32] [Server thread/INFO]: F11 joined the game",
  "[08:49:34] [Server thread/INFO]: F12 joined the game",
  "[08:49:37] [Server thread/INFO]: F13 joined the game",
  "[08:49:39] [Server thread/INFO]: F14 joined the game",
  "[08:49:42] [Server thread/INFO]: F15 joined the game",
  "[08:49:45] [Server thread/INFO]: F16 joined the game",
  "[08:49:49] [Server thread/INFO]: F17 joined the game",
  "[08:49:51] [Server thread/INFO]: F18 joined the game",
  "[08:49:53] [Server thread/INFO]: F19 joined the game",
  "[08:53:10] [Server thread/INFO]: F2 joined the game",
  "[08:53:44] [Server thread/INFO]: F10 joined the game",
  "[08:53:48] [Server thread/INFO]: F19 joined the game",
  "[08:57:00] [Server thread/INFO]: F11 joined the game",
  "[08:57:43] [Server thread/INFO]: F11 joined the game",
  "[08:57:53] [Server thread/INFO]: F19 joined the game",
  "[08:58:46] [Server thread/INFO]: F11 joined the game",
]

// REAL_F549 (face39593093613.log) - 29 join echoes
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

// REAL_F558 (face39652892020.log) - 38 join echoes - the TRUE F558
// face the id the .369 repair ledger prices
const REAL_F558 = [
  "[18:40:50] [Server thread/INFO]: YardSurvey joined the game",
  "[18:41:04] [Server thread/INFO]: F1 joined the game",
  "[18:41:06] [Server thread/INFO]: F2 joined the game",
  "[18:41:08] [Server thread/INFO]: F3 joined the game",
  "[18:41:11] [Server thread/INFO]: F4 joined the game",
  "[18:41:13] [Server thread/INFO]: F5 joined the game",
  "[18:41:16] [Server thread/INFO]: F6 joined the game",
  "[18:41:18] [Server thread/INFO]: F7 joined the game",
  "[18:41:21] [Server thread/INFO]: F8 joined the game",
  "[18:41:24] [Server thread/INFO]: F9 joined the game",
  "[18:41:26] [Server thread/INFO]: F10 joined the game",
  "[18:41:29] [Server thread/INFO]: F11 joined the game",
  "[18:41:32] [Server thread/INFO]: F12 joined the game",
  "[18:41:35] [Server thread/INFO]: F13 joined the game",
  "[18:41:38] [Server thread/INFO]: F14 joined the game",
  "[18:41:40] [Server thread/INFO]: F15 joined the game",
  "[18:41:43] [Server thread/INFO]: F16 joined the game",
  "[18:41:45] [Server thread/INFO]: F17 joined the game",
  "[18:41:48] [Server thread/INFO]: F18 joined the game",
  "[18:41:51] [Server thread/INFO]: F19 joined the game",
  "[18:47:15] [Server thread/INFO]: F6 joined the game",
  "[18:47:32] [Server thread/INFO]: F14 joined the game",
  "[18:48:31] [Server thread/INFO]: F1 joined the game",
  "[18:48:41] [Server thread/INFO]: F11 joined the game",
  "[18:48:49] [Server thread/INFO]: F8 joined the game",
  "[18:48:58] [Server thread/INFO]: F10 joined the game",
  "[18:49:09] [Server thread/INFO]: F10 joined the game",
  "[18:49:21] [Server thread/INFO]: F19 joined the game",
  "[18:49:23] [Server thread/INFO]: F1 joined the game",
  "[18:49:24] [Server thread/INFO]: F14 joined the game",
  "[18:49:31] [Server thread/INFO]: F18 joined the game",
  "[18:50:14] [Server thread/INFO]: F13 joined the game",
  "[18:50:20] [Server thread/INFO]: F9 joined the game",
  "[18:50:22] [Server thread/INFO]: F16 joined the game",
  "[18:50:35] [Server thread/INFO]: F1 joined the game",
  "[18:50:39] [Server thread/INFO]: F11 joined the game",
  "[18:50:54] [Server thread/INFO]: F11 joined the game",
  "[18:50:57] [Server thread/INFO]: F7 joined the game",
]

// REAL_F561 (face39677958918.log) - 31 join echoes
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

// REAL_F562 (face39690488199.log) - 28 join echoes
const REAL_F562 = [
  "[23:19:29] [Server thread/INFO]: YardSurvey joined the game",
  "[23:19:42] [Server thread/INFO]: F1 joined the game",
  "[23:19:45] [Server thread/INFO]: F2 joined the game",
  "[23:19:47] [Server thread/INFO]: F3 joined the game",
  "[23:19:50] [Server thread/INFO]: F4 joined the game",
  "[23:19:52] [Server thread/INFO]: F5 joined the game",
  "[23:19:55] [Server thread/INFO]: F6 joined the game",
  "[23:19:57] [Server thread/INFO]: F7 joined the game",
  "[23:20:00] [Server thread/INFO]: F8 joined the game",
  "[23:20:02] [Server thread/INFO]: F9 joined the game",
  "[23:20:05] [Server thread/INFO]: F10 joined the game",
  "[23:20:07] [Server thread/INFO]: F11 joined the game",
  "[23:20:10] [Server thread/INFO]: F12 joined the game",
  "[23:20:12] [Server thread/INFO]: F13 joined the game",
  "[23:20:15] [Server thread/INFO]: F14 joined the game",
  "[23:20:17] [Server thread/INFO]: F15 joined the game",
  "[23:20:20] [Server thread/INFO]: F16 joined the game",
  "[23:20:22] [Server thread/INFO]: F17 joined the game",
  "[23:20:25] [Server thread/INFO]: F18 joined the game",
  "[23:20:28] [Server thread/INFO]: F19 joined the game",
  "[23:25:29] [Server thread/INFO]: F19 joined the game",
  "[23:26:08] [Server thread/INFO]: F19 joined the game",
  "[23:26:26] [Server thread/INFO]: F19 joined the game",
  "[23:26:51] [Server thread/INFO]: F19 joined the game",
  "[23:26:57] [Server thread/INFO]: F19 joined the game",
  "[23:27:04] [Server thread/INFO]: F19 joined the game",
  "[23:27:52] [Server thread/INFO]: F13 joined the game",
  "[23:29:18] [Server thread/INFO]: F5 joined the game",
]

// REAL_F563 (face39697292378.log) - 52 join echoes
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

// REAL_F564 (face39704130310.log) - 39 join echoes - the fresh tail
// the fourth 2 the newest harvest prices
const REAL_F564 = [
  "[01:25:43] [Server thread/INFO]: YardSurvey joined the game",
  "[01:25:56] [Server thread/INFO]: F1 joined the game",
  "[01:25:58] [Server thread/INFO]: F2 joined the game",
  "[01:26:00] [Server thread/INFO]: F3 joined the game",
  "[01:26:03] [Server thread/INFO]: F4 joined the game",
  "[01:26:06] [Server thread/INFO]: F5 joined the game",
  "[01:26:08] [Server thread/INFO]: F6 joined the game",
  "[01:26:10] [Server thread/INFO]: F7 joined the game",
  "[01:26:13] [Server thread/INFO]: F8 joined the game",
  "[01:26:16] [Server thread/INFO]: F9 joined the game",
  "[01:26:18] [Server thread/INFO]: F10 joined the game",
  "[01:26:21] [Server thread/INFO]: F11 joined the game",
  "[01:26:23] [Server thread/INFO]: F12 joined the game",
  "[01:26:26] [Server thread/INFO]: F13 joined the game",
  "[01:26:29] [Server thread/INFO]: F14 joined the game",
  "[01:26:31] [Server thread/INFO]: F15 joined the game",
  "[01:26:33] [Server thread/INFO]: F16 joined the game",
  "[01:26:36] [Server thread/INFO]: F17 joined the game",
  "[01:26:39] [Server thread/INFO]: F18 joined the game",
  "[01:26:41] [Server thread/INFO]: F19 joined the game",
  "[01:33:49] [Server thread/INFO]: F11 joined the game",
  "[01:33:51] [Server thread/INFO]: F15 joined the game",
  "[01:33:52] [Server thread/INFO]: F1 joined the game",
  "[01:33:53] [Server thread/INFO]: F6 joined the game",
  "[01:33:55] [Server thread/INFO]: F12 joined the game",
  "[01:33:55] [Server thread/INFO]: F7 joined the game",
  "[01:34:01] [Server thread/INFO]: F13 joined the game",
  "[01:34:10] [Server thread/INFO]: F3 joined the game",
  "[01:34:11] [Server thread/INFO]: F2 joined the game",
  "[01:34:24] [Server thread/INFO]: F19 joined the game",
  "[01:34:52] [Server thread/INFO]: F16 joined the game",
  "[01:35:40] [Server thread/INFO]: F17 joined the game",
  "[01:35:42] [Server thread/INFO]: F12 joined the game",
  "[01:35:44] [Server thread/INFO]: F14 joined the game",
  "[01:35:45] [Server thread/INFO]: F18 joined the game",
  "[01:35:46] [Server thread/INFO]: F8 joined the game",
  "[01:35:47] [Server thread/INFO]: F5 joined the game",
  "[01:35:47] [Server thread/INFO]: F1 joined the game",
  "[01:35:52] [Server thread/INFO]: F15 joined the game",
]

// the REAL 62-face window F501-F564 the alignment voiced - the F552
// zombie and the F557 artifact hole the holes the F-order keeps (60
// ids F501..F561 + the F553..F556 four + the F558..F564 seven the 62
// the seat prices)
const REAL_ARC = [43,26,83,4,6,5,45,9,0,4,21,13,0,4,62,0,50,18,11,34,35,28,36,20,16,1,110,35,0,0,1,24,2,14,16,48,14,20,7,7,19,11,6,43,0,16,0,106,2,1,0,14,5,8,5,8,0,13,22,6,5,2]

test('REAL faces byte-exact - the storm fourth breath the fourth order statistic prices', () => {
  // the columns the archive voices - the census the value byte-exact
  // keeps (the F509 the constructive single-gap, the F516 the REAL
  // zero the fourth same-second pair keeps, the F527 the ceiling 110,
  // the F564 the fresh tail 2)
  const pins = [[REAL_F501, 43], [REAL_F504, 4], [REAL_F507, 45], [REAL_F509, 0], [REAL_F516, 0], [REAL_F519, 11], [REAL_F527, 110], [REAL_F533, 2], [REAL_F544, 43], [REAL_F549, 2], [REAL_F558, 8], [REAL_F561, 22], [REAL_F562, 6], [REAL_F563, 5], [REAL_F564, 2]]
  for (const [col, want] of pins) {
    assert.equal(rejoinStormFourthBreathCensus(col).rejoinStormFourthBreath, want)
  }
})

test('the BOUND + DIALOG + CEILING laws - the edges the fourth order statistic bounds keep', () => {
  // the storm cadence hand the fixtures re-voice inline - the BOUND
  // law the .358 storm min <= fourth <= the .352 re-join gap and
  // fourth <= the .350 span's own stretch every voiced fixture (the
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
      fourth: gaps.length > 3 ? gaps[3] : 0,
      count: gaps.length,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      stretch: gaps.reduce((a, b) => a + b, 0),
      third: rejoinStormThirdBreathCensus(lines).rejoinStormThirdBreath
    }
  }
  const cols = [REAL_F501, REAL_F504, REAL_F507, REAL_F509, REAL_F516, REAL_F519, REAL_F527, REAL_F533, REAL_F544, REAL_F549, REAL_F558, REAL_F561, REAL_F562, REAL_F563, REAL_F564]
  for (const col of cols) {
    const r = read(col)
    const fourth = rejoinStormFourthBreathCensus(col).rejoinStormFourthBreath
    assert.equal(fourth, r.fourth)
    // the bound the VOICED faces price (the fewer-than-four-gaps face
    // the lawful zero the bounds keep - the F509 constructive face
    // the fourth 0 no list sample the min/max never bound)
    if (r.count >= 4) {
      assert.ok(fourth >= r.min && fourth <= r.max, `bound ${fourth} in [${r.min},${r.max}]`)
      assert.ok(fourth <= r.stretch)
    } else {
      assert.equal(fourth, 0)
    }
  }
  // the DIALOG's own edges the fixtures voice: the F504 under face
  // (4 UNDER the 67) and the F562 under face (6 UNDER the 25) and the
  // F563 under face (5 UNDER the 45 the fresh window's own) and the
  // F509 level face (0 the single-gap storm the third 0 keeps) and
  // the F501 above face (43 ABOVE the 0) and the F507 above face (45
  // ABOVE the 20) and the F527 above face (110 ABOVE the 4) and the
  // F564 above face (2 ABOVE the 1 the fresh tail)
  assert.ok(read(REAL_F504).fourth < read(REAL_F504).third)
  assert.ok(read(REAL_F562).fourth < read(REAL_F562).third)
  assert.ok(read(REAL_F563).fourth < read(REAL_F563).third)
  assert.equal(read(REAL_F509).fourth, read(REAL_F509).third)
  assert.ok(read(REAL_F501).fourth > read(REAL_F501).third)
  assert.ok(read(REAL_F507).fourth > read(REAL_F507).third)
  assert.ok(read(REAL_F527).fourth > read(REAL_F527).third)
  assert.ok(read(REAL_F564).fourth > read(REAL_F564).third)
  // the CEILING's own face: the F527 fourth IS the storm cadence's
  // tallest silence (110) - and the F544 the honest difference prices
  // (43 the fourth the 192 giant the third keeps)
  assert.equal(read(REAL_F527).fourth, read(REAL_F527).max)
  assert.ok(read(REAL_F544).fourth < read(REAL_F544).max)
  assert.ok(read(REAL_F544).max > 0) // the 192 giant the third keeps
  // the REAL zero vs the CONSTRUCTIVE zero: the F516 the four-plus-gap
  // storm the same-second fourth pair the zero the list voices, the
  // F509 the ONE gap and the F513 the THREE gaps the no-fourth-pair
  // faces the constructive branch keeps
  assert.ok(read(REAL_F516).count >= 4)
  assert.equal(read(REAL_F509).count, 1)
  assert.equal(read(REAL_F564).count, 18)
  // the synthetic branches: the one-echo face the zero keeps, the
  // single-gap and the two-gap and the three-gap faces the constructive
  // keeps (the fourth pair the list never holds - the .368 convention
  // extends), the four-gap face the fourth the list voices, the
  // co-reign tie the interleave the fourth gap the FILE ORDER voices,
  // the day-cyclic wrap the fourth pair crossing the midnight cell
  // prices
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinStormFourthBreathCensus(oneEcho), { rejoinStormFourthBreath: 0 })
  const singleGap = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinStormFourthBreathCensus(singleGap), { rejoinStormFourthBreath: 0 })
  const twoGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // F3's own first join 08:01 the tally's n=1 the storm list keeps
  // out - the storm events 08:02 / 08:03 / 08:09 the gaps [60, 360]
  // the TWO gaps the fourth pair the list never holds the constructive
  // zero the .368 convention extends
  assert.deepEqual(rejoinStormFourthBreathCensus(twoGaps), { rejoinStormFourthBreath: 0 })
  const threeGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 / 08:03 / 08:04 / 08:09 the gaps [60, 60,
  // 300] the THREE gaps the FOURTH pair the list never holds - the
  // constructive zero the .368 convention extends (the third breath's
  // own 300 the elder seat prices)
  assert.deepEqual(rejoinStormFourthBreathCensus(threeGaps), { rejoinStormFourthBreath: 0 })
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
  // [60, 60, 60, 240] the FOURTH pair 240 the list voices (the 08:05
  // event the cadence keeps - the 08:04 -> 08:09 jump the elder
  // three-gap face's own 300 the fourth arc never rides, the
  // pincheck the pre-push hand caught the honest arithmetic voices)
  assert.deepEqual(rejoinStormFourthBreathCensus(fourGaps), { rejoinStormFourthBreath: 240 })
  const coReign = [
    '[09:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[09:01:00] [Server thread/INFO]: F3 joined the game',
    '[09:02:00] [Server thread/INFO]: F7 joined the game',
    '[09:04:00] [Server thread/INFO]: F3 joined the game',
    '[09:07:00] [Server thread/INFO]: F7 joined the game',
    '[09:08:00] [Server thread/INFO]: F3 joined the game',
    '[09:14:00] [Server thread/INFO]: F7 joined the game',
    '[09:15:00] [Server thread/INFO]: F3 joined the game'
  ]
  // F3's and F7's own co-reign the tie keeps - the champ events the
  // FILE ORDER rides (F3 09:04 / F7 09:07 / F3 09:08 / F7 09:14 / F3
  // 09:15) the gaps [180, 60, 360, 60] the FOURTH 60 the interleave
  // voices
  assert.deepEqual(rejoinStormFourthBreathCensus(coReign), { rejoinStormFourthBreath: 60 })
  const wrap = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[23:59:30] [Server thread/INFO]: F3 joined the game',
    '[00:01:30] [Server thread/INFO]: F3 joined the game',
    '[00:05:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the day-cyclic wrap the .350 precedent keeps - the FOURTH pair
  // crosses the midnight cell (the storm events 08:02 / 08:03 /
  // 23:59:30 / 00:01:30 / 00:05:30 the gaps [60, 57390, 120, 240] -
  // 90 + 86400 - 86370 = 120 the third pair rides, 330 - 90 = 240 the
  // fourth the list voices)
  assert.deepEqual(rejoinStormFourthBreathCensus(wrap), { rejoinStormFourthBreath: 240 })
})

test('REAL 62-face window arc byte-exact - 32 classes the seat LIVE', () => {
  // the arc the fieldread re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 62)
  assert.equal(classes.size, 32)
  assert.equal(Math.min(...arc), 0) // the NINE-face zero keeps (the constructive eight + the REAL one F516)
  assert.equal(Math.max(...arc), 110) // the ceiling face F527 keeps
  // the zero faces the honest distinction prices (the F516 the REAL
  // zero the cadence's own same-second fourth pair keeps, the
  // constructive eight the fewer-than-four-gaps faces the branch
  // rides)
  assert.equal(arc[0], 43) // the F501 opener
  assert.equal(arc[8], 0) // the F509 constructive single-gap
  assert.equal(arc[15], 0) // the F516 REAL zero
  assert.equal(arc[26], 110) // the F527 ceiling
  assert.equal(arc[61], 2) // the F564 fresh tail
  // the held law: TWO held pairs the 62-face window keeps - the
  // F529/F530 constructive-zero pair and the F539/F540 sevens the
  // .367 champ arc's own echo prices (the .368 arc's own ZERO the
  // fourth arc does NOT inherit - the honest distinction the seats
  // price)
  let held = 0
  for (let i = 1; i < arc.length; i++) if (arc[i] === arc[i - 1]) held++
  assert.equal(held, 2)
  // the multi-class law: the mode candidate the honest probe DECLINED
  // - the nine-face zero the tie-degenerate gravity the family prices
  const tally = new Map()
  for (const v of arc) tally.set(v, (tally.get(v) || 0) + 1)
  assert.equal(tally.get(0), 9)
  assert.equal(tally.get(5), 4)
  assert.equal(tally.get(4), 3)
  assert.equal(tally.get(2), 3)
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  // the census the strict frame keeps - the deformed lines the skip
  // rides, the honest zero the no-join face keeps
  assert.equal(rejoinStormFourthBreathCensus(null), null)
  assert.equal(rejoinStormFourthBreathCensus(undefined), null)
  assert.equal(rejoinStormFourthBreathCensus('not an array'), null)
  assert.equal(rejoinStormFourthBreathCensus(42), null)
  assert.deepEqual(rejoinStormFourthBreathCensus([]), { rejoinStormFourthBreath: 0 })
  assert.deepEqual(rejoinStormFourthBreathCensus(['', 'no joins here', null, 42]), { rejoinStormFourthBreath: 0 })
  // the malformed clock cells the strict frame never rides
  assert.deepEqual(rejoinStormFourthBreathCensus([
    '[24:00:00] [Server thread/INFO]: F3 joined the game', // the hour 24 the day never keeps
    '[12:60:00] [Server thread/INFO]: F3 joined the game', // the minute 60 the clock never keeps
    '[12:00:60] [Server thread/INFO]: F3 joined the game', // the second 60 the clock never keeps
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormFourthBreath: 0 })
  // the non-join lanes the lane law keeps out
  assert.deepEqual(rejoinStormFourthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 left the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the team', // the near-join the frame never rides
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormFourthBreath: 0 })
  // the kernel prefix the deformed line the skip keeps
  assert.deepEqual(rejoinStormFourthBreathCensus([
    'kernel: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormFourthBreath: 0 })
  // the multi-line join the trailing spaces the strict frame never rides
  assert.deepEqual(rejoinStormFourthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 joined the game ',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormFourthBreath: 0 })
})

test('fence - every branch the gap words own integer law keeps', () => {
  const c = (n) => ({ rejoinStormFourthBreath: n })
  assert.equal(rejoinStormFourthBreathConsistent(null), false)
  assert.equal(rejoinStormFourthBreathConsistent(undefined), false)
  assert.equal(rejoinStormFourthBreathConsistent('nope'), false)
  assert.equal(rejoinStormFourthBreathConsistent({}), false)
  assert.equal(rejoinStormFourthBreathConsistent({ back: c(0), prev: c(0) }), false) // the cur missing
  assert.equal(rejoinStormFourthBreathConsistent({ back: c(-1), prev: c(0), cur: c(0) }), false) // the negative the fence never rides
  assert.equal(rejoinStormFourthBreathConsistent({ back: c(0), prev: c(86399), cur: c(0) }), true) // the day ceiling 86399 the fence keeps (the .368 fence-fix lesson the same boundary voices)
  assert.equal(rejoinStormFourthBreathConsistent({ back: c(0), prev: c(86400), cur: c(0) }), false) // past the day the fence declines (the fence 0..86399 the module voices - the .366 line 445 / the .367 line 593 / the .368 line 647 the same shape)
  assert.equal(rejoinStormFourthBreathConsistent({ back: c(0), prev: c(86401), cur: c(0) }), false) // past the day the fence declines
  assert.equal(rejoinStormFourthBreathConsistent({ back: c(0), prev: c(1.5), cur: c(0) }), false) // the fraction the integer law never rides
  assert.equal(rejoinStormFourthBreathConsistent({ back: c(0), prev: c(0), cur: c(0) }), true)
  assert.equal(rejoinStormFourthBreathConsistent({ back: c(86399), prev: c(0), cur: c(110) }), true)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const c = (n) => ({ rejoinStormFourthBreath: n })
  // the swell the F513->F515 faces keep (0 -> 4 (+4) -> 62 (+58))
  const swell = rejoinStormFourthBreathTrendRow({ back: c(0), prev: c(4), cur: c(62) })
  assert.ok(swell.includes('swell ran two steps deep'))
  assert.ok(swell.includes('0 -> 4 (+4) -> 62 (+58)'))
  assert.ok(swell.includes('v0.976.370'))
  // the swing the F515->F517 faces keep (62 -> 0 (-62) -> 50 (+50))
  const swing = rejoinStormFourthBreathTrendRow({ back: c(62), prev: c(0), cur: c(50) })
  assert.ok(swing.includes('swing'))
  assert.ok(swing.includes('62 -> 0 (-62) -> 50 (+50)'))
  // the fade the F527->F529 faces keep (110 -> 35 (-75) -> 0 (-35))
  const fade = rejoinStormFourthBreathTrendRow({ back: c(110), prev: c(35), cur: c(0) })
  assert.ok(fade.includes('fade ran two steps deep'))
  assert.ok(fade.includes('110 -> 35 (-75) -> 0 (-35)'))
  // the held step the honest silence keeps (the row never invents -
  // the F529/F530 and the F539/F540 pairs the arc keeps)
  assert.equal(rejoinStormFourthBreathTrendRow({ back: c(0), prev: c(0), cur: c(25) }), null)
  assert.equal(rejoinStormFourthBreathTrendRow({ back: c(0), prev: c(25), cur: c(25) }), null)
  // the deformed triples the fence declines
  assert.equal(rejoinStormFourthBreathTrendRow(null), null)
  assert.equal(rejoinStormFourthBreathTrendRow({ back: c(-5), prev: c(0), cur: c(0) }), null)
  // the REAL arc's own windows the rows re-voice (the census the same
  // values the arc keeps)
  const c3 = (i) => ({ rejoinStormFourthBreath: REAL_ARC[i] })
  assert.ok(rejoinStormFourthBreathTrendRow({ back: c3(12), prev: c3(13), cur: c3(14) }).includes('0 -> 4 (+4) -> 62 (+58)'))
  assert.ok(rejoinStormFourthBreathTrendRow({ back: c3(26), prev: c3(27), cur: c3(28) }).includes('110 -> 35 (-75) -> 0 (-35)'))
})
