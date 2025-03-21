function funcA() {
  console.log("funcA");
}

let varA = funcA;
// let 변수 = funcA;  -> 함수를 저장 수학에서 = 과 같은 느낌
// let 변수 = funcA();  -> 함수 값을 저장 ()는 함수 시작 느낌
// 다르다!!

console.log(varA);
varA();
console.log(funcA);

let varB = function () {
  // 값으로써 취급이 된다!
  // funcB 이름 생략 가능! 어차피 이름으로 호출 못함!
  console.log("funcB");
}; // funcB()는 익명함수이다!
// 값으로써 함수를 생성하는 방식을
// '함수 표현식' 이라고 부른다.
// 함수 표현식으로 만들어진 함수들은
// 호이스팅 대상이 되지 않는다.

// 함수를 만들면서 동시에 그 함수를 let 변수에 담는다.
// funcB()는 함수를 선언한 것이 아니기 때문에
// funcB는 호출할 수 없다.

varB();
// funcB(); 이건 안됨 그리고 '호이스팅' 대상이 안됨!

// 함수 표현식은 향후에 배울 추가적인 콜백 함수에서 아주 유용하게 활용된다.

// 2. 화살표 함수
// let varC = function () {
//   return 1;
// };

// let varC = () => {
//   return 1;
// };
// 익명 함수가 값만 반환하는 표현식이라면 중괄호와 return도 생략 할 수 있다.

let varC = (varlue) => varlue + 1;
// 매개변수가 필요하다면 value 처럼 변수명만 선언하면 된다.

console.log(varC(10));

let varD = (varlue) => {
  console.log("hello");
  varlue + 1;
};
