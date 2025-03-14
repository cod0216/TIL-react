// 1. 대입 연산자

let var1 = 1;
// 값을 저장할 변수 = 저장할 값

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
let num6 = 1 + 2 * 10;

// let num6 = (1 + 2) * 10;
// () 안쪽 먼저 계산하게 된다.

// 3. 복합 대입 연산자
let num7 = 10;
// num7 = num7 + 20;
num7 += 20; // 이게 복합 대입 연산자다.

console.log(num7);
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;
console.log(num7);

// 4. 증감 연산자
let num8 = 10;
num8++; //이 라인이 끝나야 1이 증가 된다.(후위연산)
console.log(--num8); // (전위연산)

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

console.log(or, and, not);

// 6. 비교 연산자 (동등 비교 연산자, 비동등 비교 연산자)
let comp1 = 1 === 2; // === 3번 사용하는 이유
let comp2 = 1 !== 2; // 타입까지 비교 한다.
console.log(comp1, comp2);

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;

console.log(comp5, comp6);
