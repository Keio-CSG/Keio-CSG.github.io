#!/usr/bin/env bash
#
# Draw the project card illustrations with the Codex CLI's image generation.
#
#   bash scripts/project-art/generate.sh             # every project still missing art
#   bash scripts/project-art/generate.sh ghost-fwl   # just one, e.g. to redraw it
#   SET=recruit bash scripts/project-art/generate.sh # the Recruit page scenes
#
# SET picks another subject file (<SET>.json) and writes to out/<SET>/, so a
# page's own scenes share the house style without mixing into the project set.
#
# Each project's subject sentence lives in subjects.json; the style block below
# is appended unchanged to every one of them. That is the whole trick — the set
# reads as one because only the subject varies. If you redraw a single image and
# it comes back in a different idiom, regenerate it rather than editing the
# style here, or it will be the odd one out.
#
# PNGs land in scripts/project-art/out/ (gitignored). Run to-webp.js afterwards
# to crop, compress and install them into src/assets/projects/.
set -u

HERE="$(cd "$(dirname "$0")" && pwd)"
CODEX="${CODEX:-$HOME/AppData/Local/OpenAI/Codex/bin/13995fba801849b0/codex.exe}"
CONC="${CONC:-3}"
SET="${SET:-}"
SUBJECTS="${SET:-subjects}.json"
OUT="$HERE/out${SET:+/$SET}"

[ -x "$CODEX" ] || { echo "codex.exe not found at $CODEX — set CODEX=..." >&2; exit 1; }

read -r -d '' STYLE <<'EOS'
Style, applied identically every time so the images form one consistent set:
flat vector editorial illustration in a clean technical-diagram idiom.
Pure white background. Near-monochrome palette of deep navy and mid blue
with light warm grey, plus a single muted coral accent used sparingly for
the hazard or the key result. Zoomed details sit in thin rounded-rectangle
callout panels joined to the main scene by thin dashed leader lines. Small
solid triangular arrowheads show signal or data flow. Even line weights,
flat shading, no gradients, no photorealism, no glossy 3D render look.
Absolutely no text, no letters, no numbers, no labels, no logos, no
watermarks anywhere in the image. 16:9 landscape aspect ratio, the subject
sitting comfortably inside the frame with generous white margins.
EOS

one() {
  local slug="$1" out="$OUT/$1.png"
  [ -s "$out" ] && { echo "SKIP $slug"; return 0; }

  local subject
  subject=$(cd "$HERE" && node -e "process.stdout.write(require('./$SUBJECTS')['$slug'] || '')")
  [ -z "$subject" ] && { echo "FAIL $slug (no subject in $SUBJECTS)"; return 1; }

  timeout 600 "$CODEX" exec -s workspace-write --skip-git-repo-check -C "$HERE" \
    "Generate one illustration image and save it as ./out${SET:+/$SET}/$slug.png relative to $HERE.

Subject: $subject

$STYLE

Do not write any code or create any other files. Just generate the image, save it to that exact path, and report the path." \
    >"$OUT/$slug.log" 2>&1

  if [ ! -s "$out" ]; then
    # Codex's sandbox can't write into a synced folder such as Google Drive, but
    # the image still lands in its own cache, named in the log. Pick it up there.
    local id f=""
    id=$(grep -aoE 'exec-[0-9a-f-]{36}\.png' "$OUT/$slug.log" | tail -1)
    [ -n "$id" ] && f=$(find "$HOME/.codex/generated_images" -name "$id" 2>/dev/null | head -1)
    [ -n "$f" ] && cp "$f" "$out"
  fi

  [ -s "$out" ] && echo "OK   $slug" || echo "FAIL $slug (see $OUT/$slug.log)"
}

mkdir -p "$OUT"

if [ $# -gt 0 ]; then
  for s in "$@"; do one "$s"; done
else
  for s in $(cd "$HERE" && node -e "console.log(Object.keys(require('./$SUBJECTS')).join(' '))"); do
    while [ "$(jobs -rp | wc -l)" -ge "$CONC" ]; do wait -n; done
    one "$s" &
  done
  wait
fi
