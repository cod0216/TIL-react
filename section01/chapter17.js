// 배열이란?
// 여러개의 값을 순차적으로 담을 수 있는 자료형

// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 이게 좀 더 간편해서 이 방식을 많이 사용함

let arrC = [1, 2, 3, 4];

console.log(arrC);

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

console.log(item1, item2);

arrC[0] = "Hello";
console.log(arrC);
