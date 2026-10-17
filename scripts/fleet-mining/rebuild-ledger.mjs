#!/usr/bin/env node
// (v0.976.184) THE LEDGER REBUILDER - the window_runs ledger's own honest
// source, as ONE tool. The fire-1242 face named the law (THE LEDGER LAW):
// price no field over a ledger the worklog dispatch records do not
// co-sign - the fire-0942's own window_runs_0942.json ledger CARRIED WRONG
// RUN IDS (the face352's wrong-run log read 11 pre-position lines where
// the true face holds 4; the whole first draft priced over wrong runs),
// and the worklog's own dispatch records were the only source that held
// (the face355 = 38660557004 and face370 = 38726642423 records the
// cancelled/failed runs' entries never get to outvote). This tool reads
// those records and rebuilds the mapping byte-honestly:
//
//   FACE 423 = 39001848316 dispatched BY ME (HTTP 204) on ...
//   FACE 393 = 38844982425 HTTP 204 in_progress on ...
//   FACE 422 = 38998939955 COMPLETED SUCCESS and read whole ...
//
// THE LAST-OCCURRENCE LAW: a face's record may ride several times (a
// dispatch record, a read record, a cancelled-and-re-dispatched pair) -
// the LAST occurrence in the file wins (the newest decision the file
// carries). Output: { source, generated, count, faces: [{face, run}] }
// sorted ascending by face. Zero fleet wiring, zero new fleet log lines -
// the tool reads ONE markdown file and writes ONE json cache.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

// The record shape: 'FACE <n> = <runid>' - the faces ride one to three
// digits (the fleet's own numbering: 7..423+), the run ids ride 10-13
// digits (GitHub's own growth window). The boundary guards keep the
// captures honest: no letter may ride the face (a 'FACEBOOK = 1' junk
// line never matches), no shorter digit run may swallow the match.
const RECORD_RE = /\bFACE (\d{1,3}) = (\d{10,13})\b/g
// The torn sweep: a line that CARRIES a record-shaped head ('FACE <n> =
// <digits>') but yielded no valid record rides counted, never silently
// dropped (the tithe ledger's own torn law: the honest sweep). The loose
// head keeps the junk visible; the bounds decide the honesty.
const TORN_HEAD_RE = /\bFACE \d{1,3} = \d+/

/**
 * The worklog's own read - the dispatch records as ONE ledger.
 * THE LAST-OCCURRENCE LAW: the last record a file carries for a face
 * wins (the newest decision); earlier records (the cancelled pair's
 * first POST, the failed run's naming) never outvote it.
 *
 * @param {string} text the whole worklog body
 * @returns {{ faces: Array<{face: number, run: string}>, torn: number }}
 *   faces sorted ascending (unique, one run per face), torn = the lines
 *   that carry a record-shaped head but yielded no valid record (the
 *   honest sweep - counted, never silently dropped)
 */
export function parseLedgerRecords (text) {
  const byFace = new Map()
  let torn = 0
  if (typeof text !== 'string') return { faces: [], torn }
  for (const line of text.split(/\r?\n/)) {
    let took = 0
    let m
    RECORD_RE.lastIndex = 0
    while ((m = RECORD_RE.exec(line)) !== null) {
      const face = Number(m[1])
      const run = m[2]
      // the shape's own bounds: the fleet numbering rides 7..999, the run
      // ids a 10-13 digit window (a 15-digit capture would be a junk line)
      if (!(face >= 7 && face <= 999) || !(run.length >= 10 && run.length <= 13)) continue
      byFace.set(face, run) // the LAST occurrence wins
      took++
    }
    if (took === 0 && TORN_HEAD_RE.test(line)) torn++
  }
  const faces = [...byFace.entries()]
    .map(([face, run]) => ({ face, run }))
    .sort((a, b) => a.face - b.face)
  return { faces, torn }
}

/**
 * The ledger body - the tool's own json shape (the cache the field
 * fetches ride). The source path rides the record (the provenance law:
 * a ledger names the file it co-signs).
 */
export function ledgerBody (records, source) {
  return {
    source,
    generated: new Date().toISOString(),
    count: records.faces.length,
    torn: records.torn,
    faces: records.faces,
  }
}

function main () {
  const argv = process.argv.slice(2)
  const worklog = argv[0] || '/home/z/my-project/worklog.md'
  const out = argv[1] || 'faces/ledger.json'
  let text
  try {
    text = readFileSync(worklog, 'utf8')
  } catch (e) {
    console.error(`rebuild-ledger: cannot read ${worklog}: ${e.message}`)
    process.exit(1)
  }
  const records = parseLedgerRecords(text)
  const body = ledgerBody(records, worklog)
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, JSON.stringify(body, null, 2) + '\n')
  console.log(`rebuild-ledger: ${records.faces.length} faces co-signed (torn ${records.torn}) -> ${out}`)
  if (records.faces.length) {
    const f0 = records.faces[0]
    const fN = records.faces[records.faces.length - 1]
    console.log(`rebuild-ledger: span FACE ${f0.face}..${fN.face}`)
  }
}

const isMain = process.argv[1] && import.meta.url.endsWith(process.argv[1].split('/').pop())
if (isMain) main()
