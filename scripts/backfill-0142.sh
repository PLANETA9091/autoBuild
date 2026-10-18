#!/usr/bin/env bash
# (fire-0142) backfill fleet19 artifacts for F457..F464 into window455_469
set -e
TOKEN=$(git remote get-url origin | sed -E "s|https://[^:]+:([^@]+)@.*|\1|")
BASE="https://api.github.com/repos/PLANETA9091/privateB"
DEST=/home/z/my-project/faces/window455_469
declare -A RUNS=(
  [457]=39097587957 [458]=39100055776 [459]=39104186622 [460]=39108037045
  [461]=39109920890 [462]=39113123031 [463]=39115203963 [464]=39119219808
)
for face in 457 458 459 460 461 462 463 464; do
  run=${RUNS[$face]}
  if [ -s "$DEST/face$face/fleet19.log" ]; then echo "face$face cached, skip"; continue; fi
  aid=$(curl -s -H "Authorization: token $TOKEN" "$BASE/actions/runs/$run/artifacts" | node -e "let d='';process.stdin.on('data',c=>d+=c).on('end',()=>{const j=JSON.parse(d);const a=(j.artifacts||[]).find(x=>x.name==='fleet19-log');console.log(a?a.id:'')})")
  if [ -z "$aid" ]; then echo "face$face (run $run): NO fleet19-log artifact"; continue; fi
  mkdir -p "$DEST/face$face"
  curl -sL -H "Authorization: token $TOKEN" "$BASE/actions/artifacts/$aid/zip" -o /tmp/f$face.zip
  unzip -oq /tmp/f$face.zip -d "$DEST/face$face/"
  echo "face$face (run $run, artifact $aid): $(wc -l < $DEST/face$face/fleet19.log) lines"
done
echo DONE
