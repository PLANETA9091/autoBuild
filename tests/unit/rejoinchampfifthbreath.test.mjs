import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinChampFifthBreathCensus, rejoinChampFifthBreathConsistent, rejoinChampFifthBreathTrendRow } from '../../src/lib/rejoinchampfifthbreath.mjs'
import { rejoinChampFourthBreathCensus } from '../../src/lib/rejoinchampfourthbreath.mjs'

// the REAL columns the rebuilt archive keeps (the fire-0843 method the
// fire-1243/1343/1543 fires re-ride - the faces the alignment byte-exact
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
  "[20:50:26] [Server thread/INFO]: F6 joined the game"
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
  "[03:12:18] [Server thread/INFO]: F16 joined the game"
]

const REAL_F511 = [
  "[04:18:43] [Server thread/INFO]: YardSurvey joined the game",
  "[04:18:56] [Server thread/INFO]: F1 joined the game",
  "[04:18:58] [Server thread/INFO]: F2 joined the game",
  "[04:19:01] [Server thread/INFO]: F3 joined the game",
  "[04:19:03] [Server thread/INFO]: F4 joined the game",
  "[04:19:06] [Server thread/INFO]: F5 joined the game",
  "[04:19:08] [Server thread/INFO]: F6 joined the game",
  "[04:19:11] [Server thread/INFO]: F7 joined the game",
  "[04:19:13] [Server thread/INFO]: F8 joined the game",
  "[04:19:16] [Server thread/INFO]: F9 joined the game",
  "[04:19:18] [Server thread/INFO]: F10 joined the game",
  "[04:19:21] [Server thread/INFO]: F11 joined the game",
  "[04:19:23] [Server thread/INFO]: F12 joined the game",
  "[04:19:26] [Server thread/INFO]: F13 joined the game",
  "[04:19:28] [Server thread/INFO]: F14 joined the game",
  "[04:19:31] [Server thread/INFO]: F15 joined the game",
  "[04:19:34] [Server thread/INFO]: F16 joined the game",
  "[04:19:36] [Server thread/INFO]: F17 joined the game",
  "[04:19:38] [Server thread/INFO]: F18 joined the game",
  "[04:19:41] [Server thread/INFO]: F19 joined the game",
  "[04:23:52] [Server thread/INFO]: F14 joined the game",
  "[04:25:18] [Server thread/INFO]: F14 joined the game",
  "[04:25:23] [Server thread/INFO]: F1 joined the game",
  "[04:25:38] [Server thread/INFO]: F13 joined the game",
  "[04:25:59] [Server thread/INFO]: F13 joined the game",
  "[04:26:58] [Server thread/INFO]: F6 joined the game",
  "[04:27:23] [Server thread/INFO]: F6 joined the game",
  "[04:27:28] [Server thread/INFO]: F16 joined the game",
  "[04:27:36] [Server thread/INFO]: F11 joined the game",
  "[04:27:55] [Server thread/INFO]: F14 joined the game",
  "[04:28:22] [Server thread/INFO]: F8 joined the game",
  "[04:28:49] [Server thread/INFO]: F6 joined the game"
]

