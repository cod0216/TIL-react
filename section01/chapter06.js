// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는것

let num = 10; // 묵시적으로 string 타입으로 바뀜
let str = "20";

const result = num + str;
console.log(num + str);
console.log(result);

// 문자열 + 문자열 = 문자열문자열
// 10+20 = 1020
// 오류를 발생시키지 않기 위해 묵시적 형 변환 시킴

// 2. 명시적 형 변환
// - > 프로그래머, 내장함수 등을 이용해서 직접 형 변환을 명시

let str1 = "10";
let strToNum1 = Number(str1); // -> 문자열 -> 숫자
console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2); // 앞에 10개 처럼 숫자가 있어야 잘됨

console.log(strToNum2);

// 숫자 -> 문자
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다.");
// Number(), parseInt(), string();
