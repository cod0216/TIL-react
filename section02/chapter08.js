// 배열 순회와 탐색 메서드
// 1. forEach : 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

let doubleArr = [];

arr1.forEach((item) => {
  doubleArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
// true , false 반환

let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
// 만약 원소가 여러개라면 가장 먼저 찾은 인덱스를 반환한다

console.log(index);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런 메서드
// 특정 요소의 인덱스(위치)를 반환하는 메서드

let arr4 = [1, 2, 3];
const findIndex = arr4.findIndex((item) => item % 2 !== 0);

console.log(findIndex);

// indexOf()는 객체 타입의 값들이 저장 되어 있다면 정확한 인덱스를 반환 시키지 못한다.
// 그래서 findIndex를 사용해야된다.

/*
왜 그러냐면 indexOf는 얕은 비교로 동작하기 때문이다.
"===" 이런 비교로 동작한다 즉 프로퍼티로는 비교가 이뤄지지 않는다

indexOf는 배열의 특정 객체가 있는지는 찾기 어렵다.

그래서 findIndex()메서드를 이용하고 콜백 함수를 이용해서 item의 값이 "이정환"인 값을 반환해라
라고 하면 프로퍼티 값을 기준으로 조회하게 할 수 있다.

복잡한 객체값도 조건식만 잘 만든다면 쉽게 찾을 수 있다.
*/

// 5.find
// findIndex와 유사하다 모든 원소를 조회하면서 콜백 함수를 만족하는 요소를 그대로 반환

let arr5 = [{ name: "이정환" }, { name: "홍길동" }];

const finded = arr5.find((item) => item.name === "이정환");

console.log(finded);
