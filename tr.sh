#!/bin/bash

time traceur src/$1.js --debug --source-maps --out out/tr$1.js
cat node_modules/traceur/bin/traceur-runtime.js out/tr$1.js > out/tr$1runtime.js
du -ah out/tr$1runtime.js
node out/tr$1runtime.js
