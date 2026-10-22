import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinStormThirdBreathCensus, rejoinStormThirdBreathConsistent, rejoinStormThirdBreathTrendRow } from '../../src/lib/rejoinstormthirdbreath.mjs'
import { rejoinStormSecondBreathCensus } from '../../src/lib/rejoinstormsecondbreath.mjs'

// the REAL columns the rebuilt archive keeps (the fire-0643 method the
// fire-0743 fire re-rides - the faces the alignment byte-exact anchored
// and the F-map corrections the fire-0643 ledger repaired the same ids
// price: F524 = 39454573641 the .367 window's own record the F527
// 39475545027 the honest neighbour keeps)

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

// REAL_F527 (face39475545027.log) - 28 join echoes
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

// REAL_F544 (face39570206052.log) - 27 join echoes
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

// REAL_F558 (face39665225750.log) - 39 join echoes
const REAL_F558 = [
  "[20:07:56] [Server thread/INFO]: YardSurvey joined the game",
  "[20:08:11] [Server thread/INFO]: F1 joined the game",
  "[20:08:13] [Server thread/INFO]: F2 joined the game",
  "[20:08:15] [Server thread/INFO]: F3 joined the game",
  "[20:08:18] [Server thread/INFO]: F4 joined the game",
  "[20:08:20] [Server thread/INFO]: F5 joined the game",
  "[20:08:24] [Server thread/INFO]: F6 joined the game",
  "[20:08:26] [Server thread/INFO]: F7 joined the game",
  "[20:08:28] [Server thread/INFO]: F8 joined the game",
  "[20:08:31] [Server thread/INFO]: F9 joined the game",
  "[20:08:33] [Server thread/INFO]: F10 joined the game",
  "[20:08:36] [Server thread/INFO]: F11 joined the game",
  "[20:08:39] [Server thread/INFO]: F12 joined the game",
  "[20:08:42] [Server thread/INFO]: F13 joined the game",
  "[20:08:44] [Server thread/INFO]: F14 joined the game",
  "[20:08:46] [Server thread/INFO]: F15 joined the game",
  "[20:08:49] [Server thread/INFO]: F16 joined the game",
  "[20:08:52] [Server thread/INFO]: F17 joined the game",
  "[20:08:54] [Server thread/INFO]: F18 joined the game",
  "[20:08:58] [Server thread/INFO]: F19 joined the game",
  "[20:12:50] [Server thread/INFO]: F3 joined the game",
  "[20:15:30] [Server thread/INFO]: F14 joined the game",
  "[20:15:37] [Server thread/INFO]: F14 joined the game",
  "[20:15:47] [Server thread/INFO]: F14 joined the game",
  "[20:16:00] [Server thread/INFO]: F14 joined the game",
  "[20:16:06] [Server thread/INFO]: F14 joined the game",
  "[20:16:13] [Server thread/INFO]: F14 joined the game",
  "[20:16:19] [Server thread/INFO]: F14 joined the game",
  "[20:16:29] [Server thread/INFO]: F14 joined the game",
  "[20:16:35] [Server thread/INFO]: F14 joined the game",
  "[20:16:40] [Server thread/INFO]: F14 joined the game",
  "[20:16:42] [Server thread/INFO]: F13 joined the game",
  "[20:16:48] [Server thread/INFO]: F13 joined the game",
  "[20:16:52] [Server thread/INFO]: F14 joined the game",
  "[20:16:54] [Server thread/INFO]: F13 joined the game",
  "[20:17:00] [Server thread/INFO]: F13 joined the game",
  "[20:17:37] [Server thread/INFO]: F16 joined the game",
  "[20:18:09] [Server thread/INFO]: F5 joined the game",
  "[20:18:10] [Server thread/INFO]: F1 joined the game",
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

// the REAL 60-face window F501-F562 the alignment voiced - the F552
// zombie and the F557 gate face the holes the F-order keeps (59 ids
// F501..F561 + the F562 fresh tail the 60 the seat prices)
const REAL_ARC = [0,25,10,67,107,7,20,5,0,14,15,9,3,6,8,4,18,7,5,29,5,56,21,16,117,5,4,19,0,67,133,6,0,8,61,1,21,105,20,18,3,13,21,192,0,24,0,6,12,10,15,68,7,20,4,10,0,10,113,25]

test('REAL faces byte-exact - the storm third breath the third order statistic prices', () => {
  // the columns the archive voices - the census the value byte-exact
  // keeps (the F501 and F533 the REAL zeros, the F509 the constructive
  // single-gap, the F544 the ceiling 192, the F562 the fresh tail 25)
  const pins = [[REAL_F501, 0], [REAL_F504, 67], [REAL_F507, 20], [REAL_F509, 0], [REAL_F519, 5], [REAL_F527, 4], [REAL_F533, 0], [REAL_F544, 192], [REAL_F549, 12], [REAL_F558, 10], [REAL_F561, 113], [REAL_F562, 25]]
  for (const [col, want] of pins) {
    assert.equal(rejoinStormThirdBreathCensus(col).rejoinStormThirdBreath, want)
  }
})

test('the BOUND + DIALOG + CEILING laws - the edges the third order statistic bounds keep', () => {
  // the storm cadence hand the fixtures re-voice inline - the BOUND
  // law the .358 storm min <= third <= the .352 re-join gap and
  // third <= the .350 span's own stretch every voiced fixture (the
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
      third: gaps.length > 2 ? gaps[2] : 0,
      count: gaps.length,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      stretch: gaps.reduce((a, b) => a + b, 0),
      s2: rejoinStormSecondBreathCensus(lines).rejoinStormSecondBreath
    }
  }
  const cols = [REAL_F501, REAL_F504, REAL_F507, REAL_F509, REAL_F519, REAL_F527, REAL_F533, REAL_F544, REAL_F549, REAL_F558, REAL_F561, REAL_F562]
  for (const col of cols) {
    const r = read(col)
    const third = rejoinStormThirdBreathCensus(col).rejoinStormThirdBreath
    assert.equal(third, r.third)
    // the bound the VOICED faces price (the fewer-than-three-gaps face
    // the lawful zero the bounds keep - the F509 constructive face
    // the third 0 no list sample the min/max never bound)
    if (r.count >= 3) {
      assert.ok(third >= r.min && third <= r.max, `bound ${third} in [${r.min},${r.max}]`)
      assert.ok(third <= r.stretch)
    } else {
      assert.equal(third, 0)
    }
  }
  // the DIALOG's own edges the fixtures voice: the F501 under face
  // (the REAL zero 0 UNDER the 5) and the F507 under face (20 UNDER
  // the 63) and the F509 level face (0 the single-gap storm the s2 0
  // keeps) and the F504 above face (67 ABOVE the 23) and the F562
  // above face (25 ABOVE the 18 the fresh tail)
  assert.ok(read(REAL_F501).third < read(REAL_F501).s2)
  assert.ok(read(REAL_F507).third < read(REAL_F507).s2)
  assert.equal(read(REAL_F509).third, read(REAL_F509).s2)
  assert.ok(read(REAL_F504).third > read(REAL_F504).s2)
  assert.ok(read(REAL_F562).third > read(REAL_F562).s2)
  // the CEILING's own face: the F544 third IS the storm cadence's
  // tallest silence (192) - and the F549 the honest difference prices
  // (12 the third the 310 giant the opening keeps)
  assert.equal(read(REAL_F544).third, read(REAL_F544).max)
  assert.ok(read(REAL_F549).third < read(REAL_F549).max)
  assert.ok(read(REAL_F549).max > 0) // the 310 giant the opening keeps
  // the REAL zero vs the CONSTRUCTIVE zero: the F501 and the F533 the
  // three-plus-gap storms the same-second third pair the zero the list
  // voices, the F509 the ONE gap the no-third-pair face keeps
  assert.ok(read(REAL_F501).count >= 3)
  assert.ok(read(REAL_F533).count >= 3)
  assert.equal(read(REAL_F509).count, 1)
  // the synthetic branches: the one-echo face the zero keeps, the
  // single-gap and the two-gap faces the constructive keeps (the third
  // pair the list never holds), the three-gap face the third the list
  // voices, the co-reign tie the interleave the third gap the FILE
  // ORDER voices, the day-cyclic wrap the third pair crossing the
  // midnight cell prices
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinStormThirdBreathCensus(oneEcho), { rejoinStormThirdBreath: 0 })
  const singleGap = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinStormThirdBreathCensus(singleGap), { rejoinStormThirdBreath: 0 })
  const twoGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // F3's own first join 08:01 the tally's n=1 the storm list keeps
  // out - the storm events 08:02 / 08:03 / 08:09 the gaps [60, 360]
  // the TWO gaps the third pair the list never holds the constructive
  // zero the .366 convention extends
  assert.deepEqual(rejoinStormThirdBreathCensus(twoGaps), { rejoinStormThirdBreath: 0 })
  const threeGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 / 08:03 / 08:04 / 08:09 the gaps [60, 60,
  // 300] the THIRD pair 300 the list voices
  assert.deepEqual(rejoinStormThirdBreathCensus(threeGaps), { rejoinStormThirdBreath: 300 })
  const coReign = [
    '[09:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[09:01:00] [Server thread/INFO]: F3 joined the game',
    '[09:02:00] [Server thread/INFO]: F7 joined the game',
    '[09:04:00] [Server thread/INFO]: F3 joined the game',
    '[09:07:00] [Server thread/INFO]: F7 joined the game',
    '[09:08:00] [Server thread/INFO]: F3 joined the game',
    '[09:14:00] [Server thread/INFO]: F7 joined the game'
  ]
  // F3's and F7's own treble apiece the tie co-reign keeps - the champ
  // events the FILE ORDER rides (F3 09:04 / F7 09:07 / F3 09:08 / F7
  // 09:14) the gaps [180, 60, 360] the third 360 the interleave voices
  assert.deepEqual(rejoinStormThirdBreathCensus(coReign), { rejoinStormThirdBreath: 360 })
  const wrap = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[23:59:30] [Server thread/INFO]: F3 joined the game',
    '[00:01:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the day-cyclic wrap the .350 precedent keeps - the THIRD pair
  // crosses the midnight cell (the storm events 08:02 / 08:03 /
  // 23:59:30 / 00:01:30 the gaps [60, 57390, 120] - 90 + 86400 - 86370
  // = 120) the list voices
  assert.deepEqual(rejoinStormThirdBreathCensus(wrap), { rejoinStormThirdBreath: 120 })
})