const REAL_F524 = [
  "[16:22:15] [Server thread/INFO]: YardSurvey joined the game",
  "[16:22:29] [Server thread/INFO]: F1 joined the game",
  "[16:22:31] [Server thread/INFO]: F2 joined the game",
  "[16:22:33] [Server thread/INFO]: F3 joined the game",
  "[16:22:36] [Server thread/INFO]: F4 joined the game",
  "[16:22:38] [Server thread/INFO]: F5 joined the game",
  "[16:22:42] [Server thread/INFO]: F6 joined the game",
  "[16:22:45] [Server thread/INFO]: F7 joined the game",
  "[16:22:48] [Server thread/INFO]: F8 joined the game",
  "[16:22:51] [Server thread/INFO]: F9 joined the game",
  "[16:22:54] [Server thread/INFO]: F10 joined the game",
  "[16:22:56] [Server thread/INFO]: F11 joined the game",
  "[16:22:59] [Server thread/INFO]: F12 joined the game",
  "[16:23:02] [Server thread/INFO]: F13 joined the game",
  "[16:23:04] [Server thread/INFO]: F14 joined the game",
  "[16:23:08] [Server thread/INFO]: F15 joined the game",
  "[16:23:10] [Server thread/INFO]: F16 joined the game",
  "[16:23:13] [Server thread/INFO]: F17 joined the game",
  "[16:23:16] [Server thread/INFO]: F18 joined the game",
  "[16:23:18] [Server thread/INFO]: F19 joined the game",
  "[16:27:00] [Server thread/INFO]: F8 joined the game",
  "[16:27:22] [Server thread/INFO]: F8 joined the game",
  "[16:27:28] [Server thread/INFO]: F9 joined the game",
  "[16:27:44] [Server thread/INFO]: F8 joined the game",
  "[16:28:04] [Server thread/INFO]: F8 joined the game",
  "[16:28:18] [Server thread/INFO]: F8 joined the game",
  "[16:28:26] [Server thread/INFO]: F9 joined the game",
  "[16:28:30] [Server thread/INFO]: F8 joined the game",
  "[16:28:31] [Server thread/INFO]: F17 joined the game",
  "[16:28:39] [Server thread/INFO]: F8 joined the game",
  "[16:28:45] [Server thread/INFO]: F8 joined the game",
  "[16:28:50] [Server thread/INFO]: F17 joined the game",
  "[16:28:51] [Server thread/INFO]: F16 joined the game",
  "[16:28:53] [Server thread/INFO]: F8 joined the game",
  "[16:28:59] [Server thread/INFO]: F16 joined the game",
  "[16:29:00] [Server thread/INFO]: F17 joined the game",
  "[16:29:11] [Server thread/INFO]: F16 joined the game",
  "[16:29:12] [Server thread/INFO]: F17 joined the game",
  "[16:29:20] [Server thread/INFO]: F17 joined the game",
  "[16:29:27] [Server thread/INFO]: F16 joined the game",
  "[16:29:34] [Server thread/INFO]: F17 joined the game",
  "[16:29:45] [Server thread/INFO]: F17 joined the game",
  "[16:29:47] [Server thread/INFO]: F16 joined the game",
  "[16:29:58] [Server thread/INFO]: F17 joined the game",
  "[16:30:03] [Server thread/INFO]: F16 joined the game",
  "[16:30:08] [Server thread/INFO]: F17 joined the game",
  "[16:30:08] [Server thread/INFO]: F1 joined the game",
  "[16:30:09] [Server thread/INFO]: F16 joined the game",
  "[16:30:13] [Server thread/INFO]: F15 joined the game",
  "[16:30:15] [Server thread/INFO]: F16 joined the game",
  "[16:30:17] [Server thread/INFO]: F1 joined the game",
  "[16:30:18] [Server thread/INFO]: F17 joined the game",
  "[16:30:22] [Server thread/INFO]: F15 joined the game",
  "[16:30:24] [Server thread/INFO]: F1 joined the game",
  "[16:30:28] [Server thread/INFO]: F1 joined the game",
  "[16:30:31] [Server thread/INFO]: F17 joined the game",
  "[16:30:34] [Server thread/INFO]: F1 joined the game",
  "[16:30:39] [Server thread/INFO]: F1 joined the game",
  "[16:30:46] [Server thread/INFO]: F1 joined the game",
  "[16:30:48] [Server thread/INFO]: F15 joined the game",
  "[16:30:52] [Server thread/INFO]: F1 joined the game",
  "[16:30:56] [Server thread/INFO]: F1 joined the game",
  "[16:31:01] [Server thread/INFO]: F1 joined the game",
  "[16:31:08] [Server thread/INFO]: F1 joined the game",
  "[16:31:14] [Server thread/INFO]: F6 joined the game",
  "[16:31:25] [Server thread/INFO]: F8 joined the game",
  "[16:31:36] [Server thread/INFO]: F4 joined the game",
  "[16:32:14] [Server thread/INFO]: F19 joined the game",
  "[16:32:27] [Server thread/INFO]: F9 joined the game",
  "[16:32:29] [Server thread/INFO]: F13 joined the game"
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
  "[23:11:38] [Server thread/INFO]: F13 joined the game"
]

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
  "[11:28:40] [Server thread/INFO]: F7 joined the game"
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
  "[12:00:17] [Server thread/INFO]: F4 joined the game"
]

