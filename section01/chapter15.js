// 객체를 이용하면 현실세계에 존재하는 어던 사물이나 개념을 표현하기 용이함
// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴(대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "이정환",
  age: "27",
  hobby: "테니스",
  job: "FE Developer",
  extra: true, // func(){}, {} 객체, 함수 자유롭게 들어 올 수 있다.
  10: 20,
  "like cat": true, //이렇게 띄어쓰기가 포함되어 있다면 예외적으로 " "를 붙여야 된다.
};
// key:value 로 넣어야된다.
// 객체의 프로퍼티는 각각의 키의 이름을 가지고 불리게 된다.

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 {점 표기법, 괄호 표기법}
let name = person.name; // 점 표기법
console.log(name); // 우리에게는 관련 없는 타입 스크립트의 경고 사항이 나오는 거다. (vs 기본 기능)

let age = person["age"]; //괄호 표기법
console.log(age);

let property = "hobby";
let hobby = person[property];

console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer"; // 없던걸 추가 할 수 있다.
person["favoriteFood"] = "떡볶이"; // 동일하게 괄호 표기봅도 추가 할 수 있다.

console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;

//3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result = "cat" in person; //name이라는 프로퍼티가 오른쪽 객체에 있냐 없냐를 묻는다 (T/F 반환)
// person 안에 name이 있냐 없냐

console.log(result);
