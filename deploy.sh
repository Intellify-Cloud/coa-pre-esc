#!/usr/bin/env sh

# Abort on errors.
set -e

REPO_URL="https://github.com/Intellify-Cloud/coa-pre-esc.git"
PAGES_BRANCH="gh-pages"

# Build the production bundle. Vite uses base: "/" for the custom domain.
npm run build

# GitHub Pages should serve Vite assets exactly as built.
touch dist/.nojekyll

# GitHub Pages needs a SPA fallback so direct routes like /contact and /about/ load Vue.
cp dist/index.html dist/404.html

# Create real static entry files for public Vue routes so GitHub Pages returns 200, not 404.
for route in contact about faq privacy-policy; do
  mkdir -p "dist/$route"
  cp dist/index.html "dist/$route/index.html"
  cp dist/index.html "dist/$route.html"
done

DIST_DIR="$(pwd)/dist"

cd dist

echo 'coastalpreferredescapes.co.za' > CNAME

git -c safe.directory="$DIST_DIR" init
git -c safe.directory="$DIST_DIR" checkout -B "$PAGES_BRANCH"
git -c safe.directory="$DIST_DIR" add -A
git -c safe.directory="$DIST_DIR" diff --cached --quiet || git -c safe.directory="$DIST_DIR" commit -m "deploy"
git -c safe.directory="$DIST_DIR" push -f "$REPO_URL" "$PAGES_BRANCH:$PAGES_BRANCH"

cd -
