#!/usr/bin/env bash

CACHE_DIR=".cache"
AZTEC_BACKEND_REPO_CACHE="$CACHE_DIR/aztec_backend"
GIT_VENDOR_URL="https://github.com"
AZTEC_BACKEND_REPO_PATH="noir-lang/aztec_backend"
AZTEC_BACKEND_CLONE_URL="$GIT_VENDOR_URL/$AZTEC_BACKEND_REPO_PATH.git"
AZTEC_BACKEND_BUILD="./.build"
main_dir=$(pwd)

rm -rf "$AZTEC_BACKEND_BUILD"

mkdir -p "$AZTEC_BACKEND_BUILD"

if [[ -d "$AZTEC_BACKEND_REPO_CACHE" ]]; then
    echo "$AZTEC_BACKEND_REPO_CACHE exists on your filesystem, using it for build..."
else
    echo "$AZTEC_BACKEND_REPO_CACHE does not exists on your filesystem, clonning from $AZTEC_BACKEND_CLONE_URL"
    git clone $AZTEC_BACKEND_CLONE_URL $AZTEC_BACKEND_REPO_CACHE
    # git checkout joss/browser-stopgap
fi

cp -a "$AZTEC_BACKEND_REPO_CACHE/." "$AZTEC_BACKEND_BUILD/"

cd "$AZTEC_BACKEND_BUILD/aztec_backend_wasm"

./build-aztec-backend-wasm
cd $main_dir

rm -rf ./nodejs
rm -rf ./web
rm package.json

cp -a "$AZTEC_BACKEND_BUILD/aztec_backend_wasm/pkg/nodejs/." ./nodejs
cp -a "$AZTEC_BACKEND_BUILD/aztec_backend_wasm/pkg/web/." ./web
cp "$AZTEC_BACKEND_BUILD/aztec_backend_wasm/pkg/package.json" ./

cd $AZTEC_BACKEND_BUILD
AZTEC_BACKEND_REV=$(git rev-parse HEAD)
AZTEC_BACKEND_REV_SHORT=$(git rev-parse --short HEAD)

cd $main_dir
sed -i -E "s/\[noir-lang\/aztec_backend@.+\]\(.+\)/\[noir-lang\/aztec_backend@$AZTEC_BACKEND_REV_SHORT\](https:\/\/github.com\/noir-lang\/aztec_backend\/tree\/$AZTEC_BACKEND_REV)/g" ./README.md

cat ./package.json | jq '.repository = { "type" : "git", "url" : "https://github.com/joss-aztec/aztec_backend_wasm_build.git" }' | jq ".compiler = { \"versionHash\" : \"$AZTEC_BACKEND_REV\" }" | tee ./package.json
