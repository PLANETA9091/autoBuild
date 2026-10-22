import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinStormEighthBreathCensus, rejoinStormEighthBreathConsistent, rejoinStormEighthBreathTrendRow } from '../../src/lib/rejoinstormeighthbreath.mjs'
import { rejoinStormSeventhBreathCensus } from '../../src/lib/rejoinstormseventhbreath.mjs'

// the REAL columns the rebuilt archive keeps (the fire-0843 method the
// fire-1243/1343/1543/1743/1843/1943/2043 fires re-ride - the faces the
// alignment byte-exact anchored and the F-map the census slide the
// TWELVE anchors lock the same ids price: F1 = 37403158305 one hit,
// the F552 cancelled and the F557 artifact hole the holes the F-order
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

const REAL_F508 = [
  "[02:14:31] [Server thread/INFO]: YardSurvey joined the game",
  "[02:14:45] [Server thread/INFO]: F1 joined the game",
  "[02:14:47] [Server thread/INFO]: F2 joined the game",
  "[02:14:49] [Server thread/INFO]: F3 joined the game",
  "[02:14:52] [Server thread/INFO]: F4 joined the game",
  "[02:14:54] [Server thread/INFO]: F5 joined the game",
  "[02:14:57] [Server thread/INFO]: F6 joined the game",
  "[02:14:59] [Server thread/INFO]: F7 joined the game",
  "[02:15:02] [Server thread/INFO]: F8 joined the game",
  "[02:15:04] [Server thread/INFO]: F9 joined the game",
  "[02:15:07] [Server thread/INFO]: F10 joined the game",
  "[02:15:10] [Server thread/INFO]: F11 joined the game",
  "[02:15:13] [Server thread/INFO]: F12 joined the game",
  "[02:15:15] [Server thread/INFO]: F13 joined the game",
  "[02:15:18] [Server thread/INFO]: F14 joined the game",
  "[02:15:20] [Server thread/INFO]: F15 joined the game",
  "[02:15:23] [Server thread/INFO]: F16 joined the game",
  "[02:15:26] [Server thread/INFO]: F17 joined the game",
  "[02:15:28] [Server thread/INFO]: F18 joined the game",
  "[02:15:31] [Server thread/INFO]: F19 joined the game",
  "[02:20:16] [Server thread/INFO]: F11 joined the game",
  "[02:20:51] [Server thread/INFO]: F11 joined the game",
  "[02:21:55] [Server thread/INFO]: F14 joined the game",
  "[02:22:00] [Server thread/INFO]: F14 joined the game",
  "[02:22:09] [Server thread/INFO]: F14 joined the game",
  "[02:22:13] [Server thread/INFO]: F14 joined the game",
  "[02:22:23] [Server thread/INFO]: F18 joined the game",
  "[02:22:30] [Server thread/INFO]: F11 joined the game",
  "[02:23:02] [Server thread/INFO]: F11 joined the game",
  "[02:23:59] [Server thread/INFO]: F11 joined the game",
  "[02:24:00] [Server thread/INFO]: F18 joined the game",
  "[02:24:00] [Server thread/INFO]: F19 joined the game",
  "[02:24:01] [Server thread/INFO]: F12 joined the game",
  "[02:24:02] [Server thread/INFO]: F8 joined the game",
  "[02:24:03] [Server thread/INFO]: F15 joined the game",
  "[02:24:04] [Server thread/INFO]: F2 joined the game",
  "[02:24:11] [Server thread/INFO]: F14 joined the game",
  "[02:24:21] [Server thread/INFO]: F7 joined the game",
  "[02:24:31] [Server thread/INFO]: F1 joined the game",
]

