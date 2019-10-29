#!/usr/bin/env bash

set -ex

npx tsc --declaration --sourceMap conf/index.ts
npx tsc

# rm -rf dist/types
# cp -rf src/types dist/types