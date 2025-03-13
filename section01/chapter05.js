// 1. Number Type

// 원시 타입 중 숫자 타입
let num1 = 27; // 정수 가능
let num2 = 1.5; // 소수 가능
let num3 = -20; // 음수 가능

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
//  연산 가능

let inf = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대

let nan = NaN; // Not a Number 수치 연산에 실패했을 떄의 결과 값

console.log(1 * "hello"); // 1 곱하기 Hello 등 말도 안되는 연산 시 이렇게 나온다.
// 이런 불가능한 연산이 되어도 프로그램이 종료되지 않는다. js가 수학 연산에서 좀 더 안전하다.

// String Type
let myName = "이정환"; //문자열은 쌍따옴표나 작은 따움표로 해야된다.
//  왜냐하면 변수명으로 인식하기 떄문!

let myLocation = "목동";

let introduce = myName + myLocation;
// 문자열은 이렇게 + 연산을 지원하고 이어 붙일 수 있다.
console.log(introduce);

// 즉 스트링 타입은 이렇게 덧셈 연산도 지원한다.

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; //뺵틱으로도 가능하다
// 이렇게 하면 동적으로 문자열을 사용할 수 있다.
// 이런걸 템플릿 리터럴 문법이라 한다. -> 실무에서 많이 사용한다.

let text = myName + "은 " + myLocation + "에 거주합니다.";
console.log(introduceText);

console.log(text);

// 3. boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 상태를 유지하는데 boolean 타입을 사용한다.

// 4. Null Type(아무것도 없다.)
let empty = null;

// 5. Undefined Type
let none;
console.log(none);
