import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinStormSeventhBreathCensus, rejoinStormSeventhBreathConsistent, rejoinStormSeventhBreathTrendRow } from '../../src/lib/rejoinstormseventhbreath.mjs'
import { rejoinStormSixthBreathCensus } from '../../src/lib/rejoinstormsixthbreath.mjs'

// the REAL columns the rebuilt archive keeps (the fire-0843 method the
// fire-1243/1343/1543/1743/1843 fires re-ride - the faces the
// alignment byte-exact anchored and the F-map the census slide the
// ten anchors lock the same ids price: F1 = 37403158305 one hit, the
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

const REAL_F505 = [
  "[23:44:07] [Server thread/INFO]: YardSurvey joined the game",
  "[23:44:20] [Server thread/INFO]: F1 joined the game",
  "[23:44:22] [Server thread/INFO]: F2 joined the game",
  "[23:44:25] [Server thread/INFO]: F3 joined the game",
  "[23:44:27] [Server thread/INFO]: F4 joined the game",
  "[23:44:30] [Server thread/INFO]: F5 joined the game",
  "[23:44:32] [Server thread/INFO]: F6 joined the game",
  "[23:44:35] [Server thread/INFO]: F7 joined the game",
  "[23:44:37] [Server thread/INFO]: F8 joined the game",
  "[23:44:40] [Server thread/INFO]: F9 joined the game",
  "[23:44:42] [Server thread/INFO]: F10 joined the game",
  "[23:44:45] [Server thread/INFO]: F11 joined the game",
  "[23:44:47] [Server thread/INFO]: F12 joined the game",
  "[23:44:50] [Server thread/INFO]: F13 joined the game",
  "[23:44:52] [Server thread/INFO]: F14 joined the game",
  "[23:44:55] [Server thread/INFO]: F15 joined the game",
  "[23:44:57] [Server thread/INFO]: F16 joined the game",
  "[23:45:00] [Server thread/INFO]: F17 joined the game",
  "[23:45:02] [Server thread/INFO]: F18 joined the game",
  "[23:45:05] [Server thread/INFO]: F19 joined the game",
  "[23:49:00] [Server thread/INFO]: F14 joined the game",
  "[23:49:36] [Server thread/INFO]: F14 joined the game",
  "[23:50:01] [Server thread/INFO]: F11 joined the game",
  "[23:51:48] [Server thread/INFO]: F14 joined the game",
  "[23:51:54] [Server thread/INFO]: F18 joined the game",
  "[23:52:11] [Server thread/INFO]: F13 joined the game",
  "[23:52:14] [Server thread/INFO]: F9 joined the game",
  "[23:52:40] [Server thread/INFO]: F6 joined the game",
  "[23:52:44] [Server thread/INFO]: F11 joined the game",
  "[23:52:49] [Server thread/INFO]: F14 joined the game",
  "[23:53:05] [Server thread/INFO]: F15 joined the game",
  "[23:53:12] [Server thread/INFO]: F4 joined the game",
  "[23:53:12] [Server thread/INFO]: F10 joined the game",
  "[23:53:34] [Server thread/INFO]: F7 joined the game",
  "[23:53:34] [Server thread/INFO]: F8 joined the game",
  "[23:53:51] [Server thread/INFO]: F19 joined the game",
  "[23:53:53] [Server thread/INFO]: F5 joined the game",
  "[23:54:02] [Server thread/INFO]: F16 joined the game",
  "[23:54:08] [Server thread/INFO]: F5 joined the game",
  "[23:54:14] [Server thread/INFO]: F17 joined the game",
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

const REAL_F550 = [
  "[12:24:57] [Server thread/INFO]: YardSurvey joined the game",
  "[12:25:11] [Server thread/INFO]: F1 joined the game",
  "[12:25:13] [Server thread/INFO]: F2 joined the game",
  "[12:25:16] [Server thread/INFO]: F3 joined the game",
  "[12:25:18] [Server thread/INFO]: F4 joined the game",
  "[12:25:21] [Server thread/INFO]: F5 joined the game",
  "[12:25:23] [Server thread/INFO]: F6 joined the game",
  "[12:25:26] [Server thread/INFO]: F7 joined the game",
  "[12:25:28] [Server thread/INFO]: F8 joined the game",
  "[12:25:31] [Server thread/INFO]: F9 joined the game",
  "[12:25:33] [Server thread/INFO]: F10 joined the game",
  "[12:25:36] [Server thread/INFO]: F11 joined the game",
  "[12:25:38] [Server thread/INFO]: F12 joined the game",
  "[12:25:41] [Server thread/INFO]: F13 joined the game",
  "[12:25:43] [Server thread/INFO]: F14 joined the game",
  "[12:25:46] [Server thread/INFO]: F15 joined the game",
  "[12:25:48] [Server thread/INFO]: F16 joined the game",
  "[12:25:51] [Server thread/INFO]: F17 joined the game",
  "[12:25:53] [Server thread/INFO]: F18 joined the game",
  "[12:25:56] [Server thread/INFO]: F19 joined the game",
  "[12:31:08] [Server thread/INFO]: F11 joined the game",
  "[12:32:42] [Server thread/INFO]: F19 joined the game",
  "[12:32:42] [Server thread/INFO]: F11 joined the game",
  "[12:32:52] [Server thread/INFO]: F18 joined the game",
  "[12:32:53] [Server thread/INFO]: F7 joined the game",
  "[12:33:11] [Server thread/INFO]: F9 joined the game",
  "[12:33:36] [Server thread/INFO]: F19 joined the game",
  "[12:33:36] [Server thread/INFO]: F11 joined the game",
  "[12:33:38] [Server thread/INFO]: F2 joined the game",
  "[12:33:51] [Server thread/INFO]: F16 joined the game",
  "[12:33:54] [Server thread/INFO]: F8 joined the game",
  "[12:33:57] [Server thread/INFO]: F14 joined the game",
  "[12:33:58] [Server thread/INFO]: F1 joined the game",
  "[12:33:59] [Server thread/INFO]: F15 joined the game",
  "[12:34:03] [Server thread/INFO]: F1 joined the game",
  "[12:34:08] [Server thread/INFO]: F1 joined the game",
  "[12:34:12] [Server thread/INFO]: F1 joined the game",
  "[12:34:13] [Server thread/INFO]: F5 joined the game",
  "[12:34:15] [Server thread/INFO]: F9 joined the game",
  "[12:34:18] [Server thread/INFO]: F1 joined the game",
  "[12:34:22] [Server thread/INFO]: F17 joined the game",
  "[12:34:28] [Server thread/INFO]: F19 joined the game",
  "[12:34:30] [Server thread/INFO]: F17 joined the game",
  "[12:34:33] [Server thread/INFO]: F6 joined the game",
  "[12:34:34] [Server thread/INFO]: F9 joined the game",
  "[12:34:38] [Server thread/INFO]: F14 joined the game",
  "[12:34:42] [Server thread/INFO]: F11 joined the game",
  "[12:34:54] [Server thread/INFO]: F9 joined the game",
  "[12:34:57] [Server thread/INFO]: F12 joined the game",
  "[12:35:04] [Server thread/INFO]: F10 joined the game",
  "[12:35:06] [Server thread/INFO]: F3 joined the game",
]

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

const REAL_F569 = [
  "[10:02:21] [Server thread/INFO]: YardSurvey joined the game",
  "[10:02:35] [Server thread/INFO]: F1 joined the game",
  "[10:02:37] [Server thread/INFO]: F2 joined the game",
  "[10:02:40] [Server thread/INFO]: F3 joined the game",
  "[10:02:43] [Server thread/INFO]: F4 joined the game",
  "[10:02:45] [Server thread/INFO]: F5 joined the game",
  "[10:02:48] [Server thread/INFO]: F6 joined the game",
  "[10:02:51] [Server thread/INFO]: F7 joined the game",
  "[10:02:53] [Server thread/INFO]: F8 joined the game",
  "[10:02:57] [Server thread/INFO]: F9 joined the game",
  "[10:03:00] [Server thread/INFO]: F10 joined the game",
  "[10:03:02] [Server thread/INFO]: F11 joined the game",
  "[10:03:05] [Server thread/INFO]: F12 joined the game",
  "[10:03:08] [Server thread/INFO]: F13 joined the game",
  "[10:03:11] [Server thread/INFO]: F14 joined the game",
  "[10:03:14] [Server thread/INFO]: F15 joined the game",
  "[10:03:18] [Server thread/INFO]: F16 joined the game",
  "[10:03:21] [Server thread/INFO]: F17 joined the game",
  "[10:03:24] [Server thread/INFO]: F18 joined the game",
  "[10:03:27] [Server thread/INFO]: F19 joined the game",
  "[10:07:55] [Server thread/INFO]: F17 joined the game",
  "[10:07:58] [Server thread/INFO]: F13 joined the game",
  "[10:08:20] [Server thread/INFO]: F17 joined the game",
  "[10:08:30] [Server thread/INFO]: F17 joined the game",
  "[10:08:39] [Server thread/INFO]: F17 joined the game",
  "[10:08:45] [Server thread/INFO]: F5 joined the game",
  "[10:08:48] [Server thread/INFO]: F17 joined the game",
  "[10:09:30] [Server thread/INFO]: F14 joined the game",
  "[10:09:40] [Server thread/INFO]: F14 joined the game",
  "[10:09:46] [Server thread/INFO]: F14 joined the game",
  "[10:09:52] [Server thread/INFO]: F14 joined the game",
  "[10:10:00] [Server thread/INFO]: F14 joined the game",
  "[10:10:40] [Server thread/INFO]: F16 joined the game",
  "[10:11:07] [Server thread/INFO]: F10 joined the game",
  "[10:11:17] [Server thread/INFO]: F11 joined the game",
  "[10:11:21] [Server thread/INFO]: F7 joined the game",
  "[10:11:30] [Server thread/INFO]: F12 joined the game",
  "[10:11:37] [Server thread/INFO]: F11 joined the game",
  "[10:11:37] [Server thread/INFO]: F17 joined the game",
  "[10:11:48] [Server thread/INFO]: F17 joined the game",
  "[10:11:48] [Server thread/INFO]: F12 joined the game",
  "[10:11:52] [Server thread/INFO]: F14 joined the game",
  "[10:11:57] [Server thread/INFO]: F17 joined the game",
  "[10:12:03] [Server thread/INFO]: F14 joined the game",
  "[10:12:08] [Server thread/INFO]: F17 joined the game",
  "[10:12:14] [Server thread/INFO]: F10 joined the game",
  "[10:12:19] [Server thread/INFO]: F17 joined the game",
]

const REAL_F570 = [
  "[11:02:17] [Server thread/INFO]: YardSurvey joined the game",
  "[11:02:31] [Server thread/INFO]: F1 joined the game",
  "[11:02:33] [Server thread/INFO]: F2 joined the game",
  "[11:02:36] [Server thread/INFO]: F3 joined the game",
  "[11:02:38] [Server thread/INFO]: F4 joined the game",
  "[11:02:41] [Server thread/INFO]: F5 joined the game",
  "[11:02:44] [Server thread/INFO]: F6 joined the game",
  "[11:02:46] [Server thread/INFO]: F7 joined the game",
  "[11:02:49] [Server thread/INFO]: F8 joined the game",
  "[11:02:51] [Server thread/INFO]: F9 joined the game",
  "[11:02:54] [Server thread/INFO]: F10 joined the game",
  "[11:02:56] [Server thread/INFO]: F11 joined the game",
  "[11:03:00] [Server thread/INFO]: F12 joined the game",
  "[11:03:02] [Server thread/INFO]: F13 joined the game",
  "[11:03:04] [Server thread/INFO]: F14 joined the game",
  "[11:03:07] [Server thread/INFO]: F15 joined the game",
  "[11:03:09] [Server thread/INFO]: F16 joined the game",
  "[11:03:12] [Server thread/INFO]: F17 joined the game",
  "[11:03:15] [Server thread/INFO]: F18 joined the game",
  "[11:03:17] [Server thread/INFO]: F19 joined the game",
  "[11:11:07] [Server thread/INFO]: F15 joined the game",
  "[11:12:00] [Server thread/INFO]: F3 joined the game",
  "[11:12:29] [Server thread/INFO]: F9 joined the game",
]

const REAL_ARC = [2,17,0,60,26,1,0,7,0,0,5,19,0,7,0,2,24,7,0,0,34,8,5,4,12,6,8,0,0,0,0,17,0,21,0,4,32,1,8,7,5,8,11,0,0,5,0,5,1,0,0,0,8,0,4,12,0,6,1,86,9,9,9,6,15,21,42,0]

test('REAL faces byte-exact - the storm seventh breath the seventh order statistic prices', () => {
  // the columns the archive voices - the census the value byte-exact
  // keeps (the F501 the .374's own REAL zero face the seventh 2 the
  // honest ABOVE prices, the F562 the ceiling 86 the tallest, the
  // F569 the ceiling 42, the F570 the fresh tail the constructive 0)
  const pins = [[REAL_F501, 2], [REAL_F504, 60], [REAL_F505, 26], [REAL_F531, 0], [REAL_F533, 0], [REAL_F550, 0], [REAL_F562, 86], [REAL_F564, 9], [REAL_F569, 42], [REAL_F570, 0]]
  for (const [col, want] of pins) {
    assert.equal(rejoinStormSeventhBreathCensus(col).rejoinStormSeventhBreath, want)
  }
})

test('the BOUND + DIALOG + CEILING laws - the edges the seventh order statistic bounds keep', () => {
  // the storm cadence hand the fixtures re-voice inline - the BOUND
  // law the .358 storm min <= seventh <= the .352 re-join gap and
  // seventh <= the .350 span's own stretch every voiced fixture (the
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
      seventh: gaps.length > 6 ? gaps[6] : 0,
      count: gaps.length,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      stretch: gaps.reduce((a, b) => a + b, 0),
      sixth: rejoinStormSixthBreathCensus(lines).rejoinStormSixthBreath
    }
  }
  const cols = [REAL_F501, REAL_F504, REAL_F505, REAL_F531, REAL_F533, REAL_F550, REAL_F562, REAL_F564, REAL_F569, REAL_F570]
  for (const col of cols) {
    const r = read(col)
    const seventh = rejoinStormSeventhBreathCensus(col).rejoinStormSeventhBreath
    assert.equal(seventh, r.seventh)
    // the bound the VOICED faces price (the fewer-than-seven-gaps
    // face the lawful zero the bounds keep - the no-list-sample face
    // the min/max never bound)
    if (r.count >= 7) {
      assert.ok(seventh >= r.min && seventh <= r.max, `bound ${seventh} in [${r.min},${r.max}]`)
      assert.ok(seventh <= r.stretch)
    } else {
      assert.equal(seventh, 0)
    }
  }
  // the DIALOG's own edges the fixtures voice: the F531 under face
  // (0 UNDER the 2 the .374's own above-face the honest inversion
  // prices) and the F533 under face (0 UNDER the 1) and the F550
  // under face (0 UNDER the 25) and the F570 level face (0 LEVEL the
  // 0 the constructive tail keeps) and the F501 above face (2 ABOVE
  // the 0 the .374's own REAL zero face the honest ABOVE prices) and
  // the F504 above face (60 ABOVE the 6 the second-tallest) and the
  // F505 above face (26 ABOVE the 3) and the F562 above face (86
  // ABOVE the 48 the tallest face) and the F564 above face (9 ABOVE
  // the 6) and the F569 above face (42 ABOVE the 3 the ceiling-face)
  assert.ok(read(REAL_F531).seventh < read(REAL_F531).sixth)
  assert.ok(read(REAL_F533).seventh < read(REAL_F533).sixth)
  assert.ok(read(REAL_F550).seventh < read(REAL_F550).sixth)
  assert.equal(read(REAL_F570).seventh, read(REAL_F570).sixth)
  assert.ok(read(REAL_F501).seventh > read(REAL_F501).sixth)
  assert.ok(read(REAL_F504).seventh > read(REAL_F504).sixth)
  assert.ok(read(REAL_F505).seventh > read(REAL_F505).sixth)
  assert.ok(read(REAL_F562).seventh > read(REAL_F562).sixth)
  assert.ok(read(REAL_F564).seventh > read(REAL_F564).sixth)
  assert.ok(read(REAL_F569).seventh > read(REAL_F569).sixth)
  // the CEILING's own faces: the F562 seventh IS the storm cadence's
  // tallest silence (86 the window's own tallest voiced value) and
  // the F569 the same face law (42) - and the F504 the honest
  // difference prices (the 60 the second-tallest the max 67 the
  // BELOW keeps)
  assert.equal(read(REAL_F562).seventh, read(REAL_F562).max)
  assert.equal(read(REAL_F569).seventh, read(REAL_F569).max)
  assert.ok(read(REAL_F504).seventh < read(REAL_F504).max)
  // the REAL zero vs the CONSTRUCTIVE zero: the F531 the 7-gap storm
  // the same-second seventh pair the zero the list voices, the F533
  // and the F550 the REAL zeros the same law prices, the F570 the
  // TWO-gap storm the no-seventh-pair face the constructive branch
  // keeps
  assert.ok(read(REAL_F531).count >= 7)
  assert.equal(read(REAL_F531).seventh, 0)
  // the synthetic branches: the one-echo face the zero keeps, the
  // single-gap and the two-gap and the three-gap and the four-gap and
  // the five-gap and the six-gap faces the constructive keeps (the
  // seventh pair the list never holds - the .372 convention extends,
  // the six-gap face the .374's own 180 the elder seat priced the
  // seventh arc never rides), the seven-gap face the seventh the list
  // voices, the co-reign tie the interleave the seventh gap the FILE
  // ORDER voices, the day-cyclic wrap the seventh pair crossing the
  // midnight cell prices
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinStormSeventhBreathCensus(oneEcho), { rejoinStormSeventhBreath: 0 })
  const singleGap = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinStormSeventhBreathCensus(singleGap), { rejoinStormSeventhBreath: 0 })
  const twoGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // F3's own first join 08:01 the tally's n=1 the storm list keeps
  // out - the storm events 08:02 / 08:03 / 08:09 the gaps [60, 360]
  // the TWO gaps the SEVENTH pair the list never holds the
  // constructive zero the .372 convention extends
  assert.deepEqual(rejoinStormSeventhBreathCensus(twoGaps), { rejoinStormSeventhBreath: 0 })
  const threeGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 / 08:03 / 08:04 / 08:09 the gaps [60, 60,
  // 300] the THREE gaps the SEVENTH pair the list never holds - the
  // constructive zero the .372 convention extends
  assert.deepEqual(rejoinStormSeventhBreathCensus(threeGaps), { rejoinStormSeventhBreath: 0 })
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
  // [60, 60, 60, 240] the FOUR gaps the SEVENTH pair the list never
  // holds - the constructive zero the .372 convention extends
  assert.deepEqual(rejoinStormSeventhBreathCensus(fourGaps), { rejoinStormSeventhBreath: 0 })
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
  // the gaps [60, 60, 60, 60, 180] the FIVE gaps the SEVENTH pair
  // the list never holds - the constructive zero the .372 convention
  // extends
  assert.deepEqual(rejoinStormSeventhBreathCensus(fiveGaps), { rejoinStormSeventhBreath: 0 })
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
  // 08:09 the gaps [60, 60, 60, 60, 60, 180] the SIX gaps the
  // SEVENTH pair the list never holds - the constructive zero the
  // .372 convention extends (the same face the .374's own 180 the
  // sixth seat priced the seventh arc never rides - the honest
  // distinction the seats price)
  assert.deepEqual(rejoinStormSeventhBreathCensus(sixGaps), { rejoinStormSeventhBreath: 0 })
  const sevenGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:05:00] [Server thread/INFO]: F3 joined the game',
    '[08:06:00] [Server thread/INFO]: F3 joined the game',
    '[08:07:00] [Server thread/INFO]: F3 joined the game',
    '[08:08:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 through 08:09 the gaps [60, 60, 60, 60,
  // 60, 60, 60] the SEVENTH pair 60 the list voices (the 08:08 event
  // the cadence keeps - the elder six-gap face's own 180 the sixth
  // seat priced the seventh 60 the fresh seat prices)
  assert.deepEqual(rejoinStormSeventhBreathCensus(sevenGaps), { rejoinStormSeventhBreath: 60 })
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
    '[09:27:00] [Server thread/INFO]: F3 joined the game',
    '[09:34:00] [Server thread/INFO]: F7 joined the game'
  ]
  // F3's and F7's own co-reign the tie keeps - the storm events the
  // FILE ORDER rides (F3 09:04 / F7 09:07 / F3 09:08 / F7 09:14 / F3
  // 09:15 / F7 09:21 / F3 09:27 / F7 09:34) the gaps [180, 60, 360,
  // 60, 360, 360, 420] the SEVENTH 420 the interleave voices (the
  // elder six-gap face the sixth 360 the .374 seat priced the
  // seventh extends)
  assert.deepEqual(rejoinStormSeventhBreathCensus(coReign), { rejoinStormSeventhBreath: 420 })
  const wrap = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[23:59:30] [Server thread/INFO]: F3 joined the game',
    '[00:01:30] [Server thread/INFO]: F3 joined the game',
    '[00:05:30] [Server thread/INFO]: F3 joined the game',
    '[00:07:30] [Server thread/INFO]: F3 joined the game',
    '[00:09:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the day-cyclic wrap the .350 precedent keeps - the SEVENTH pair
  // crosses the midnight cell (the storm events 08:02 / 08:03 /
  // 08:04 / 23:59:30 / 00:01:30 / 00:05:30 / 00:07:30 / 00:09:30 the
  // gaps [60, 60, 57330, 120, 240, 120, 120] - 86370 - 29040 = 57330
  // the third pair rides, 90 + 86400 - 86370 = 120 the fourth rides,
  // 330 - 90 = 240 the fifth rides, 450 - 330 = 120 the sixth rides,
  // 570 - 450 = 120 the seventh the list voices)
  assert.deepEqual(rejoinStormSeventhBreathCensus(wrap), { rejoinStormSeventhBreath: 120 })
})

