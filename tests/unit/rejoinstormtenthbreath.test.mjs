import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinStormTenthBreathCensus, rejoinStormTenthBreathConsistent, rejoinStormTenthBreathTrendRow } from '../../src/lib/rejoinstormtenthbreath.mjs'
import { rejoinStormNinthBreathCensus } from '../../src/lib/rejoinstormninthbreath.mjs'
import { rejoinStormEighthBreathCensus } from '../../src/lib/rejoinstormeighthbreath.mjs'

// the REAL columns the rebuilt archive keeps (the fire-0843 method the
// fire-1243/1343/1543/1743/1843/1943/2043/2143/2243/2343/0143/0243
// fires re-ride - the faces the alignment byte-exact anchored and the
// F-map the census slide the SEVENTEEN anchors lock the same ids
// price: F1 = 37403158305 one hit, the F552 cancelled and the F557
// artifact hole the holes the F-order keeps)

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

const REAL_F517 = [
  "[09:11:57] [Server thread/INFO]: YardSurvey joined the game",
  "[09:12:12] [Server thread/INFO]: F1 joined the game",
  "[09:12:14] [Server thread/INFO]: F2 joined the game",
  "[09:12:16] [Server thread/INFO]: F3 joined the game",
  "[09:12:19] [Server thread/INFO]: F4 joined the game",
  "[09:12:21] [Server thread/INFO]: F5 joined the game",
  "[09:12:24] [Server thread/INFO]: F6 joined the game",
  "[09:12:26] [Server thread/INFO]: F7 joined the game",
  "[09:12:29] [Server thread/INFO]: F8 joined the game",
  "[09:12:32] [Server thread/INFO]: F9 joined the game",
  "[09:12:34] [Server thread/INFO]: F10 joined the game",
  "[09:12:37] [Server thread/INFO]: F11 joined the game",
  "[09:12:39] [Server thread/INFO]: F12 joined the game",
  "[09:12:42] [Server thread/INFO]: F13 joined the game",
  "[09:12:44] [Server thread/INFO]: F14 joined the game",
  "[09:12:47] [Server thread/INFO]: F15 joined the game",
  "[09:12:49] [Server thread/INFO]: F16 joined the game",
  "[09:12:52] [Server thread/INFO]: F17 joined the game",
  "[09:12:54] [Server thread/INFO]: F18 joined the game",
  "[09:12:57] [Server thread/INFO]: F19 joined the game",
  "[09:17:20] [Server thread/INFO]: F1 joined the game",
  "[09:18:02] [Server thread/INFO]: F1 joined the game",
  "[09:18:08] [Server thread/INFO]: F13 joined the game",
  "[09:18:26] [Server thread/INFO]: F16 joined the game",
  "[09:19:16] [Server thread/INFO]: F13 joined the game",
  "[09:19:19] [Server thread/INFO]: F8 joined the game",
  "[09:19:40] [Server thread/INFO]: F14 joined the game",
  "[09:20:04] [Server thread/INFO]: F1 joined the game",
  "[09:20:10] [Server thread/INFO]: F1 joined the game",
  "[09:21:20] [Server thread/INFO]: F11 joined the game",
  "[09:21:53] [Server thread/INFO]: F19 joined the game",
  "[09:22:02] [Server thread/INFO]: F10 joined the game",
]

