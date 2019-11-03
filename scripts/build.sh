#!/usr/bin/env bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

BUILD_ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [[ ${BUILD_ROOT_DIR} != *"/scripts"* ]]
then
 BUILD_ROOT_DIR="$BUILD_ROOT_DIR/scripts"
fi

ROOT_DIR=$(dirname "${BUILD_ROOT_DIR}")

cd ${ROOT_DIR}
node -v
nvm use 12.9.0
npm install
npm run build