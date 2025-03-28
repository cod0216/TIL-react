// 구조 분해 할당이란?
// 배열이나 객체에 저장된 여러개의 값들을 말 그대로 분해해서 각각 다른 변수에 할당하는 그런 문법

// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// 저렇게 arr[N] 이렇게 하는게 불편하다.
// 대신 구조 분해 할당을 사용한다면 좀 편하다

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

// 이런게 배열의 구조 분해 할당 이라고 한다.

// 2. 객체의 구조 분해 할당
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

// 원래는 이렇게 했었는데

let { name, age: myAge, hobby, extra = "hello" } = person;
console.log(name, myAge, hobby, extra);
// 이렇게 사용할 수 있다.

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  // 객체를 넘겼을때만 구조분해 할당을 받을 수 있다.
  console.log(name, age, hobby, extra);
};

func(person);
