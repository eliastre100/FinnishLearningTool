#!/bin/bash
set -e

echo "Generate missing voices"
cp src/assets/questions.json voices_generator
( cd voices_generator && ruby ./generate.rb )

pwd
cp -R ./voices_generator/dist/* src/assets/voices

ng build --prod --base-href "https://eliastre100.github.io/FinnishLearningTool/"
ngh
