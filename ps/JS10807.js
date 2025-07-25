const fs = require("fs");

let fileInput = fs.readFileSync("/dev/stdin").toString().split("\n");
let N = fileInput[0];

let num = [];
num = fileInput[1].split(" ");

let key = fileInput[2];
let count = 0;

for(let i = 0; i < N; i++){
    if(key == num[i]){
        count++;
    }
}

console.log(count);

