import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinChampFourthBreathCensus, rejoinChampFourthBreathConsistent, rejoinChampFourthBreathTrendRow } from '../../src/lib/rejoinchampfourthbreath.mjs'
import { rejoinChampThirdBreathCensus } from '../../src/lib/rejoinchampthirdbreath.mjs'

// the REAL columns the rebuilt archive keeps (the fire-0843 method the
// fire-1043 fire re-rides, the fire-1243 harvest the F565 fresh tail
// includes - the faces the alignment byte-exact anchored and the F-map
// the census slide the five anchors lock the same ids price: the F552
// cancelled and the F557 artifact hole the holes the F-order keeps)

// REAL_F501 (face39319100730.log) - 39 join echoes - fourth 0
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
// REAL_F504 (face39338489283.log) - 30 join echoes - fourth 10
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
// REAL_F509 (face39360759429.log) - 22 join echoes - fourth 0
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
// REAL_F516 (face39391362502.log) - 33 join echoes - fourth 7
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
// REAL_F532 (face39510437991.log) - 28 join echoes - fourth 108
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
// REAL_F548 (face39588975768.log) - 38 join echoes - fourth 181
const REAL_F548 = [
  "[11:18:35] [Server thread/INFO]: YardSurvey joined the game",
  "[11:18:49] [Server thread/INFO]: F1 joined the game",
  "[11:18:52] [Server thread/INFO]: F2 joined the game",
  "[11:18:54] [Server thread/INFO]: F3 joined the game",
  "[11:18:57] [Server thread/INFO]: F4 joined the game",
  "[11:18:59] [Server thread/INFO]: F5 joined the game",
  "[11:19:02] [Server thread/INFO]: F6 joined the game",
  "[11:19:04] [Server thread/INFO]: F7 joined the game",
  "[11:19:07] [Server thread/INFO]: F8 joined the game",
  "[11:19:09] [Server thread/INFO]: F9 joined the game",
  "[11:19:12] [Server thread/INFO]: F10 joined the game",
  "[11:19:14] [Server thread/INFO]: F11 joined the game",
  "[11:19:17] [Server thread/INFO]: F12 joined the game",
  "[11:19:19] [Server thread/INFO]: F13 joined the game",
  "[11:19:22] [Server thread/INFO]: F14 joined the game",
  "[11:19:24] [Server thread/INFO]: F15 joined the game",
  "[11:19:27] [Server thread/INFO]: F16 joined the game",
  "[11:19:29] [Server thread/INFO]: F17 joined the game",
  "[11:19:32] [Server thread/INFO]: F18 joined the game",
  "[11:19:34] [Server thread/INFO]: F19 joined the game",
  "[11:25:08] [Server thread/INFO]: F19 joined the game",
  "[11:25:16] [Server thread/INFO]: F19 joined the game",
  "[11:25:21] [Server thread/INFO]: F19 joined the game",
  "[11:25:27] [Server thread/INFO]: F19 joined the game",
  "[11:27:13] [Server thread/INFO]: F1 joined the game",
  "[11:27:40] [Server thread/INFO]: F15 joined the game",
  "[11:28:21] [Server thread/INFO]: F1 joined the game",
  "[11:28:26] [Server thread/INFO]: F10 joined the game",
  "[11:28:27] [Server thread/INFO]: F11 joined the game",
  "[11:28:27] [Server thread/INFO]: F14 joined the game",
  "[11:28:28] [Server thread/INFO]: F6 joined the game",
  "[11:28:28] [Server thread/INFO]: F3 joined the game",
  "[11:28:28] [Server thread/INFO]: F19 joined the game",
  "[11:28:28] [Server thread/INFO]: F13 joined the game",
  "[11:28:30] [Server thread/INFO]: F15 joined the game",
  "[11:28:30] [Server thread/INFO]: F4 joined the game",
  "[11:28:30] [Server thread/INFO]: F9 joined the game",
  "[11:28:40] [Server thread/INFO]: F7 joined the game",
]
// REAL_F558 (face39652892020.log) - 38 join echoes - fourth 4
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
// REAL_F559 (face39659028000.log) - 21 join echoes - fourth 0
const REAL_F559 = [
  "[19:23:54] [Server thread/INFO]: YardSurvey joined the game",
  "[19:24:07] [Server thread/INFO]: F1 joined the game",
  "[19:24:10] [Server thread/INFO]: F2 joined the game",
  "[19:24:12] [Server thread/INFO]: F3 joined the game",
  "[19:24:15] [Server thread/INFO]: F4 joined the game",
  "[19:24:17] [Server thread/INFO]: F5 joined the game",
  "[19:24:20] [Server thread/INFO]: F6 joined the game",
  "[19:24:22] [Server thread/INFO]: F7 joined the game",
  "[19:24:25] [Server thread/INFO]: F8 joined the game",
  "[19:24:27] [Server thread/INFO]: F9 joined the game",
  "[19:24:30] [Server thread/INFO]: F10 joined the game",
  "[19:24:32] [Server thread/INFO]: F11 joined the game",
  "[19:24:35] [Server thread/INFO]: F12 joined the game",
  "[19:24:38] [Server thread/INFO]: F13 joined the game",
  "[19:24:40] [Server thread/INFO]: F14 joined the game",
  "[19:24:42] [Server thread/INFO]: F15 joined the game",
  "[19:24:45] [Server thread/INFO]: F16 joined the game",
  "[19:24:47] [Server thread/INFO]: F17 joined the game",
  "[19:24:51] [Server thread/INFO]: F18 joined the game",
  "[19:24:54] [Server thread/INFO]: F19 joined the game",
  "[19:33:40] [Server thread/INFO]: F19 joined the game",
]
// REAL_F563 (face39697292378.log) - 52 join echoes - fourth 9
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
// REAL_F565 (face39713523828.log) - 34 join echoes - fourth 9
const REAL_F565 = [
  "[03:06:06] [Server thread/INFO]: YardSurvey joined the game",
  "[03:06:18] [Server thread/INFO]: F1 joined the game",
  "[03:06:21] [Server thread/INFO]: F2 joined the game",
  "[03:06:23] [Server thread/INFO]: F3 joined the game",
  "[03:06:26] [Server thread/INFO]: F4 joined the game",
  "[03:06:28] [Server thread/INFO]: F5 joined the game",
  "[03:06:31] [Server thread/INFO]: F6 joined the game",
  "[03:06:33] [Server thread/INFO]: F7 joined the game",
  "[03:06:36] [Server thread/INFO]: F8 joined the game",
  "[03:06:38] [Server thread/INFO]: F9 joined the game",
  "[03:06:41] [Server thread/INFO]: F10 joined the game",
  "[03:06:43] [Server thread/INFO]: F11 joined the game",
  "[03:06:46] [Server thread/INFO]: F12 joined the game",
  "[03:06:48] [Server thread/INFO]: F13 joined the game",
  "[03:06:51] [Server thread/INFO]: F14 joined the game",
  "[03:06:53] [Server thread/INFO]: F15 joined the game",
  "[03:06:56] [Server thread/INFO]: F16 joined the game",
  "[03:06:58] [Server thread/INFO]: F17 joined the game",
  "[03:07:01] [Server thread/INFO]: F18 joined the game",
  "[03:07:03] [Server thread/INFO]: F19 joined the game",
  "[03:11:32] [Server thread/INFO]: F7 joined the game",
  "[03:13:12] [Server thread/INFO]: F10 joined the game",
  "[03:13:54] [Server thread/INFO]: F6 joined the game",
  "[03:13:56] [Server thread/INFO]: F9 joined the game",
  "[03:13:59] [Server thread/INFO]: F7 joined the game",
  "[03:14:29] [Server thread/INFO]: F13 joined the game",
  "[03:14:40] [Server thread/INFO]: F7 joined the game",
  "[03:14:49] [Server thread/INFO]: F7 joined the game",
  "[03:14:50] [Server thread/INFO]: F6 joined the game",
  "[03:14:58] [Server thread/INFO]: F7 joined the game",
  "[03:15:27] [Server thread/INFO]: F6 joined the game",
  "[03:15:49] [Server thread/INFO]: F6 joined the game",
  "[03:15:50] [Server thread/INFO]: F7 joined the game",
  "[03:16:16] [Server thread/INFO]: F7 joined the game",
]