const REAL_F514 = [
  "[07:01:16] [Server thread/INFO]: YardSurvey joined the game",
  "[07:01:30] [Server thread/INFO]: F1 joined the game",
  "[07:01:32] [Server thread/INFO]: F2 joined the game",
  "[07:01:35] [Server thread/INFO]: F3 joined the game",
  "[07:01:38] [Server thread/INFO]: F4 joined the game",
  "[07:01:40] [Server thread/INFO]: F5 joined the game",
  "[07:01:43] [Server thread/INFO]: F6 joined the game",
  "[07:01:46] [Server thread/INFO]: F7 joined the game",
  "[07:01:48] [Server thread/INFO]: F8 joined the game",
  "[07:01:52] [Server thread/INFO]: F9 joined the game",
  "[07:01:55] [Server thread/INFO]: F10 joined the game",
  "[07:01:58] [Server thread/INFO]: F11 joined the game",
  "[07:02:00] [Server thread/INFO]: F12 joined the game",
  "[07:02:03] [Server thread/INFO]: F13 joined the game",
  "[07:02:05] [Server thread/INFO]: F14 joined the game",
  "[07:02:09] [Server thread/INFO]: F15 joined the game",
  "[07:02:11] [Server thread/INFO]: F16 joined the game",
  "[07:02:14] [Server thread/INFO]: F17 joined the game",
  "[07:02:16] [Server thread/INFO]: F18 joined the game",
  "[07:02:20] [Server thread/INFO]: F19 joined the game",
  "[07:07:32] [Server thread/INFO]: F12 joined the game",
  "[07:07:40] [Server thread/INFO]: F12 joined the game",
  "[07:07:42] [Server thread/INFO]: F5 joined the game",
  "[07:07:48] [Server thread/INFO]: F16 joined the game",
  "[07:07:52] [Server thread/INFO]: F12 joined the game",
  "[07:07:55] [Server thread/INFO]: F16 joined the game",
  "[07:08:01] [Server thread/INFO]: F16 joined the game",
  "[07:08:08] [Server thread/INFO]: F16 joined the game",
  "[07:08:50] [Server thread/INFO]: F4 joined the game",
  "[07:09:07] [Server thread/INFO]: F14 joined the game",
  "[07:09:11] [Server thread/INFO]: F9 joined the game",
  "[07:09:13] [Server thread/INFO]: F4 joined the game",
  "[07:09:26] [Server thread/INFO]: F9 joined the game",
  "[07:09:37] [Server thread/INFO]: F9 joined the game",
  "[07:09:49] [Server thread/INFO]: F9 joined the game",
  "[07:09:59] [Server thread/INFO]: F9 joined the game",
  "[07:10:08] [Server thread/INFO]: F15 joined the game",
  "[07:10:09] [Server thread/INFO]: F9 joined the game",
  "[07:10:21] [Server thread/INFO]: F9 joined the game",
  "[07:10:31] [Server thread/INFO]: F9 joined the game",
  "[07:10:34] [Server thread/INFO]: F14 joined the game",
  "[07:10:44] [Server thread/INFO]: F9 joined the game",
  "[07:10:53] [Server thread/INFO]: F11 joined the game",
  "[07:10:57] [Server thread/INFO]: F9 joined the game",
  "[07:11:03] [Server thread/INFO]: F18 joined the game",
  "[07:11:09] [Server thread/INFO]: F9 joined the game",
  "[07:11:22] [Server thread/INFO]: F17 joined the game",
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
  "[16:32:29] [Server thread/INFO]: F13 joined the game",
]