test('REAL 60-face window arc byte-exact - 32 classes the seat LIVE', () => {
  // the arc the fieldread re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 60)
  assert.equal(classes.size, 32)
  assert.equal(Math.min(...arc), 0) // the SEVEN-face zero keeps (the constructive five + the REAL two F501/F533)
  assert.equal(Math.max(...arc), 192) // the ceiling face F544 keeps
  // the zero faces the honest distinction prices (the F501 opening
  // trio and the F533 the REAL zeros the cadence's own same-second
  // third pair keeps, the constructive five the fewer-than-three-gaps
  // faces the branch rides)
  assert.equal(arc[0], 0) // the F501 REAL zero
  assert.equal(arc[32], 0) // the F533 REAL zero
  assert.equal(arc[43], 192) // the F544 ceiling
  assert.equal(arc[58], 113) // the F561 neighbour the fresh tail's own
  assert.equal(arc[59], 25) // the F562 fresh tail
  // the held law: ZERO held pairs the 60-face window keeps - the .366
  // arc's own three the third arc does NOT inherit (the honest
  // distinction the seats price)
  let held = 0
  for (let i = 1; i < arc.length; i++) if (arc[i] === arc[i - 1]) held++
  assert.equal(held, 0)
  // the multi-class law: the mode candidate the honest probe DECLINED
  // - the seven-face zero the tie-degenerate gravity the family prices
  const tally = new Map()
  for (const v of arc) tally.set(v, (tally.get(v) || 0) + 1)
  assert.equal(tally.get(0), 7)
  assert.equal(tally.get(10), 4)
  assert.equal(tally.get(5), 4)
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  // the census the strict frame keeps - the deformed lines the skip
  // rides, the honest zero the no-join face keeps
  assert.equal(rejoinStormThirdBreathCensus(null), null)
  assert.equal(rejoinStormThirdBreathCensus(undefined), null)
  assert.equal(rejoinStormThirdBreathCensus('not an array'), null)
  assert.equal(rejoinStormThirdBreathCensus(42), null)
  assert.deepEqual(rejoinStormThirdBreathCensus([]), { rejoinStormThirdBreath: 0 })
  assert.deepEqual(rejoinStormThirdBreathCensus(['', 'no joins here', null, 42]), { rejoinStormThirdBreath: 0 })
  // the malformed clock cells the strict frame never rides
  assert.deepEqual(rejoinStormThirdBreathCensus([
    '[24:00:00] [Server thread/INFO]: F3 joined the game', // the hour 24 the day never keeps
    '[12:60:00] [Server thread/INFO]: F3 joined the game', // the minute 60 the clock never keeps
    '[12:00:60] [Server thread/INFO]: F3 joined the game', // the second 60 the clock never keeps
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormThirdBreath: 0 })
  // the non-join lanes the lane law keeps out
  assert.deepEqual(rejoinStormThirdBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 left the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the team', // the near-join the frame never rides
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormThirdBreath: 0 })
  // the kernel prefix the deformed line the skip keeps
  assert.deepEqual(rejoinStormThirdBreathCensus([
    'kernel: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormThirdBreath: 0 })
  // the multi-line join the trailing spaces the strict frame never rides
  assert.deepEqual(rejoinStormThirdBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 joined the game ',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormThirdBreath: 0 })
})

test('fence - every branch the gap words own integer law keeps', () => {
  const c = (n) => ({ rejoinStormThirdBreath: n })
  assert.equal(rejoinStormThirdBreathConsistent(null), false)
  assert.equal(rejoinStormThirdBreathConsistent(undefined), false)
  assert.equal(rejoinStormThirdBreathConsistent('nope'), false)
  assert.equal(rejoinStormThirdBreathConsistent({}), false)
  assert.equal(rejoinStormThirdBreathConsistent({ back: c(0), prev: c(0) }), false) // the cur missing
  assert.equal(rejoinStormThirdBreathConsistent({ back: c(-1), prev: c(0), cur: c(0) }), false) // the negative the fence never rides
  assert.equal(rejoinStormThirdBreathConsistent({ back: c(0), prev: c(86400), cur: c(0) }), true) // the day ceiling the fence keeps
  assert.equal(rejoinStormThirdBreathConsistent({ back: c(0), prev: c(86401), cur: c(0) }), false) // past the day the fence declines
  assert.equal(rejoinStormThirdBreathConsistent({ back: c(0), prev: c(1.5), cur: c(0) }), false) // the fraction the integer law never rides
  assert.equal(rejoinStormThirdBreathConsistent({ back: c(0), prev: c(0), cur: c(0) }), true)
  assert.equal(rejoinStormThirdBreathConsistent({ back: c(86399), prev: c(0), cur: c(192) }), true)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const c = (n) => ({ rejoinStormThirdBreath: n })
  // the swell the F503->F505 faces keep (10 -> 67 (+57) -> 107 (+40))
  const swell = rejoinStormThirdBreathTrendRow({ back: c(10), prev: c(67), cur: c(107) })
  assert.ok(swell.includes('swell ran two steps deep'))
  assert.ok(swell.includes('10 -> 67 (+57) -> 107 (+40)'))
  assert.ok(swell.includes('v0.976.368'))
  // the swing the F504->F506 faces keep (67 -> 107 (+40) -> 7 (-100))
  const swing = rejoinStormThirdBreathTrendRow({ back: c(67), prev: c(107), cur: c(7) })
  assert.ok(swing.includes('swing'))
  assert.ok(swing.includes('67 -> 107 (+40) -> 7 (-100)'))
  // the fade the F531->F533 faces keep (133 -> 6 (-127) -> 0 (-6))
  const fade = rejoinStormThirdBreathTrendRow({ back: c(133), prev: c(6), cur: c(0) })
  assert.ok(fade.includes('fade ran two steps deep'))
  assert.ok(fade.includes('133 -> 6 (-127) -> 0 (-6)'))
  // the held step the honest silence keeps (the row never invents)
  assert.equal(rejoinStormThirdBreathTrendRow({ back: c(0), prev: c(0), cur: c(25) }), null)
  assert.equal(rejoinStormThirdBreathTrendRow({ back: c(0), prev: c(25), cur: c(25) }), null)
  // the deformed triples the fence declines
  assert.equal(rejoinStormThirdBreathTrendRow(null), null)
  assert.equal(rejoinStormThirdBreathTrendRow({ back: c(-5), prev: c(0), cur: c(0) }), null)
  // the REAL arc's own windows the rows re-voice (the census the same
  // values the arc keeps)
  const c3 = (i) => ({ rejoinStormThirdBreath: REAL_ARC[i] })
  assert.ok(rejoinStormThirdBreathTrendRow({ back: c3(2), prev: c3(3), cur: c3(4) }).includes('10 -> 67 (+57) -> 107 (+40)'))
  assert.ok(rejoinStormThirdBreathTrendRow({ back: c3(30), prev: c3(31), cur: c3(32) }).includes('133 -> 6 (-127) -> 0 (-6)'))
})
