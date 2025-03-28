// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; //추가
animal.name = "까망이"; // 수정
// animal = {a: 1}; 이렇게 상수인 객체에 또 상수를 선언하면 오류가 생긴다!

console.log(animal);

// 객체에 아예 새로운 값을 할당하는건 문제가 되지만
// 그냥 저장 되어 있는 객체 값의 프로퍼티스를 수정하는건 아무런 문제가 되지 않는다.

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
// 객체 프로퍼티스 중에서 값이 함수인 프로퍼티스를 말한다.

const person = {
  name: "이정한",
  // 메서드 선언
  sayHi() {
    console.log("안녕");
  },
  //
  //   sayHi: () => {
  //     console.log("안녕");
  //   },
  //
  //   sayHi: function () {
  //     console.log("안녕");
  //   },
};

person.sayHi();
