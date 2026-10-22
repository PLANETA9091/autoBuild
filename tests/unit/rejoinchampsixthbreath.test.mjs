import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinChampSixthBreathCensus, rejoinChampSixthBreathConsistent, rejoinChampSixthBreathTrendRow } from '../../src/lib/rejoinchampsixthbreath.mjs'
import { rejoinChampFifthBreathCensus } from '../../src/lib/rejoinchampfifthbreath.mjs'

// the REAL columns the rebuilt archive keeps (the fire-0843 method the
// fire-1243/1343/1543/1743 fires re-ride - the faces the alignment
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

const REAL_ARC = [0,0,0,0,0,7,0,17,0,0,0,8,0,12,0,0,0,0,0,0,0,9,0,11,0,0,0,0,0,0,0,0,0,0,0,52,8,0,0,0,8,10,0,0,0,10,0,0,2,0,0,0,8,0,4,0,0,6,0,0,13,0,26,9,0,0,11]

test('REAL faces byte-exact - the champion sixth breath the sixth order statistic prices', () => {
  // the columns the archive voices - the census the value byte-exact
  // keeps (the F501 the opener the constructive zero the three-gap
  // cadence keeps, the F536 the tallest 52, the F549 the .373's own
  // zero-face the sixth 2 the inversion prices, the F569 the fresh
  // tail the sixth 11 the fire-1743 ledger byte-exact)
  const pins = [[REAL_F501, 0], [REAL_F506, 7], [REAL_F508, 17], [REAL_F512, 8], [REAL_F514, 12], [REAL_F536, 52], [REAL_F549, 2], [REAL_F563, 13], [REAL_F565, 26], [REAL_F569, 11]]
  for (const [col, want] of pins) {
    assert.equal(rejoinChampSixthBreathCensus(col).rejoinChampSixthBreath, want)
  }
})