const REAL_F542 = [
  "[07:13:54] [Server thread/INFO]: YardSurvey joined the game",
  "[07:14:08] [Server thread/INFO]: F1 joined the game",
  "[07:14:10] [Server thread/INFO]: F2 joined the game",
  "[07:14:13] [Server thread/INFO]: F3 joined the game",
  "[07:14:15] [Server thread/INFO]: F4 joined the game",
  "[07:14:18] [Server thread/INFO]: F5 joined the game",
  "[07:14:20] [Server thread/INFO]: F6 joined the game",
  "[07:14:23] [Server thread/INFO]: F7 joined the game",
  "[07:14:25] [Server thread/INFO]: F8 joined the game",
  "[07:14:28] [Server thread/INFO]: F9 joined the game",
  "[07:14:31] [Server thread/INFO]: F10 joined the game",
  "[07:14:34] [Server thread/INFO]: F11 joined the game",
  "[07:14:36] [Server thread/INFO]: F12 joined the game",
  "[07:14:39] [Server thread/INFO]: F13 joined the game",
  "[07:14:41] [Server thread/INFO]: F14 joined the game",
  "[07:14:44] [Server thread/INFO]: F15 joined the game",
  "[07:14:47] [Server thread/INFO]: F16 joined the game",
  "[07:14:50] [Server thread/INFO]: F17 joined the game",
  "[07:14:53] [Server thread/INFO]: F18 joined the game",
  "[07:14:55] [Server thread/INFO]: F19 joined the game",
  "[07:18:14] [Server thread/INFO]: F9 joined the game",
  "[07:20:24] [Server thread/INFO]: F9 joined the game",
  "[07:20:32] [Server thread/INFO]: F9 joined the game",
  "[07:20:45] [Server thread/INFO]: F16 joined the game",
  "[07:20:56] [Server thread/INFO]: F9 joined the game",
  "[07:21:04] [Server thread/INFO]: F9 joined the game",
  "[07:21:08] [Server thread/INFO]: F4 joined the game",
  "[07:21:16] [Server thread/INFO]: F9 joined the game",
  "[07:21:26] [Server thread/INFO]: F9 joined the game",
  "[07:21:34] [Server thread/INFO]: F11 joined the game",
  "[07:21:46] [Server thread/INFO]: F9 joined the game",
  "[07:21:55] [Server thread/INFO]: F9 joined the game",
  "[07:22:11] [Server thread/INFO]: F16 joined the game",
  "[07:22:17] [Server thread/INFO]: F8 joined the game",
  "[07:22:18] [Server thread/INFO]: F16 joined the game",
  "[07:22:36] [Server thread/INFO]: F12 joined the game",
  "[07:22:40] [Server thread/INFO]: F16 joined the game",
  "[07:23:17] [Server thread/INFO]: F8 joined the game",
  "[07:23:20] [Server thread/INFO]: F13 joined the game",
  "[07:23:46] [Server thread/INFO]: F16 joined the game",
  "[07:24:05] [Server thread/INFO]: F3 joined the game",
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

const REAL_F572 = [
  "[13:17:14] [Server thread/INFO]: YardSurvey joined the game",
  "[13:17:27] [Server thread/INFO]: F1 joined the game",
  "[13:17:29] [Server thread/INFO]: F2 joined the game",
  "[13:17:32] [Server thread/INFO]: F3 joined the game",
  "[13:17:34] [Server thread/INFO]: F4 joined the game",
  "[13:17:37] [Server thread/INFO]: F5 joined the game",
  "[13:17:39] [Server thread/INFO]: F6 joined the game",
  "[13:17:42] [Server thread/INFO]: F7 joined the game",
  "[13:17:45] [Server thread/INFO]: F8 joined the game",
  "[13:17:47] [Server thread/INFO]: F9 joined the game",
  "[13:17:50] [Server thread/INFO]: F10 joined the game",
  "[13:17:52] [Server thread/INFO]: F11 joined the game",
  "[13:17:55] [Server thread/INFO]: F12 joined the game",
  "[13:17:57] [Server thread/INFO]: F13 joined the game",
  "[13:18:00] [Server thread/INFO]: F14 joined the game",
  "[13:18:03] [Server thread/INFO]: F15 joined the game",
  "[13:18:05] [Server thread/INFO]: F16 joined the game",
  "[13:18:08] [Server thread/INFO]: F17 joined the game",
  "[13:18:10] [Server thread/INFO]: F18 joined the game",
  "[13:18:13] [Server thread/INFO]: F19 joined the game",
  "[13:24:10] [Server thread/INFO]: F5 joined the game",
  "[13:24:13] [Server thread/INFO]: F1 joined the game",
  "[13:24:16] [Server thread/INFO]: F5 joined the game",
  "[13:24:24] [Server thread/INFO]: F17 joined the game",
  "[13:24:28] [Server thread/INFO]: F10 joined the game",
  "[13:24:30] [Server thread/INFO]: F5 joined the game",
  "[13:24:33] [Server thread/INFO]: F17 joined the game",
  "[13:24:34] [Server thread/INFO]: F10 joined the game",
  "[13:24:36] [Server thread/INFO]: F5 joined the game",
  "[13:24:42] [Server thread/INFO]: F10 joined the game",
  "[13:24:50] [Server thread/INFO]: F10 joined the game",
  "[13:24:54] [Server thread/INFO]: F5 joined the game",
  "[13:25:04] [Server thread/INFO]: F14 joined the game",
  "[13:25:39] [Server thread/INFO]: F14 joined the game",
  "[13:25:53] [Server thread/INFO]: F14 joined the game",
  "[13:26:01] [Server thread/INFO]: F14 joined the game",
  "[13:26:12] [Server thread/INFO]: F11 joined the game",
  "[13:26:32] [Server thread/INFO]: F5 joined the game",
  "[13:27:08] [Server thread/INFO]: F16 joined the game",
  "[13:27:09] [Server thread/INFO]: F13 joined the game",
  "[13:27:18] [Server thread/INFO]: F9 joined the game",
  "[13:27:22] [Server thread/INFO]: F5 joined the game",
]

const REAL_ARC = [6,2,0,14,4,8,0,32,0,0,8,10,0,42,0,8,6,1,0,0,5,11,0,1,21,5,0,0,0,0,0,0,2,7,0,13,2,1,2,5,4,10,27,0,0,5,0,1,2,2,0,0,8,0,4,2,0,10,6,0,17,1,1,5,0,5,10,0,0,2]

test('REAL faces byte-exact - the storm eighth breath the eighth order statistic prices', () => {
  // the columns the archive voices - the census the value byte-exact
  // keeps (the F501 the opener the REAL 6 the above-dialog prices, the
  // F508 the second-tallest 32, the F514 the ceiling 42, the F524 the
  // under face the 1 under the 4, the F549 and the F550 the held pair
  // the twos keep, the F563 the 17 the above-dialog, the F569 the 10
  // the elder tail, the F572 the fresh tail the REAL 2 the
  // fire-2143 ledger keeps)
  const pins = [[REAL_F501, 6], [REAL_F508, 32], [REAL_F514, 42], [REAL_F524, 1], [REAL_F542, 10], [REAL_F549, 2], [REAL_F550, 2], [REAL_F563, 17], [REAL_F569, 10], [REAL_F572, 2]]
  for (const [col, want] of pins) {
    assert.equal(rejoinStormEighthBreathCensus(col).rejoinStormEighthBreath, want)
  }
})

test('the BOUND + DIALOG + CEILING laws - the edges the eighth order statistic bounds keep', () => {
  // the storm hand the fixtures re-voice inline - the BOUND law the
  // .358 storm min <= eighth <= the .352 re-join gap and eighth <= the
  // .350 span's own sum-law every voiced fixture (the REAL archive
  // audit GREEN the probe keeps)
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
      eighth: gaps.length > 7 ? gaps[7] : 0,
      count: gaps.length,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      gapsum: gaps.reduce((a, b) => a + b, 0),
      seventh: rejoinStormSeventhBreathCensus(lines).rejoinStormSeventhBreath
    }
  }
  const cols = [REAL_F501, REAL_F508, REAL_F514, REAL_F524, REAL_F542, REAL_F549, REAL_F550, REAL_F563, REAL_F569, REAL_F572]
  for (const col of cols) {
    const r = read(col)
    const eighth = rejoinStormEighthBreathCensus(col).rejoinStormEighthBreath
    assert.equal(eighth, r.eighth)
    // the bound the VOICED faces price (the fewer-than-eight-gaps face
    // the lawful zero the bounds keep - the no-list-sample face the
    // min/max never bound)
    if (r.count >= 8) {
      assert.ok(eighth >= r.min && eighth <= r.max, `bound ${eighth} in [${r.min},${r.max}]`)
      assert.ok(eighth <= r.gapsum)
    } else {
      assert.equal(eighth, 0)
    }
  }
  // the DIALOG's own edges the fixtures voice: the F514 above face
  // (42 ABOVE the 7 the ceiling face) and the F524 under face (1
  // UNDER the 4) and the F538's own level the module prices - no
  // constant order the honest seat prices
  const above = read(REAL_F514)
  assert.ok(above.eighth > above.seventh) // the F514 42 > 7 the ceiling
  const under = read(REAL_F524)
  assert.ok(under.eighth < under.seventh) // the F524 1 < 4
  const fresh = read(REAL_F572)
  assert.ok(fresh.eighth > fresh.seventh) // the F572 2 > 1 the fresh tail
  assert.equal(rejoinStormEighthBreathCensus(REAL_F524).rejoinStormEighthBreath, 1)
  assert.equal(rejoinStormEighthBreathCensus(REAL_F549).rejoinStormEighthBreath, 2)
  assert.equal(rejoinStormEighthBreathCensus(REAL_F550).rejoinStormEighthBreath, 2)
  // the CEILING's own edge the fixture voices: the F514's own 42 the
  // cadence's own tallest silence the same face prices
  assert.equal(read(REAL_F514).eighth, read(REAL_F514).max)
  // the synthetics the branch battery keeps - the one-echo face the
  // lawful zero keeps, the single-gap through the seven-gap faces the
  // fewer-than-eight-gaps convention prices (the SEVENTH pair the
  // list never holds - the .372/.374/.376 convention extends, the
  // seven-gap face the .376's own 60 the elder seat voiced the eighth
  // arc never rides), the eight-gap face the EIGHTH the list voices,
  // the co-reign tie the interleave the eighth gap the FILE ORDER
  // voices, the day-cyclic wrap the eighth pair crossing the midnight
  // cell prices
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinStormEighthBreathCensus(oneEcho), { rejoinStormEighthBreath: 0 })
  const singleGap = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinStormEighthBreathCensus(singleGap), { rejoinStormEighthBreath: 0 })
  const twoGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // F3's own first join 08:01 the tally's n=1 the storm list keeps
  // out - the storm events 08:02 / 08:03 / 08:09 the gaps [60, 360]
  // the TWO gaps the EIGHTH pair the list never holds the
  // constructive zero the .372 convention extends
  assert.deepEqual(rejoinStormEighthBreathCensus(twoGaps), { rejoinStormEighthBreath: 0 })
  const threeGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 / 08:03 / 08:04 / 08:09 the gaps [60, 60,
  // 300] the THREE gaps the EIGHTH pair the list never holds - the
  // constructive zero the .372 convention extends
  assert.deepEqual(rejoinStormEighthBreathCensus(threeGaps), { rejoinStormEighthBreath: 0 })
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
  // [60, 60, 60, 240] the FOUR gaps the EIGHTH pair the list never
  // holds - the constructive zero the .372 convention extends
  assert.deepEqual(rejoinStormEighthBreathCensus(fourGaps), { rejoinStormEighthBreath: 0 })
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
  // the gaps [60, 60, 60, 60, 180] the FIVE gaps the EIGHTH pair
  // the list never holds - the constructive zero the .372 convention
  // extends
  assert.deepEqual(rejoinStormEighthBreathCensus(fiveGaps), { rejoinStormEighthBreath: 0 })
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
  // EIGHTH pair the list never holds - the constructive zero the
  // .372 convention extends (the same face the .374's own 180 the
  // sixth seat priced the seventh and the eighth arcs never ride -
  // the honest distinction the seats price)
  assert.deepEqual(rejoinStormEighthBreathCensus(sixGaps), { rejoinStormEighthBreath: 0 })
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
  // 60, 60, 60] the SEVEN gaps the EIGHTH pair the list never holds
  // - the constructive zero (the same face the .376's own seventh 60
  // the elder seat voiced the honest distinction the seats price)
  assert.deepEqual(rejoinStormEighthBreathCensus(sevenGaps), { rejoinStormEighthBreath: 0 })
  const eightGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:05:00] [Server thread/INFO]: F3 joined the game',
    '[08:06:00] [Server thread/INFO]: F3 joined the game',
    '[08:07:00] [Server thread/INFO]: F3 joined the game',
    '[08:08:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game',
    '[08:10:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 through 08:10:30 the gaps [60, 60, 60,
  // 60, 60, 60, 60, 90] the EIGHTH pair 90 the list voices (the
  // 08:10:30 event the cadence keeps - the elder seven-gap face's own
  // 60 the seventh seat priced the eighth 90 the fresh seat prices)
  assert.deepEqual(rejoinStormEighthBreathCensus(eightGaps), { rejoinStormEighthBreath: 90 })
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
    '[09:34:00] [Server thread/INFO]: F7 joined the game',
    '[09:41:00] [Server thread/INFO]: F3 joined the game'
  ]
  // F3's and F7's own co-reign the tie keeps - the storm events the
  // FILE ORDER rides (F3 09:04 / F7 09:07 / F3 09:08 / F7 09:14 / F3
  // 09:15 / F7 09:21 / F3 09:27 / F7 09:34 / F3 09:41) the gaps
  // [180, 60, 360, 60, 360, 360, 420, 420] the EIGHTH 420 the
  // interleave voices (the elder seven-gap face the seventh 420 the
  // .376 seat priced the eighth extends)
  assert.deepEqual(rejoinStormEighthBreathCensus(coReign), { rejoinStormEighthBreath: 420 })
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
    '[00:09:30] [Server thread/INFO]: F3 joined the game',
    '[00:11:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the day-cyclic wrap the .350 precedent keeps - the EIGHTH pair
  // crosses the midnight cell (the storm events 08:02 / 08:03 /
  // 08:04 / 23:59:30 / 00:01:30 / 00:05:30 / 00:07:30 / 00:09:30 /
  // 00:11:30 the gaps [60, 60, 57330, 120, 240, 120, 120, 120] -
  // 86370 - 29040 = 57330 the third pair rides, 90 + 86400 - 86370 =
  // 120 the fourth rides, 330 - 90 = 240 the fifth rides, 450 - 330
  // = 120 the sixth rides, 570 - 450 = 120 the seventh rides, 690 -
  // 570 = 120 the eighth the list voices)
  assert.deepEqual(rejoinStormEighthBreathCensus(wrap), { rejoinStormEighthBreath: 120 })
})

