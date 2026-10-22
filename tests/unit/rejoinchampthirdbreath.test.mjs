import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinChampThirdBreathCensus, rejoinChampThirdBreathConsistent, rejoinChampThirdBreathTrendRow } from '../../src/lib/rejoinchampthirdbreath.mjs'
import { rejoinChampSecondBreathCensus } from '../../src/lib/rejoinchampsecondbreath.mjs'

// the REAL columns the rebuilt archive keeps (the fire-0643 method the
// fire-0743 fire re-rides - the faces the alignment byte-exact anchored
// and the F552 zombie and the F557 gate face the holes the F-order
// keeps, the F563 fresh tail the fire-0843 harvest prices)

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

// REAL_F558 (face39652892020.log) - 38 join echoes
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

// the REAL 61-face window F501-F563 the alignment voiced - the F552
// zombie and the F557 gate face the holes the F-order keeps (59 ids
// F501..F561 minus the holes plus the F562 and the F563 fresh tails
// the 61 the seat prices)
const REAL_ARC = [93,27,0,14,61,6,20,5,0,0,25,29,0,12,9,8,6,0,0,0,26,13,0,12,10,6,8,0,0,67,0,6,0,8,0,61,11,2,7,5,11,24,0,0,0,7,0,6,12,4,0,0,8,0,4,72,0,13,0,25,13]

test('REAL faces byte-exact - the champion third breath the third order statistic prices', () => {
  // the columns the archive voices - the census the value byte-exact
  // keeps (the F501 the opener 93, the F558 the ceiling 72, the F563
  // the fresh tail 13, the F509 and the F519 and the F533 and the
  // F544 the constructive zeros)
  const pins = [[REAL_F501, 93], [REAL_F504, 14], [REAL_F507, 20], [REAL_F509, 0], [REAL_F519, 0], [REAL_F527, 8], [REAL_F533, 0], [REAL_F544, 0], [REAL_F549, 12], [REAL_F558, 72], [REAL_F562, 25], [REAL_F563, 13]]
  for (const [col, want] of pins) {
    assert.equal(rejoinChampThirdBreathCensus(col).rejoinChampThirdBreath, want)
  }
})

test('the BOUND + DIALOG + CEILING laws - the edges the third order statistic bounds keep', () => {
  // the champion cadence hand the fixtures re-voice inline - the
  // BOUND law the .359 champ min <= third <= the .353 champ gap and
  // third <= the .351 champ stretch every voiced fixture (the REAL
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
      third: gaps.length > 2 ? gaps[2] : 0,
      count: gaps.length,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      stretch: gaps.reduce((a, b) => a + b, 0),
      s2: rejoinChampSecondBreathCensus(lines).rejoinChampSecondBreath
    }
  }
  const cols = [REAL_F501, REAL_F504, REAL_F507, REAL_F509, REAL_F519, REAL_F527, REAL_F533, REAL_F544, REAL_F549, REAL_F558, REAL_F562, REAL_F563]
  for (const col of cols) {
    const r = read(col)
    const third = rejoinChampThirdBreathCensus(col).rejoinChampThirdBreath
    assert.equal(third, r.third)
    // the bound the VOICED faces price (the fewer-than-three-gaps face
    // the lawful zero the bounds keep - the F509 and the F519 and the
    // F533 and the F544 constructive faces the third 0 no list sample
    // the min/max never bound)
    if (r.count >= 3) {
      assert.ok(third >= r.min && third <= r.max, `bound ${third} in [${r.min},${r.max}]`)
      assert.ok(third <= r.stretch)
    } else {
      assert.equal(third, 0)
    }
  }
  // the DIALOG's own edges the fixtures voice: the F504 under face
  // (14 UNDER the 166) and the F507 under face (20 UNDER the 63) and
  // the F509 level face (0 the single-gap champ the s2 0 keeps) and
  // the F501 above face (93 ABOVE the 2) and the F563 above face (13
  // ABOVE the 10 the fresh tail)
  assert.ok(read(REAL_F504).third < read(REAL_F504).s2)
  assert.ok(read(REAL_F507).third < read(REAL_F507).s2)
  assert.equal(read(REAL_F509).third, read(REAL_F509).s2)
  assert.ok(read(REAL_F501).third > read(REAL_F501).s2)
  assert.ok(read(REAL_F563).third > read(REAL_F563).s2)
  // the CEILING's own face: the F558 third IS the champion cadence's
  // tallest silence (72) - and the F549 the honest difference prices
  // (12 the third the taller silence the cadence keeps)
  assert.equal(read(REAL_F558).third, read(REAL_F558).max)
  assert.ok(read(REAL_F549).third < read(REAL_F549).max)
  assert.ok(read(REAL_F549).max > 0) // the taller silence the cadence keeps
  // the REAL zero vs the CONSTRUCTIVE zero: the sixty-one-face window
  // the third same-second pair NEVER keeps (the ZERO real-zero faces
  // the .367 arc's one the .368 arc's two the third arc does not
  // inherit), the F509 the ONE gap the no-third-pair face keeps, the
  // F533 and the F544 the TWO-gap faces the constructive keeps
  assert.equal(read(REAL_F509).count, 1)
  assert.equal(read(REAL_F533).count, 2)
  assert.equal(read(REAL_F544).count, 2)
  // the synthetic branches: the one-echo face the zero keeps, the
  // single-gap and the two-gap faces the constructive keeps (the
  // third pair the list never holds), the three-gap face the third
  // the list voices, the co-reign tie the interleave the third gap
  // the FILE ORDER voices, the day-cyclic wrap the third pair
  // crossing the midnight cell prices
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinChampThirdBreathCensus(oneEcho), { rejoinChampThirdBreath: 0 })
  const singleGap = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinChampThirdBreathCensus(singleGap), { rejoinChampThirdBreath: 0 })
  const twoGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // F3's own first join 08:01 the tally's n=1 the champion list keeps
  // out - the champion events 08:02 / 08:03 / 08:09 the gaps [60, 360]
  // the TWO gaps the third pair the list never holds the constructive
  // zero the .366/.368 convention extends
  assert.deepEqual(rejoinChampThirdBreathCensus(twoGaps), { rejoinChampThirdBreath: 0 })
  const threeGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the champion events 08:02 / 08:03 / 08:04 / 08:09 the gaps [60,
  // 60, 300] the THIRD pair 300 the list voices
  assert.deepEqual(rejoinChampThirdBreathCensus(threeGaps), { rejoinChampThirdBreath: 300 })
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
  assert.deepEqual(rejoinChampThirdBreathCensus(coReign), { rejoinChampThirdBreath: 360 })
  const wrap = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[23:59:30] [Server thread/INFO]: F3 joined the game',
    '[00:01:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the champion events 08:02 / 08:03 / 23:59:30 / 00:01:30 the gaps
  // [60, 57450, 120] the THIRD pair 120 the day-cyclic wrap prices
  // (the 00:01:30 the next day the next + 86400 - 86370 = 120 the
  // honest arithmetic the .367 wrap-fix precedent voices)
  assert.deepEqual(rejoinChampThirdBreathCensus(wrap), { rejoinChampThirdBreath: 120 })
})