test('REAL 68-face window arc byte-exact - 22 classes the seat LIVE', () => {
  // the arc the fieldproof re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 68)
  assert.equal(classes.size, 22)
  assert.equal(Math.min(...arc), 0) // the TWENTY-THREE-face zero keeps (the constructive twenty + the REAL three F531/F533/F550)
  assert.equal(Math.max(...arc), 86) // the tallest voiced value F562 keeps
  // the zero faces the honest distinction prices (the F531 and the
  // F533 and the F550 the REAL zeros the cadence's own same-second
  // seventh pair keeps, the constructive twenty the
  // fewer-than-seven-gaps faces the branch rides)
  assert.equal(arc[0], 2) // the F501 opener the .374's own zero-face the seventh 2 the ABOVE prices
  assert.equal(arc[1], 17) // the F502 keeps
  assert.equal(arc[2], 0) // the F503 constructive four-gap
  assert.equal(arc[3], 60) // the F504 the second-tallest voiced
  assert.equal(arc[10], 5) // the F511 keeps
  assert.equal(arc[30], 0) // the F531 the REAL zero the minimal 7-gap face
  assert.equal(arc[31], 17) // the F532 keeps
  assert.equal(arc[33], 21) // the F534 the .374's own ceiling-face the seventh 21 the BELOW prices
  assert.equal(arc[49], 0) // the F550 the REAL zero
  assert.equal(arc[59], 86) // the F562 the tallest voiced + the ceiling-face
  assert.equal(arc[60], 9) // the F563 keeps
  assert.equal(arc[61], 9) // the F564 the held triple keeps
  assert.equal(arc[62], 9) // the F565 the held triple keeps
  assert.equal(arc[66], 42) // the F569 the ceiling-face the elder tail
  assert.equal(arc[67], 0) // the F570 fresh tail the constructive
  // the held law: TEN held pairs the 68-face window keeps - the
  // EIGHT constructive-zero pairs the F509/F510 and the F519/F520
  // and the F528/F529 and the F529/F530 and the F530/F531 cons/REAL
  // and the F544/F545 and the F550/F551 REAL/cons and the F551/F553
  // (the hole-aware adjacency the F-order keeps) and the TWO nines
  // the F563/F564 and the F564/F565 the tail's own triple (the
  // .374 arc's own SEVEN the seventh arc does NOT inherit - the
  // F505/F506 threes the seventh 26/1 the honest break, the
  // F541/F542 fours the seventh 5/8 the honest rise the seats
  // price)
  let held = 0
  for (let i = 1; i < arc.length; i++) if (arc[i] === arc[i - 1]) held++
  assert.equal(held, 10)
  // the multi-class law: the mode candidate the honest probe DECLINED
  // - the five-face tie the tie-degenerate gravity the family prices
  const tally = new Map()
  for (const v of arc) tally.set(v, (tally.get(v) || 0) + 1)
  assert.equal(tally.get(0), 23)
  assert.equal(tally.get(9), 3)
  assert.equal(tally.get(5), 5)
  assert.equal(tally.get(8), 5)
  assert.equal(tally.get(1), 4)
  assert.equal(tally.get(7), 4)
  assert.equal(tally.get(86), 1)
  assert.equal(tally.get(60), 1)
  assert.equal(tally.get(42), 1)
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  // the census the strict frame keeps - the deformed lines the skip
  // rides, the honest zero the no-join face keeps
  assert.equal(rejoinStormSeventhBreathCensus(null), null)
  assert.equal(rejoinStormSeventhBreathCensus(undefined), null)
  assert.equal(rejoinStormSeventhBreathCensus('not an array'), null)
  assert.equal(rejoinStormSeventhBreathCensus(42), null)
  assert.deepEqual(rejoinStormSeventhBreathCensus([]), { rejoinStormSeventhBreath: 0 })
  assert.deepEqual(rejoinStormSeventhBreathCensus(['', 'no joins here', null, 42]), { rejoinStormSeventhBreath: 0 })
  // the malformed clock cells the strict frame never rides
  assert.deepEqual(rejoinStormSeventhBreathCensus([
    '[24:00:00] [Server thread/INFO]: F3 joined the game', // the hour 24 the day never keeps
    '[12:60:00] [Server thread/INFO]: F3 joined the game', // the minute 60 the clock never keeps
    '[12:00:60] [Server thread/INFO]: F3 joined the game', // the second 60 the clock never keeps
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormSeventhBreath: 0 })
  // the non-join lanes the lane law keeps out
  assert.deepEqual(rejoinStormSeventhBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 left the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the team', // the near-join the frame never rides
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormSeventhBreath: 0 })
  // the kernel prefix the deformed line the skip keeps
  assert.deepEqual(rejoinStormSeventhBreathCensus([
    'kernel: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormSeventhBreath: 0 })
  // the multi-line join the trailing spaces the strict frame never rides
  assert.deepEqual(rejoinStormSeventhBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 joined the game ',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormSeventhBreath: 0 })
})

test('fence - every branch the gap words own integer law keeps', () => {
  const c = (n) => ({ rejoinStormSeventhBreath: n })
  assert.equal(rejoinStormSeventhBreathConsistent(null), false)
  assert.equal(rejoinStormSeventhBreathConsistent(undefined), false)
  assert.equal(rejoinStormSeventhBreathConsistent('nope'), false)
  assert.equal(rejoinStormSeventhBreathConsistent({}), false)
  assert.equal(rejoinStormSeventhBreathConsistent({ back: c(0), prev: c(0) }), false) // the cur missing
  assert.equal(rejoinStormSeventhBreathConsistent({ back: c(-1), prev: c(0), cur: c(0) }), false) // the negative the fence never rides
  assert.equal(rejoinStormSeventhBreathConsistent({ back: c(0), prev: c(86399), cur: c(0) }), true) // the day ceiling 86399 the fence keeps (the .368 fence-fix lesson the same boundary voices)
  assert.equal(rejoinStormSeventhBreathConsistent({ back: c(0), prev: c(86400), cur: c(0) }), false) // past the day the fence declines (the fence 0..86399 the module voices - the .366 line 445 / the .367 line 593 / the .368 line 647 / the .370 line 666 / the .372 line 679 / the .374 line 745 the same shape)
  assert.equal(rejoinStormSeventhBreathConsistent({ back: c(0), prev: c(86401), cur: c(0) }), false) // past the day the fence declines
  assert.equal(rejoinStormSeventhBreathConsistent({ back: c(0), prev: c(1.5), cur: c(0) }), false) // the fraction the integer law never rides
  assert.equal(rejoinStormSeventhBreathConsistent({ back: c(0), prev: c(0), cur: c(0) }), true)
  assert.equal(rejoinStormSeventhBreathConsistent({ back: c(86399), prev: c(0), cur: c(59) }), true)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const c = (n) => ({ rejoinStormSeventhBreath: n })
  // the swell the F566->F568 faces keep (6 -> 15 (+9) -> 21 (+6))
  const swell = rejoinStormSeventhBreathTrendRow({ back: c(6), prev: c(15), cur: c(21) })
  assert.ok(swell.includes('swell ran two steps deep'))
  assert.ok(swell.includes('6 -> 15 (+9) -> 21 (+6)'))
  assert.ok(swell.includes('v0.976.378'))
  // the second swell the F567->F569 faces keep (15 -> 21 (+6) -> 42
  // (+21) the ceiling-face the fresh window prices)
  const swell2 = rejoinStormSeventhBreathTrendRow({ back: c(15), prev: c(21), cur: c(42) })
  assert.ok(swell2.includes('swell ran two steps deep'))
  assert.ok(swell2.includes('15 -> 21 (+6) -> 42 (+21)'))
  // the fade the F504->F506 faces keep (60 -> 26 (-34) -> 1 (-25)
  // the two-step fade the fresh window prices)
  const fade = rejoinStormSeventhBreathTrendRow({ back: c(60), prev: c(26), cur: c(1) })
  assert.ok(fade.includes('fade ran two steps deep'))
  assert.ok(fade.includes('60 -> 26 (-34) -> 1 (-25)'))
  // the swing the F503->F505 faces keep (0 -> 60 (+60) -> 26 (-34)
  // the second-tallest the swing prices)
  const swing = rejoinStormSeventhBreathTrendRow({ back: c(0), prev: c(60), cur: c(26) })
  assert.ok(swing.includes('swing'))
  assert.ok(swing.includes('0 -> 60 (+60) -> 26 (-34)'))
  // the tail's own swing the F568->F570 faces keep (21 -> 42 (+21)
  // -> 0 (-42) the constructive tail the honest shape prices)
  const swing2 = rejoinStormSeventhBreathTrendRow({ back: c(21), prev: c(42), cur: c(0) })
  assert.ok(swing2.includes('swing'))
  assert.ok(swing2.includes('21 -> 42 (+21) -> 0 (-42)'))
  // the held step the honest silence keeps (the row never invents -
  // the F563/F564/F565 triple and the F564/F565 pair the arc keeps)
  assert.equal(rejoinStormSeventhBreathTrendRow({ back: c(9), prev: c(9), cur: c(42) }), null)
  assert.equal(rejoinStormSeventhBreathTrendRow({ back: c(9), prev: c(42), cur: c(42) }), null)
  // the deformed triples the fence declines
  assert.equal(rejoinStormSeventhBreathTrendRow(null), null)
  assert.equal(rejoinStormSeventhBreathTrendRow({ back: c(-5), prev: c(0), cur: c(0) }), null)
  // the REAL arc's own windows the rows re-voice (the census the same
  // values the arc keeps - the indexes the TRUE F-numbers price: the
  // F566/F567/F568 the c3(63/64/65), the F567/F568/F569 the
  // c3(64/65/66), the F504/F505/F506 the c3(3/4/5), the
  // F568/F569/F570 the c3(65/66/67) - the fire-1243 off-by-one
  // lesson the same hand keeps)
  const c3 = (i) => ({ rejoinStormSeventhBreath: REAL_ARC[i] })
  assert.ok(rejoinStormSeventhBreathTrendRow({ back: c3(63), prev: c3(64), cur: c3(65) }).includes('6 -> 15 (+9) -> 21 (+6)'))
  assert.ok(rejoinStormSeventhBreathTrendRow({ back: c3(64), prev: c3(65), cur: c3(66) }).includes('15 -> 21 (+6) -> 42 (+21)'))
  assert.ok(rejoinStormSeventhBreathTrendRow({ back: c3(3), prev: c3(4), cur: c3(5) }).includes('60 -> 26 (-34) -> 1 (-25)'))
  assert.ok(rejoinStormSeventhBreathTrendRow({ back: c3(65), prev: c3(66), cur: c3(67) }).includes('21 -> 42 (+21) -> 0 (-42)'))
})