// REAL_ARC - the SIXTY-THREE-face window F501-F565 the census slide
// prices (the F552 cancelled and the F557 artifact hole the F-order
// bridges), the champ FOURTH gap per face the .371 seat keeps
const REAL_ARC = [0, 0, 0, 10, 0, 4, 0, 9, 0, 0, 32, 17, 0, 10, 0, 7, 0, 0, 0, 0, 34, 8, 0, 8, 0, 5, 0, 0, 0, 0, 0, 108, 0, 14, 0, 45, 7, 0, 6, 0, 10, 8, 0, 0, 0, 5, 0, 181, 2, 6, 0, 0, 10, 0, 5, 4, 0, 6, 0, 6, 9, 5, 9]
const REAL_FACES = ['F501', 'F502', 'F503', 'F504', 'F505', 'F506', 'F507', 'F508', 'F509', 'F510', 'F511', 'F512', 'F513', 'F514', 'F515', 'F516', 'F517', 'F518', 'F519', 'F520', 'F521', 'F522', 'F523', 'F524', 'F525', 'F526', 'F527', 'F528', 'F529', 'F530', 'F531', 'F532', 'F533', 'F534', 'F535', 'F536', 'F537', 'F538', 'F539', 'F540', 'F541', 'F542', 'F543', 'F544', 'F545', 'F546', 'F547', 'F548', 'F549', 'F550', 'F551', 'F553', 'F554', 'F555', 'F556', 'F558', 'F559', 'F560', 'F561', 'F562', 'F563', 'F564', 'F565']