const REAL_F554 = [
  "[15:17:34] [Server thread/INFO]: YardSurvey joined the game",
  "[15:17:48] [Server thread/INFO]: F1 joined the game",
  "[15:17:50] [Server thread/INFO]: F2 joined the game",
  "[15:17:53] [Server thread/INFO]: F3 joined the game",
  "[15:17:55] [Server thread/INFO]: F4 joined the game",
  "[15:17:58] [Server thread/INFO]: F5 joined the game",
  "[15:18:01] [Server thread/INFO]: F6 joined the game",
  "[15:18:04] [Server thread/INFO]: F7 joined the game",
  "[15:18:06] [Server thread/INFO]: F8 joined the game",
  "[15:18:09] [Server thread/INFO]: F9 joined the game",
  "[15:18:12] [Server thread/INFO]: F10 joined the game",
  "[15:18:15] [Server thread/INFO]: F11 joined the game",
  "[15:18:18] [Server thread/INFO]: F12 joined the game",
  "[15:18:21] [Server thread/INFO]: F13 joined the game",
  "[15:18:24] [Server thread/INFO]: F14 joined the game",
  "[15:18:27] [Server thread/INFO]: F15 joined the game",
  "[15:18:29] [Server thread/INFO]: F16 joined the game",
  "[15:18:33] [Server thread/INFO]: F17 joined the game",
  "[15:18:35] [Server thread/INFO]: F18 joined the game",
  "[15:18:38] [Server thread/INFO]: F19 joined the game",
  "[15:23:09] [Server thread/INFO]: F19 joined the game",
  "[15:24:44] [Server thread/INFO]: F19 joined the game",
  "[15:25:19] [Server thread/INFO]: F14 joined the game",
  "[15:25:26] [Server thread/INFO]: F13 joined the game",
  "[15:25:31] [Server thread/INFO]: F3 joined the game",
  "[15:25:34] [Server thread/INFO]: F11 joined the game",
  "[15:25:38] [Server thread/INFO]: F13 joined the game",
  "[15:25:46] [Server thread/INFO]: F13 joined the game",
  "[15:25:54] [Server thread/INFO]: F13 joined the game",
  "[15:26:04] [Server thread/INFO]: F13 joined the game",
  "[15:26:16] [Server thread/INFO]: F13 joined the game",
  "[15:26:24] [Server thread/INFO]: F13 joined the game",
  "[15:26:34] [Server thread/INFO]: F13 joined the game",
  "[15:26:45] [Server thread/INFO]: F13 joined the game",
  "[15:26:47] [Server thread/INFO]: F1 joined the game",
  "[15:26:55] [Server thread/INFO]: F13 joined the game",
  "[15:26:58] [Server thread/INFO]: F3 joined the game",
  "[15:27:05] [Server thread/INFO]: F13 joined the game",
  "[15:27:15] [Server thread/INFO]: F16 joined the game"
]

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
  "[03:16:16] [Server thread/INFO]: F7 joined the game"
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
  "[06:54:36] [Server thread/INFO]: F4 joined the game"
]


// the expected fifths the arc prices: F501=0 F509=0 F511=54 F524=14 F532=0 F548=0 F549=0 F554=12 F565=52 F567=0
// the REAL 65-face window F501-F567 the alignment voiced - the F552
// cancelled and the F557 artifact hole the holes the F-order keeps
// (62 ids F501..F551 + the F553..F556 four + the F558..F567 ten the
// 65 the seat prices)
const REAL_ARC = [0,0,0,0,0,8,0,4,0,0,54,11,0,10,0,8,0,0,0,0,5,11,0,14,0,0,0,0,0,0,0,0,0,0,0,7,7,0,6,0,11,12,0,0,0,8,0,0,0,0,0,0,12,0,5,15,0,7,0,7,14,5,52,9,0]

