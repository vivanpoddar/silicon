#!/bin/bash
# FILEPATH: /Users/vpoddar/Documents/acscsite/deploy.sh

npm run build
git commit -am "new build"
git push -f
