import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinChampSeventhBreathCensus, rejoinChampSeventhBreathConsistent, rejoinChampSeventhBreathTrendRow } from '../../src/lib/rejoinchampseventhbreath.mjs'
import { rejoinChampSixthBreathCensus } from '../../src/lib/rejoinchampsixthbreath.mjs'

// the REAL columns the rebuilt archive keeps (the fire-0843 method the
// fire-1243/1343/1543/1743/1843/1943 fires re-ride - the faces the
// alignment byte-exact anchored and the F-map the census slide the
// ELEVEN anchors lock the same ids price: F1 = 37403158305 one hit,
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

const REAL_F506 = [
  "[00:57:33] [Server thread/INFO]: YardSurvey joined the game",
  "[00:57:45] [Server thread/INFO]: F1 joined the game",
  "[00:57:48] [Server thread/INFO]: F2 joined the game",
  "[00:57:50] [Server thread/INFO]: F3 joined the game",
  "[00:57:53] [Server thread/INFO]: F4 joined the game",
  "[00:57:55] [Server thread/INFO]: F5 joined the game",
  "[00:57:58] [Server thread/INFO]: F6 joined the game",
  "[00:58:01] [Server thread/INFO]: F7 joined the game",
  "[00:58:04] [Server thread/INFO]: F8 joined the game",
  "[00:58:06] [Server thread/INFO]: F9 joined the game",
  "[00:58:09] [Server thread/INFO]: F10 joined the game",
  "[00:58:12] [Server thread/INFO]: F11 joined the game",
  "[00:58:15] [Server thread/INFO]: F12 joined the game",
  "[00:58:18] [Server thread/INFO]: F13 joined the game",
  "[00:58:20] [Server thread/INFO]: F14 joined the game",
  "[00:58:23] [Server thread/INFO]: F15 joined the game",
  "[00:58:26] [Server thread/INFO]: F16 joined the game",
  "[00:58:28] [Server thread/INFO]: F17 joined the game",
  "[00:58:31] [Server thread/INFO]: F18 joined the game",
  "[00:58:35] [Server thread/INFO]: F19 joined the game",
  "[01:03:06] [Server thread/INFO]: F12 joined the game",
  "[01:05:34] [Server thread/INFO]: F1 joined the game",
  "[01:05:43] [Server thread/INFO]: F1 joined the game",
  "[01:05:50] [Server thread/INFO]: F1 joined the game",
  "[01:05:55] [Server thread/INFO]: F19 joined the game",
  "[01:05:56] [Server thread/INFO]: F1 joined the game",
  "[01:05:59] [Server thread/INFO]: F10 joined the game",
  "[01:06:00] [Server thread/INFO]: F1 joined the game",
  "[01:06:08] [Server thread/INFO]: F1 joined the game",
  "[01:06:15] [Server thread/INFO]: F1 joined the game",
  "[01:06:22] [Server thread/INFO]: F1 joined the game",
  "[01:06:28] [Server thread/INFO]: F1 joined the game",
  "[01:06:33] [Server thread/INFO]: F1 joined the game",
  "[01:06:34] [Server thread/INFO]: F4 joined the game",
  "[01:06:39] [Server thread/INFO]: F1 joined the game",
  "[01:07:35] [Server thread/INFO]: F7 joined the game",
  "[01:07:45] [Server thread/INFO]: F8 joined the game",
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

const REAL_F512 = [
  "[05:00:51] [Server thread/INFO]: YardSurvey joined the game",
  "[05:01:05] [Server thread/INFO]: F1 joined the game",
  "[05:01:07] [Server thread/INFO]: F2 joined the game",
  "[05:01:09] [Server thread/INFO]: F3 joined the game",
  "[05:01:12] [Server thread/INFO]: F4 joined the game",
  "[05:01:14] [Server thread/INFO]: F5 joined the game",
  "[05:01:17] [Server thread/INFO]: F6 joined the game",
  "[05:01:19] [Server thread/INFO]: F7 joined the game",
  "[05:01:22] [Server thread/INFO]: F8 joined the game",
  "[05:01:24] [Server thread/INFO]: F9 joined the game",
  "[05:01:27] [Server thread/INFO]: F10 joined the game",
  "[05:01:30] [Server thread/INFO]: F11 joined the game",
  "[05:01:32] [Server thread/INFO]: F12 joined the game",
  "[05:01:35] [Server thread/INFO]: F13 joined the game",
  "[05:01:37] [Server thread/INFO]: F14 joined the game",
  "[05:01:40] [Server thread/INFO]: F15 joined the game",
  "[05:01:42] [Server thread/INFO]: F16 joined the game",
  "[05:01:45] [Server thread/INFO]: F17 joined the game",
  "[05:01:49] [Server thread/INFO]: F18 joined the game",
  "[05:01:51] [Server thread/INFO]: F19 joined the game",
  "[05:05:44] [Server thread/INFO]: F2 joined the game",
  "[05:07:51] [Server thread/INFO]: F19 joined the game",
  "[05:07:51] [Server thread/INFO]: F10 joined the game",
  "[05:08:00] [Server thread/INFO]: F10 joined the game",
  "[05:08:13] [Server thread/INFO]: F9 joined the game",
  "[05:08:21] [Server thread/INFO]: F9 joined the game",
  "[05:08:28] [Server thread/INFO]: F9 joined the game",
  "[05:08:47] [Server thread/INFO]: F19 joined the game",
  "[05:08:57] [Server thread/INFO]: F9 joined the game",
  "[05:09:14] [Server thread/INFO]: F9 joined the game",
  "[05:09:25] [Server thread/INFO]: F9 joined the game",
  "[05:09:33] [Server thread/INFO]: F9 joined the game",
  "[05:09:35] [Server thread/INFO]: F12 joined the game",
  "[05:09:47] [Server thread/INFO]: F9 joined the game",
  "[05:09:48] [Server thread/INFO]: F2 joined the game",
  "[05:09:57] [Server thread/INFO]: F12 joined the game",
  "[05:09:59] [Server thread/INFO]: F9 joined the game",
  "[05:10:11] [Server thread/INFO]: F9 joined the game",
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

const REAL_F536 = [
  "[02:19:44] [Server thread/INFO]: YardSurvey joined the game",
  "[02:19:59] [Server thread/INFO]: F1 joined the game",
  "[02:20:01] [Server thread/INFO]: F2 joined the game",
  "[02:20:03] [Server thread/INFO]: F3 joined the game",
  "[02:20:06] [Server thread/INFO]: F4 joined the game",
  "[02:20:08] [Server thread/INFO]: F5 joined the game",
  "[02:20:11] [Server thread/INFO]: F6 joined the game",
  "[02:20:13] [Server thread/INFO]: F7 joined the game",
  "[02:20:16] [Server thread/INFO]: F8 joined the game",
  "[02:20:18] [Server thread/INFO]: F9 joined the game",
  "[02:20:21] [Server thread/INFO]: F10 joined the game",
  "[02:20:23] [Server thread/INFO]: F11 joined the game",
  "[02:20:26] [Server thread/INFO]: F12 joined the game",
  "[02:20:30] [Server thread/INFO]: F13 joined the game",
  "[02:20:32] [Server thread/INFO]: F14 joined the game",
  "[02:20:35] [Server thread/INFO]: F15 joined the game",
  "[02:20:37] [Server thread/INFO]: F16 joined the game",
  "[02:20:40] [Server thread/INFO]: F17 joined the game",
  "[02:20:42] [Server thread/INFO]: F18 joined the game",
  "[02:20:45] [Server thread/INFO]: F19 joined the game",
  "[02:24:46] [Server thread/INFO]: F16 joined the game",
  "[02:24:52] [Server thread/INFO]: F17 joined the game",
  "[02:25:10] [Server thread/INFO]: F13 joined the game",
  "[02:25:11] [Server thread/INFO]: F2 joined the game",
  "[02:25:59] [Server thread/INFO]: F13 joined the game",
  "[02:27:00] [Server thread/INFO]: F17 joined the game",
  "[02:27:17] [Server thread/INFO]: F4 joined the game",
  "[02:27:21] [Server thread/INFO]: F16 joined the game",
  "[02:27:34] [Server thread/INFO]: F4 joined the game",
  "[02:27:45] [Server thread/INFO]: F13 joined the game",
  "[02:27:52] [Server thread/INFO]: F13 joined the game",
  "[02:28:44] [Server thread/INFO]: F17 joined the game",
  "[02:28:54] [Server thread/INFO]: F17 joined the game",
  "[02:29:03] [Server thread/INFO]: F17 joined the game",
  "[02:29:13] [Server thread/INFO]: F4 joined the game",
  "[02:29:19] [Server thread/INFO]: F13 joined the game",
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

const REAL_F571 = [
  "[12:21:04] [Server thread/INFO]: YardSurvey joined the game",
  "[12:21:17] [Server thread/INFO]: F1 joined the game",
  "[12:21:19] [Server thread/INFO]: F2 joined the game",
  "[12:21:22] [Server thread/INFO]: F3 joined the game",
  "[12:21:24] [Server thread/INFO]: F4 joined the game",
  "[12:21:26] [Server thread/INFO]: F5 joined the game",
  "[12:21:29] [Server thread/INFO]: F6 joined the game",
  "[12:21:32] [Server thread/INFO]: F7 joined the game",
  "[12:21:34] [Server thread/INFO]: F8 joined the game",
  "[12:21:37] [Server thread/INFO]: F9 joined the game",
  "[12:21:39] [Server thread/INFO]: F10 joined the game",
  "[12:21:42] [Server thread/INFO]: F11 joined the game",
  "[12:21:44] [Server thread/INFO]: F12 joined the game",
  "[12:21:47] [Server thread/INFO]: F13 joined the game",
  "[12:21:49] [Server thread/INFO]: F14 joined the game",
  "[12:21:52] [Server thread/INFO]: F15 joined the game",
  "[12:21:56] [Server thread/INFO]: F16 joined the game",
  "[12:21:58] [Server thread/INFO]: F17 joined the game",
  "[12:22:01] [Server thread/INFO]: F18 joined the game",
  "[12:22:03] [Server thread/INFO]: F19 joined the game",
  "[12:28:03] [Server thread/INFO]: F1 joined the game",
  "[12:28:08] [Server thread/INFO]: F1 joined the game",
  "[12:28:20] [Server thread/INFO]: F1 joined the game",
  "[12:29:55] [Server thread/INFO]: F1 joined the game",
  "[12:29:55] [Server thread/INFO]: F3 joined the game",
  "[12:30:17] [Server thread/INFO]: F3 joined the game",
  "[12:30:41] [Server thread/INFO]: F17 joined the game",
]

const REAL_ARC = [0,0,0,0,0,7,0,32,0,0,0,14,0,10,0,0,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,10,8,0,0,0,8,20,0,0,0,10,0,0,1,0,0,0,10,0,4,0,0,10,0,0,7,0,0,8,0,0,9,0,0]

test('REAL faces byte-exact - the champion seventh breath the seventh order statistic prices', () => {
  // the columns the archive voices - the census the value byte-exact
  // keeps (the F501 the opener the constructive zero the three-gap
  // cadence keeps, the F508 the tallest 32, the F536 the dialog under
  // face the 10 under the 52, the F549 the nine-name co-reign the 1
  // the deepest below, the F571 the fresh tail the constructive zero
  // the F1 three-gap cadence keeps)
  const pins = [[REAL_F501, 0], [REAL_F506, 7], [REAL_F508, 32], [REAL_F512, 14], [REAL_F524, 13], [REAL_F536, 10], [REAL_F549, 1], [REAL_F563, 7], [REAL_F569, 9], [REAL_F571, 0]]
  for (const [col, want] of pins) {
    assert.equal(rejoinChampSeventhBreathCensus(col).rejoinChampSeventhBreath, want)
  }
})

test('the BOUND + DIALOG + CEILING laws - the edges the seventh order statistic bounds keep', () => {
  // the champion cadence hand the fixtures re-voice inline - the BOUND
  // law the .359 champ min <= seventh <= the .353 champ gap and
  // seventh <= the .351 champ stretch every voiced fixture (the
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
      seventh: gaps.length > 6 ? gaps[6] : 0,
      count: gaps.length,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      stretch: cevts.length >= 2 ? cevts[cevts.length - 1].s - cevts[0].s : 0,
      sixth: rejoinChampSixthBreathCensus(lines).rejoinChampSixthBreath
    }
  }
  const cols = [REAL_F501, REAL_F506, REAL_F508, REAL_F512, REAL_F524, REAL_F536, REAL_F549, REAL_F563, REAL_F569, REAL_F571]
  for (const col of cols) {
    const r = read(col)
    const seventh = rejoinChampSeventhBreathCensus(col).rejoinChampSeventhBreath
    assert.equal(seventh, r.seventh)
    // the bound the VOICED faces price (the fewer-than-seven-gaps face
    // the lawful zero the bounds keep - the no-list-sample face the
    // min/max never bound)
    if (r.count >= 7) {
      assert.ok(seventh >= r.min && seventh <= r.max, `bound ${seventh} in [${r.min},${r.max}]`)
      assert.ok(seventh <= r.stretch)
    } else {
      assert.equal(seventh, 0)
    }
  }
  // the DIALOG's own edges the fixtures voice: the F536 under face
  // (10 UNDER the 52) and
  // the F549 under face (1 UNDER the 2) and the F563 under face (7
  // UNDER the 13) and the F569 under face (9 UNDER the 11) and the
  // F508 above face (32 ABOVE the 17 the tallest face) and the F512
  // above face (14 ABOVE the 8) and the F524 above face (13 ABOVE the
  // 11) and the F506 level face (7 LEVEL the 7 the REAL same-tempo
  // keeps) - the F514's and the F566's own under faces the archive
  // voices the fixture pins the F536 under side prices
  assert.ok(read(REAL_F536).seventh < read(REAL_F536).sixth)
  assert.ok(read(REAL_F549).seventh < read(REAL_F549).sixth)
  assert.ok(read(REAL_F563).seventh < read(REAL_F563).sixth)
  assert.ok(read(REAL_F569).seventh < read(REAL_F569).sixth)
  assert.ok(read(REAL_F508).seventh > read(REAL_F508).sixth)
  assert.ok(read(REAL_F512).seventh > read(REAL_F512).sixth)
  assert.ok(read(REAL_F524).seventh > read(REAL_F524).sixth)
  assert.equal(read(REAL_F506).seventh, read(REAL_F506).sixth)
  // the CEILING's own absence: every voiced fixture the seventh BELOW
  // the cadence's own max prices (the F508's own 32 the max 64 the
  // BELOW keeps, the F549's own 1 the max 310 the deepest below) - the
  // .374 storm arc's own TWO the F562/F569 ceiling-faces the seventh
  // never inherits
  assert.ok(read(REAL_F508).seventh < read(REAL_F508).max)
  assert.ok(read(REAL_F549).seventh < read(REAL_F549).max)
  // the REAL zero vs the CONSTRUCTIVE zero: the window the REAL zero
  // NO face keeps (the honest absence - the .374 storm arc's own THREE
  // the F531/F533/F550 the champion hand never voices), the F501 the
  // three-gap cadence the seventh pair the list never holds the
  // constructive branch keeps, the F549 the seven-gap cadence the 1
  // the list voices (the REAL voiced the zero branch never rides)
  assert.ok(read(REAL_F549).count >= 7)
  assert.ok(read(REAL_F549).seventh > 0)
  assert.ok(read(REAL_F501).count < 7)
  assert.equal(read(REAL_F501).seventh, 0)
  // the synthetic branches: the one-echo face the zero keeps, the
  // single-gap and the two-gap and the three-gap and the four-gap and
  // the five-gap and the six-gap faces the constructive keeps (the
  // seventh pair the list never holds - the .372/.374/.376 convention
  // extends, the six-gap face the elder sixth seat the 120 voices the
  // honest distinction the seats price), the seven-gap face the
  // seventh the list voices, the co-reign tie the interleave the
  // seventh gap the FILE ORDER voices, the sub-peak name the champ
  // list never rides, the day-cyclic wrap the seventh pair crossing
  // the midnight cell prices
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinChampSeventhBreathCensus(oneEcho), { rejoinChampSeventhBreath: 0 })
  const singleGap = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinChampSeventhBreathCensus(singleGap), { rejoinChampSeventhBreath: 0 })
  const twoGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // F3's own first join 08:01 the tally's n=1 the champ list keeps
  // out - the champ events 08:02 / 08:03 / 08:09 the gaps [60, 360]
  // the TWO gaps the seventh pair the list never holds the constructive
  // zero the .372/.374/.376 convention extends
  assert.deepEqual(rejoinChampSeventhBreathCensus(twoGaps), { rejoinChampSeventhBreath: 0 })
  const threeGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the champ events 08:02 / 08:03 / 08:04 / 08:09 the gaps [60, 60,
  // 300] the THREE gaps the SEVENTH pair the list never holds - the
  // constructive zero the convention extends (the sixth breath's own
  // 0 the elder seat prices)
  assert.deepEqual(rejoinChampSeventhBreathCensus(threeGaps), { rejoinChampSeventhBreath: 0 })
  const fourGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:05:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the champ events 08:02 / 08:03 / 08:04 / 08:05 / 08:09 the gaps
  // [60, 60, 60, 240] the FOUR gaps the SEVENTH pair the list never
  // holds - the constructive zero the convention extends
  assert.deepEqual(rejoinChampSeventhBreathCensus(fourGaps), { rejoinChampSeventhBreath: 0 })
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
  // the champ events 08:02 / 08:03 / 08:04 / 08:05 / 08:06 / 08:09
  // the gaps [60, 60, 60, 60, 180] the FIVE gaps the SEVENTH pair the
  // list never holds - the constructive zero the convention extends
  assert.deepEqual(rejoinChampSeventhBreathCensus(fiveGaps), { rejoinChampSeventhBreath: 0 })
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
  // the champ events 08:02 / 08:03 / 08:04 / 08:05 / 08:06 / 08:07 /
  // 08:09 the gaps [60, 60, 60, 60, 60, 120] the SIX gaps the SEVENTH
  // pair the list never holds - the constructive zero (the elder
  // sixth seat the 120 voices the honest distinction the seats price)
  assert.deepEqual(rejoinChampSeventhBreathCensus(sixGaps), { rejoinChampSeventhBreath: 0 })
  assert.equal(rejoinChampSixthBreathCensus(sixGaps).rejoinChampSixthBreath, 120)
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
    '[08:20:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the champ events 08:02 / 08:03 / 08:04 / 08:05 / 08:06 / 08:07 /
  // 08:08 / 08:20 the gaps [60, 60, 60, 60, 60, 60, 720] the SEVENTH
  // pair 720 the list voices (the 08:08 event the cadence keeps - the
  // elder six-gap face's own 120 the sixth seat priced the seventh
  // extends)
  assert.deepEqual(rejoinChampSeventhBreathCensus(sevenGaps), { rejoinChampSeventhBreath: 720 })
  const coReign = [
    '[09:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[09:01:00] [Server thread/INFO]: F3 joined the game',
    '[09:02:00] [Server thread/INFO]: F7 joined the game',
    '[09:04:00] [Server thread/INFO]: F3 joined the game',
    '[09:05:00] [Server thread/INFO]: F7 joined the game',
    '[09:08:00] [Server thread/INFO]: F3 joined the game',
    '[09:10:00] [Server thread/INFO]: F7 joined the game',
    '[09:15:00] [Server thread/INFO]: F3 joined the game',
    '[09:17:00] [Server thread/INFO]: F7 joined the game',
    '[09:21:00] [Server thread/INFO]: F3 joined the game',
    '[09:23:00] [Server thread/INFO]: F7 joined the game',
    '[09:27:00] [Server thread/INFO]: F3 joined the game',
    '[09:29:00] [Server thread/INFO]: F7 joined the game'
  ]
  // F3's and F7's own co-reign the tie keeps - the champ events the
  // FILE ORDER rides (F3 09:04 / F7 09:05 / F3 09:08 / F7 09:10 / F3
  // 09:15 / F7 09:17 / F3 09:21 / F7 09:23 / F3 09:27 / F7 09:29) the
  // gaps [60, 180, 120, 300, 120, 240, 120, 240, 120] the SEVENTH 120
  // the interleave voices (the elder sixth seat the 240 the honest
  // distinction the seats price)
  assert.deepEqual(rejoinChampSeventhBreathCensus(coReign), { rejoinChampSeventhBreath: 120 })
  const coReignSub = [
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
  // the sub-peak name the champ list never rides - the F7's own three
  // beyond-first the F3's four the peak prices (the co-reign the tie
  // never holds) - the champ events F3's own four re-joins the gaps
  // [240, 420, 720] the THREE gaps the SEVENTH pair the list never
  // holds the constructive zero the branch keeps
  assert.deepEqual(rejoinChampSeventhBreathCensus(coReignSub), { rejoinChampSeventhBreath: 0 })
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
    '[00:11:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the day-cyclic wrap the .350 precedent keeps - the SEVENTH pair
  // crosses the midnight cell (the champ events 08:02 / 08:03 /
  // 08:04 / 23:59:30 / 00:01:30 / 00:05:30 / 00:07:30 / 00:11:30 the
  // gaps [60, 60, 57330, 120, 240, 120, 240] - 86370 - 29040 = 57330
  // the third pair rides, 90 + 86400 - 86370 = 120 the fourth rides,
  // 330 - 90 = 240 the fifth rides, 450 - 330 = 120 the sixth rides,
  // 690 - 450 = 240 the seventh the list voices)
  assert.deepEqual(rejoinChampSeventhBreathCensus(wrap), { rejoinChampSeventhBreath: 240 })
})

test('REAL 69-face window arc byte-exact - 11 classes the seat LIVE', () => {
  // the arc the fieldproof re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 69)
  assert.equal(classes.size, 11)
  assert.equal(Math.min(...arc), 0) // the FIFTY-TWO-face zero keeps (the constructive fifty-two - the REAL zero the window never keeps)
  assert.equal(Math.max(...arc), 32) // the tallest voiced value F508 keeps
  // the zero faces the honest absence prices (the REAL zero NO face
  // keeps - the .374 storm arc's own THREE the F531/F533/F550 the
  // champion hand never voices, the constructive fifty-two the branch
  // rides)
  let zeros = 0
  for (const v of arc) if (v === 0) zeros++
  assert.equal(zeros, 52)
  assert.equal(arc[0], 0) // the F501 opener the constructive three-gap
  assert.equal(arc[5], 7) // the F506 the REAL level face
  assert.equal(arc[7], 32) // the F508 the tallest voiced
  assert.equal(arc[11], 14) // the F512 the above face
  assert.equal(arc[13], 10) // the F514 the under face
  assert.equal(arc[23], 13) // the F524 the above face
  assert.equal(arc[35], 10) // the F536 the under face the dialog prices
  assert.equal(arc[36], 8) // the F537 the level face
  assert.equal(arc[40], 8) // the F541 the level face
  assert.equal(arc[41], 20) // the F542 the above face
  assert.equal(arc[45], 10) // the F546 the level face
  assert.equal(arc[48], 1) // the F549 the deepest below
  assert.equal(arc[52], 10) // the F554 the above face
  assert.equal(arc[54], 4) // the F556 the level face
  assert.equal(arc[57], 10) // the F560 the above face
  assert.equal(arc[60], 7) // the F563 the under face
  assert.equal(arc[63], 8) // the F566 the under face
  assert.equal(arc[66], 9) // the F569 the under face the elder tail
  assert.equal(arc[68], 0) // the F571 fresh tail the constructive
  // the held law: NO REAL held pair the 69-face window keeps - every
  // voiced face the neighbours the honest break the seats price; the
  // constructive-zero pairs THIRTY-SIX the branch keeps
  let held = 0
  let heldReal = 0
  for (let i = 1; i < arc.length; i++) {
    if (arc[i] === arc[i - 1]) {
      held++
      if (arc[i] > 0) heldReal++
    }
  }
  assert.equal(held, 36)
  assert.equal(heldReal, 0)
  // the multi-class law: the mode candidate the honest probe DECLINED
  // - the fifty-two-face zero the tie-degenerate gravity the family prices
  const tally = new Map()
  for (const v of arc) tally.set(v, (tally.get(v) || 0) + 1)
  assert.equal(tally.get(0), 52)
  assert.equal(tally.get(10), 5)
  assert.equal(tally.get(8), 3)
  assert.equal(tally.get(7), 2)
  assert.equal(tally.get(32), 1)
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  // the census the strict frame keeps - the deformed lines the skip
  // rides, the honest zero the no-join face keeps
  assert.equal(rejoinChampSeventhBreathCensus(null), null)
  assert.equal(rejoinChampSeventhBreathCensus(undefined), null)
  assert.equal(rejoinChampSeventhBreathCensus('not an array'), null)
  assert.equal(rejoinChampSeventhBreathCensus(42), null)
  assert.deepEqual(rejoinChampSeventhBreathCensus([]), { rejoinChampSeventhBreath: 0 })
  assert.deepEqual(rejoinChampSeventhBreathCensus(['', 'no joins here', null, 42]), { rejoinChampSeventhBreath: 0 })
  // the malformed clock cells the strict frame never rides
  assert.deepEqual(rejoinChampSeventhBreathCensus([
    '[24:00:00] [Server thread/INFO]: F3 joined the game', // the hour 24 the day never keeps
    '[12:60:00] [Server thread/INFO]: F3 joined the game', // the minute 60 the clock never keeps
    '[12:00:60] [Server thread/INFO]: F3 joined the game', // the second 60 the clock never keeps
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampSeventhBreath: 0 })
  // the non-join lanes the lane law keeps out
  assert.deepEqual(rejoinChampSeventhBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 left the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the team', // the near-join the frame never rides
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampSeventhBreath: 0 })
  // the kernel prefix the deformed line the skip keeps
  assert.deepEqual(rejoinChampSeventhBreathCensus([
    'kernel: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampSeventhBreath: 0 })
  // the multi-line join the trailing spaces the strict frame never rides
  assert.deepEqual(rejoinChampSeventhBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 joined the game ',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampSeventhBreath: 0 })
})

test('fence - every branch the gap words own integer law keeps', () => {
  const c = (n) => ({ rejoinChampSeventhBreath: n })
  assert.equal(rejoinChampSeventhBreathConsistent(null), false)
  assert.equal(rejoinChampSeventhBreathConsistent(undefined), false)
  assert.equal(rejoinChampSeventhBreathConsistent('nope'), false)
  assert.equal(rejoinChampSeventhBreathConsistent({}), false)
  assert.equal(rejoinChampSeventhBreathConsistent({ back: c(0), prev: c(0) }), false) // the cur missing
  assert.equal(rejoinChampSeventhBreathConsistent({ back: c(-1), prev: c(0), cur: c(0) }), false) // the negative the fence never rides
  assert.equal(rejoinChampSeventhBreathConsistent({ back: c(0), prev: c(86399), cur: c(0) }), true) // the day ceiling 86399 the fence keeps (the .368 fence-fix lesson the same boundary voices)
  assert.equal(rejoinChampSeventhBreathConsistent({ back: c(0), prev: c(86400), cur: c(0) }), false) // past the day the fence declines (the fence 0..86399 the module voices - the .366/.367/.368/.370/.372/.374/.376 lines the same shape)
  assert.equal(rejoinChampSeventhBreathConsistent({ back: c(0), prev: c(86401), cur: c(0) }), false) // past the day the fence declines
  assert.equal(rejoinChampSeventhBreathConsistent({ back: c(0), prev: c(1.5), cur: c(0) }), false) // the fraction the integer law never rides
  assert.equal(rejoinChampSeventhBreathConsistent({ back: c(0), prev: c(0), cur: c(0) }), true)
  assert.equal(rejoinChampSeventhBreathConsistent({ back: c(86399), prev: c(0), cur: c(59) }), true)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const c = (n) => ({ rejoinChampSeventhBreath: n })
  // the swell the REAL window NEVER keeps - the honest absence the
  // synthetic voices (the arc's own rises the single-step the faces
  // ride: the F548->F549 0 -> 1 the one step, the second step the
  // fade or the swing rides)
  const swell = rejoinChampSeventhBreathTrendRow({ back: c(4), prev: c(9), cur: c(20) })
  assert.ok(swell.includes('swell ran two steps deep'))
  assert.ok(swell.includes('4 -> 9 (+5) -> 20 (+11)'))
  assert.ok(swell.includes('v0.976.382'))
  // the fade the F536->F538 faces keep (10 -> 8 (-2) -> 0 (-8))
  const fade = rejoinChampSeventhBreathTrendRow({ back: c(10), prev: c(8), cur: c(0) })
  assert.ok(fade.includes('fade ran two steps deep'))
  assert.ok(fade.includes('10 -> 8 (-2) -> 0 (-8)'))
  // the swing the F505->F507 faces keep (0 -> 7 (+7) -> 0 (-7))
  const swing = rejoinChampSeventhBreathTrendRow({ back: c(0), prev: c(7), cur: c(0) })
  assert.ok(swing.includes('swing'))
  assert.ok(swing.includes('0 -> 7 (+7) -> 0 (-7)'))
  // the swing the F541->F543 faces keep (8 -> 20 (+12) -> 0 (-20))
  const swing2 = rejoinChampSeventhBreathTrendRow({ back: c(8), prev: c(20), cur: c(0) })
  assert.ok(swing2.includes('swing'))
  assert.ok(swing2.includes('8 -> 20 (+12) -> 0 (-20)'))
  // the held step the honest silence keeps (the row never invents -
  // the F567/F568 constructive pair the arc keeps)
  assert.equal(rejoinChampSeventhBreathTrendRow({ back: c(3), prev: c(3), cur: c(0) }), null)
  assert.equal(rejoinChampSeventhBreathTrendRow({ back: c(0), prev: c(4), cur: c(4) }), null)
  // the deformed triples the fence declines
  assert.equal(rejoinChampSeventhBreathTrendRow(null), null)
  assert.equal(rejoinChampSeventhBreathTrendRow({ back: c(-5), prev: c(0), cur: c(0) }), null)
  // the REAL arc's own windows the rows re-voice (the census the same
  // values the arc keeps - the indexes the TRUE F-numbers price: the
  // F505/F506/F507 the c3(4/5/6), the F536/F537/F538 the
  // c3(35/36/37), the F541/F542/F543 the c3(40/41/42) - the
  // fire-1243 off-by-one lesson the same hand keeps)
  const c3 = (i) => ({ rejoinChampSeventhBreath: REAL_ARC[i] })
  assert.ok(rejoinChampSeventhBreathTrendRow({ back: c3(4), prev: c3(5), cur: c3(6) }).includes('0 -> 7 (+7) -> 0 (-7)'))
  assert.ok(rejoinChampSeventhBreathTrendRow({ back: c3(35), prev: c3(36), cur: c3(37) }).includes('10 -> 8 (-2) -> 0 (-8)'))
  assert.ok(rejoinChampSeventhBreathTrendRow({ back: c3(40), prev: c3(41), cur: c3(42) }).includes('8 -> 20 (+12) -> 0 (-20)'))
})
