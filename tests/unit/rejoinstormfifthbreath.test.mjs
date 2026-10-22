import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinStormFifthBreathCensus, rejoinStormFifthBreathConsistent, rejoinStormFifthBreathTrendRow } from '../../src/lib/rejoinstormfifthbreath.mjs'
import { rejoinStormFourthBreathCensus } from '../../src/lib/rejoinstormfourthbreath.mjs'

// the REAL columns the rebuilt archive keeps (the fire-0843 method the
// fire-1243/1343 fires re-ride - the faces the alignment byte-exact
// anchored and the F-map the census slide the six anchors lock the
// same ids price: F1 = 37403158305 one hit, the F552 cancelled and
// the F557 artifact hole the holes the F-order keeps)

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

const REAL_F531 = [
  "[21:58:51] [Server thread/INFO]: YardSurvey joined the game",
  "[21:59:06] [Server thread/INFO]: F1 joined the game",
  "[21:59:08] [Server thread/INFO]: F2 joined the game",
  "[21:59:10] [Server thread/INFO]: F3 joined the game",
  "[21:59:13] [Server thread/INFO]: F4 joined the game",
  "[21:59:15] [Server thread/INFO]: F5 joined the game",
  "[21:59:18] [Server thread/INFO]: F6 joined the game",
  "[21:59:21] [Server thread/INFO]: F7 joined the game",
  "[21:59:23] [Server thread/INFO]: F8 joined the game",
  "[21:59:25] [Server thread/INFO]: F9 joined the game",
  "[21:59:28] [Server thread/INFO]: F10 joined the game",
  "[21:59:31] [Server thread/INFO]: F11 joined the game",
  "[21:59:34] [Server thread/INFO]: F12 joined the game",
  "[21:59:36] [Server thread/INFO]: F13 joined the game",
  "[21:59:39] [Server thread/INFO]: F14 joined the game",
  "[21:59:41] [Server thread/INFO]: F15 joined the game",
  "[21:59:45] [Server thread/INFO]: F16 joined the game",
  "[21:59:46] [Server thread/INFO]: F17 joined the game",
  "[21:59:50] [Server thread/INFO]: F18 joined the game",
  "[21:59:52] [Server thread/INFO]: F19 joined the game",
  "[22:06:07] [Server thread/INFO]: F15 joined the game",
  "[22:06:27] [Server thread/INFO]: F13 joined the game",
  "[22:06:47] [Server thread/INFO]: F13 joined the game",
  "[22:09:00] [Server thread/INFO]: F14 joined the game",
  "[22:09:01] [Server thread/INFO]: F3 joined the game",
  "[22:09:01] [Server thread/INFO]: F11 joined the game",
  "[22:09:03] [Server thread/INFO]: F4 joined the game",
  "[22:09:03] [Server thread/INFO]: F7 joined the game",
]

