const fs = require('fs');

const str = fs.readFileSync("./example.txt").toString().trim();

if(str === "") {
    console.log(0);
} else {
    console.log(str.split(" ").length);
}