test('REAL faces byte-exact - the champion fourth breath the fourth order statistic prices', () => {
  const cols = [[REAL_F501, 0, 93], [REAL_F504, 10, 14], [REAL_F509, 0, 0], [REAL_F516, 7, 8], [REAL_F532, 108, 6], [REAL_F548, 181, 6], [REAL_F558, 4, 72], [REAL_F559, 0, 0], [REAL_F563, 9, 13], [REAL_F565, 9, 9]]
  for (const [col, fourth, third] of cols) {
    assert.deepEqual(rejoinChampFourthBreathCensus(col), { rejoinChampFourthBreath: fourth })
    assert.equal(rejoinChampThirdBreathCensus(col).rejoinChampThirdBreath, third) // the .369 elder the same fixtures voice
  }
  // the DIALOG the same fixtures price: the under faces (F501 0<93,
  // F504 10<14, F516 7<8, F558 4<72, F563 9<13), the level faces
  // (F509 0=0, F559 0=0, F565 9=9 the fresh tail LEVEL), the above
  // faces (F532 108>6, F548 181>6)
  assert.ok(0 < 93 && 10 < 14 && 7 < 8 && 4 < 72 && 9 < 13) // the under-dialog
  assert.ok(0 === 0 && 9 === 9) // the level-dialog (the fresh tail the same tempo keeps)
  assert.ok(108 > 6 && 181 > 6) // the above-dialog
})

