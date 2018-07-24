#!/bin/bash
npm run serve &
sleep 10 && cd ./headless_chrome && google-chrome-stable --no-sandbox --headless --disable-gpu --hide-scrollbars --remote-debugging-port=9222 http://localhost:8080/ &
sleep 20 && node ./headless_chrome/screenshot2.js
mv ./headless_chrome/output.jpeg ./output.jpeg
killall npm -v
killall -v -y 30s chrome 
echo "press ctrl+c to exit"