test('the BOUND + DIALOG + CEILING laws - the edges the sixth order statistic bounds keep', () => {
  // the champion cadence hand the fixtures re-voice inline - the BOUND
  // law the .359 champ min <= sixth <= the .353 champ gap and
  // sixth <= the .351 champ stretch every voiced fixture (the
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
      sixth: gaps.length > 5 ? gaps[5] : 0,
      count: gaps.length,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      stretch: cevts.length >= 2 ? cevts[cevts.length - 1].s - cevts[0].s : 0,
      fifth: rejoinChampFifthBreathCensus(lines).rejoinChampFifthBreath
    }
  }
  const cols = [REAL_F501, REAL_F506, REAL_F508, REAL_F512, REAL_F514, REAL_F536, REAL_F549, REAL_F563, REAL_F565, REAL_F569]
  for (const col of cols) {
    const r = read(col)
    const sixth = rejoinChampSixthBreathCensus(col).rejoinChampSixthBreath
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
  // the DIALOG's own edges the fixtures voice: the F506 under face
  // (7 UNDER the 8) and the F512 under face (8 UNDER the 11) and the
  // F569 under face (11 UNDER the 169 the fresh tail) and the F508
  // above face (17 ABOVE the 4) and the F536 above face (52 ABOVE the
  // 7 the tallest face) and the F549 above face (2 ABOVE the 0 the
  // .373's own zero-face the honest inversion prices) and the F566
  // level face (9 LEVEL the 9 the REAL same-tempo keeps)
  assert.ok(read(REAL_F506).sixth < read(REAL_F506).fifth)
  assert.ok(read(REAL_F512).sixth < read(REAL_F512).fifth)
  assert.ok(read(REAL_F569).sixth < read(REAL_F569).fifth)
  assert.ok(read(REAL_F508).sixth > read(REAL_F508).fifth)
  assert.ok(read(REAL_F536).sixth > read(REAL_F536).fifth)
  assert.ok(read(REAL_F549).sixth > read(REAL_F549).fifth)
  // the F565 under face (26 UNDER the 52 the second-tallest the
  // .373's own ceiling-value the honest decline prices) - the F566
  // level face (9 LEVEL the 9) the arc's own [63] the same value
  // keeps
  assert.ok(read(REAL_F565).sixth < read(REAL_F565).fifth)
  // the CEILING's own absence: every voiced fixture the sixth BELOW
  // the cadence's own max prices (the F536's own 52 the max 61 the
  // BELOW keeps, the F549's own 2 the max 310 the deepest below) - the
  // .373 arc's own ONE the F554 ceiling-face the sixth never inherits
  assert.ok(read(REAL_F536).sixth < read(REAL_F536).max)
  assert.ok(read(REAL_F549).sixth < read(REAL_F549).max)
  // the REAL zero vs the CONSTRUCTIVE zero: the F549 the 8-gap
  // champion cadence the fifth same-second pair the .373 zero voiced
  // the sixth 2 the tempo rides (the REAL voiced the zero branch never
  // rides), the F501 the three-gap cadence the sixth pair the list
  // never holds the constructive branch keeps
  assert.ok(read(REAL_F549).count >= 6)
  assert.ok(read(REAL_F549).sixth > 0)
  assert.ok(read(REAL_F501).count < 6)
  assert.equal(read(REAL_F501).sixth, 0)
  // the synthetic branches: the one-echo face the zero keeps, the
  // single-gap and the two-gap and the three-gap and the four-gap and
  // the five-gap faces the constructive keeps (the sixth pair the
  // list never holds - the .372/.374 convention extends), the six-gap
  // face the sixth the list voices, the co-reign tie the interleave
  // the sixth gap the FILE ORDER voices, the sub-peak name the champ
  // list never rides, the day-cyclic wrap the sixth pair crossing the
  // midnight cell prices
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinChampSixthBreathCensus(oneEcho), { rejoinChampSixthBreath: 0 })
  const singleGap = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinChampSixthBreathCensus(singleGap), { rejoinChampSixthBreath: 0 })
  const twoGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // F3's own first join 08:01 the tally's n=1 the champ list keeps
  // out - the champ events 08:02 / 08:03 / 08:09 the gaps [60, 360]
  // the TWO gaps the sixth pair the list never holds the constructive
  // zero the .372/.374 convention extends
  assert.deepEqual(rejoinChampSixthBreathCensus(twoGaps), { rejoinChampSixthBreath: 0 })
  const threeGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the champ events 08:02 / 08:03 / 08:04 / 08:09 the gaps [60, 60,
  // 300] the THREE gaps the SIXTH pair the list never holds - the
  // constructive zero the convention extends (the fifth breath's own
  // 300 the elder seat prices)
  assert.deepEqual(rejoinChampSixthBreathCensus(threeGaps), { rejoinChampSixthBreath: 0 })
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
  // [60, 60, 60, 240] the FOUR gaps the SIXTH pair the list never
  // holds - the constructive zero the convention extends (the fifth
  // breath's own 240 the elder seat prices)
  assert.deepEqual(rejoinChampSixthBreathCensus(fourGaps), { rejoinChampSixthBreath: 0 })
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
  // the gaps [60, 60, 60, 60, 180] the FIVE gaps the SIXTH pair the
  // list never holds - the constructive zero the convention extends
  // (the fifth breath's own 180 the elder seat prices the honest
  // distinction the seats price)
  assert.deepEqual(rejoinChampSixthBreathCensus(fiveGaps), { rejoinChampSixthBreath: 0 })
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
  // 08:09 the gaps [60, 60, 60, 60, 60, 120] the SIXTH pair 120 the
  // list voices (the 08:07 event the cadence keeps - the elder
  // five-gap face's own 180 the fifth seat priced the sixth extends)
  assert.deepEqual(rejoinChampSixthBreathCensus(sixGaps), { rejoinChampSixthBreath: 120 })
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
  // gaps [60, 180, 120, 300, 120, 240, 120, 240, 120] the SIXTH 240
  // the interleave voices
  assert.deepEqual(rejoinChampSixthBreathCensus(coReign), { rejoinChampSixthBreath: 240 })
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
  // [240, 420, 720] the THREE gaps the SIXTH pair the list never
  // holds the constructive zero the branch keeps (the .373 arc's own
  // F5/F16 tally-2 co-reign the elder face the same shape prices)
  assert.deepEqual(rejoinChampSixthBreathCensus(coReignSub), { rejoinChampSixthBreath: 0 })
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
  // crosses the midnight cell (the champ events 08:02 / 08:03 /
  // 08:04 / 23:59:30 / 00:01:30 / 00:05:30 / 00:07:30 the gaps [60,
  // 60, 57330, 120, 240, 120] - 86370 - 29040 = 57330 the third pair
  // rides, 90 + 86400 - 86370 = 120 the fourth rides, 330 - 90 = 240
  // the fifth rides, 450 - 330 = 120 the sixth the list voices)
  assert.deepEqual(rejoinChampSixthBreathCensus(wrap), { rejoinChampSixthBreath: 120 })
})

