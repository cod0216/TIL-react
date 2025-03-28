// 원시타입 vs 객체 타입

/*
왜 이렇게 나눴을까?
원시타입과 객체타입은 값이 저장되거나 복사되는 과정이 서로 다르기 때문 
*/

// 원사타입(불변값 - 메모리 값 수정 x) : 값 자체로써 변수에 저장되고 복사된다. (Number, String, Boolean 등)
// 객체타입(가변값 - 메모리 값 수정 o) : 참조값을 통해 변수에 저장되고 복사된다. (Ojbect, Array, Function 등)

// 객체 타입은 여러개의 값을 저장함과 동시에 여러 값들이 늘어났다가 줄어들었다가 하게 된다.
// 그렇기 때문에 별도의 메모리 공간에 보관한다.

//=============================================================================

// 객체 타입 주의사항
// 1. 의도치 않게 값이 수정될 수 있다.

let o1 = { name: "최은창" };
let o2 = o1; //(얕은 복사 : 원본 객체 수정됨)
// o2 = { ...o1 }; 새로운 객체를 생성해서 내부 프로퍼티를 따로 복사해는 방식으로 복사해야된다.
//  이렇게 하면 o2는 새로운 값을 만든것과 같다.(안전하다)
// (깊은 복사 : 원본 객체를 만지지 않는다.)

o2.name = "이정환";

//이렇게 되면 o1의 name 속성도 바뀌게 된다.(사이드 이팩트)

// 2. 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다.
// JavaScript에서 참조값이 아닌 프로퍼티 스트링으로 비교하고 싶다면
// JSON.stringify(객체1) === JSON.stringify(객체2)
// 이렇게 비교 하면 된다.

// JSON.stringify()
// 자바스크립트 내장 함수
// 객체를 문자열로 변환하는 기능

// 3. 배열과 함수도 사실 객체이다.
// 함수 : 객체 + 호출, 선언 등
// 배열 : 객체 + 순차 저장, 순회 등
