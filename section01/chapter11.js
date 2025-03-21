// 함수 선언
// 함수를 새롭게 만드는 행위

function greeting() {
  console.log("안녕하세요!");
}

// 함수를 선언한다 해서 바로 나타나는게 아니라
greeting(); // 이렇게 함수의 이름을 불러서 함수를 호출했을때만
// 실행이 된다.

greeting; // 함수를 호출할 떄에는 반드시 소괄호도 함께 작성해야된다.

//함수가 실행되면 프로그램의 실행 순서가 함수 내부로 넘어가게 된다.
console.log("호출 전");
greeting();
console.log("호출 후");

// function getArea() {
//   let width = 10;
//   let height = 20;
//   let area = width * height;

//   console.log(area);
// }

// function getArea(여기에 변수 명, 변수명)
// const나 let을 선언하는게 아니다.
// function getArea(const, let) 이런거 아님

function getArea(width, height) {
  let area = width * height;

  //   console.log(area);
  return area; //반환값 (함수 호출의 결과 값)
  // 반환값은 변수에 담아서 사용할 수 있다.
  // return 이후 코드들은 실행 x
  console.log("hello");
}

let area1 = getArea(10, 20); // 반환값을 변수에 담는다.
let area2 = getArea(30, 20);

getArea(120, 200);
// 이렇게 쓸수 있음

function other() {
  console.log("other");
}

let var1 = getA();
console.log(var1);

// 자바 스크립트는 함수 안에 또다른 함수를 선언하는게 가능하다.
function getA() {
  function another() {
    //중첩 함수
    console.log("another");
  }

  another();
  //   let area = (width = height);
  other(); //외부 함수들도 호출 가능능

  return 10;
}
