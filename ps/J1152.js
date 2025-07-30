const fs = require('fs');

const str = fs.readFileSync("./example.txt").toString().split("\n");

for(let i = 0; i <str.length; i++){
    console.log(str[i]);
}

