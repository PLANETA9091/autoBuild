import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinChampEighthBreathCensus, rejoinChampEighthBreathConsistent, rejoinChampEighthBreathTrendRow } from '../../src/lib/rejoinchampeighthbreath.mjs'
import { rejoinChampSeventhBreathCensus } from '../../src/lib/rejoinchampseventhbreath.mjs'

// the REAL columns the rebuilt archive keeps (the fire-0843 method the
// fire-1243/1343/1543/1743/1843/1943/2043/2143 fires re-ride - the
// faces the alignment byte-exact anchored and the F-map the census
// slide the THIRTEEN anchors lock the same ids price: F1 =
// 37403158305 one hit, the F552 cancelled and the F557 artifact hole
// the holes the F-order keeps)

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

const REAL_F537 = [
  "[03:17:23] [Server thread/INFO]: YardSurvey joined the game",
  "[03:17:36] [Server thread/INFO]: F1 joined the game",
  "[03:17:38] [Server thread/INFO]: F2 joined the game",
  "[03:17:40] [Server thread/INFO]: F3 joined the game",
  "[03:17:43] [Server thread/INFO]: F4 joined the game",
  "[03:17:46] [Server thread/INFO]: F5 joined the game",
  "[03:17:48] [Server thread/INFO]: F6 joined the game",
  "[03:17:51] [Server thread/INFO]: F7 joined the game",
  "[03:17:54] [Server thread/INFO]: F8 joined the game",
  "[03:17:57] [Server thread/INFO]: F9 joined the game",
  "[03:18:00] [Server thread/INFO]: F10 joined the game",
  "[03:18:02] [Server thread/INFO]: F11 joined the game",
  "[03:18:05] [Server thread/INFO]: F12 joined the game",
  "[03:18:08] [Server thread/INFO]: F13 joined the game",
  "[03:18:10] [Server thread/INFO]: F14 joined the game",
  "[03:18:14] [Server thread/INFO]: F15 joined the game",
  "[03:18:16] [Server thread/INFO]: F16 joined the game",
  "[03:18:19] [Server thread/INFO]: F17 joined the game",
  "[03:18:22] [Server thread/INFO]: F18 joined the game",
  "[03:18:24] [Server thread/INFO]: F19 joined the game",
  "[03:21:31] [Server thread/INFO]: F5 joined the game",
  "[03:23:04] [Server thread/INFO]: F13 joined the game",
  "[03:23:10] [Server thread/INFO]: F13 joined the game",
  "[03:23:31] [Server thread/INFO]: F13 joined the game",
  "[03:23:45] [Server thread/INFO]: F16 joined the game",
  "[03:23:58] [Server thread/INFO]: F14 joined the game",
  "[03:24:04] [Server thread/INFO]: F14 joined the game",
  "[03:24:36] [Server thread/INFO]: F16 joined the game",
  "[03:24:38] [Server thread/INFO]: F13 joined the game",
  "[03:25:36] [Server thread/INFO]: F19 joined the game",
  "[03:25:38] [Server thread/INFO]: F2 joined the game",
  "[03:25:38] [Server thread/INFO]: F10 joined the game",
  "[03:25:42] [Server thread/INFO]: F5 joined the game",
  "[03:25:54] [Server thread/INFO]: F10 joined the game",
  "[03:26:20] [Server thread/INFO]: F10 joined the game",
  "[03:26:22] [Server thread/INFO]: F6 joined the game",
  "[03:26:38] [Server thread/INFO]: F5 joined the game",
  "[03:26:44] [Server thread/INFO]: F12 joined the game",
  "[03:26:49] [Server thread/INFO]: F5 joined the game",
  "[03:26:51] [Server thread/INFO]: F10 joined the game",
  "[03:26:56] [Server thread/INFO]: F5 joined the game",
  "[03:27:03] [Server thread/INFO]: F5 joined the game",
  "[03:27:04] [Server thread/INFO]: F9 joined the game",
  "[03:27:04] [Server thread/INFO]: F7 joined the game",
  "[03:27:07] [Server thread/INFO]: F16 joined the game",
  "[03:27:11] [Server thread/INFO]: F5 joined the game",
  "[03:27:19] [Server thread/INFO]: F5 joined the game",
  "[03:27:20] [Server thread/INFO]: F1 joined the game",
  "[03:27:23] [Server thread/INFO]: F8 joined the game",
  "[03:27:25] [Server thread/INFO]: F17 joined the game",
  "[03:27:27] [Server thread/INFO]: F5 joined the game",
  "[03:27:35] [Server thread/INFO]: F18 joined the game",
  "[03:27:35] [Server thread/INFO]: F5 joined the game",
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

const REAL_F556 = [
  "[17:19:08] [Server thread/INFO]: YardSurvey joined the game",
  "[17:19:21] [Server thread/INFO]: F1 joined the game",
  "[17:19:23] [Server thread/INFO]: F2 joined the game",
  "[17:19:26] [Server thread/INFO]: F3 joined the game",
  "[17:19:28] [Server thread/INFO]: F4 joined the game",
  "[17:19:31] [Server thread/INFO]: F5 joined the game",
  "[17:19:34] [Server thread/INFO]: F6 joined the game",
  "[17:19:36] [Server thread/INFO]: F7 joined the game",
  "[17:19:39] [Server thread/INFO]: F8 joined the game",
  "[17:19:41] [Server thread/INFO]: F9 joined the game",
  "[17:19:44] [Server thread/INFO]: F10 joined the game",
  "[17:19:46] [Server thread/INFO]: F11 joined the game",
  "[17:19:49] [Server thread/INFO]: F12 joined the game",
  "[17:19:51] [Server thread/INFO]: F13 joined the game",
  "[17:19:54] [Server thread/INFO]: F14 joined the game",
  "[17:19:57] [Server thread/INFO]: F15 joined the game",
  "[17:19:59] [Server thread/INFO]: F16 joined the game",
  "[17:20:02] [Server thread/INFO]: F17 joined the game",
  "[17:20:04] [Server thread/INFO]: F18 joined the game",
  "[17:20:07] [Server thread/INFO]: F19 joined the game",
  "[17:26:12] [Server thread/INFO]: F19 joined the game",
  "[17:26:18] [Server thread/INFO]: F19 joined the game",
  "[17:26:23] [Server thread/INFO]: F19 joined the game",
  "[17:26:27] [Server thread/INFO]: F19 joined the game",
  "[17:26:32] [Server thread/INFO]: F19 joined the game",
  "[17:26:37] [Server thread/INFO]: F19 joined the game",
  "[17:26:41] [Server thread/INFO]: F19 joined the game",
  "[17:26:45] [Server thread/INFO]: F19 joined the game",
  "[17:26:49] [Server thread/INFO]: F13 joined the game",
  "[17:26:50] [Server thread/INFO]: F19 joined the game",
  "[17:26:55] [Server thread/INFO]: F13 joined the game",
  "[17:26:56] [Server thread/INFO]: F19 joined the game",
  "[17:27:02] [Server thread/INFO]: F19 joined the game",
  "[17:27:05] [Server thread/INFO]: F7 joined the game",
  "[17:27:20] [Server thread/INFO]: F5 joined the game",
  "[17:27:25] [Server thread/INFO]: F5 joined the game",
  "[17:27:26] [Server thread/INFO]: F15 joined the game",
  "[17:27:31] [Server thread/INFO]: F5 joined the game",
  "[17:27:33] [Server thread/INFO]: F15 joined the game",
  "[17:27:38] [Server thread/INFO]: F5 joined the game",
  "[17:28:29] [Server thread/INFO]: F2 joined the game",
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

const REAL_F573 = [
  "[14:18:17] [Server thread/INFO]: YardSurvey joined the game",
  "[14:18:31] [Server thread/INFO]: F1 joined the game",
  "[14:18:33] [Server thread/INFO]: F2 joined the game",
  "[14:18:36] [Server thread/INFO]: F3 joined the game",
  "[14:18:38] [Server thread/INFO]: F4 joined the game",
  "[14:18:41] [Server thread/INFO]: F5 joined the game",
  "[14:18:44] [Server thread/INFO]: F6 joined the game",
  "[14:18:46] [Server thread/INFO]: F7 joined the game",
  "[14:18:49] [Server thread/INFO]: F8 joined the game",
  "[14:18:51] [Server thread/INFO]: F9 joined the game",
  "[14:18:54] [Server thread/INFO]: F10 joined the game",
  "[14:18:57] [Server thread/INFO]: F11 joined the game",
  "[14:19:00] [Server thread/INFO]: F12 joined the game",
  "[14:19:02] [Server thread/INFO]: F13 joined the game",
  "[14:19:05] [Server thread/INFO]: F14 joined the game",
  "[14:19:07] [Server thread/INFO]: F15 joined the game",
  "[14:19:10] [Server thread/INFO]: F16 joined the game",
  "[14:19:12] [Server thread/INFO]: F17 joined the game",
  "[14:19:15] [Server thread/INFO]: F18 joined the game",
  "[14:19:17] [Server thread/INFO]: F19 joined the game",
  "[14:26:48] [Server thread/INFO]: F1 joined the game",
  "[14:27:50] [Server thread/INFO]: F13 joined the game",
  "[14:28:21] [Server thread/INFO]: F18 joined the game",
  "[14:28:30] [Server thread/INFO]: F11 joined the game",
]

const REAL_ARC = [0,0,0,0,0,6,0,57,0,0,0,12,0,13,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,9,8,0,0,0,0,9,0,0,0,8,0,0,2,0,0,0,11,0,5,0,0,6,0,0,10,0,0,10,0,0,11,0,0,0,0]

test('REAL faces byte-exact - the champ eighth breath the eighth order statistic prices', () => {
  // the columns the archive voices - the census the value byte-exact
  // keeps (the F506 the under face the 6 under the 7 prices, the F508
  // the window's own TALLEST voiced 57 the above-dialog prices, the
  // F512 the 12 the under face, the F514 the 13 the second-tallest the
  // above face, the F524 the 10 the under face, the F537 the 8 LEVEL
  // the 8 the REAL same-tempo face keeps, the F549 the 2 the small
  // voiced the above face, the F556 the 5 the above face, the F563 the
  // 10 the above face, the F573 the fresh tail the CONSTRUCTIVE face
  // the THREE-gap champion cadence the fire-2243 ledger keeps)
  const pins = [[REAL_F506, 6], [REAL_F508, 57], [REAL_F512, 12], [REAL_F514, 13], [REAL_F524, 10], [REAL_F537, 8], [REAL_F549, 2], [REAL_F556, 5], [REAL_F563, 10], [REAL_F573, 0]]
  for (const [col, want] of pins) {
    assert.equal(rejoinChampEighthBreathCensus(col).rejoinChampEighthBreath, want)
  }
})

test('the BOUND + DIALOG + CEILING laws - the edges the eighth order statistic bounds keep', () => {
  // the champion cadence hand the fixtures re-voice inline - the BOUND
  // law the .359 champ min <= eighth <= the .353 champ gap and eighth
  // <= the .351 champ stretch every voiced fixture (the REAL archive
  // audit GREEN the probe keeps)
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
      eighth: gaps.length > 7 ? gaps[7] : 0,
      count: gaps.length,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      stretch: cevts.length >= 2 ? cevts[cevts.length - 1].s - cevts[0].s : 0,
      seventh: rejoinChampSeventhBreathCensus(lines).rejoinChampSeventhBreath
    }
  }
  const cols = [REAL_F506, REAL_F508, REAL_F512, REAL_F514, REAL_F524, REAL_F537, REAL_F549, REAL_F556, REAL_F563, REAL_F573]
  for (const col of cols) {
    const r = read(col)
    const eighth = rejoinChampEighthBreathCensus(col).rejoinChampEighthBreath
    assert.equal(eighth, r.eighth)
    // the bound the VOICED faces price (the fewer-than-eight-gaps face
    // the lawful zero the bounds keep - the no-list-sample face the
    // min/max never bound)
    if (r.count >= 8) {
      assert.ok(eighth >= r.min && eighth <= r.max, `bound ${eighth} in [${r.min},${r.max}]`)
      assert.ok(eighth <= r.stretch)
    } else {
      assert.equal(eighth, 0)
    }
  }
  // the DIALOG's own edges the fixtures voice: the F506 under face (6
  // UNDER the 7) and the F512 under face (12 UNDER the 14) and the
  // F524 under face (10 UNDER the 13) and the F508 above face (57
  // ABOVE the 32 the window's own TALLEST voiced value the
  // above-dialog prices) and the F514 above face (13 ABOVE the 10)
  // and the F556 above face (5 ABOVE the 4) and the F563 above face
  // (10 ABOVE the 7) and the F537 level face (8 LEVEL the 8 the REAL
  // same-tempo keeps) - the F541's own constructive 0 under the 8 the
  // archive voices the fixture pins the F524 under side prices
  assert.ok(read(REAL_F506).eighth < read(REAL_F506).seventh)
  assert.ok(read(REAL_F512).eighth < read(REAL_F512).seventh)
  assert.ok(read(REAL_F524).eighth < read(REAL_F524).seventh)
  assert.ok(read(REAL_F508).eighth > read(REAL_F508).seventh)
  assert.ok(read(REAL_F514).eighth > read(REAL_F514).seventh)
  assert.ok(read(REAL_F556).eighth > read(REAL_F556).seventh)
  assert.ok(read(REAL_F563).eighth > read(REAL_F563).seventh)
  assert.equal(read(REAL_F537).eighth, read(REAL_F537).seventh)
  // the CEILING's own absence: every voiced fixture the eighth BELOW
  // the cadence's own max prices (the F508's own 57 the max 64 the
  // BELOW keeps - the window's own TALLEST voiced value the F508's
  // own face the second-tallest BELOW the distinction prices, the
  // F549's own 2 the max 310 the deepest below) - the .379 arc's own
  // NO ceiling the eighth re-prices
  assert.ok(read(REAL_F508).eighth < read(REAL_F508).max)
  assert.ok(read(REAL_F549).eighth < read(REAL_F549).max)
  // the synthetics the branch battery keeps - the one-echo face the
  // lawful zero keeps, the single-gap through the seven-gap faces the
  // fewer-than-eight-gaps convention prices (the EIGHTH pair the
  // list never holds - the .372/.374/.376 convention extends, the
  // seven-gap face the .379's own 720 the elder seat voiced the
  // eighth arc never rides), the eight-gap face the EIGHTH the list
  // voices, the co-reign tie the interleave the eighth gap the FILE
  // ORDER voices, the sub-peak name the champ list never rides, the
  // day-cyclic wrap the eighth pair crossing the midnight cell prices
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinChampEighthBreathCensus(oneEcho), { rejoinChampEighthBreath: 0 })
  const singleGap = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinChampEighthBreathCensus(singleGap), { rejoinChampEighthBreath: 0 })
  const twoGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // F3's own first join 08:01 the tally's n=1 the champ list keeps
  // out - the champ events 08:02 / 08:03 / 08:09 the gaps [60, 360]
  // the TWO gaps the EIGHTH pair the list never holds the
  // constructive zero the .372 convention extends
  assert.deepEqual(rejoinChampEighthBreathCensus(twoGaps), { rejoinChampEighthBreath: 0 })
  const threeGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the champ events 08:02 / 08:03 / 08:04 / 08:09 the gaps [60, 60,
  // 300] the THREE gaps the EIGHTH pair the list never holds - the
  // constructive zero the .372 convention extends
  assert.deepEqual(rejoinChampEighthBreathCensus(threeGaps), { rejoinChampEighthBreath: 0 })
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
  // [60, 60, 60, 240] the FOUR gaps the EIGHTH pair the list never
  // holds - the constructive zero the .372 convention extends
  assert.deepEqual(rejoinChampEighthBreathCensus(fourGaps), { rejoinChampEighthBreath: 0 })
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
  // the gaps [60, 60, 60, 60, 180] the FIVE gaps the EIGHTH pair
  // the list never holds - the constructive zero the .372 convention
  // extends
  assert.deepEqual(rejoinChampEighthBreathCensus(fiveGaps), { rejoinChampEighthBreath: 0 })
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
  // 08:09 the gaps [60, 60, 60, 60, 60, 120] the SIX gaps the EIGHTH
  // pair the list never holds - the constructive zero (the same face
  // the .375's own sixth 120 the elder seat voiced the eighth arc
  // never rides - the honest distinction the seats price)
  assert.deepEqual(rejoinChampEighthBreathCensus(sixGaps), { rejoinChampEighthBreath: 0 })
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
  // the champ events 08:02 through 08:20 the gaps [60, 60, 60, 60,
  // 60, 60, 720] the SEVEN gaps the EIGHTH pair the list never holds
  // - the constructive zero (the same face the .379's own seventh 720
  // the elder seat voiced the honest distinction the seats price)
  assert.deepEqual(rejoinChampEighthBreathCensus(sevenGaps), { rejoinChampEighthBreath: 0 })
  assert.equal(rejoinChampSeventhBreathCensus(sevenGaps).rejoinChampSeventhBreath, 720)
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
    '[08:20:00] [Server thread/INFO]: F3 joined the game',
    '[08:32:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the champ events 08:02 through 08:32 the gaps [60, 60, 60, 60,
  // 60, 60, 720, 720] the EIGHTH pair 720 the list voices (the 08:32
  // event the cadence keeps - the elder seven-gap face's own 720 the
  // seventh seat priced the eighth 720 the fresh seat prices)
  assert.deepEqual(rejoinChampEighthBreathCensus(eightGaps), { rejoinChampEighthBreath: 720 })
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
  // gaps [60, 180, 120, 300, 120, 240, 120, 240, 120] the EIGHTH 240
  // the interleave voices (the elder seventh seat the 120 the .379
  // word priced the honest distinction the seats price)
  assert.deepEqual(rejoinChampEighthBreathCensus(coReign), { rejoinChampEighthBreath: 240 })
  assert.equal(rejoinChampSeventhBreathCensus(coReign).rejoinChampSeventhBreath, 120)
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
  // [240, 420, 720] the THREE gaps the EIGHTH pair the list never
  // holds the constructive zero the branch keeps
  assert.deepEqual(rejoinChampEighthBreathCensus(coReignSub), { rejoinChampEighthBreath: 0 })
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
  // the day-cyclic wrap the .350 precedent keeps - the SEVEN gaps the
  // EIGHTH pair the list never holds (the champ events 08:02 / 08:03
  // / 08:04 / 23:59:30 / 00:01:30 / 00:05:30 / 00:07:30 / 00:11:30
  // the gaps [60, 60, 57330, 120, 240, 120, 240] - the same face the
  // .379's own seventh 240 the elder seat voiced the eighth arc never
  // rides the honest distinction the seats price)
  assert.deepEqual(rejoinChampEighthBreathCensus(wrap), { rejoinChampEighthBreath: 0 })
  assert.equal(rejoinChampSeventhBreathCensus(wrap).rejoinChampSeventhBreath, 240)
  const wrap8 = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[23:59:30] [Server thread/INFO]: F3 joined the game',
    '[00:01:30] [Server thread/INFO]: F3 joined the game',
    '[00:05:30] [Server thread/INFO]: F3 joined the game',
    '[00:07:30] [Server thread/INFO]: F3 joined the game',
    '[00:11:30] [Server thread/INFO]: F3 joined the game',
    '[00:17:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the day-cyclic wrap the EIGHTH pair crosses the midnight cell
  // (the champ events 08:02 / 08:03 / 08:04 / 23:59:30 / 00:01:30 /
  // 00:05:30 / 00:07:30 / 00:11:30 / 00:17:30 the gaps [60, 60,
  // 57330, 120, 240, 120, 240, 360] - 86370 - 29040 = 57330 the third
  // pair rides, 90 + 86400 - 86370 = 120 the fourth rides, 330 - 90 =
  // 240 the fifth rides, 450 - 330 = 120 the sixth rides, 690 - 450 =
  // 240 the seventh rides, 1050 - 690 = 360 the eighth the list
  // voices)
  assert.deepEqual(rejoinChampEighthBreathCensus(wrap8), { rejoinChampEighthBreath: 360 })
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  // the census the strict frame keeps - the deformed lines the skip
  // rides, the honest zero the no-join face keeps
  assert.equal(rejoinChampEighthBreathCensus(null), null)
  assert.equal(rejoinChampEighthBreathCensus(undefined), null)
  assert.equal(rejoinChampEighthBreathCensus('not an array'), null)
  assert.equal(rejoinChampEighthBreathCensus(42), null)
  assert.deepEqual(rejoinChampEighthBreathCensus([]), { rejoinChampEighthBreath: 0 })
  assert.deepEqual(rejoinChampEighthBreathCensus(['', 'no joins here', null, 42]), { rejoinChampEighthBreath: 0 })
  // the malformed clock cells the strict frame never rides
  assert.deepEqual(rejoinChampEighthBreathCensus([
    '[24:00:00] [Server thread/INFO]: F3 joined the game', // the hour 24 the day never keeps
    '[12:60:00] [Server thread/INFO]: F3 joined the game', // the minute 60 the clock never keeps
    '[12:00:60] [Server thread/INFO]: F3 joined the game', // the second 60 the clock never keeps
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampEighthBreath: 0 })
  // the non-join lanes the lane law keeps out
  assert.deepEqual(rejoinChampEighthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 left the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the team', // the near-join the frame never rides
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampEighthBreath: 0 })
  // the kernel prefix the deformed line the skip keeps
  assert.deepEqual(rejoinChampEighthBreathCensus([
    'kernel: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampEighthBreath: 0 })
  // the multi-line join the trailing spaces the strict frame never rides
  assert.deepEqual(rejoinChampEighthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 joined the game ',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampEighthBreath: 0 })
})

test('fence - every branch the gap words own integer law keeps', () => {
  const c = (n) => ({ rejoinChampEighthBreath: n })
  assert.equal(rejoinChampEighthBreathConsistent(null), false)
  assert.equal(rejoinChampEighthBreathConsistent(undefined), false)
  assert.equal(rejoinChampEighthBreathConsistent('nope'), false)
  assert.equal(rejoinChampEighthBreathConsistent({}), false)
  assert.equal(rejoinChampEighthBreathConsistent({ back: c(0), prev: c(0) }), false) // the cur missing
  assert.equal(rejoinChampEighthBreathConsistent({ back: c(-1), prev: c(0), cur: c(0) }), false) // the negative the fence never rides
  assert.equal(rejoinChampEighthBreathConsistent({ back: c(0), prev: c(86399), cur: c(0) }), true) // the day ceiling 86399 the fence keeps (the .368 fence-fix lesson the same boundary voices)
  assert.equal(rejoinChampEighthBreathConsistent({ back: c(0), prev: c(86400), cur: c(0) }), false) // past the day the fence declines (the fence 0..86399 the module voices - the .366 line 445 / the .367 line 593 / the .368 line 647 / the .370 line 666 / the .372 line 679 / the .374 line 745 / the .376 line 745 / the .379 line 779 the same shape)
  assert.equal(rejoinChampEighthBreathConsistent({ back: c(0), prev: c(86401), cur: c(0) }), false) // past the day the fence declines
  assert.equal(rejoinChampEighthBreathConsistent({ back: c(0), prev: c(1.5), cur: c(0) }), false) // the fraction the integer law never rides
  assert.equal(rejoinChampEighthBreathConsistent({ back: c(0), prev: c(0), cur: c(0) }), true)
  assert.equal(rejoinChampEighthBreathConsistent({ back: c(86399), prev: c(0), cur: c(59) }), true)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const c = (n) => ({ rejoinChampEighthBreath: n })
  // the swell the synthetic faces keep (1 -> 2 (+1) -> 5 (+3))
  const swell = rejoinChampEighthBreathTrendRow({ back: c(1), prev: c(2), cur: c(5) })
  assert.ok(swell.includes('swell ran two steps deep'))
  assert.ok(swell.includes('1 -> 2 (+1) -> 5 (+3)'))
  assert.ok(swell.includes('v0.976.384'))
  // the fade the F560->F562 faces keep (10 -> 6 (-4) -> 0 (-6)
  // the two-step fade the fresh window prices)
  const fade = rejoinChampEighthBreathTrendRow({ back: c(10), prev: c(6), cur: c(0) })
  assert.ok(fade.includes('fade ran two steps deep'))
  assert.ok(fade.includes('10 -> 6 (-4) -> 0 (-6)'))
  // the swing the F503->F505 faces keep (0 -> 14 (+14) -> 4 (-10))
  const swing = rejoinChampEighthBreathTrendRow({ back: c(0), prev: c(14), cur: c(4) })
  assert.ok(swing.includes('swing'))
  assert.ok(swing.includes('0 -> 14 (+14) -> 4 (-10)'))
  // the second swing the F566->F568 faces keep (5 -> 0 (-5) -> 5 (+5))
  const swing2 = rejoinChampEighthBreathTrendRow({ back: c(5), prev: c(0), cur: c(5) })
  assert.ok(swing2.includes('swing'))
  assert.ok(swing2.includes('5 -> 0 (-5) -> 5 (+5)'))
  // the held step the honest silence keeps (the row never invents -
  // the F567/F568/F569 zeros the arc keeps)
  assert.equal(rejoinChampEighthBreathTrendRow({ back: c(1), prev: c(0), cur: c(0) }), null)
  assert.equal(rejoinChampEighthBreathTrendRow({ back: c(10), prev: c(0), cur: c(0) }), null)
  // the deformed triples the fence declines
  assert.equal(rejoinChampEighthBreathTrendRow(null), null)
  assert.equal(rejoinChampEighthBreathTrendRow({ back: c(-5), prev: c(0), cur: c(0) }), null)
  // the REAL arc's own windows the rows re-voice (the census the same
  // values the arc keeps - the indexes the TRUE F-numbers price: the
  // F536/F537/F538 the c3(35/36/37), the F541/F542/F543 the
  // c3(40/41/42), the F523/F524/F525 the c3(22/23/24), the
  // F505/F506/F507 the c3(4/5/6), the F506/F507/F508 the c3(5/6/7),
  // the F567/F568/F569 the c3(64/65/66) - the fire-1243 off-by-one
  // lesson the same hand keeps)
  const c3 = (i) => ({ rejoinChampEighthBreath: REAL_ARC[i] })
  assert.ok(rejoinChampEighthBreathTrendRow({ back: c3(35), prev: c3(36), cur: c3(37) }).includes('9 -> 8 (-1) -> 0 (-8)'))
  assert.ok(rejoinChampEighthBreathTrendRow({ back: c3(40), prev: c3(41), cur: c3(42) }).includes('0 -> 9 (+9) -> 0 (-9)'))
  assert.ok(rejoinChampEighthBreathTrendRow({ back: c3(22), prev: c3(23), cur: c3(24) }).includes('0 -> 10 (+10) -> 0 (-10)'))
  assert.ok(rejoinChampEighthBreathTrendRow({ back: c3(4), prev: c3(5), cur: c3(6) }).includes('0 -> 6 (+6) -> 0 (-6)'))
  assert.ok(rejoinChampEighthBreathTrendRow({ back: c3(5), prev: c3(6), cur: c3(7) }).includes('6 -> 0 (-6) -> 57 (+57)'))
  assert.equal(rejoinChampEighthBreathTrendRow({ back: c3(64), prev: c3(65), cur: c3(66) }), null)
})

test('REAL 71-face window arc byte-exact - 11 classes the seat LIVE', () => {
  // the arc the fieldproof re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 71)
  assert.equal(classes.size, 11)
  assert.equal(Math.min(...arc), 0) // the FIFTY-FIVE-face gravity keeps (the constructive fifty-five the whole zero class prices)
  assert.equal(Math.max(...arc), 57) // the tallest voiced value F508 keeps
  // the zero faces the honest distinction prices (the REAL zero NO
  // face the window keeps - the champion hand the same-second pairs
  // the window never voices, the .379 champ word's own law re-rides)
  assert.equal(arc[5], 6) // the F506 the under-dialog the 6 < 7 prices
  assert.equal(arc[7], 57) // the F508 the window's own TALLEST voiced value
  assert.equal(arc[11], 12) // the F512 the under face keeps
  assert.equal(arc[13], 13) // the F514 the second-tallest voiced
  assert.equal(arc[23], 10) // the F524 the under face keeps
  assert.equal(arc[35], 9) // the F536 the under face keeps
  assert.equal(arc[36], 8) // the F537 the LEVEL face keeps
  assert.equal(arc[41], 9) // the F542 the under face keeps
  assert.equal(arc[45], 8) // the F546 the under face keeps
  assert.equal(arc[48], 2) // the F549 the small voiced keeps
  assert.equal(arc[52], 11) // the F554 keeps
  assert.equal(arc[54], 5) // the F556 the above face keeps
  assert.equal(arc[57], 6) // the F560 the under face keeps
  assert.equal(arc[60], 10) // the F563 keeps
  assert.equal(arc[63], 10) // the F566 keeps
  assert.equal(arc[66], 11) // the F569 the elder REAL tail
  assert.equal(arc[69], 0) // the F572 the constructive keeps
  assert.equal(arc[70], 0) // the F573 fresh tail the CONSTRUCTIVE face the THREE-gap champion cadence keeps
  // the held law: THIRTY-NINE held pairs the 71-face window keeps -
  // ALL the constructive-zero pairs the F501/F502 through the
  // F572/F573 pairs the branch keeps (the NO REAL held pair the
  // honest absence the champion hand prices - every voiced face the
  // neighbours the honest break the seats price)
  let held = 0
  for (let i = 1; i < arc.length; i++) if (arc[i] === arc[i - 1]) held++
  assert.equal(held, 39)
  // the multi-class law: the mode candidate the honest probe DECLINED
  // - the fifty-five-face zero the tie-degenerate gravity the
  // family prices
  const tally = new Map()
  for (const v of arc) tally.set(v, (tally.get(v) || 0) + 1)
  assert.equal(tally.get(0), 55)
  assert.equal(tally.get(10), 3)
  assert.equal(tally.get(6), 2)
  assert.equal(tally.get(8), 2)
  assert.equal(tally.get(9), 2)
  assert.equal(tally.get(11), 2)
  assert.equal(tally.get(2), 1)
  assert.equal(tally.get(5), 1)
  assert.equal(tally.get(12), 1)
  assert.equal(tally.get(13), 1)
  assert.equal(tally.get(57), 1)
})
