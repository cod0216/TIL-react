// 반복문으로 배열과 객체 순회하기

// 순회(Iteration)이란?
// 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것을 말함

// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 배열도 객체이기 때문에 배열도 함수를 가질 수 있다.

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// 1.2 for of 반복문
// 오직 배열을 순회하기 위해 존재하는 특수한 반복문

for (let item of arr) {
  console.log(item);
}

// 2. 객체 순회
// for of 배열에서만 사용 가능능
let person = {
  name: "최은창",
  age: 27,
  hobby: "테니스",
};

// 2.1 Object. Keys 사용
//  -> 객체에서 Key 값들만 뽑아서 새로운 배열로 반환

let keys = Object.keys(person);

for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 Value값들만 뽑아서 새로운 배열로 반환

let Values = Object.values(person);
for (let value of Values) {
  console.log(value);
}

// 2.3 for in
// 객체에만 사용 가능하다다
for (let key in person) {
  console.log(key);
}