const REAL_F540 = [
  "[05:07:42] [Server thread/INFO]: YardSurvey joined the game",
  "[05:07:56] [Server thread/INFO]: F1 joined the game",
  "[05:07:58] [Server thread/INFO]: F2 joined the game",
  "[05:08:00] [Server thread/INFO]: F3 joined the game",
  "[05:08:03] [Server thread/INFO]: F4 joined the game",
  "[05:08:05] [Server thread/INFO]: F5 joined the game",
  "[05:08:08] [Server thread/INFO]: F6 joined the game",
  "[05:08:10] [Server thread/INFO]: F7 joined the game",
  "[05:08:13] [Server thread/INFO]: F8 joined the game",
  "[05:08:15] [Server thread/INFO]: F9 joined the game",
  "[05:08:18] [Server thread/INFO]: F10 joined the game",
  "[05:08:20] [Server thread/INFO]: F11 joined the game",
  "[05:08:23] [Server thread/INFO]: F12 joined the game",
  "[05:08:25] [Server thread/INFO]: F13 joined the game",
  "[05:08:28] [Server thread/INFO]: F14 joined the game",
  "[05:08:30] [Server thread/INFO]: F15 joined the game",
  "[05:08:34] [Server thread/INFO]: F16 joined the game",
  "[05:08:36] [Server thread/INFO]: F17 joined the game",
  "[05:08:39] [Server thread/INFO]: F18 joined the game",
  "[05:08:41] [Server thread/INFO]: F19 joined the game",
  "[05:11:46] [Server thread/INFO]: F11 joined the game",
  "[05:11:58] [Server thread/INFO]: F5 joined the game",
  "[05:12:35] [Server thread/INFO]: F4 joined the game",
  "[05:12:53] [Server thread/INFO]: F10 joined the game",
  "[05:13:00] [Server thread/INFO]: F12 joined the game",
  "[05:15:34] [Server thread/INFO]: F14 joined the game",
  "[05:15:57] [Server thread/INFO]: F14 joined the game",
  "[05:16:04] [Server thread/INFO]: F14 joined the game",
  "[05:16:09] [Server thread/INFO]: F14 joined the game",
  "[05:16:33] [Server thread/INFO]: F19 joined the game",
  "[05:16:36] [Server thread/INFO]: F16 joined the game",
  "[05:16:45] [Server thread/INFO]: F10 joined the game",
  "[05:16:47] [Server thread/INFO]: F4 joined the game",
  "[05:17:11] [Server thread/INFO]: F10 joined the game",
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

const REAL_F566 = [
  "[04:59:36] [Server thread/INFO]: YardSurvey joined the game",
  "[04:59:49] [Server thread/INFO]: F1 joined the game",
  "[04:59:51] [Server thread/INFO]: F2 joined the game",
  "[04:59:53] [Server thread/INFO]: F3 joined the game",
  "[04:59:56] [Server thread/INFO]: F4 joined the game",
  "[04:59:59] [Server thread/INFO]: F5 joined the game",
  "[05:00:01] [Server thread/INFO]: F6 joined the game",
  "[05:00:04] [Server thread/INFO]: F7 joined the game",
  "[05:00:06] [Server thread/INFO]: F8 joined the game",
  "[05:00:10] [Server thread/INFO]: F9 joined the game",
  "[05:00:12] [Server thread/INFO]: F10 joined the game",
  "[05:00:15] [Server thread/INFO]: F11 joined the game",
  "[05:00:17] [Server thread/INFO]: F12 joined the game",
  "[05:00:20] [Server thread/INFO]: F13 joined the game",
  "[05:00:23] [Server thread/INFO]: F14 joined the game",
  "[05:00:26] [Server thread/INFO]: F15 joined the game",
  "[05:00:28] [Server thread/INFO]: F16 joined the game",
  "[05:00:32] [Server thread/INFO]: F17 joined the game",
  "[05:00:35] [Server thread/INFO]: F18 joined the game",
  "[05:00:38] [Server thread/INFO]: F19 joined the game",
  "[05:04:48] [Server thread/INFO]: F2 joined the game",
  "[05:05:03] [Server thread/INFO]: F2 joined the game",
  "[05:07:07] [Server thread/INFO]: F16 joined the game",
  "[05:07:22] [Server thread/INFO]: F16 joined the game",
  "[05:07:26] [Server thread/INFO]: F5 joined the game",
  "[05:07:26] [Server thread/INFO]: F14 joined the game",
  "[05:07:28] [Server thread/INFO]: F13 joined the game",
  "[05:07:34] [Server thread/INFO]: F5 joined the game",
  "[05:07:39] [Server thread/INFO]: F16 joined the game",
  "[05:07:41] [Server thread/INFO]: F13 joined the game",
  "[05:07:46] [Server thread/INFO]: F16 joined the game",
  "[05:07:46] [Server thread/INFO]: F5 joined the game",
  "[05:07:48] [Server thread/INFO]: F13 joined the game",
  "[05:07:52] [Server thread/INFO]: F14 joined the game",
  "[05:07:54] [Server thread/INFO]: F5 joined the game",
  "[05:07:55] [Server thread/INFO]: F16 joined the game",
  "[05:07:57] [Server thread/INFO]: F13 joined the game",
  "[05:08:06] [Server thread/INFO]: F13 joined the game",
  "[05:08:15] [Server thread/INFO]: F13 joined the game",
  "[05:08:24] [Server thread/INFO]: F13 joined the game",
  "[05:08:32] [Server thread/INFO]: F13 joined the game",
  "[05:08:42] [Server thread/INFO]: F13 joined the game",
  "[05:08:51] [Server thread/INFO]: F13 joined the game",
  "[05:09:01] [Server thread/INFO]: F13 joined the game",
  "[05:09:44] [Server thread/INFO]: F9 joined the game",
  "[05:09:48] [Server thread/INFO]: F4 joined the game",
]

// the expected fifths the arc prices: F501=8 F502=88 F509=0 F516=2 F531=0 F540=154 F549=0 F563=7 F564=0 F566=0
// the REAL 64-face window F501-F566 the alignment voiced - the F552
// cancelled and the F557 artifact hole the holes the F-order keeps
// (62 ids F501..F551 + the F553..F556 four + the F558..F566 nine the
// 64 the seat prices)
const REAL_ARC = [8,88,0,6,17,1,7,4,0,8,59,8,0,3,8,2,3,69,13,50,27,8,8,14,18,11,3,0,0,0,0,8,1,20,1,61,13,89,15,154,16,8,104,10,0,3,0,27,0,18,0,8,3,0,5,9,0,6,6,7,7,0,30,0]

test('REAL faces byte-exact - the storm fifth breath the fifth order statistic prices', () => {
  // the columns the archive voices - the census the value byte-exact
  // keeps (the F509 the constructive single-gap, the F531 the REAL
  // zero the fifth same-second pair keeps, the F540 the ceiling 154,
  // the F566 the fresh tail REAL zero)
  const pins = [[REAL_F501, 8], [REAL_F502, 88], [REAL_F509, 0], [REAL_F516, 2], [REAL_F531, 0], [REAL_F540, 154], [REAL_F549, 0], [REAL_F563, 7], [REAL_F564, 0], [REAL_F566, 0]]
  for (const [col, want] of pins) {
    assert.equal(rejoinStormFifthBreathCensus(col).rejoinStormFifthBreath, want)
  }
})

test('the BOUND + DIALOG + CEILING laws - the edges the fifth order statistic bounds keep', () => {
  // the storm cadence hand the fixtures re-voice inline - the BOUND
  // law the .358 storm min <= fifth <= the .352 re-join gap and
  // fifth <= the .350 span's own stretch every voiced fixture (the
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
      fifth: gaps.length > 4 ? gaps[4] : 0,
      count: gaps.length,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      stretch: gaps.reduce((a, b) => a + b, 0),
      fourth: rejoinStormFourthBreathCensus(lines).rejoinStormFourthBreath
    }
  }
  const cols = [REAL_F501, REAL_F502, REAL_F509, REAL_F516, REAL_F531, REAL_F540, REAL_F549, REAL_F563, REAL_F564, REAL_F566]
  for (const col of cols) {
    const r = read(col)
    const fifth = rejoinStormFifthBreathCensus(col).rejoinStormFifthBreath
    assert.equal(fifth, r.fifth)
    // the bound the VOICED faces price (the fewer-than-five-gaps face
    // the lawful zero the bounds keep - the F509 constructive face
    // the fifth 0 no list sample the min/max never bound)
    if (r.count >= 5) {
      assert.ok(fifth >= r.min && fifth <= r.max, `bound ${fifth} in [${r.min},${r.max}]`)
      assert.ok(fifth <= r.stretch)
    } else {
      assert.equal(fifth, 0)
    }
  }
  // the DIALOG's own edges the fixtures voice: the F501 under face
  // (8 UNDER the 43) and the F563 above face (7 ABOVE the 5 the
  // fresh window's own) and the F566 under face (0 the REAL
  // zero UNDER the 4 the fresh tail) and the F509 level face (0 the
  // single-gap storm the fourth 0 keeps) and the F502 above face
  // (88 ABOVE the 26) and the F540 above face (154 ABOVE the 7) and
  // the F516 above face (2 ABOVE the 0 the .371's own zero-face the
  // fifth prices)
  assert.ok(read(REAL_F501).fifth < read(REAL_F501).fourth)
  assert.ok(read(REAL_F563).fifth > read(REAL_F563).fourth)
  assert.ok(read(REAL_F566).fifth < read(REAL_F566).fourth)
  assert.equal(read(REAL_F509).fifth, read(REAL_F509).fourth)
  assert.ok(read(REAL_F502).fifth > read(REAL_F502).fourth)
  assert.ok(read(REAL_F540).fifth > read(REAL_F540).fourth)
  assert.ok(read(REAL_F516).fifth > read(REAL_F516).fourth)
  // the CEILING's own face: the F540 fifth IS the storm cadence's
  // tallest silence (154) - and the F544 the honest difference prices
  // (the F527 the .370's own ceiling face the fifth 3 the fourth 110
  // the BELOW keeps)
  assert.equal(read(REAL_F540).fifth, read(REAL_F540).max)
  // the REAL zero vs the CONSTRUCTIVE zero: the F531 and the F549
  // and the F564 the five-plus-gap storms the same-second fifth pair
  // the zero the list voices, the F509 the ONE gap and the F503 the
  // FOUR gaps the no-fifth-pair faces the constructive branch keeps
  assert.ok(read(REAL_F531).count >= 5)
  assert.ok(read(REAL_F549).count >= 5)
  assert.ok(read(REAL_F564).count >= 5)
  assert.equal(read(REAL_F509).count, 1)
  assert.equal(read(REAL_F566).count, 25)
  // the synthetic branches: the one-echo face the zero keeps, the
  // single-gap and the two-gap and the three-gap and the four-gap
  // faces the constructive keeps (the fifth pair the list never
  // holds - the .370 convention extends), the five-gap face the
  // fifth the list voices, the co-reign tie the interleave the fifth
  // gap the FILE ORDER voices, the day-cyclic wrap the fifth pair
  // crossing the midnight cell prices
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinStormFifthBreathCensus(oneEcho), { rejoinStormFifthBreath: 0 })
  const singleGap = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinStormFifthBreathCensus(singleGap), { rejoinStormFifthBreath: 0 })
  const twoGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // F3's own first join 08:01 the tally's n=1 the storm list keeps
  // out - the storm events 08:02 / 08:03 / 08:09 the gaps [60, 360]
  // the TWO gaps the fifth pair the list never holds the constructive
  // zero the .370 convention extends
  assert.deepEqual(rejoinStormFifthBreathCensus(twoGaps), { rejoinStormFifthBreath: 0 })
  const threeGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 / 08:03 / 08:04 / 08:09 the gaps [60, 60,
  // 300] the THREE gaps the FIFTH pair the list never holds - the
  // constructive zero the .370 convention extends (the fourth breath's
  // own 240 the elder seat prices)
  assert.deepEqual(rejoinStormFifthBreathCensus(threeGaps), { rejoinStormFifthBreath: 0 })
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
  // [60, 60, 60, 240] the FOUR gaps the FIFTH pair the list never
  // holds - the constructive zero the .370 convention extends (the
  // fourth breath's own 240 the elder seat prices)
  assert.deepEqual(rejoinStormFifthBreathCensus(fourGaps), { rejoinStormFifthBreath: 0 })
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
  // the gaps [60, 60, 60, 60, 180] the FIFTH pair 180 the list voices
  // (the 08:06 event the cadence keeps - the 08:05 -> 08:09 jump the
  // elder four-gap face's own 240 the fifth arc never rides, the
  // pincheck the pre-push hand the honest arithmetic voices)
  assert.deepEqual(rejoinStormFifthBreathCensus(fiveGaps), { rejoinStormFifthBreath: 180 })
  const coReign = [
    '[09:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[09:01:00] [Server thread/INFO]: F3 joined the game',
    '[09:02:00] [Server thread/INFO]: F7 joined the game',
    '[09:04:00] [Server thread/INFO]: F3 joined the game',
    '[09:07:00] [Server thread/INFO]: F7 joined the game',
    '[09:08:00] [Server thread/INFO]: F3 joined the game',
    '[09:14:00] [Server thread/INFO]: F7 joined the game',
    '[09:15:00] [Server thread/INFO]: F3 joined the game',
    '[09:21:00] [Server thread/INFO]: F7 joined the game'
  ]
  // F3's and F7's own co-reign the tie keeps - the storm events the
  // FILE ORDER rides (F3 09:04 / F7 09:07 / F3 09:08 / F7 09:14 / F3
  // 09:15 / F7 09:21) the gaps [180, 60, 360, 60, 360] the FIFTH 360
  // the interleave voices
  assert.deepEqual(rejoinStormFifthBreathCensus(coReign), { rejoinStormFifthBreath: 360 })
  const wrap = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[23:59:30] [Server thread/INFO]: F3 joined the game',
    '[00:01:30] [Server thread/INFO]: F3 joined the game',
    '[00:05:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the day-cyclic wrap the .350 precedent keeps - the FIFTH pair
  // crosses the midnight cell (the storm events 08:02 / 08:03 /
  // 08:04 / 23:59:30 / 00:01:30 / 00:05:30 the gaps [60, 60, 57330,
  // 120, 240] - 86370 - 29040 = 57330 the third pair rides, 90 +
  // 86400 - 86370 = 120 the fourth rides, 330 - 90 = 240 the fifth
  // the list voices)
  assert.deepEqual(rejoinStormFifthBreathCensus(wrap), { rejoinStormFifthBreath: 240 })
})