test('REAL 70-face window arc byte-exact - 17 classes the seat LIVE', () => {
  // the arc the fieldproof re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 70)
  assert.equal(classes.size, 17)
  assert.equal(Math.min(...arc), 0) // the TWENTY-SEVEN-face gravity keeps (the constructive twenty-seven the whole zero class prices)
  assert.equal(Math.max(...arc), 42) // the tallest voiced value F514 keeps
  // the zero faces the honest distinction prices (the REAL zero NO
  // face the window keeps - the .376 arc's own THREE the F531/F533/
  // F550 the eighth does NOT inherit: the F531 seven-gap storm the
  // branch rides, the F533 and the F550 the eighth pairs the younger
  // gaps the cadence prices)
  assert.equal(arc[0], 6) // the F501 opener the REAL above-dialog the 6 > 2 prices
  assert.equal(arc[1], 2) // the F502 keeps
  assert.equal(arc[2], 0) // the F503 constructive four-gap
  assert.equal(arc[3], 14) // the F504 the under-dialog keeps
  assert.equal(arc[7], 32) // the F508 the second-tallest voiced
  assert.equal(arc[13], 42) // the F514 the ceiling-face the tallest
  assert.equal(arc[23], 1) // the F524 keeps
  assert.equal(arc[41], 10) // the F542 keeps
  assert.equal(arc[48], 2) // the F549 the held pair keeps
  assert.equal(arc[49], 2) // the F550 the held pair keeps
  assert.equal(arc[60], 17) // the F563 keeps
  assert.equal(arc[66], 10) // the F569 the elder tail
  assert.equal(arc[68], 0) // the F571 the constructive tail
  assert.equal(arc[69], 2) // the F572 fresh tail the REAL voiced
  // the held law: TWELVE held pairs the 70-face window keeps - the
  // TEN constructive-zero pairs the F509/F510 and the F519/F520 and
  // the F527/F528 and the F528/F529 and the F529/F530 and the
  // F530/F531 and the F531/F532 and the F544/F545 and the F551/F553
  // (the hole-aware adjacency the F-order keeps) and the F570/F571,
  // the TWO REAL pairs the F549/F550 twos and the F564/F565 ones (the
  // .376 arc's own TEN the eighth arc does NOT inherit - the
  // F563/F564 nines the eighth 17/1 the honest break the seats
  // price)
  let held = 0
  for (let i = 1; i < arc.length; i++) if (arc[i] === arc[i - 1]) held++
  assert.equal(held, 12)
  // the multi-class law: the mode candidate the honest probe DECLINED
  // - the twenty-seven-face zero the tie-degenerate gravity the
  // family prices
  const tally = new Map()
  for (const v of arc) tally.set(v, (tally.get(v) || 0) + 1)
  assert.equal(tally.get(0), 27)
  assert.equal(tally.get(2), 8)
  assert.equal(tally.get(1), 6)
  assert.equal(tally.get(5), 6)
  assert.equal(tally.get(8), 4)
  assert.equal(tally.get(10), 4)
  assert.equal(tally.get(4), 3)
  assert.equal(tally.get(6), 3)
  assert.equal(tally.get(42), 1)
  assert.equal(tally.get(32), 1)
  assert.equal(tally.get(27), 1)
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  // the census the strict frame keeps - the deformed lines the skip
  // rides, the honest zero the no-join face keeps
  assert.equal(rejoinStormEighthBreathCensus(null), null)
  assert.equal(rejoinStormEighthBreathCensus(undefined), null)
  assert.equal(rejoinStormEighthBreathCensus('not an array'), null)
  assert.equal(rejoinStormEighthBreathCensus(42), null)
  assert.deepEqual(rejoinStormEighthBreathCensus([]), { rejoinStormEighthBreath: 0 })
  assert.deepEqual(rejoinStormEighthBreathCensus(['', 'no joins here', null, 42]), { rejoinStormEighthBreath: 0 })
  // the malformed clock cells the strict frame never rides
  assert.deepEqual(rejoinStormEighthBreathCensus([
    '[24:00:00] [Server thread/INFO]: F3 joined the game', // the hour 24 the day never keeps
    '[12:60:00] [Server thread/INFO]: F3 joined the game', // the minute 60 the clock never keeps
    '[12:00:60] [Server thread/INFO]: F3 joined the game', // the second 60 the clock never keeps
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormEighthBreath: 0 })
  // the non-join lanes the lane law keeps out
  assert.deepEqual(rejoinStormEighthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 left the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the team', // the near-join the frame never rides
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormEighthBreath: 0 })
  // the kernel prefix the deformed line the skip keeps
  assert.deepEqual(rejoinStormEighthBreathCensus([
    'kernel: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormEighthBreath: 0 })
  // the multi-line join the trailing spaces the strict frame never rides
  assert.deepEqual(rejoinStormEighthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 joined the game ',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormEighthBreath: 0 })
})

test('fence - every branch the gap words own integer law keeps', () => {
  const c = (n) => ({ rejoinStormEighthBreath: n })
  assert.equal(rejoinStormEighthBreathConsistent(null), false)
  assert.equal(rejoinStormEighthBreathConsistent(undefined), false)
  assert.equal(rejoinStormEighthBreathConsistent('nope'), false)
  assert.equal(rejoinStormEighthBreathConsistent({}), false)
  assert.equal(rejoinStormEighthBreathConsistent({ back: c(0), prev: c(0) }), false) // the cur missing
  assert.equal(rejoinStormEighthBreathConsistent({ back: c(-1), prev: c(0), cur: c(0) }), false) // the negative the fence never rides
  assert.equal(rejoinStormEighthBreathConsistent({ back: c(0), prev: c(86399), cur: c(0) }), true) // the day ceiling 86399 the fence keeps (the .368 fence-fix lesson the same boundary voices)
  assert.equal(rejoinStormEighthBreathConsistent({ back: c(0), prev: c(86400), cur: c(0) }), false) // past the day the fence declines (the fence 0..86399 the module voices - the .366 line 445 / the .367 line 593 / the .368 line 647 / the .370 line 666 / the .372 line 679 / the .374 line 745 / the .376 line 745 the same shape)
  assert.equal(rejoinStormEighthBreathConsistent({ back: c(0), prev: c(86401), cur: c(0) }), false) // past the day the fence declines
  assert.equal(rejoinStormEighthBreathConsistent({ back: c(0), prev: c(1.5), cur: c(0) }), false) // the fraction the integer law never rides
  assert.equal(rejoinStormEighthBreathConsistent({ back: c(0), prev: c(0), cur: c(0) }), true)
  assert.equal(rejoinStormEighthBreathConsistent({ back: c(86399), prev: c(0), cur: c(59) }), true)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const c = (n) => ({ rejoinStormEighthBreath: n })
  // the swell the F538->F540 faces keep (1 -> 2 (+1) -> 5 (+3))
  const swell = rejoinStormEighthBreathTrendRow({ back: c(1), prev: c(2), cur: c(5) })
  assert.ok(swell.includes('swell ran two steps deep'))
  assert.ok(swell.includes('1 -> 2 (+1) -> 5 (+3)'))
  assert.ok(swell.includes('v0.976.383'))
  // the fade the F560->F562 faces keep (10 -> 6 (-4) -> 0 (-6)
  // the two-step fade the fresh window prices)
  const fade = rejoinStormEighthBreathTrendRow({ back: c(10), prev: c(6), cur: c(0) })
  assert.ok(fade.includes('fade ran two steps deep'))
  assert.ok(fade.includes('10 -> 6 (-4) -> 0 (-6)'))
  // the swing the F503->F505 faces keep (0 -> 14 (+14) -> 4 (-10))
  const swing = rejoinStormEighthBreathTrendRow({ back: c(0), prev: c(14), cur: c(4) })
  assert.ok(swing.includes('swing'))
  assert.ok(swing.includes('0 -> 14 (+14) -> 4 (-10)'))
  // the second swing the F566->F568 faces keep (5 -> 0 (-5) -> 5 (+5))
  const swing2 = rejoinStormEighthBreathTrendRow({ back: c(5), prev: c(0), cur: c(5) })
  assert.ok(swing2.includes('swing'))
  assert.ok(swing2.includes('5 -> 0 (-5) -> 5 (+5)'))
  // the held step the honest silence keeps (the row never invents -
  // the F518/F519/F520 and the F569/F570/F571 zeros the arc keeps)
  assert.equal(rejoinStormEighthBreathTrendRow({ back: c(1), prev: c(0), cur: c(0) }), null)
  assert.equal(rejoinStormEighthBreathTrendRow({ back: c(10), prev: c(0), cur: c(0) }), null)
  // the deformed triples the fence declines
  assert.equal(rejoinStormEighthBreathTrendRow(null), null)
  assert.equal(rejoinStormEighthBreathTrendRow({ back: c(-5), prev: c(0), cur: c(0) }), null)
  // the REAL arc's own windows the rows re-voice (the census the same
  // values the arc keeps - the indexes the TRUE F-numbers price: the
  // F538/F539/F540 the c3(37/38/39), the F560/F561/F562 the
  // c3(57/58/59), the F503/F504/F505 the c3(2/3/4), the
  // F566/F567/F568 the c3(63/64/65) - the fire-1243 off-by-one
  // lesson the same hand keeps)
  const c3 = (i) => ({ rejoinStormEighthBreath: REAL_ARC[i] })
  assert.ok(rejoinStormEighthBreathTrendRow({ back: c3(37), prev: c3(38), cur: c3(39) }).includes('1 -> 2 (+1) -> 5 (+3)'))
  assert.ok(rejoinStormEighthBreathTrendRow({ back: c3(57), prev: c3(58), cur: c3(59) }).includes('10 -> 6 (-4) -> 0 (-6)'))
  assert.ok(rejoinStormEighthBreathTrendRow({ back: c3(2), prev: c3(3), cur: c3(4) }).includes('0 -> 14 (+14) -> 4 (-10)'))
  assert.ok(rejoinStormEighthBreathTrendRow({ back: c3(63), prev: c3(64), cur: c3(65) }).includes('5 -> 0 (-5) -> 5 (+5)'))
})
