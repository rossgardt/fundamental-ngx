#!/usr/bin/env bash

FILE=../dist/libs/core
if [ -d "$FILE" ]; then
mkdir ../dist/libs/core/assets
fi

cp ../node_modules/fundamental-styles/dist/fonts -r ../dist/libs/core/assets/fonts
cp ../node_modules/fundamental-styles/dist/icons -r ../dist/libs/core/assets
cp ../node_modules/fundamental-styles/dist/images -r ../dist/libs/core/assets


#find ../node_modules/fundamental-styles/dist/ -type f -exec sed -i 's/url(fonts/url(../../assets/fonts/gI' {} \;
find ../dist/libs/core \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i 's/url(fonts/url(\.\.\/\.\.\/\.\.\/assets\/fonts/g'
find ../dist/libs/core \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i 's/url(icons/url(\.\.\/\.\.\/\.\.\/assets\/icons/g'
