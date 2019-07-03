# StadiaSpeedTest
Check your connection speed to Stadia servers continuously. ![alt text](https://lh3.googleusercontent.com/hjWiEvg8iMEI29wjSqfXYw2D_fscM0_pQVuhzkFoNfoN9Xu9p3xLwTs4NoF92n5Ds0ImlhFBB7ioKTPpYYbM=rw-w60 "Logo Stadia")

Simple script that checks your connections to Stadia rpeatetively with exact interval (Default checks = 60, default interval = 5 min). Script requires [node.js](https://nodejs.org/en/download/) to operate.

To execute commands below use terminal.app on your mac (make sure you're in the same location with package.json and run.sh)

1. Instal dependencies:

    `npm install` 

2. Run script:

   On mac execute `./run.sh` in terminal app.
   
   On Windows in cmd run `powershell "node speedtest.js | tee speedtest.log"`
