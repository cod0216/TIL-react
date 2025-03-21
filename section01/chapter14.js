// 스코프란?
// 변수나 함수에 접근하거나 호출할수 있는 범위를 말 함

// 전역(전체 영역) 스코프 vs 지역 스코프
// 전역 스코프 -> 전체 영역에서 접근 가능
// 지역 스코프 -> 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a); // 출력 잘됨
}

funcA();
// console.log(b); // 지역 스코프여서 문제가 있음

if (true) {
  let c = 1; // 블록 내에 선언된 모든 변수는 지역 스코프를 갖는다.

  //   function funcB() {} // 함수도 지역 스코프를 갖는다.
}

// console.log(c);

for (let i = 0; i < 10; i++) {
  let d = 1;
}

// console.log(d);
// for문 안에 선언됐기 때문에 지역변수이다.

console.log(i);
