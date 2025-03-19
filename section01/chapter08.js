// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

// ?? null병합 연산자
let var4 = var1 ?? var2;
// 양쪽에 null 이나 undefined값이 아닌 값을 찾아낸다.
console.log(var4); // 10
// var1은 undefined 가 들어가 있고
// var2는 10이 들어가 있기 때문에
// var4에는 var2가 들어가게 된다.

let var5 = var1 ?? var3;
console.log(var5); // 20

let var6 = var3 ?? var2;
// 둘다 null이나 undefined가 아니면 맨 처음 들어간 값이 적히게 된다.

console.log(var6);

let userName = "이정환";
let userNickName = "WinterLood";

// 만약 userName 값이 존재한다면 "이정환"이라는 이름을 넣고
// 없다면 혹은 'undefined'라면 userNickName이라는 값을 넣어라

let displayName = userName ?? userNickName;
console.log(displayName);

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1; // 숫자 값으로 처음에 변수를 초기화 했다 하더라도
var7 = "hello"; // 다른 값(타입)으로 초기화 하는게 가능하다

let t1 = typeof var7;
// var7의 타입이 궁굼할때 사용!

console.log(t1);

// 3. 삼항 연삱
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 떄의 값을 다르게 반환
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝" : "홀";
console.log(res);