test('REAL faces byte-exact - the champion fifth breath the fifth order statistic prices', () => {
  // the columns the archive voices - the census the value byte-exact
  // keeps (the F509 the constructive single-gap, the F511 the 54 the
  // window's own TALLEST voiced value, the F554 the ceiling-face 12,
  // the F549 the REAL zero the nine-name co-reign keeps, the F567
  // the fresh tail constructive zero the F5/F16 co-reign keeps)
  const pins = [[REAL_F501, 0], [REAL_F509, 0], [REAL_F511, 54], [REAL_F524, 14], [REAL_F532, 0], [REAL_F548, 0], [REAL_F549, 0], [REAL_F554, 12], [REAL_F565, 52], [REAL_F567, 0]]
  for (const [col, want] of pins) {
    assert.equal(rejoinChampFifthBreathCensus(col).rejoinChampFifthBreath, want)
  }
})

test('the BOUND + DIALOG + CEILING laws - the edges the fifth order statistic bounds keep', () => {
  // the champion cadence hand the fixtures re-voice inline - the BOUND
  // law the .359 champ min <= fifth <= the .353 champ gap and
  // fifth <= the .351 champ stretch every voiced fixture (the
  // REAL archive audit GREEN the probe keeps)
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
      fifth: gaps.length > 4 ? gaps[4] : 0,
      count: gaps.length,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      stretch: gaps.reduce((a, b) => a + b, 0),
      fourth: rejoinChampFourthBreathCensus(lines).rejoinChampFourthBreath
    }
  }
  const cols = [REAL_F501, REAL_F509, REAL_F511, REAL_F524, REAL_F532, REAL_F548, REAL_F549, REAL_F554, REAL_F565, REAL_F567]
  for (const col of cols) {
    const r = read(col)
    const fifth = rejoinChampFifthBreathCensus(col).rejoinChampFifthBreath
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
  // the DIALOG's own edges the fixtures voice: the F511 above face
  // (54 ABOVE the 32 the tall voiced value) and the F554 above face
  // (12 ABOVE the 10 the ceiling-face) and the F565 above face (52
  // ABOVE the 9 the fresh window's own) and the F501 level face (0
  // the three-gap the constructive 0=0 keeps) and the F509 level
  // face (0 the single-gap the t4 0 keeps) and the F567 level face
  // (0 the fresh tail the t4 0 keeps) and the F532 under face (0
  // UNDER the 108 the .371 ceiling-face the under-dialog prices)
  // and the F548 under face (0 UNDER the 181 the arc ceiling) and
  // the F549 under face (0 the REAL zero UNDER the 2)
  assert.ok(read(REAL_F511).fifth > read(REAL_F511).fourth)
  assert.ok(read(REAL_F554).fifth > read(REAL_F554).fourth)
  assert.ok(read(REAL_F565).fifth > read(REAL_F565).fourth)
  assert.equal(read(REAL_F501).fifth, read(REAL_F501).fourth)
  assert.equal(read(REAL_F509).fifth, read(REAL_F509).fourth)
  assert.equal(read(REAL_F567).fifth, read(REAL_F567).fourth)
  assert.ok(read(REAL_F532).fifth < read(REAL_F532).fourth)
  assert.ok(read(REAL_F548).fifth < read(REAL_F548).fourth)
  assert.ok(read(REAL_F549).fifth < read(REAL_F549).fourth)
  // the CEILING's own face: the F554 fifth IS the champion cadence's
  // tallest silence (12) - and the F511 the honest distinction prices
  // (the 54 the window's own TALLEST voiced value the 100-gap cadence
  // the fifth the BELOW the max keeps)
  assert.equal(read(REAL_F554).fifth, read(REAL_F554).max)
  assert.ok(read(REAL_F511).fifth < read(REAL_F511).max)
  // the REAL zero vs the CONSTRUCTIVE zero: the F549 the eight-plus-gap
  // cadence the same-second fifth pair the zero the list voices, the
  // F509 the ONE gap and the F567 the THREE gaps and the F532 the
  // FOUR gaps the no-fifth-pair faces the constructive branch keeps
  assert.ok(read(REAL_F549).count >= 5)
  assert.equal(read(REAL_F509).count, 1)
  assert.equal(read(REAL_F567).count, 3)
  assert.equal(read(REAL_F532).count, 4)
  // the synthetic branches: the one-echo face the zero keeps, the
  // single-gap and the two-gap and the three-gap and the four-gap
  // faces the constructive keeps (the fifth pair the list never
  // holds - the .370 convention extends), the five-gap face the
  // fifth the list voices, the co-reign tie the interleave the fifth
  // gap the FILE ORDER voices, the day-cyclic wrap the fifth pair
  // crossing the midnight cell prices
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinChampFifthBreathCensus(oneEcho), { rejoinChampFifthBreath: 0 })
  const singleGap = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinChampFifthBreathCensus(singleGap), { rejoinChampFifthBreath: 0 })
  const twoGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // F3's own first join 08:01 the tally's n=1 the champion list keeps
  // out - the champion events 08:02 / 08:03 / 08:09 the gaps [60, 360]
  // the TWO gaps the fifth pair the list never holds the constructive
  // zero the .370 convention extends
  assert.deepEqual(rejoinChampFifthBreathCensus(twoGaps), { rejoinChampFifthBreath: 0 })
  const threeGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the champion events 08:02 / 08:03 / 08:04 / 08:09 the gaps [60, 60,
  // 300] the THREE gaps the FIFTH pair the list never holds - the
  // constructive zero the .370 convention extends (the fourth breath's
  // own 240 the elder seat prices)
  assert.deepEqual(rejoinChampFifthBreathCensus(threeGaps), { rejoinChampFifthBreath: 0 })
  const fourGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:05:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the champion events 08:02 / 08:03 / 08:04 / 08:05 / 08:09 the gaps
  // [60, 60, 60, 240] the FOUR gaps the FIFTH pair the list never
  // holds - the constructive zero the .370 convention extends (the
  // fourth breath's own 240 the elder seat prices)
  assert.deepEqual(rejoinChampFifthBreathCensus(fourGaps), { rejoinChampFifthBreath: 0 })
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
  // the champion events 08:02 / 08:03 / 08:04 / 08:05 / 08:06 / 08:09
  // the gaps [60, 60, 60, 60, 180] the FIFTH pair 180 the list voices
  // (the 08:06 event the cadence keeps - the 08:05 -> 08:09 jump the
  // elder four-gap face's own 240 the fifth arc never rides)
  assert.deepEqual(rejoinChampFifthBreathCensus(fiveGaps), { rejoinChampFifthBreath: 180 })
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
  // F3's and F7's own co-reign the tie keeps - the champion events the
  // FILE ORDER rides (F3 09:04 / F7 09:07 / F3 09:08 / F7 09:14 / F3
  // 09:15 / F7 09:21) the gaps [180, 60, 360, 60, 360] the FIFTH 360
  // the interleave voices
  assert.deepEqual(rejoinChampFifthBreathCensus(coReign), { rejoinChampFifthBreath: 360 })
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
  // crosses the midnight cell (the champion events 08:02 / 08:03 /
  // 08:04 / 23:59:30 / 00:01:30 / 00:05:30 the gaps [60, 60, 57330,
  // 120, 240] - 86370 - 29040 = 57330 the third pair rides, 90 +
  // 86400 - 86370 = 120 the fourth rides, 330 - 90 = 240 the fifth
  // the list voices)
  assert.deepEqual(rejoinChampFifthBreathCensus(wrap), { rejoinChampFifthBreath: 240 })
})

