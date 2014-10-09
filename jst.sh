#!/bin/bash

time ./build.js src/$1.js > out/jst$1.js
du -ah out/jst$1.js
node out/jst$1.js
