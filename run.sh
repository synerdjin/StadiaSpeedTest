#! /bin/bash
today=`date '+%Y_%m_%d__%H_%M_%S'`;
node ./speedtest.js | tee "speed_$today.log"