test('REAL 65-face window arc byte-exact - 14 classes the seat LIVE', () => {
  // the arc the fieldread re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 65)
  assert.equal(classes.size, 14)
  assert.equal(Math.min(...arc), 0) // the FORTY-ONE-face zero keeps (the constructive forty + the REAL one F549)
  assert.equal(Math.max(...arc), 54) // the F511 the window's own TALLEST voiced value keeps
  // the zero faces the honest distinction prices (the F549 the REAL
  // zero the nine-name co-reign the same-second fifth pair keeps, the
  // constructive forty the fewer-than-five-gaps faces the branch rides)
  assert.equal(arc[0], 0) // the F501 constructive three-gap
  assert.equal(arc[8], 0) // the F509 constructive single-gap
  assert.equal(arc[10], 54) // the F511 the TALLEST voiced
  assert.equal(arc[23], 14) // the F524 keeps
  assert.equal(arc[48], 0) // the F549 REAL zero
  assert.equal(arc[52], 12) // the F554 ceiling-face
  assert.equal(arc[62], 52) // the F565 keeps
  assert.equal(arc[64], 0) // the F567 fresh tail constructive zero
  // the held law: TWENTY-SIX held pairs the 65-face window keeps - the
  // zero gravity the forty-one faces price and the ONE REAL pair the
  // F536/F537 sevens keep (the .372 arc's own SIX the champ fifth does
  // NOT inherit - the F528/F529/F530/F531 constructive triad the champ
  // constructive faces the honest naming prices)
  let held = 0
  for (let i = 1; i < arc.length; i++) if (arc[i] === arc[i - 1]) held++
  assert.equal(held, 26)
  // the multi-class law: the mode candidate the honest probe DECLINED
  // - the forty-one-face zero the tie-degenerate gravity the family prices
  const tally = new Map()
  for (const v of arc) tally.set(v, (tally.get(v) || 0) + 1)
  assert.equal(tally.get(0), 41)
  assert.equal(tally.get(7), 4)
  assert.equal(tally.get(8), 3)
  assert.equal(tally.get(11), 3)
  assert.equal(tally.get(5), 3)
  assert.equal(tally.get(14), 2)
  assert.equal(tally.get(12), 2)
  // the singletons the honest many the seat prices (the 4 the F508 and
  // the 6 the F539 and the 9 the F566 and the 10 the F514 and the 15
  // the F558 and the 52 the F565 and the 54 the F511)
  for (const singleton of [4, 6, 9, 10, 15, 52, 54]) assert.equal(tally.get(singleton), 1)
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  // the census the strict frame keeps - the deformed lines the skip
  // rides, the honest zero the no-join face keeps
  assert.equal(rejoinChampFifthBreathCensus(null), null)
  assert.equal(rejoinChampFifthBreathCensus(undefined), null)
  assert.equal(rejoinChampFifthBreathCensus('not an array'), null)
  assert.equal(rejoinChampFifthBreathCensus(42), null)
  assert.deepEqual(rejoinChampFifthBreathCensus([]), { rejoinChampFifthBreath: 0 })
  assert.deepEqual(rejoinChampFifthBreathCensus(['', 'no joins here', null, 42]), { rejoinChampFifthBreath: 0 })
  // the malformed clock cells the strict frame never rides
  assert.deepEqual(rejoinChampFifthBreathCensus([
    '[24:00:00] [Server thread/INFO]: F3 joined the game', // the hour 24 the day never keeps
    '[12:60:00] [Server thread/INFO]: F3 joined the game', // the minute 60 the clock never keeps
    '[12:00:60] [Server thread/INFO]: F3 joined the game', // the second 60 the clock never keeps
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampFifthBreath: 0 })
  // the non-join lanes the lane law keeps out
  assert.deepEqual(rejoinChampFifthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 left the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the team', // the near-join the frame never rides
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampFifthBreath: 0 })
  // the kernel prefix the deformed line the skip keeps
  assert.deepEqual(rejoinChampFifthBreathCensus([
    'kernel: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampFifthBreath: 0 })
  // the multi-line join the trailing spaces the strict frame never rides
  assert.deepEqual(rejoinChampFifthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 joined the game ',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampFifthBreath: 0 })
})

test('fence - every branch the gap words own integer law keeps', () => {
  const c = (n) => ({ rejoinChampFifthBreath: n })
  assert.equal(rejoinChampFifthBreathConsistent(null), false)
  assert.equal(rejoinChampFifthBreathConsistent(undefined), false)
  assert.equal(rejoinChampFifthBreathConsistent('nope'), false)
  assert.equal(rejoinChampFifthBreathConsistent({}), false)
  assert.equal(rejoinChampFifthBreathConsistent({ back: c(0), prev: c(0) }), false) // the cur missing
  assert.equal(rejoinChampFifthBreathConsistent({ back: c(-1), prev: c(0), cur: c(0) }), false) // the negative the fence never rides
  assert.equal(rejoinChampFifthBreathConsistent({ back: c(0), prev: c(86399), cur: c(0) }), true) // the day ceiling 86399 the fence keeps (the .368 fence-fix lesson the same boundary voices)
  assert.equal(rejoinChampFifthBreathConsistent({ back: c(0), prev: c(86400), cur: c(0) }), false) // past the day the fence declines (the fence 0..86399 the module voices - the .366 line 445 / the .367 line 593 / the .368 line 647 / the .370 line 666 / the .372 line 679 the same shape)
  assert.equal(rejoinChampFifthBreathConsistent({ back: c(0), prev: c(86401), cur: c(0) }), false) // past the day the fence declines
  assert.equal(rejoinChampFifthBreathConsistent({ back: c(0), prev: c(1.5), cur: c(0) }), false) // the fraction the integer law never rides
  assert.equal(rejoinChampFifthBreathConsistent({ back: c(0), prev: c(0), cur: c(0) }), true)
  assert.equal(rejoinChampFifthBreathConsistent({ back: c(86399), prev: c(0), cur: c(54) }), true)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const c = (n) => ({ rejoinChampFifthBreath: n })
  // the swell the F520->F522 faces keep (0 -> 5 (+5) -> 11 (+6))
  const swell = rejoinChampFifthBreathTrendRow({ back: c(0), prev: c(5), cur: c(11) })
  assert.ok(swell.includes('swell ran two steps deep'))
  assert.ok(swell.includes('0 -> 5 (+5) -> 11 (+6)'))
  assert.ok(swell.includes('v0.976.373'))
  // the swing the F562->F564 faces keep (7 -> 14 (+7) -> 5 (-9))
  const swing = rejoinChampFifthBreathTrendRow({ back: c(7), prev: c(14), cur: c(5) })
  assert.ok(swing.includes('swing'))
  assert.ok(swing.includes('7 -> 14 (+7) -> 5 (-9)'))
  // the fade the F565->F567 faces keep (52 -> 9 (-43) -> 0 (-9))
  const fade = rejoinChampFifthBreathTrendRow({ back: c(52), prev: c(9), cur: c(0) })
  assert.ok(fade.includes('fade ran two steps deep'))
  assert.ok(fade.includes('52 -> 9 (-43) -> 0 (-9)'))
  // the held step the honest silence keeps (the row never invents -
  // the F536/F537 sevens pair the arc keeps)
  assert.equal(rejoinChampFifthBreathTrendRow({ back: c(0), prev: c(0), cur: c(25) }), null)
  assert.equal(rejoinChampFifthBreathTrendRow({ back: c(0), prev: c(25), cur: c(25) }), null)
  // the deformed triples the fence declines
  assert.equal(rejoinChampFifthBreathTrendRow(null), null)
  assert.equal(rejoinChampFifthBreathTrendRow({ back: c(-5), prev: c(0), cur: c(0) }), null)
  // the REAL arc's own windows the rows re-voice (the census the same
  // values the arc keeps - the swell the c3(19/20/21) the
  // F520->F521->F522 the faces price, the swing the c3(59/60/61) the
  // F562->F563->F564, the fade the c3(62/63/64) the F565->F566->F567)
  const c3 = (i) => ({ rejoinChampFifthBreath: REAL_ARC[i] })
  assert.ok(rejoinChampFifthBreathTrendRow({ back: c3(19), prev: c3(20), cur: c3(21) }).includes('0 -> 5 (+5) -> 11 (+6)'))
  assert.ok(rejoinChampFifthBreathTrendRow({ back: c3(59), prev: c3(60), cur: c3(61) }).includes('7 -> 14 (+7) -> 5 (-9)'))
  assert.ok(rejoinChampFifthBreathTrendRow({ back: c3(62), prev: c3(63), cur: c3(64) }).includes('52 -> 9 (-43) -> 0 (-9)'))
})
