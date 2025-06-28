/*
const fs = require("fs");

let fileInput = fs.readFileSync("/dev/stdin").toString().split("\n");
// console.log(fileInput);
let testCase = Number(fileInput[0]);
let people = [];
let scoreArr = [];
for(let i = 1; i <= testCase; i++){
    scoreArr[i] = fileInput[i].split(" ");
}

people = scoreArr.map((item) => item[0]);

for(let i = 1; i <= testCase; i++){
    console.log(solve(people[i],scoreArr[i]).toFixed(3)+"%");
}

function solve(people, score){
    let sum = Number(0);
    for(let i = 1; i <= people; i++){
        sum += Number(score[i]);
    }
    let avg = sum/Number(people);
    let countPeople = Number(0);
    for(let i = 1; i <= people; i++){
        if(score[i]> avg) countPeople++
    }

    let ans;
    return Number(ans = (countPeople/people)) * 100;
}
*/




const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

let C = Number(input[0]);

let ans = "";

for(let i = 1; i <= C; i++) {
    let scores = input[i].split(" ").map(Number);
    let N = scores[0];
    scores.shift(); // 이거 좋은듯 함
    let avg = scores.reduce((a, b) => a+b) / N;
    let cnt = 0 ;

    for(let j = 0; j < N; j++){
        if(scores[j] > avg) cnt++;
    }
    let rate = ((cnt / N) * 100).toFixed(3);
    ans += rate + "%" + "\n";
}

console.log(ans);