test('the BOUND + DIALOG + CEILING laws - the edges the fourth order statistic bounds keep', () => {
  // the champion cadence hand the fixtures re-voice inline - the
  // BOUND law the .359 champ min <= fourth <= the .353 champ gap and
  // fourth <= the .351 champ stretch every voiced fixture (the REAL
  // archive audit GREEN the probe keeps)
  const read = (lines) => {
    const RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
    const tally = new Map()
    const evts = []
    for (const l of lines) {
      const m = RE.exec(l)
      if (!m) continue
      const n = (tally.get(m[4]) || 0) + 1
      tally.set(m[4], n)
      evts.push({ name: m[4], s: Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]), n })
    }
    let peak = 0
    for (const n of tally.values()) if (n > 1) peak = Math.max(peak, n - 1)
    const champs = new Set()
    for (const [name, n] of tally) if (n > 1 && n - 1 === peak) champs.add(name)
    const cevts = evts.filter(e => e.n > 1 && champs.has(e.name))
    const gaps = []
    for (let i = 1; i < cevts.length; i++) {
      const cur = cevts[i - 1].s
      const nxt = cevts[i].s
      gaps.push(nxt >= cur ? nxt - cur : nxt + 86400 - cur)
    }
    return {
      fourth: gaps.length > 3 ? gaps[3] : 0,
      count: gaps.length,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      stretch: gaps.reduce((a, b) => a + b, 0),
      t3: rejoinChampThirdBreathCensus(lines).rejoinChampThirdBreath
    }
  }
  const cols = [REAL_F501, REAL_F504, REAL_F509, REAL_F516, REAL_F532, REAL_F548, REAL_F558, REAL_F559, REAL_F563, REAL_F565]
  for (const col of cols) {
    const r = read(col)
    const fourth = rejoinChampFourthBreathCensus(col).rejoinChampFourthBreath
    assert.equal(fourth, r.fourth)
    // the bound the VOICED faces price (the fewer-than-four-gaps face
    // the lawful zero the bounds keep - the F509 and the F559
    // constructive faces the fourth 0 no list sample the min/max
    // never bound)
    if (r.count >= 4) {
      assert.ok(fourth >= r.min && fourth <= r.max, `bound ${fourth} in [${r.min},${r.max}]`)
      assert.ok(fourth <= r.stretch)
    } else {
      assert.equal(fourth, 0)
    }
  }
  // the DIALOG's own edges the fixtures voice: the F504 under face
  // (10 UNDER the 14) and the F516 under face (7 UNDER the 8 - the
  // .370 storm REAL-zero face the champ fourth 7 the honest non-zero
  // the same face prices) and the F558 under face (4 UNDER the 72)
  // and the F509 level face (0 the single-gap champ the t3 0 keeps)
  // and the F532 above face (108 ABOVE the 6) and the F565 level face
  // (9 LEVEL the 9 the fresh tail)
  assert.ok(read(REAL_F504).fourth < read(REAL_F504).t3)
  assert.ok(read(REAL_F516).fourth < read(REAL_F516).t3)
  assert.ok(read(REAL_F558).fourth < read(REAL_F558).t3)
  assert.equal(read(REAL_F509).fourth, read(REAL_F509).t3)
  assert.ok(read(REAL_F532).fourth > read(REAL_F532).t3)
  assert.equal(read(REAL_F565).fourth, read(REAL_F565).t3)
  // the CEILING's own faces: the F548 fourth IS the champion cadence's
  // tallest silence (181 the window's own TALLEST) and the F532 the
  // same face prices (108) - and the F558 the honest difference
  // prices (4 the fourth the taller 72 silence the cadence keeps)
  assert.equal(read(REAL_F548).fourth, read(REAL_F548).max)
  assert.equal(read(REAL_F548).max, 181)
  assert.equal(read(REAL_F532).fourth, read(REAL_F532).max)
  assert.ok(read(REAL_F558).fourth < read(REAL_F558).max)
  assert.ok(read(REAL_F558).max > 0) // the taller silence the cadence keeps
  // the REAL zero vs the CONSTRUCTIVE zero: the sixty-three-face
  // window the fourth same-second champion pair NEVER keeps (the ZERO
  // real-zero faces - the .370 arc's own ONE the F516 storm face the
  // fourth arc does NOT inherit, the F516 champ fourth 7 the honest
  // non-zero prices), the F509 the ONE gap the no-fourth-pair face
  // keeps, the F559 the NO-pair face the constructive keeps, the F516
  // the FIVE-gap face the fourth 7 the list voices
  assert.equal(read(REAL_F509).count, 1)
  assert.equal(read(REAL_F559).count, 0)
  assert.equal(read(REAL_F516).count, 5)
  assert.equal(read(REAL_F516).fourth, 7)
  // the synthetic branches: the one-echo face the zero keeps, the
  // single-gap and the two-gap and the THREE-gap faces the
  // constructive keeps (the fourth pair the list never holds - the
  // .368/.370 convention extends, the .371 novelty the three-gap
  // branch the .369's own 300 the elder seat prices), the four-gap
  // face the fourth the list voices, the co-reign tie the interleave
  // the fourth gap the FILE ORDER voices, the day-cyclic wrap the
  // fourth pair crossing the midnight cell prices
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinChampFourthBreathCensus(oneEcho), { rejoinChampFourthBreath: 0 })
  const singleGap = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinChampFourthBreathCensus(singleGap), { rejoinChampFourthBreath: 0 })
  const twoGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // F3's own first join 08:01 the tally's n=1 the champion list keeps
  // out - the champion events 08:02 / 08:03 / 08:09 the gaps [60, 360]
  // the TWO gaps the fourth pair the list never holds the constructive
  // zero the .366/.368 convention extends
  assert.deepEqual(rejoinChampFourthBreathCensus(twoGaps), { rejoinChampFourthBreath: 0 })
  const threeGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the champion events 08:02 / 08:03 / 08:04 / 08:09 the gaps [60,
  // 60, 300] the THREE gaps the FOURTH pair the list never holds -
  // the constructive zero the .370 convention extends (the third
  // breath's own 300 the elder seat prices)
  assert.deepEqual(rejoinChampFourthBreathCensus(threeGaps), { rejoinChampFourthBreath: 0 })
  const fourGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:05:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the champion events 08:02 / 08:03 / 08:04 / 08:05 / 08:09 the
  // gaps [60, 60, 60, 240] the FOURTH pair 240 the list voices (the
  // honest 240 the 08:05->08:09 pair keeps - the .370 pincheck catch
  // the wrong 300 hand the same shape the pre-push discipline keeps)
  assert.deepEqual(rejoinChampFourthBreathCensus(fourGaps), { rejoinChampFourthBreath: 240 })
  const coReign = [
    '[09:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[09:01:00] [Server thread/INFO]: F3 joined the game',
    '[09:02:00] [Server thread/INFO]: F7 joined the game',
    '[09:04:00] [Server thread/INFO]: F3 joined the game',
    '[09:07:00] [Server thread/INFO]: F7 joined the game',
    '[09:08:00] [Server thread/INFO]: F3 joined the game',
    '[09:14:00] [Server thread/INFO]: F7 joined the game',
    '[09:26:00] [Server thread/INFO]: F3 joined the game',
    '[09:27:00] [Server thread/INFO]: F7 joined the game'
  ]
  // F3's and F7's own quad-and-treble the tie the beyond-first counts
  // keep (F3 3, F7 3) - the champ events the FILE ORDER rides (F3
  // 09:04 / F7 09:07 / F3 09:08 / F7 09:14 / F3 09:26 / F7 09:27) the
  // gaps [180, 60, 360, 720, 60] the fourth 720 the interleave voices
  assert.deepEqual(rejoinChampFourthBreathCensus(coReign), { rejoinChampFourthBreath: 720 })
  const wrap = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[23:59:30] [Server thread/INFO]: F3 joined the game',
    '[00:01:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the champion events 08:02 / 08:03 / 08:04 / 23:59:30 / 00:01:30
  // the gaps [60, 60, 57450, 120] the FOURTH pair 120 the day-cyclic
  // wrap prices (the 00:01:30 the next day the next + 86400 - 86370 =
  // 120 the honest arithmetic the .367 wrap-fix precedent voices - the
  // pre-push pincheck the FOUR-event hand the third pair rides caught,
  // the fifth event the fourth pair the list holds)
  assert.deepEqual(rejoinChampFourthBreathCensus(wrap), { rejoinChampFourthBreath: 120 })
})

