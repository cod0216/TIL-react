/*
5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
*/
const fs = require('fs');
let input = fs.readFileSync('./example.txt').toString().split("\n");
// console.log(input);

const testCase= Number(input[0]);
const testCatsePlus= +(input[0]);


console.log("testCase : ",testCase);
console.log("testCasePlus : ",testCatsePlus);

/*
const arr = input[i].split(' ').map((item) => +item);
======
let newArr = [];
for(let i = 0; i < arr.length; i++){
    newArr.push(Number(arr[i]));
}

===== >> const arr = input[i].split("\n").map((item) => Number(item));

배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환

map((현제 요소, 반복 카운트, 원본 배열) => {
    return item * 2; 반환값 설정 가능
    }

*/


for(let i = 1; i <= testCase; i++){
    const arr = input[i].split(' ') //.map((item) => +item);
    let newArr = [];
        console.log("Arr : ",arr);
    for(let i = 0; i < arr.length; i++){
        newArr.push(+(arr[i]));
        console.log("newArr : ",newArr);
    }
}

