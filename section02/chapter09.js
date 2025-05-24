// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링해서 새로운 배열로 반환

// find()나 findIndex()와 비슷한 메서드다.

let arr1 = [
  { name: "최은창", hobby: "테니스" },
  { name: "이정한", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

// filter 메서드는 find나 findIndex처럼 callback 함수를 이용해서 배열의 모든 요소를 순회하면서
// 조건을 만족하는 값들만 새로운 배열로반환해 주는 역할을 한다.

const tennisPeople = arr1.filter((item) => {
  if (item.hobby !== "테니스") return true;
});

console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 변환

let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
  console.log(idx, item);
  return item * 2;
});
// 콜백 함수 안에서 반환값을 설정할 수 있다
// 이 반환값을 다 모아서 새로운 배열을 만드 수 있다.

//원본 배열을 변형한 새로운 배열을 생성할 수 있다.
console.log(mapResult);

let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// 배열을 사전 순으로 정렬하는 메서드

let arr3 = [10, 3, 5];
const test = arr3.sort((a, b) => {
  //   if (a > b) {
  //     return 1; // b가 a 앞에 와라
  //   } else if (a < b) {
  //     return -1; //a가 b 앞에 와라
  //   } else {
  //     return 0; // 두 값의 자리를 바꾸지 마라
  //   }
  return b - a;
});

console.log(arr3);
console.log(test);

// 4. toSorted(가장 최근에 추가된 최신 함수이다)
// 정렬된 새로운 배열을 반환하는 메서드

let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
console.log(arr5);
console.log(sorted);

//5. Join
//배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드

let arr6 = ["hi", "im", "winterlood"];
arr6.join();
const joined = arr6.join(" ");
console.log(joined);

// hi,im,winterlood 여기서 ,는 구분자다. join (여기안에) 인수로 구분자 넣으면 됨
