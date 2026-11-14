#!/usr/bin/env bash
# Push MTW2026 deck to GitHub and trigger GitHub Pages deployment.
#
# USAGE:
#   ./push.sh              # use saved ~/.git-credentials
#   ./push.sh <PAT>        # use the provided Personal Access Token
#
# REPO: r3code/moscow-tech-week-2026 (must exist on GitHub already)
# BRANCH: main (auto-renamed from master if needed)
#
# After push:
#   - .github/workflows/deploy.yml triggers automatically
#   - GitHub Pages will be live at:
#     https://r3code.github.io/moscow-tech-week-2026/
#   - First time: enable Pages under Settings → Pages → Source: GitHub Actions

set -euo pipefail
cd "$(dirname "$0")"

PAT="${1:-}"
REMOTE_URL="https://github.com/r3code/moscow-tech-week-2026.git"

if [[ -n "$PAT" ]]; then
  REMOTE_URL="https://${PAT}@github.com/r3code/moscow-tech-week-2026.git"
  git remote set-url origin "$REMOTE_URL"
elif [[ ! -f ~/.git-credentials ]]; then
  echo "ERROR: no PAT given and ~/.git-credentials missing."
  echo "Usage: $0 <github-PAT>"
  echo "  or:  git config --global credential.helper store"
  echo "       echo 'https://<user>:<PAT>@github.com' > ~/.git-credentials"
  echo "       chmod 600 ~/.git-credentials"
  exit 1
fi

# Make sure we're on main
if [[ "$(git branch --show-current)" != "main" ]]; then
  git branch -M main
fi

echo "→ Pushing to $REMOTE_URL (PAT ${PAT:+from arg}${PAT:-from ~/.git-credentials})"
git push -u origin main

echo
echo "✓ Pushed. Watch the workflow at:"
echo "  https://github.com/r3code/moscow-tech-week-2026/actions"
echo
echo "Pages URL (after first successful deploy):"
echo "  https://r3code.github.io/moscow-tech-week-2026/"
