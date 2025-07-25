const fs = require("fs");

// let fileInput = fs.readFileSync("dev/stdin").toString.split("\n");
let fileInput = fs.readFileSync("./example.txt").toString().split("\n");

let totalPrice = +fileInput[0];

let N = +fileInput[1];
let appliance = [];
let sumTotal = 0;

for(let i = 0; i < N; i++){
    let [price, count] = fileInput[i+2].split(" ").map(item => +item);
   sumTotal += price * count;
}
console.log(sumTotal == totalPrice ? "Yes" : "No");