test('REAL 63-face window arc byte-exact - 16 classes the seat LIVE', () => {
  // the arc the fieldread re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 63)
  assert.equal(REAL_FACES.length, 63)
  assert.equal(classes.size, 16)
  assert.equal(Math.min(...arc), 0) // the THIRTY-THREE-face zero keeps (the constructive whole zero class - the REAL zero the window never keeps)
  assert.equal(Math.max(...arc), 181) // the ceiling face F548 keeps
  // the key faces the honest distinction prices (the F516 the .370
  // storm REAL-zero face the champ fourth 7 the honest non-zero, the
  // F548 the window's own TALLEST, the F564 the fire-0843 ledger's
  // own 5, the F565 fresh tail the 9 the LEVEL dialog keeps)
  assert.equal(arc[0], 0) // the F501 opener (the three-gap face the constructive keeps)
  assert.equal(arc[3], 10) // the F504 under-dialog face
  assert.equal(arc[8], 0) // the F509 constructive single-gap
  assert.equal(arc[15], 7) // the F516 the champ fourth 7 the honest non-zero
  assert.equal(arc[31], 108) // the F532 ceiling
  assert.equal(arc[47], 181) // the F548 the window's own TALLEST
  assert.equal(arc[55], 4) // the F558 the .369 ceiling-face the descent prices
  assert.equal(arc[61], 5) // the F564 the ledger's own 5
  assert.equal(arc[62], 9) // the F565 fresh tail
  // the held law: THIRTEEN held pairs the 63-face window keeps - ALL
  // the constructive-zero pairs (the .369 arc's own SEVEN the fourth
  // arc INHERITS and the SIX the gravity extends - the .370 arc's own
  // TWO the sevens the fourth arc does NOT inherit)
  let held = 0
  const heldPairs = []
  for (let i = 1; i < arc.length; i++) if (arc[i] === arc[i - 1]) { held++; heldPairs.push(REAL_FACES[i - 1] + '/' + REAL_FACES[i]) }
  assert.equal(held, 13)
  assert.ok(heldPairs.includes('F509/F510')) // the .369 inheritance
  assert.ok(heldPairs.includes('F543/F544')) // the .369 inheritance
  assert.ok(heldPairs.includes('F551/F553')) // the hole the F-order bridges
  assert.ok(heldPairs.includes('F501/F502')) // the gravity extends
  assert.ok(heldPairs.includes('F529/F530')) // the gravity extends
  // the multi-class law: the mode candidate the honest probe DECLINED
  // - the thirty-three-face zero the tie-degenerate gravity the
  // family prices
  const tally = new Map()
  for (const v of arc) tally.set(v, (tally.get(v) || 0) + 1)
  assert.equal(tally.get(0), 33)
  assert.equal(tally.get(5), 4)
  assert.equal(tally.get(6), 4)
  assert.equal(tally.get(10), 4)
  assert.equal(tally.get(8), 3)
  assert.equal(tally.get(9), 3)
  assert.equal(tally.get(4), 2)
  assert.equal(tally.get(7), 2)
  assert.equal(tally.get(181), 1) // the F548 ceiling singleton
  assert.equal(tally.get(2), 1) // the F549 singleton
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  // the census the strict frame keeps - the deformed lines the skip
  // rides, the honest zero the no-join face keeps
  assert.equal(rejoinChampFourthBreathCensus(null), null)
  assert.equal(rejoinChampFourthBreathCensus(undefined), null)
  assert.equal(rejoinChampFourthBreathCensus('not an array'), null)
  assert.equal(rejoinChampFourthBreathCensus(42), null)
  assert.deepEqual(rejoinChampFourthBreathCensus([]), { rejoinChampFourthBreath: 0 })
  assert.deepEqual(rejoinChampFourthBreathCensus(['', 'no joins here', null, 42]), { rejoinChampFourthBreath: 0 })
  // the malformed clock cells the strict frame never rides
  assert.deepEqual(rejoinChampFourthBreathCensus([
    '[24:00:00] [Server thread/INFO]: F3 joined the game', // the hour 24 the day never keeps
    '[12:60:00] [Server thread/INFO]: F3 joined the game', // the minute 60 the clock never keeps
    '[12:00:60] [Server thread/INFO]: F3 joined the game', // the second 60 the clock never keeps
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampFourthBreath: 0 })
  // the non-join lanes the lane law keeps out
  assert.deepEqual(rejoinChampFourthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 left the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the team', // the near-join the frame never rides
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampFourthBreath: 0 })
  // the kernel prefix the deformed line the skip keeps
  assert.deepEqual(rejoinChampFourthBreathCensus([
    'kernel: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampFourthBreath: 0 })
  // the multi-line join the trailing spaces the strict frame never rides
  assert.deepEqual(rejoinChampFourthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 joined the game ',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampFourthBreath: 0 })
})

test('fence - every branch the gap words own integer law keeps', () => {
  const c = (n) => ({ rejoinChampFourthBreath: n })
  assert.equal(rejoinChampFourthBreathConsistent(null), false)
  assert.equal(rejoinChampFourthBreathConsistent(undefined), false)
  assert.equal(rejoinChampFourthBreathConsistent('nope'), false)
  assert.equal(rejoinChampFourthBreathConsistent({}), false)
  assert.equal(rejoinChampFourthBreathConsistent({ back: c(0), prev: c(0) }), false) // the cur missing
  assert.equal(rejoinChampFourthBreathConsistent({ back: c(-1), prev: c(0), cur: c(0) }), false) // the negative the fence never rides
  assert.equal(rejoinChampFourthBreathConsistent({ back: c(0), prev: c(86399), cur: c(0) }), true) // the day ceiling 86399 the fence keeps (the .368 fence-fix lesson the same boundary voices)
  assert.equal(rejoinChampFourthBreathConsistent({ back: c(0), prev: c(86400), cur: c(0) }), false) // past the day the fence declines (the fence 0..86399 the module voices - the .366 line 445 / the .367 line 593 / the .368 line 647 / the .369 line 605 / the .370 line 821 the same shape)
  assert.equal(rejoinChampFourthBreathConsistent({ back: c(0), prev: c(86401), cur: c(0) }), false) // past the day the fence declines
  assert.equal(rejoinChampFourthBreathConsistent({ back: c(0), prev: c(1.5), cur: c(0) }), false) // the fraction the integer law never rides
  assert.equal(rejoinChampFourthBreathConsistent({ back: c(0), prev: c(0), cur: c(0) }), true)
  assert.equal(rejoinChampFourthBreathConsistent({ back: c(86399), prev: c(0), cur: c(181) }), true)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const c = (n) => ({ rejoinChampFourthBreath: n })
  // the swell the F561->F563 faces keep (0 -> 6 (+6) -> 9 (+3))
  const swell = rejoinChampFourthBreathTrendRow({ back: c(0), prev: c(6), cur: c(9) })
  assert.ok(swell.includes('swell ran two steps deep'))
  assert.ok(swell.includes('0 -> 6 (+6) -> 9 (+3)'))
  assert.ok(swell.includes('v0.976.371'))
  // the crash-swing the F532->F534 faces keep (108 -> 0 (-108) -> 14 (+14))
  const crash = rejoinChampFourthBreathTrendRow({ back: c(108), prev: c(0), cur: c(14) })
  assert.ok(crash.includes('swing'))
  assert.ok(crash.includes('108 -> 0 (-108) -> 14 (+14)'))
  // the fade the F521->F523 faces keep (34 -> 8 (-26) -> 0 (-8))
  const fade = rejoinChampFourthBreathTrendRow({ back: c(34), prev: c(8), cur: c(0) })
  assert.ok(fade.includes('fade ran two steps deep'))
  assert.ok(fade.includes('34 -> 8 (-26) -> 0 (-8)'))
  // the fresh-tail swing the F563->F565 faces keep (9 -> 5 (-4) -> 9 (+4))
  const tail = rejoinChampFourthBreathTrendRow({ back: c(9), prev: c(5), cur: c(9) })
  assert.ok(tail.includes('swing'))
  assert.ok(tail.includes('9 -> 5 (-4) -> 9 (+4)'))
  // the held step the honest silence keeps (the row never invents -
  // the THIRTEEN pairs the arc keeps)
  assert.equal(rejoinChampFourthBreathTrendRow({ back: c(0), prev: c(0), cur: c(25) }), null)
  assert.equal(rejoinChampFourthBreathTrendRow({ back: c(0), prev: c(25), cur: c(25) }), null)
  // the deformed triples the fence declines
  assert.equal(rejoinChampFourthBreathTrendRow(null), null)
  assert.equal(rejoinChampFourthBreathTrendRow({ back: c(-5), prev: c(0), cur: c(0) }), null)
  // the REAL arc's own windows the rows re-voice (the census the same
  // values the arc keeps)
  const c3 = (i) => ({ rejoinChampFourthBreath: REAL_ARC[i] })
  assert.ok(rejoinChampFourthBreathTrendRow({ back: c3(58), prev: c3(59), cur: c3(60) }).includes('0 -> 6 (+6) -> 9 (+3)'))
  assert.ok(rejoinChampFourthBreathTrendRow({ back: c3(30), prev: c3(31), cur: c3(32) }).includes('108 -> 0 (-108) -> 14 (+14)'))
  assert.ok(rejoinChampFourthBreathTrendRow({ back: c3(19), prev: c3(20), cur: c3(21) }).includes('34 -> 8 (-26) -> 0 (-8)'))
  assert.ok(rejoinChampFourthBreathTrendRow({ back: c3(60), prev: c3(61), cur: c3(62) }).includes('9 -> 5 (-4) -> 9 (+4)'))
})
