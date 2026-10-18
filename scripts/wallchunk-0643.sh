#!/bin/bash
# (fire-0643) chunked local unit wall - foreground chunk runner (the sandbox
# reaps long background processes; the CI gate owns the authoritative run).
# usage: bash scripts/wallchunk-0643.sh <start> <end>   (0-based, list slice)
cd /home/z/privateB || exit 1
mapfile -t ALL < <(ls tests/unit/*.test.mjs | sort)
start=${1:-0}; end=${2:-${#ALL[@]}}
fail=0; pass_total=0; files=0
for f in "${ALL[@]:start:end-start}"; do
  out=$(timeout 25 node --test "$f" 2>&1)
  ec=$?
  p=$(printf '%s' "$out" | grep -oE "^. pass [0-9]+" | head -1 | grep -oE "[0-9]+" || echo 0)
  fl=$(printf '%s' "$out" | grep -oE "^. fail [0-9]+" | head -1 | grep -oE "[0-9]+" || echo 0)
  pass_total=$((pass_total + p))
  files=$((files+1))
  if [ "$ec" -ne 0 ] || [ "${fl:-0}" -gt 0 ]; then
    echo "FAIL $f (ec=$ec fail=$fl)"
    fail=$((fail+1))
    printf '%s\n' "$out" | grep -E "✖|not ok" | head -3
  fi
done
echo "CHUNK files=$files FILES_FAILED=$fail CHUNK_PASS=$pass_total"