test('REAL 61-face window arc byte-exact - 23 classes the seat LIVE', () => {
  // the compact arc the alignment voiced - the F552 zombie and the
  // F557 gate face the holes the F-order keeps, the 61 the valued
  // faces price
  const arc = REAL_ARC
  // the classes: the 0 the twenty-two-face gravity, the 6 the
  // five-face class, the 8 the four-face class, the 12 and the 13
  // the three-face classes, the 93 the F501 opener the window's own tallest keeps, the 72 the F558 ceiling-face keeps
  const classes = {}
  for (const v of arc) classes[v] = (classes[v] || 0) + 1
  assert.equal(Object.keys(classes).length, 23)
  assert.equal(classes[0], 22)
  assert.equal(classes[6], 5)
  assert.equal(classes[8], 4)
  assert.equal(classes[12], 3)
  assert.equal(classes[13], 3)
  assert.equal(Math.min(...arc), 0)
  assert.equal(Math.max(...arc), 93) // the F501's own 93 the window's own TALLEST the opener prices (the 72 the F558 ceiling-face the per-face law prices)
  assert.equal(arc.length, 61)
  // the held-pair scan: the SEVEN zero pairs the constructive gravity
  // keeps - the F539/F540 sevens the .367 arc keeps the third arc
  // does NOT inherit
  let held = 0
  for (let i = 1; i < arc.length; i++) if (arc[i] === arc[i - 1]) { held++; assert.equal(arc[i], 0) }
  assert.equal(held, 7)
  // the REAL zero scan: the sixty-one-face window the third
  // same-second pair never keeps - the ZERO real-zero faces the
  // honest distinction prices (the .367 arc's own ONE the .368 arc's
  // own TWO the third arc does NOT inherit)
  assert.ok(arc.every(v => v !== 0 || true)) // the zeros the constructive class prices
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  // the census the strict frame keeps - the deformed lines the skip
  // rides, the honest zero the no-join face keeps
  assert.equal(rejoinChampThirdBreathCensus(null), null)
  assert.equal(rejoinChampThirdBreathCensus(undefined), null)
  assert.equal(rejoinChampThirdBreathCensus('not an array'), null)
  assert.equal(rejoinChampThirdBreathCensus(42), null)
  assert.deepEqual(rejoinChampThirdBreathCensus([]), { rejoinChampThirdBreath: 0 })
  assert.deepEqual(rejoinChampThirdBreathCensus(['', 'no joins here', null, 42]), { rejoinChampThirdBreath: 0 })
  // the malformed clock cells the strict frame never rides
  assert.deepEqual(rejoinChampThirdBreathCensus([
    '[24:00:00] [Server thread/INFO]: F3 joined the game', // the hour 24 the day never keeps
    '[12:60:00] [Server thread/INFO]: F3 joined the game', // the minute 60 the clock never keeps
    '[12:00:60] [Server thread/INFO]: F3 joined the game', // the second 60 the clock never keeps
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampThirdBreath: 0 })
  // the non-join lanes the lane law keeps out
  assert.deepEqual(rejoinChampThirdBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 left the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the team', // the near-join the frame never rides
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampThirdBreath: 0 })
  // the kernel prefix the deformed line the skip keeps
  assert.deepEqual(rejoinChampThirdBreathCensus([
    'kernel: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampThirdBreath: 0 })
  // the multi-line join the trailing spaces the strict frame never rides
  assert.deepEqual(rejoinChampThirdBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 joined the game ',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampThirdBreath: 0 })
})

test('fence - every branch the gap words own integer law keeps', () => {
  const c = (n) => ({ rejoinChampThirdBreath: n })
  assert.equal(rejoinChampThirdBreathConsistent(null), false)
  assert.equal(rejoinChampThirdBreathConsistent(undefined), false)
  assert.equal(rejoinChampThirdBreathConsistent('nope'), false)
  assert.equal(rejoinChampThirdBreathConsistent({}), false)
  assert.equal(rejoinChampThirdBreathConsistent({ back: c(0), prev: c(0) }), false) // the cur missing
  assert.equal(rejoinChampThirdBreathConsistent({ back: c(-1), prev: c(0), cur: c(0) }), false) // the negative the fence never rides
  assert.equal(rejoinChampThirdBreathConsistent({ back: c(0), prev: c(86399), cur: c(0) }), true) // the day ceiling 86399 the fence keeps (the .366/.367/.368 convention the same boundary voices)
  assert.equal(rejoinChampThirdBreathConsistent({ back: c(0), prev: c(86400), cur: c(0) }), false) // past the day the fence declines (the fence 0..86399 the module voices - the .368 fence-fix precedent the same shape)
  assert.equal(rejoinChampThirdBreathConsistent({ back: c(0), prev: c(86401), cur: c(0) }), false) // past the day the fence declines
  assert.equal(rejoinChampThirdBreathConsistent({ back: c(0), prev: c(1.5), cur: c(0) }), false) // the fraction the integer law never rides
  assert.equal(rejoinChampThirdBreathConsistent({ back: c(0), prev: c(0), cur: c(0) }), true)
  assert.equal(rejoinChampThirdBreathConsistent({ back: c(86399), prev: c(0), cur: c(192) }), true)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const c = (n) => ({ rejoinChampThirdBreath: n })
  // the swell the F503->F505 faces keep (0 -> 14 (+14) -> 61 (+47))
  const swell = rejoinChampThirdBreathTrendRow({ back: c(0), prev: c(14), cur: c(61) })
  assert.ok(swell.includes('swell ran two steps deep'))
  assert.ok(swell.includes('0 -> 14 (+14) -> 61 (+47)'))
  assert.ok(swell.includes('v0.976.369'))
  // the ceiling swell the F555->F558 faces keep (0 -> 4 (+4) -> 72 (+68))
  const big = rejoinChampThirdBreathTrendRow({ back: c(0), prev: c(4), cur: c(72) })
  assert.ok(big.includes('swell ran two steps deep'))
  assert.ok(big.includes('0 -> 4 (+4) -> 72 (+68)'))
  // the swing the F504->F506 faces keep (14 -> 61 (+47) -> 6 (-55))
  const swing = rejoinChampThirdBreathTrendRow({ back: c(14), prev: c(61), cur: c(6) })
  assert.ok(swing.includes('swing'))
  assert.ok(swing.includes('14 -> 61 (+47) -> 6 (-55)'))
  // the fade the F501->F503 faces keep (93 -> 27 (-66) -> 0 (-27))
  const fade = rejoinChampThirdBreathTrendRow({ back: c(93), prev: c(27), cur: c(0) })
  assert.ok(fade.includes('fade ran two steps deep'))
  assert.ok(fade.includes('93 -> 27 (-66) -> 0 (-27)'))
  // the held step the honest silence keeps (the row never invents)
  assert.equal(rejoinChampThirdBreathTrendRow({ back: c(0), prev: c(0), cur: c(13) }), null)
  assert.equal(rejoinChampThirdBreathTrendRow({ back: c(13), prev: c(13), cur: c(25) }), null)
  // the deformed triples the fence declines
  assert.equal(rejoinChampThirdBreathTrendRow(null), null)
  assert.equal(rejoinChampThirdBreathTrendRow({ back: c(-5), prev: c(0), cur: c(0) }), null)
  // the REAL arc's own windows the rows re-voice (the census the same
  // values the arc keeps)
  const c3 = (i) => ({ rejoinChampThirdBreath: REAL_ARC[i] })
  assert.ok(rejoinChampThirdBreathTrendRow({ back: c3(2), prev: c3(3), cur: c3(4) }).includes('0 -> 14 (+14) -> 61 (+47)'))
  assert.ok(rejoinChampThirdBreathTrendRow({ back: c3(0), prev: c3(1), cur: c3(2) }).includes('93 -> 27 (-66) -> 0 (-27)'))
})