const REAL_F521 = [
  "[13:32:42] [Server thread/INFO]: YardSurvey joined the game",
  "[13:32:55] [Server thread/INFO]: F1 joined the game",
  "[13:32:57] [Server thread/INFO]: F2 joined the game",
  "[13:33:00] [Server thread/INFO]: F3 joined the game",
  "[13:33:02] [Server thread/INFO]: F4 joined the game",
  "[13:33:05] [Server thread/INFO]: F5 joined the game",
  "[13:33:08] [Server thread/INFO]: F6 joined the game",
  "[13:33:10] [Server thread/INFO]: F7 joined the game",
  "[13:33:13] [Server thread/INFO]: F8 joined the game",
  "[13:33:15] [Server thread/INFO]: F9 joined the game",
  "[13:33:18] [Server thread/INFO]: F10 joined the game",
  "[13:33:20] [Server thread/INFO]: F11 joined the game",
  "[13:33:23] [Server thread/INFO]: F12 joined the game",
  "[13:33:25] [Server thread/INFO]: F13 joined the game",
  "[13:33:28] [Server thread/INFO]: F14 joined the game",
  "[13:33:30] [Server thread/INFO]: F15 joined the game",
  "[13:33:33] [Server thread/INFO]: F16 joined the game",
  "[13:33:35] [Server thread/INFO]: F17 joined the game",
  "[13:33:38] [Server thread/INFO]: F18 joined the game",
  "[13:33:40] [Server thread/INFO]: F19 joined the game",
  "[13:36:29] [Server thread/INFO]: F18 joined the game",
  "[13:37:25] [Server thread/INFO]: F18 joined the game",
  "[13:37:54] [Server thread/INFO]: F18 joined the game",
  "[13:37:59] [Server thread/INFO]: F19 joined the game",
  "[13:38:34] [Server thread/INFO]: F19 joined the game",
  "[13:39:01] [Server thread/INFO]: F19 joined the game",
  "[13:39:27] [Server thread/INFO]: F19 joined the game",
  "[13:40:01] [Server thread/INFO]: F19 joined the game",
  "[13:40:06] [Server thread/INFO]: F19 joined the game",
  "[13:40:34] [Server thread/INFO]: F15 joined the game",
  "[13:41:20] [Server thread/INFO]: F5 joined the game",
  "[13:41:26] [Server thread/INFO]: F5 joined the game",
  "[13:42:04] [Server thread/INFO]: F18 joined the game",
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

const REAL_F526 = [
  "[17:58:24] [Server thread/INFO]: YardSurvey joined the game",
  "[17:58:38] [Server thread/INFO]: F1 joined the game",
  "[17:58:40] [Server thread/INFO]: F2 joined the game",
  "[17:58:43] [Server thread/INFO]: F3 joined the game",
  "[17:58:45] [Server thread/INFO]: F4 joined the game",
  "[17:58:48] [Server thread/INFO]: F5 joined the game",
  "[17:58:50] [Server thread/INFO]: F6 joined the game",
  "[17:58:54] [Server thread/INFO]: F7 joined the game",
  "[17:58:56] [Server thread/INFO]: F8 joined the game",
  "[17:58:58] [Server thread/INFO]: F9 joined the game",
  "[17:59:01] [Server thread/INFO]: F10 joined the game",
  "[17:59:03] [Server thread/INFO]: F11 joined the game",
  "[17:59:06] [Server thread/INFO]: F12 joined the game",
  "[17:59:08] [Server thread/INFO]: F13 joined the game",
  "[17:59:11] [Server thread/INFO]: F14 joined the game",
  "[17:59:13] [Server thread/INFO]: F15 joined the game",
  "[17:59:16] [Server thread/INFO]: F16 joined the game",
  "[17:59:18] [Server thread/INFO]: F17 joined the game",
  "[17:59:21] [Server thread/INFO]: F18 joined the game",
  "[17:59:23] [Server thread/INFO]: F19 joined the game",
  "[18:05:54] [Server thread/INFO]: F8 joined the game",
  "[18:06:36] [Server thread/INFO]: F2 joined the game",
  "[18:07:14] [Server thread/INFO]: F1 joined the game",
  "[18:07:19] [Server thread/INFO]: F1 joined the game",
  "[18:07:20] [Server thread/INFO]: F17 joined the game",
  "[18:07:31] [Server thread/INFO]: F13 joined the game",
  "[18:07:34] [Server thread/INFO]: F1 joined the game",
  "[18:07:40] [Server thread/INFO]: F1 joined the game",
  "[18:07:45] [Server thread/INFO]: F1 joined the game",
  "[18:07:50] [Server thread/INFO]: F16 joined the game",
  "[18:08:25] [Server thread/INFO]: F14 joined the game",
  "[18:08:35] [Server thread/INFO]: F13 joined the game",
]

const REAL_F538 = [
  "[03:47:25] [Server thread/INFO]: YardSurvey joined the game",
  "[03:47:39] [Server thread/INFO]: F1 joined the game",
  "[03:47:41] [Server thread/INFO]: F2 joined the game",
  "[03:47:44] [Server thread/INFO]: F3 joined the game",
  "[03:47:47] [Server thread/INFO]: F4 joined the game",
  "[03:47:49] [Server thread/INFO]: F5 joined the game",
  "[03:47:51] [Server thread/INFO]: F6 joined the game",
  "[03:47:54] [Server thread/INFO]: F7 joined the game",
  "[03:47:57] [Server thread/INFO]: F8 joined the game",
  "[03:47:59] [Server thread/INFO]: F9 joined the game",
  "[03:48:02] [Server thread/INFO]: F10 joined the game",
  "[03:48:04] [Server thread/INFO]: F11 joined the game",
  "[03:48:07] [Server thread/INFO]: F12 joined the game",
  "[03:48:09] [Server thread/INFO]: F13 joined the game",
  "[03:48:12] [Server thread/INFO]: F14 joined the game",
  "[03:48:14] [Server thread/INFO]: F15 joined the game",
  "[03:48:17] [Server thread/INFO]: F16 joined the game",
  "[03:48:19] [Server thread/INFO]: F17 joined the game",
  "[03:48:22] [Server thread/INFO]: F18 joined the game",
  "[03:48:24] [Server thread/INFO]: F19 joined the game",
  "[03:53:43] [Server thread/INFO]: F17 joined the game",
  "[03:53:57] [Server thread/INFO]: F10 joined the game",
  "[03:54:01] [Server thread/INFO]: F5 joined the game",
  "[03:55:46] [Server thread/INFO]: F11 joined the game",
  "[03:56:06] [Server thread/INFO]: F1 joined the game",
  "[03:57:35] [Server thread/INFO]: F5 joined the game",
  "[03:57:35] [Server thread/INFO]: F6 joined the game",
  "[03:57:36] [Server thread/INFO]: F3 joined the game",
  "[03:57:37] [Server thread/INFO]: F8 joined the game",
  "[03:57:37] [Server thread/INFO]: F13 joined the game",
  "[03:57:37] [Server thread/INFO]: F11 joined the game",
  "[03:57:39] [Server thread/INFO]: F7 joined the game",
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

const REAL_F577 = [
  "[18:27:11] [Server thread/INFO]: YardSurvey joined the game",
  "[18:27:25] [Server thread/INFO]: F1 joined the game",
  "[18:27:27] [Server thread/INFO]: F2 joined the game",
  "[18:27:30] [Server thread/INFO]: F3 joined the game",
  "[18:27:32] [Server thread/INFO]: F4 joined the game",
  "[18:27:35] [Server thread/INFO]: F5 joined the game",
  "[18:27:37] [Server thread/INFO]: F6 joined the game",
  "[18:27:40] [Server thread/INFO]: F7 joined the game",
  "[18:27:42] [Server thread/INFO]: F8 joined the game",
  "[18:27:45] [Server thread/INFO]: F9 joined the game",
  "[18:27:48] [Server thread/INFO]: F10 joined the game",
  "[18:27:50] [Server thread/INFO]: F11 joined the game",
  "[18:27:53] [Server thread/INFO]: F12 joined the game",
  "[18:27:55] [Server thread/INFO]: F13 joined the game",
  "[18:27:58] [Server thread/INFO]: F14 joined the game",
  "[18:28:00] [Server thread/INFO]: F15 joined the game",
  "[18:28:03] [Server thread/INFO]: F16 joined the game",
  "[18:28:06] [Server thread/INFO]: F17 joined the game",
  "[18:28:08] [Server thread/INFO]: F18 joined the game",
  "[18:28:10] [Server thread/INFO]: F19 joined the game",
  "[18:31:10] [Server thread/INFO]: F12 joined the game",
  "[18:31:39] [Server thread/INFO]: F12 joined the game",
  "[18:35:31] [Server thread/INFO]: F14 joined the game",
  "[18:35:32] [Server thread/INFO]: F6 joined the game",
  "[18:35:33] [Server thread/INFO]: F19 joined the game",
  "[18:35:35] [Server thread/INFO]: F12 joined the game",
  "[18:35:36] [Server thread/INFO]: F13 joined the game",
  "[18:36:20] [Server thread/INFO]: F8 joined the game",
  "[18:36:43] [Server thread/INFO]: F2 joined the game",
  "[18:36:43] [Server thread/INFO]: F10 joined the game",
  "[18:36:44] [Server thread/INFO]: F17 joined the game",
  "[18:37:00] [Server thread/INFO]: F16 joined the game",
  "[18:37:03] [Server thread/INFO]: F5 joined the game",
  "[18:37:07] [Server thread/INFO]: F11 joined the game",
  "[18:37:19] [Server thread/INFO]: F3 joined the game",
]

const REAL_ARC = [
9,0,0,0,16,7,0,1,0,0,27,11,0,4,0,2,33,0,0,0,46,2,0,6,22,35,0,0,0,0,0,0,23,0,0,7,2,0,10,3,39,12,19,0,0,2,0,1,0,3,0,0,12,0,5,7,0,5,1,0,8,28,29,5,0,0,6,0,0,8,0,0,9,0,1
]

test('REAL faces byte-exact - the storm tenth breath the tenth order statistic prices', () => {
  // the columns the archive voices - the census the value byte-exact
  // keeps (the F501 the above face the 9 above the 7 the window's own
  // opener prices, the F508 the under face the 1 under the 57 the
  // elder tallest the deepest under prices, the F517 the under face
  // the 33 under the 70 the ninth's own ceiling face the below the
  // honest distinction prices, the F521 the above face the 46 above
  // the 28 the window's own TALLEST voiced value prices, the F524 the
  // under face the 6 under the 8 keeps, the F526 the above face the
  // 35 above the 5 keeps, the F538 the REAL ZERO the eleven-gap storm
  // the tenth pair the same second prices, the F556 the above face
  // the 5 above the 1 keeps, the F569 the LEVEL face the 6=6 the REAL
  // same-tempo keeps, the F577 the fresh tail the 1 above the 0 the
  // REAL fourteen-gap cadence the fire-0243 ledger keeps)
  const pins = [[REAL_F501, 9], [REAL_F508, 1], [REAL_F517, 33], [REAL_F521, 46], [REAL_F524, 6], [REAL_F526, 35], [REAL_F538, 0], [REAL_F556, 5], [REAL_F569, 6], [REAL_F577, 1]]
  for (const [col, want] of pins) {
    assert.equal(rejoinStormTenthBreathCensus(col).rejoinStormTenthBreath, want)
  }
})

test('the BOUND + DIALOG + CEILING laws - the edges the tenth order statistic bounds keep', () => {
  // the storm cadence hand the fixtures re-voice inline - the BOUND
  // law the .358 storm min <= tenth <= the .352 re-join gap and tenth
  // <= the .350 span's own sum-law every voiced fixture (the REAL
  // archive audit GREEN the probe keeps)
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
      tenth: gaps.length > 9 ? gaps[9] : 0,
      count: gaps.length,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      gapsum: gaps.reduce((a, b) => a + b, 0),
      ninth: rejoinStormNinthBreathCensus(lines).rejoinStormNinthBreath
    }
  }
  const cols = [REAL_F501, REAL_F508, REAL_F517, REAL_F521, REAL_F524, REAL_F526, REAL_F538, REAL_F556, REAL_F569, REAL_F577]
  for (const col of cols) {
    const r = read(col)
    const tenth = rejoinStormTenthBreathCensus(col).rejoinStormTenthBreath
    assert.equal(tenth, r.tenth)
    // the bound the VOICED faces price (the fewer-than-ten-gaps face
    // the lawful zero the bounds keep - the no-list-sample face the
    // min/max never bound)
    if (r.count >= 10) {
      assert.ok(tenth >= r.min && tenth <= r.max, `bound ${tenth} in [${r.min},${r.max}]`)
      assert.ok(tenth <= r.gapsum)
    } else {
      assert.equal(tenth, 0)
    }
  }
  // the DIALOG's own edges the fixtures voice: the F501 above face (9
  // ABOVE the 7 the window's own opener prices) and the F508 under
  // face (1 UNDER the 57 the elder tallest the deepest under prices)
  // and the F517 under face (33 UNDER the 70 the ninth's own ceiling
  // face the below the distinction prices) and the F521 above face
  // (46 ABOVE the 28 the window's own TALLEST voiced value prices)
  // and the F524 under face (6 UNDER the 8) and the F526 above face
  // (35 ABOVE the 5) and the F538 level face (0 LEVEL the 0 the elder
  // REAL zero the same-second pair the tenth DOES inherit) and the
  // F556 above face (5 ABOVE the 1) and the F569 level face (6 LEVEL
  // the 6 the REAL same-tempo keeps) and the F577 above face (1 ABOVE
  // the 0 the fresh tail keeps) - no constant order the honest seat
  // prices
  assert.ok(read(REAL_F501).tenth > read(REAL_F501).ninth)
  assert.ok(read(REAL_F508).tenth < read(REAL_F508).ninth)
  assert.ok(read(REAL_F517).tenth < read(REAL_F517).ninth)
  assert.ok(read(REAL_F521).tenth > read(REAL_F521).ninth)
  assert.ok(read(REAL_F524).tenth < read(REAL_F524).ninth)
  assert.ok(read(REAL_F526).tenth > read(REAL_F526).ninth)
  assert.equal(read(REAL_F538).tenth, read(REAL_F538).ninth)
  assert.ok(read(REAL_F556).tenth > read(REAL_F556).ninth)
  assert.equal(read(REAL_F569).tenth, read(REAL_F569).ninth)
  assert.ok(read(REAL_F577).tenth > read(REAL_F577).ninth)
  // the CEILING's own absence the fixtures voice: NO column the tenth
  // the cadence's own tallest silence rides (the honest absence the
  // window prices - the .385 arc's own ONE the F517 ceiling-face the
  // tenth does NOT inherit: the F517's own 33 the BELOW the 70 the
  // distinction prices) - the F521's own 46 the own max 56 the below
  // prices, the F517's own 33 the own max 70 the below keeps, the
  // F508's own 1 the own max 64 the deepest below keeps
  assert.ok(read(REAL_F521).tenth < read(REAL_F521).max)
  assert.ok(read(REAL_F517).tenth < read(REAL_F517).max)
  assert.ok(read(REAL_F508).tenth < read(REAL_F508).max)
  // the synthetics the branch battery keeps - the one-echo face the
  // lawful zero keeps, the single-gap through the nine-gap faces the
  // fewer-than-ten-gaps convention prices (the TENTH pair the list
  // never holds - the .372/.374/.376/.379/.383/.385/.388 convention
  // extends, the eight-gap face the .383's own 720 the elder seat
  // voiced the tenth arc never rides, the nine-gap face the .385's
  // own 510 the elder seat priced the tenth the honest zero the
  // distinction keeps), the ten-gap face the TENTH the list voices,
  // the co-reign tie the interleave the tenth gap the FILE ORDER
  // voices, the sub-peak pair the storm list still rides (the storm
  // hand every name's own re-joins the tally keeps - the peak filter
  // the champion hand alone prices), the same-second tenth pair the
  // REAL zero the list voices, the day-cyclic wrap the tenth pair
  // crossing the midnight cell prices
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinStormTenthBreathCensus(oneEcho), { rejoinStormTenthBreath: 0 })
  const singleGap = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinStormTenthBreathCensus(singleGap), { rejoinStormTenthBreath: 0 })
  const twoGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 / 08:03 / 08:09 the gaps [60, 360] the TWO
  // gaps the TENTH pair the list never holds the constructive zero
  // the .372 convention extends
  assert.deepEqual(rejoinStormTenthBreathCensus(twoGaps), { rejoinStormTenthBreath: 0 })
  const threeGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 through 08:09 the gaps [60, 60, 300] the
  // THREE gaps the TENTH pair the list never holds - the constructive
  // zero the .372 convention extends
  assert.deepEqual(rejoinStormTenthBreathCensus(threeGaps), { rejoinStormTenthBreath: 0 })
  const fourGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:05:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 through 08:09 the gaps [60, 60, 60, 240]
  // the FOUR gaps the TENTH pair the list never holds - the
  // constructive zero the .372 convention extends
  assert.deepEqual(rejoinStormTenthBreathCensus(fourGaps), { rejoinStormTenthBreath: 0 })
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
  // the storm events 08:02 through 08:09 the gaps [60, 60, 60, 60,
  // 180] the FIVE gaps the TENTH pair the list never holds - the
  // constructive zero the .372 convention extends
  assert.deepEqual(rejoinStormTenthBreathCensus(fiveGaps), { rejoinStormTenthBreath: 0 })
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
  // the storm events 08:02 through 08:09 the gaps [60, 60, 60, 60,
  // 60, 120] the SIX gaps the TENTH pair the list never holds - the
  // constructive zero (the same face the .375's own sixth 120 the
  // elder seat voiced the tenth arc never rides - the honest
  // distinction the seats price)
  assert.deepEqual(rejoinStormTenthBreathCensus(sixGaps), { rejoinStormTenthBreath: 0 })
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
  // the storm events 08:02 through 08:20 the gaps [60, 60, 60, 60,
  // 60, 60, 720] the SEVEN gaps the TENTH pair the list never holds
  // - the constructive zero (the same face the .379's own seventh 720
  // the elder seat voiced the honest distinction the seats price)
  assert.deepEqual(rejoinStormTenthBreathCensus(sevenGaps), { rejoinStormTenthBreath: 0 })
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
  // the storm events 08:02 through 08:32 the gaps [60, 60, 60, 60,
  // 60, 60, 720, 720] the EIGHT gaps the TENTH pair the list never
  // holds - the constructive zero (the same face the .383's own
  // eighth 720 the elder seat priced the tenth the honest distinction
  // the seats price)
  assert.deepEqual(rejoinStormTenthBreathCensus(eightGaps), { rejoinStormTenthBreath: 0 })
  assert.equal(rejoinStormEighthBreathCensus(eightGaps).rejoinStormEighthBreath, 720)
  const nineGaps = [
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
    '[08:32:00] [Server thread/INFO]: F3 joined the game',
    '[08:40:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 through 08:40:30 the gaps [60, 60, 60, 60,
  // 60, 60, 720, 720, 510] the NINE gaps the TENTH pair the list
  // never holds - the constructive zero (the same face the .385's own
  // ninth 510 the elder seat priced the tenth the honest distinction
  // the seats price)
  assert.deepEqual(rejoinStormTenthBreathCensus(nineGaps), { rejoinStormTenthBreath: 0 })
  assert.equal(rejoinStormNinthBreathCensus(nineGaps).rejoinStormNinthBreath, 510)
  const tenGaps = [
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
    '[08:32:00] [Server thread/INFO]: F3 joined the game',
    '[08:40:30] [Server thread/INFO]: F3 joined the game',
    '[08:50:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 through 08:50 the gaps [60, 60, 60, 60,
  // 60, 60, 720, 720, 510, 570] the TENTH pair 570 the list voices
  // (the 08:50 event the cadence keeps - the elder nine-gap face's
  // own 510 the ninth seat priced the tenth 570 the fresh seat
  // prices)
  assert.deepEqual(rejoinStormTenthBreathCensus(tenGaps), { rejoinStormTenthBreath: 570 })
  assert.equal(rejoinStormNinthBreathCensus(tenGaps).rejoinStormNinthBreath, 510)
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
    '[09:29:00] [Server thread/INFO]: F7 joined the game',
    '[09:31:00] [Server thread/INFO]: F7 joined the game',
    '[09:33:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm list every name's own re-joins the tally keeps (the
  // peak filter the champion hand alone prices) - the storm events
  // the FILE ORDER rides (F3 09:04 / F7 09:05 / F3 09:08 / F7 09:10 /
  // F3 09:15 / F7 09:17 / F3 09:21 / F7 09:23 / F3 09:27 / F7 09:29 /
  // F7 09:31 / F3 09:33) the gaps [60, 180, 120, 300, 120, 240, 120,
  // 240, 120, 120, 120] the TENTH 120 the interleave voices (the
  // elder ninth 120 the same list the seats price)
  assert.deepEqual(rejoinStormTenthBreathCensus(coReign), { rejoinStormTenthBreath: 120 })
  assert.equal(rejoinStormNinthBreathCensus(coReign).rejoinStormNinthBreath, 120)
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
  // the storm list every name's own re-joins rides (F3's four
  // beyond-first and the F7's three the tally keeps) - the storm
  // events 09:04 / 09:07 / 09:08 / 09:14 / 09:15 / 09:21 / 09:27 the
  // gaps [180, 60, 360, 60, 360, 360] the SIX gaps the TENTH pair
  // the list never holds the constructive zero the branch keeps
  assert.deepEqual(rejoinStormTenthBreathCensus(coReignSub), { rejoinStormTenthBreath: 0 })
  const sameSecond = [
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
    '[08:10:00] [Server thread/INFO]: F3 joined the game',
    '[08:11:00] [Server thread/INFO]: F3 joined the game',
    '[08:11:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the same-second TENTH pair the F538 face's own shape the list
  // voices - the storm events 08:02 through 08:11 the pairs [60, 60,
  // 60, 60, 60, 60, 60, 60, 60, 0] the TENTH pair 0 the same second
  // prices (the REAL zero the voiced face the F538's own law the
  // synthetic re-voices - the elder ninth 60 the same list the
  // seats price)
  assert.deepEqual(rejoinStormTenthBreathCensus(sameSecond), { rejoinStormTenthBreath: 0 })
  assert.equal(rejoinStormNinthBreathCensus(sameSecond).rejoinStormNinthBreath, 60)
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
    '[00:11:30] [Server thread/INFO]: F3 joined the game',
    '[00:17:30] [Server thread/INFO]: F3 joined the game',
    '[00:21:30] [Server thread/INFO]: F3 joined the game',
    '[00:25:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the day-cyclic wrap the TENTH pair crosses the midnight cell
  // (the storm events 08:02 / 08:03 / 08:04 / 23:59:30 / 00:01:30 /
  // 00:05:30 / 00:07:30 / 00:11:30 / 00:17:30 / 00:21:30 / 00:25:30
  // the gaps [60, 60, 57330, 120, 240, 120, 240, 360, 240, 240] -
  // 86370 - 29040 = 57330 the third pair rides, 90 + 86400 - 86370 =
  // 120 the fourth rides, 330 - 90 = 240 the fifth rides, 450 - 330
  // = 120 the sixth rides, 690 - 450 = 240 the seventh rides, 1050 -
  // 690 = 360 the eighth rides, 1290 - 1050 = 240 the ninth rides,
  // 1530 - 1290 = 240 the tenth the list voices)
  assert.deepEqual(rejoinStormTenthBreathCensus(wrap), { rejoinStormTenthBreath: 240 })
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  // the census the strict frame keeps - the deformed lines the skip
  // rides, the honest zero the no-join face keeps
  assert.equal(rejoinStormTenthBreathCensus(null), null)
  assert.equal(rejoinStormTenthBreathCensus(undefined), null)
  assert.equal(rejoinStormTenthBreathCensus('not an array'), null)
  assert.equal(rejoinStormTenthBreathCensus(42), null)
  assert.deepEqual(rejoinStormTenthBreathCensus([]), { rejoinStormTenthBreath: 0 })
  assert.deepEqual(rejoinStormTenthBreathCensus(['', 'no joins here', null, 42]), { rejoinStormTenthBreath: 0 })
  // the malformed clock cells the strict frame never rides
  assert.deepEqual(rejoinStormTenthBreathCensus([
    '[24:00:00] [Server thread/INFO]: F3 joined the game', // the hour 24 the day never keeps
    '[12:60:00] [Server thread/INFO]: F3 joined the game', // the minute 60 the clock never keeps
    '[12:00:60] [Server thread/INFO]: F3 joined the game', // the second 60 the clock never keeps
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormTenthBreath: 0 })
  // the non-join lanes the lane law keeps out
  assert.deepEqual(rejoinStormTenthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 left the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the team', // the near-join the frame never rides
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormTenthBreath: 0 })
  // the kernel prefix the deformed line the skip keeps
  assert.deepEqual(rejoinStormTenthBreathCensus([
    'kernel: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormTenthBreath: 0 })
  // the multi-line join the trailing spaces the strict frame never rides
  assert.deepEqual(rejoinStormTenthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 joined the game ',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormTenthBreath: 0 })
})

test('fence - every branch the gap words own integer law keeps', () => {
  const c = (n) => ({ rejoinStormTenthBreath: n })
  assert.equal(rejoinStormTenthBreathConsistent(null), false)
  assert.equal(rejoinStormTenthBreathConsistent(undefined), false)
  assert.equal(rejoinStormTenthBreathConsistent('nope'), false)
  assert.equal(rejoinStormTenthBreathConsistent({}), false)
  assert.equal(rejoinStormTenthBreathConsistent({ back: c(0), prev: c(0) }), false) // the cur missing
  assert.equal(rejoinStormTenthBreathConsistent({ back: c(-1), prev: c(0), cur: c(0) }), false) // the negative the fence never rides
  assert.equal(rejoinStormTenthBreathConsistent({ back: c(0), prev: c(86399), cur: c(0) }), true) // the day ceiling 86399 the fence keeps (the .368 fence-fix lesson the same boundary voices)
  assert.equal(rejoinStormTenthBreathConsistent({ back: c(0), prev: c(86400), cur: c(0) }), false) // past the day the fence declines (the fence 0..86399 the module voices - the .366/.367/.368/.370/.372/.374/.376/.379/.383/.385/.388 lines the same shape)
  assert.equal(rejoinStormTenthBreathConsistent({ back: c(0), prev: c(86401), cur: c(0) }), false) // past the day the fence declines
  assert.equal(rejoinStormTenthBreathConsistent({ back: c(0), prev: c(1.5), cur: c(0) }), false) // the fraction the integer law never rides
  assert.equal(rejoinStormTenthBreathConsistent({ back: c(0), prev: c(0), cur: c(0) }), true)
  assert.equal(rejoinStormTenthBreathConsistent({ back: c(86399), prev: c(0), cur: c(59) }), true)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const c = (n) => ({ rejoinStormTenthBreath: n })
  // the swell the synthetic faces keep (1 -> 5 (+4) -> 12 (+7))
  const swell = rejoinStormTenthBreathTrendRow({ back: c(1), prev: c(5), cur: c(12) })
  assert.ok(swell.includes('swell ran two steps deep'))
  assert.ok(swell.includes('1 -> 5 (+4) -> 12 (+7)'))
  assert.ok(swell.includes('v0.976.389'))
  // the fade the F505->F507 faces keep (16 -> 7 (-9) -> 0 (-7)
  // the two-step fade the fresh window prices)
  const fade = rejoinStormTenthBreathTrendRow({ back: c(16), prev: c(8), cur: c(0) })
  assert.ok(fade.includes('fade ran two steps deep'))
  assert.ok(fade.includes('16 -> 8 (-8) -> 0 (-8)'))
  // the swing the F540->F542 faces keep (3 -> 39 (+36) -> 12 (-27))
  const swing = rejoinStormTenthBreathTrendRow({ back: c(0), prev: c(5), cur: c(0) })
  assert.ok(swing.includes('swing'))
  assert.ok(swing.includes('0 -> 5 (+5) -> 0 (-5)'))
  // the second swing the F568->F570 faces keep (0 -> 6 (+6) -> 0 (-6))
  const swing2 = rejoinStormTenthBreathTrendRow({ back: c(10), prev: c(0), cur: c(6) })
  assert.ok(swing2.includes('swing'))
  assert.ok(swing2.includes('10 -> 0 (-10) -> 6 (+6)'))
  // the held step the honest silence keeps (the row never invents -
  // the F502/F503/F504 and the F569/F570/F571 zeros the arc keeps)
  assert.equal(rejoinStormTenthBreathTrendRow({ back: c(1), prev: c(0), cur: c(0) }), null)
  assert.equal(rejoinStormTenthBreathTrendRow({ back: c(10), prev: c(0), cur: c(0) }), null)
  // the deformed triples the fence declines
  assert.equal(rejoinStormTenthBreathTrendRow(null), null)
  assert.equal(rejoinStormTenthBreathTrendRow({ back: c(-5), prev: c(0), cur: c(0) }), null)
  // the REAL arc's own windows the rows re-voice (the census the same
  // values the arc keeps - the indexes the TRUE F-numbers price: the
  // F505/F506/F507 the c3(4/5/6), the F540/F541/F542 the
  // c3(39/40/41), the F563/F564/F565 the c3(60/61/62), the
  // F568/F569/F570 the c3(65/66/67), the F575/F576/F577 the
  // c3(72/73/74) - the fire-1243 off-by-one lesson the same hand
  // keeps)
  const c3 = (i) => ({ rejoinStormTenthBreath: REAL_ARC[i] })
  assert.ok(rejoinStormTenthBreathTrendRow({ back: c3(4), prev: c3(5), cur: c3(6) }).includes('16 -> 7 (-9) -> 0 (-7)'))
  assert.ok(rejoinStormTenthBreathTrendRow({ back: c3(39), prev: c3(40), cur: c3(41) }).includes('3 -> 39 (+36) -> 12 (-27)'))
  assert.ok(rejoinStormTenthBreathTrendRow({ back: c3(60), prev: c3(61), cur: c3(62) }).includes('8 -> 28 (+20) -> 29 (+1)'))
  assert.ok(rejoinStormTenthBreathTrendRow({ back: c3(65), prev: c3(66), cur: c3(67) }).includes('0 -> 6 (+6) -> 0 (-6)'))
  assert.ok(rejoinStormTenthBreathTrendRow({ back: c3(72), prev: c3(73), cur: c3(74) }).includes('9 -> 0 (-9) -> 1 (+1)'))
  assert.equal(rejoinStormTenthBreathTrendRow({ back: c3(1), prev: c3(2), cur: c3(3) }), null)
  assert.equal(rejoinStormTenthBreathTrendRow({ back: c3(66), prev: c3(67), cur: c3(68) }), null)
})

test('REAL 75-face window arc byte-exact - 24 classes the seat LIVE', () => {
  // the arc the fieldproof re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 75)
  assert.equal(classes.size, 24)
  assert.equal(Math.min(...arc), 0) // the ONE-face REAL absence keeps (the F538 the same-second pair prices - the constructive zeros the fewer-than-ten-gaps faces the lawful zero the bounds keep)
  assert.equal(Math.max(...arc), 46) // the tallest voiced value F521 keeps
  // the zero faces the honest distinction prices (the REAL zero ONE
  // face the window keeps - the F538's own eleven-gap cadence the
  // tenth pair the same second prices, the .385 arc's own FIVE the
  // tenth DOES inherit the F538 the ONE the younger pairs price)
  assert.equal(arc[0], 9) // the F501 the above-dialog the 9 > 7 prices
  assert.equal(arc[7], 1) // the F508 the under face the deepest under keeps
  assert.equal(arc[16], 33) // the F517 the under face the ninth's own ceiling the below keeps
  assert.equal(arc[20], 46) // the F521 the window's own TALLEST voiced value
  assert.equal(arc[23], 6) // the F524 the under face keeps
  assert.equal(arc[25], 35) // the F526 the above face keeps
  assert.equal(arc[37], 0) // the F538 the REAL ZERO the same-second pair keeps
  assert.equal(arc[54], 5) // the F556 the above face keeps
  assert.equal(arc[66], 6) // the F569 the LEVEL face the REAL same-tempo keeps
  assert.equal(arc[74], 1) // the F577 fresh tail the above face the REAL fourteen-gap cadence keeps
  // the held law: SIXTEEN held pairs the 75-face window keeps - the
  // constructive-zero pairs ALL the branch keeps (the F502/F503 and
  // the F503/F504 and the F509/F510 and the F518/F519 and the
  // F519/F520 and the F527/F528 and the F528/F529 and the F529/F530
  // and the F530/F531 and the F531/F532 and the F534/F535 and the
  // F544/F545 and the F551/F553 and the F567/F568 and the F570/F571
  // and the F573/F574 the cons pairs keep) - NO REAL held pair and
  // NO mixed pair the honest break the seats price
  let held = 0
  for (let i = 1; i < arc.length; i++) if (arc[i] === arc[i - 1]) held++
  assert.equal(held, 16)
  // the multi-class law: the mode candidate the honest probe DECLINED
  // - no tie-degenerate gravity the window prices (the 1 and the 2
  // the FOUR-face classes the honest probe declines - no single-value
  // pull the seat prices)
  const tally = new Map()
  for (const v of arc) tally.set(v, (tally.get(v) || 0) + 1)
  assert.equal(tally.get(0), 37)
  assert.equal(tally.get(1), 4)
  assert.equal(tally.get(2), 4)
  assert.equal(tally.get(3), 2)
  assert.equal(tally.get(4), 1)
  assert.equal(tally.get(5), 3)
  assert.equal(tally.get(6), 2)
  assert.equal(tally.get(7), 3)
  assert.equal(tally.get(8), 2)
  assert.equal(tally.get(9), 2)
  assert.equal(tally.get(10), 1)
  assert.equal(tally.get(11), 1)
  assert.equal(tally.get(12), 2)
  assert.equal(tally.get(16), 1)
  assert.equal(tally.get(19), 1)
  assert.equal(tally.get(22), 1)
  assert.equal(tally.get(23), 1)
  assert.equal(tally.get(27), 1)
  assert.equal(tally.get(28), 1)
  assert.equal(tally.get(29), 1)
  assert.equal(tally.get(33), 1)
  assert.equal(tally.get(35), 1)
  assert.equal(tally.get(39), 1)
  assert.equal(tally.get(46), 1)
})
