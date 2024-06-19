## Yoshi desktop maskot

## Instructions

run dev env

1. clone repo
2. npm install
3. npm start

build for macOs

1. npx electron-packager . yoshi-mascot --platform=darwin --arch=x64,arm64 --out=dist --overwrite
2. create a run.sh file with:

```sh
#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
open "$DIR/dist/yoshi-mascot-darwin-arm64/yoshi-mascot.app"
```
3. chmod +x ./run.sh
4. ./run.sh



