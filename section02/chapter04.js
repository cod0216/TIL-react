// Spread 연산자 & Rest 매개변수
// Spread : 흩뿌리다, 펼치다 라는 뜻

// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
// 이렇게 하면 arr2 배열 안에 arr1배열 원소 값을 넣을 수 있지만
// 상당히 귀찮다 그리고 위험하다.

let arr3 = [4, ...arr1, 5, 6]; // ...원소 -> spread 연산자 이다.

console.log(arr2);
console.log(arr3);

let obj1 = {
  a: 1,
  b: 2,
};
// let obj2 = {
//   a: obj1.a,
//   b: obj1.b,
//   c: 3,
//   d: 4,
// };

let obj2 = {
  ...obj1, // spread 연산자
  c: 3,
  d: 4,
};

console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1); // 이렇게 뿌릴수도 있다!!

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

function funcB(one, two, ...rest) {
  // rest 매개변수 뒤에 추가적인 매개변수는 넣을 수 없다!
  //...은 매개변수를 정의하는 소괄호 안에 사용되었기 때문에 spread랑은 다르다!!
  console.log(rest);
}

funcB(...arr1);