test('REAL 64-face window arc byte-exact - 29 classes the seat LIVE', () => {
  // the arc the fieldread re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 64)
  assert.equal(classes.size, 29)
  assert.equal(Math.min(...arc), 0) // the FIFTEEN-face zero keeps (the constructive eleven + the REAL four F531/F549/F564/F566)
  assert.equal(Math.max(...arc), 154) // the ceiling face F540 keeps
  // the zero faces the honest distinction prices (the F531 and the
  // F549 and the F564 and the F566 the REAL zeros the cadence's own
  // same-second fifth pair keeps, the constructive eleven the
  // fewer-than-five-gaps faces the branch rides)
  assert.equal(arc[0], 8) // the F501 opener
  assert.equal(arc[8], 0) // the F509 constructive single-gap
  assert.equal(arc[30], 0) // the F531 REAL zero
  assert.equal(arc[39], 154) // the F540 ceiling
  assert.equal(arc[48], 0) // the F549 REAL zero
  assert.equal(arc[62], 30) // the F565 keeps
  assert.equal(arc[63], 0) // the F566 fresh tail REAL zero
  // the held law: SIX held pairs the 64-face window keeps - the
  // F528/F529 and the F529/F530 and the F530/F531 constructive-zero
  // triad and the F522/F523 eights and the F560/F561 sixes and the
  // F562/F563 sevens (the .370 arc's own TWO the fifth arc does NOT
  // inherit - the F539/F540 sevens the honest distinction prices)
  let held = 0
  for (let i = 1; i < arc.length; i++) if (arc[i] === arc[i - 1]) held++
  assert.equal(held, 6)
  // the multi-class law: the mode candidate the honest probe DECLINED
  // - the fifteen-face zero the tie-degenerate gravity the family prices
  const tally = new Map()
  for (const v of arc) tally.set(v, (tally.get(v) || 0) + 1)
  assert.equal(tally.get(0), 15)
  assert.equal(tally.get(8), 9)
  assert.equal(tally.get(3), 5)
  assert.equal(tally.get(1), 3)
  assert.equal(tally.get(6), 3)
  assert.equal(tally.get(7), 3)
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  // the census the strict frame keeps - the deformed lines the skip
  // rides, the honest zero the no-join face keeps
  assert.equal(rejoinStormFifthBreathCensus(null), null)
  assert.equal(rejoinStormFifthBreathCensus(undefined), null)
  assert.equal(rejoinStormFifthBreathCensus('not an array'), null)
  assert.equal(rejoinStormFifthBreathCensus(42), null)
  assert.deepEqual(rejoinStormFifthBreathCensus([]), { rejoinStormFifthBreath: 0 })
  assert.deepEqual(rejoinStormFifthBreathCensus(['', 'no joins here', null, 42]), { rejoinStormFifthBreath: 0 })
  // the malformed clock cells the strict frame never rides
  assert.deepEqual(rejoinStormFifthBreathCensus([
    '[24:00:00] [Server thread/INFO]: F3 joined the game', // the hour 24 the day never keeps
    '[12:60:00] [Server thread/INFO]: F3 joined the game', // the minute 60 the clock never keeps
    '[12:00:60] [Server thread/INFO]: F3 joined the game', // the second 60 the clock never keeps
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormFifthBreath: 0 })
  // the non-join lanes the lane law keeps out
  assert.deepEqual(rejoinStormFifthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 left the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the team', // the near-join the frame never rides
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormFifthBreath: 0 })
  // the kernel prefix the deformed line the skip keeps
  assert.deepEqual(rejoinStormFifthBreathCensus([
    'kernel: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormFifthBreath: 0 })
  // the multi-line join the trailing spaces the strict frame never rides
  assert.deepEqual(rejoinStormFifthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 joined the game ',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormFifthBreath: 0 })
})

test('fence - every branch the gap words own integer law keeps', () => {
  const c = (n) => ({ rejoinStormFifthBreath: n })
  assert.equal(rejoinStormFifthBreathConsistent(null), false)
  assert.equal(rejoinStormFifthBreathConsistent(undefined), false)
  assert.equal(rejoinStormFifthBreathConsistent('nope'), false)
  assert.equal(rejoinStormFifthBreathConsistent({}), false)
  assert.equal(rejoinStormFifthBreathConsistent({ back: c(0), prev: c(0) }), false) // the cur missing
  assert.equal(rejoinStormFifthBreathConsistent({ back: c(-1), prev: c(0), cur: c(0) }), false) // the negative the fence never rides
  assert.equal(rejoinStormFifthBreathConsistent({ back: c(0), prev: c(86399), cur: c(0) }), true) // the day ceiling 86399 the fence keeps (the .368 fence-fix lesson the same boundary voices)
  assert.equal(rejoinStormFifthBreathConsistent({ back: c(0), prev: c(86400), cur: c(0) }), false) // past the day the fence declines (the fence 0..86399 the module voices - the .366 line 445 / the .367 line 593 / the .368 line 647 / the .370 line 666 the same shape)
  assert.equal(rejoinStormFifthBreathConsistent({ back: c(0), prev: c(86401), cur: c(0) }), false) // past the day the fence declines
  assert.equal(rejoinStormFifthBreathConsistent({ back: c(0), prev: c(1.5), cur: c(0) }), false) // the fraction the integer law never rides
  assert.equal(rejoinStormFifthBreathConsistent({ back: c(0), prev: c(0), cur: c(0) }), true)
  assert.equal(rejoinStormFifthBreathConsistent({ back: c(86399), prev: c(0), cur: c(154) }), true)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const c = (n) => ({ rejoinStormFifthBreath: n })
  // the swell the F503->F505 faces keep (0 -> 6 (+6) -> 17 (+11))
  const swell = rejoinStormFifthBreathTrendRow({ back: c(0), prev: c(6), cur: c(17) })
  assert.ok(swell.includes('swell ran two steps deep'))
  assert.ok(swell.includes('0 -> 6 (+6) -> 17 (+11)'))
  assert.ok(swell.includes('v0.976.372'))
  // the swing the F518->F520 faces keep (69 -> 13 (-56) -> 50 (+37))
  const swing = rejoinStormFifthBreathTrendRow({ back: c(69), prev: c(13), cur: c(50) })
  assert.ok(swing.includes('swing'))
  assert.ok(swing.includes('69 -> 13 (-56) -> 50 (+37)'))
  // the fade the F540->F542 faces keep (154 -> 16 (-138) -> 8 (-8))
  const fade = rejoinStormFifthBreathTrendRow({ back: c(154), prev: c(16), cur: c(8) })
  assert.ok(fade.includes('fade ran two steps deep'))
  assert.ok(fade.includes('154 -> 16 (-138) -> 8 (-8)'))
  // the held step the honest silence keeps (the row never invents -
  // the F528/F529 and the F562/F563 pairs the arc keeps)
  assert.equal(rejoinStormFifthBreathTrendRow({ back: c(0), prev: c(0), cur: c(25) }), null)
  assert.equal(rejoinStormFifthBreathTrendRow({ back: c(0), prev: c(25), cur: c(25) }), null)
  // the deformed triples the fence declines
  assert.equal(rejoinStormFifthBreathTrendRow(null), null)
  assert.equal(rejoinStormFifthBreathTrendRow({ back: c(-5), prev: c(0), cur: c(0) }), null)
  // the REAL arc's own windows the rows re-voice (the census the same
  // values the arc keeps)
  const c3 = (i) => ({ rejoinStormFifthBreath: REAL_ARC[i] })
  assert.ok(rejoinStormFifthBreathTrendRow({ back: c3(2), prev: c3(3), cur: c3(4) }).includes('0 -> 6 (+6) -> 17 (+11)'))
  assert.ok(rejoinStormFifthBreathTrendRow({ back: c3(39), prev: c3(40), cur: c3(41) }).includes('154 -> 16 (-138) -> 8 (-8)'))
})