test('REAL 67-face window arc byte-exact - 14 classes the seat LIVE', () => {
  // the arc the fieldproof re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 67)
  assert.equal(classes.size, 14)
  assert.equal(Math.min(...arc), 0) // the FORTY-EIGHT-face zero keeps (the constructive forty-eight - the REAL zero the window never keeps)
  assert.equal(Math.max(...arc), 52) // the tallest voiced value F536 keeps
  // the zero faces the honest absence prices (the REAL zero NO face
  // keeps - the .373 arc's own ONE the F549 the sixth does NOT
  // inherit: the F549's own 2 the fifth's own zero the inversion
  // prices, the constructive forty-eight the branch rides)
  let zeros = 0
  for (const v of arc) if (v === 0) zeros++
  assert.equal(zeros, 48)
  assert.equal(arc[0], 0) // the F501 opener the constructive three-gap
  assert.equal(arc[5], 7) // the F506 opening voiced
  assert.equal(arc[7], 17) // the F508 keeps
  assert.equal(arc[11], 8) // the F512 keeps
  assert.equal(arc[13], 12) // the F514 keeps
  assert.equal(arc[35], 52) // the F536 the tallest voiced
  assert.equal(arc[36], 8) // the F537 the .373 held-pair face the honest break
  assert.equal(arc[48], 2) // the F549 the .373 zero-face the inversion
  assert.equal(arc[52], 8) // the F554 the .373 ceiling-face the BELOW
  assert.equal(arc[62], 26) // the F565 second-tallest
  assert.equal(arc[63], 9) // the F566 the REAL level face
  assert.equal(arc[66], 11) // the F569 fresh tail
  // the held law: NO REAL held pair the 67-face window keeps - the
  // .373 arc's own ONE the F536/F537 sevens the sixth does NOT
  // inherit (the F536's own 52 and the F537's own 8 the honest break
  // the seats price); the constructive-zero pairs THIRTY-TWO the
  // branch keeps
  let held = 0
  let heldReal = 0
  for (let i = 1; i < arc.length; i++) {
    if (arc[i] === arc[i - 1]) {
      held++
      if (arc[i] > 0) heldReal++
    }
  }
  assert.equal(held, 32)
  assert.equal(heldReal, 0)
  // the multi-class law: the mode candidate the honest probe DECLINED
  // - the forty-eight-face zero the tie-degenerate gravity the family prices
  const tally = new Map()
  for (const v of arc) tally.set(v, (tally.get(v) || 0) + 1)
  assert.equal(tally.get(0), 48)
  assert.equal(tally.get(8), 4)
  assert.equal(tally.get(9), 2)
  assert.equal(tally.get(10), 2)
  assert.equal(tally.get(11), 2)
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  // the census the strict frame keeps - the deformed lines the skip
  // rides, the honest zero the no-join face keeps
  assert.equal(rejoinChampSixthBreathCensus(null), null)
  assert.equal(rejoinChampSixthBreathCensus(undefined), null)
  assert.equal(rejoinChampSixthBreathCensus('not an array'), null)
  assert.equal(rejoinChampSixthBreathCensus(42), null)
  assert.deepEqual(rejoinChampSixthBreathCensus([]), { rejoinChampSixthBreath: 0 })
  assert.deepEqual(rejoinChampSixthBreathCensus(['', 'no joins here', null, 42]), { rejoinChampSixthBreath: 0 })
  // the malformed clock cells the strict frame never rides
  assert.deepEqual(rejoinChampSixthBreathCensus([
    '[24:00:00] [Server thread/INFO]: F3 joined the game', // the hour 24 the day never keeps
    '[12:60:00] [Server thread/INFO]: F3 joined the game', // the minute 60 the clock never keeps
    '[12:00:60] [Server thread/INFO]: F3 joined the game', // the second 60 the clock never keeps
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampSixthBreath: 0 })
  // the non-join lanes the lane law keeps out
  assert.deepEqual(rejoinChampSixthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 left the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the team', // the near-join the frame never rides
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampSixthBreath: 0 })
  // the kernel prefix the deformed line the skip keeps
  assert.deepEqual(rejoinChampSixthBreathCensus([
    'kernel: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampSixthBreath: 0 })
  // the multi-line join the trailing spaces the strict frame never rides
  assert.deepEqual(rejoinChampSixthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 joined the game ',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampSixthBreath: 0 })
})

test('fence - every branch the gap words own integer law keeps', () => {
  const c = (n) => ({ rejoinChampSixthBreath: n })
  assert.equal(rejoinChampSixthBreathConsistent(null), false)
  assert.equal(rejoinChampSixthBreathConsistent(undefined), false)
  assert.equal(rejoinChampSixthBreathConsistent('nope'), false)
  assert.equal(rejoinChampSixthBreathConsistent({}), false)
  assert.equal(rejoinChampSixthBreathConsistent({ back: c(0), prev: c(0) }), false) // the cur missing
  assert.equal(rejoinChampSixthBreathConsistent({ back: c(-1), prev: c(0), cur: c(0) }), false) // the negative the fence never rides
  assert.equal(rejoinChampSixthBreathConsistent({ back: c(0), prev: c(86399), cur: c(0) }), true) // the day ceiling 86399 the fence keeps (the .368 fence-fix lesson the same boundary voices)
  assert.equal(rejoinChampSixthBreathConsistent({ back: c(0), prev: c(86400), cur: c(0) }), false) // past the day the fence declines (the fence 0..86399 the module voices - the .366 line 445 / the .367 line 593 / the .368 line 647 / the .370 line 666 / the .372 line 679 / the .374 line 674 the same shape)
  assert.equal(rejoinChampSixthBreathConsistent({ back: c(0), prev: c(86401), cur: c(0) }), false) // past the day the fence declines
  assert.equal(rejoinChampSixthBreathConsistent({ back: c(0), prev: c(1.5), cur: c(0) }), false) // the fraction the integer law never rides
  assert.equal(rejoinChampSixthBreathConsistent({ back: c(0), prev: c(0), cur: c(0) }), true)
  assert.equal(rejoinChampSixthBreathConsistent({ back: c(86399), prev: c(0), cur: c(59) }), true)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const c = (n) => ({ rejoinChampSixthBreath: n })
  // the swell the REAL window NEVER keeps - the honest absence the
  // synthetic voices (the arc's own rises the single-step the faces
  // ride: the F507->F508 0 -> 17 the one step, the second step the
  // fade or the swing rides)
  const swell = rejoinChampSixthBreathTrendRow({ back: c(4), prev: c(9), cur: c(20) })
  assert.ok(swell.includes('swell ran two steps deep'))
  assert.ok(swell.includes('4 -> 9 (+5) -> 20 (+11)'))
  assert.ok(swell.includes('v0.976.375'))
  // the fade the F536->F538 faces keep (52 -> 8 (-44) -> 0 (-8))
  const fade = rejoinChampSixthBreathTrendRow({ back: c(52), prev: c(8), cur: c(0) })
  assert.ok(fade.includes('fade ran two steps deep'))
  assert.ok(fade.includes('52 -> 8 (-44) -> 0 (-8)'))
  // the swing the F513->F515 faces keep (0 -> 12 (+12) -> 0 (-12))
  const swing = rejoinChampSixthBreathTrendRow({ back: c(0), prev: c(12), cur: c(0) })
  assert.ok(swing.includes('swing'))
  assert.ok(swing.includes('0 -> 12 (+12) -> 0 (-12)'))
  // the swing the F564->F566 faces keep (0 -> 26 (+26) -> 9 (-17))
  const swing2 = rejoinChampSixthBreathTrendRow({ back: c(0), prev: c(26), cur: c(9) })
  assert.ok(swing2.includes('swing'))
  assert.ok(swing2.includes('0 -> 26 (+26) -> 9 (-17)'))
  // the held step the honest silence keeps (the row never invents -
  // the F567/F568 constructive pair the arc keeps)
  assert.equal(rejoinChampSixthBreathTrendRow({ back: c(3), prev: c(3), cur: c(0) }), null)
  assert.equal(rejoinChampSixthBreathTrendRow({ back: c(0), prev: c(4), cur: c(4) }), null)
  // the deformed triples the fence declines
  assert.equal(rejoinChampSixthBreathTrendRow(null), null)
  assert.equal(rejoinChampSixthBreathTrendRow({ back: c(-5), prev: c(0), cur: c(0) }), null)
  // the REAL arc's own windows the rows re-voice (the census the same
  // values the arc keeps - the indexes the TRUE F-numbers price: the
  // F513/F514/F515 the c3(12/13/14), the F536/F537/F538 the
  // c3(35/36/37), the F564/F565/F566 the c3(61/62/63) - the
  // fire-1243 off-by-one lesson the same hand keeps)
  const c3 = (i) => ({ rejoinChampSixthBreath: REAL_ARC[i] })
  assert.ok(rejoinChampSixthBreathTrendRow({ back: c3(12), prev: c3(13), cur: c3(14) }).includes('0 -> 12 (+12) -> 0 (-12)'))
  assert.ok(rejoinChampSixthBreathTrendRow({ back: c3(35), prev: c3(36), cur: c3(37) }).includes('52 -> 8 (-44) -> 0 (-8)'))
  assert.ok(rejoinChampSixthBreathTrendRow({ back: c3(61), prev: c3(62), cur: c3(63) }).includes('0 -> 26 (+26) -> 9 (-17)'))
})
