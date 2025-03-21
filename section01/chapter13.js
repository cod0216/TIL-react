console.log("chapter13");

function main(value) {
  //   console.log(value);
  console.log(1);
  console.log(2);
  value(); //호출도 가능함!!
  // 이게 콜백함수 함수를 인자로 받을 수 잇음!
  console.log("end");
}

// main(() => {
//     console.log("i am sub");
// });
// 이렇게 선언문을 안으로 넣어서 함수 표현식처럼 사용할 수 있다.

function sub() {
  console.log("i am sub");
}

main(sub);

// callback 이란 뒷전에 실행되거나, 나중에 실행되는 요런 뜻으로 쓰인다.

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

function repeatTriple(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 3);
  }
} // 중복 코드 발생!!

repeat(5, (idx) => {
  console.log(idx * 3);
});
// repeatDouble(5);
// repeatTriple(5);
