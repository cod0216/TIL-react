// 1. Falsy한 값

let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // BigInteger다.

// 위 값들은 조건문에서 거짓으로 판단 된다.

if (!f6) {
  console.log("falsy");
}

//==========================

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값을 제외한 나머지 모든 값

let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t5) {
  console.log("Truthy");
}

// 3. 활용 사례

// function printName(person) {
//   //객체의 특정한 프로퍼티에 접근하려는 기능을 가지고 있는 함수는 보통은 조건문으로 Null이거나 Undefine이 아님을
//   // 먼저 확인해야 된다.

//   if (person === undefined) {
//     console.log("person의 값이 없음");
//     return;
//   }
//   console.log(person.name);
// }

// let person = null;
// printName(person);

// 이런 경우에는 오류가 안남 그런데  null 이 들어가면 오류가 발생함 이걸 다 잡는것도 생각보다 불편함
// 이런 경우 Falsy를 사용하면 좋다.

function printName(person) {
  //객체의 특정한 프로퍼티에 접근하려는 기능을 가지고 있는 함수는 보통은 조건문으로 Null이거나 Undefine이 아님을
  // 먼저 확인해야 된다.

  if (!person) {
    // 이러면 해결 할 수 있음음
    console.log("person의 값이 없음");
    return;
  }
  console.log(person);
}

let person = "최은창";
printName(person);
