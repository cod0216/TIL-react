function add(a, b, callback) {
  setTimeout(() => {
    //add 함수가 호출 되면서 setTimeout함수가 호출된다.
    const sum = a + b; // 3 callback 함수를 3초 뒤에 실행한다. 3초 뒤에 실행된 callback 함수에서
    // sum이라는 값을 계산한 다음에 매개 변수로 받은 callback 함수를 다시 값으로 전달해 주기 때문에
    // setTimeout 이 끝나고 났을때 이 콜백 함수가 한번 더 실행이된다.
    callback(sum);
  }, 3000);
}
// 비동기 처리의 결과 값을 사용하는 콜백 함수를 사용
add(1, 2, (value) => {
  console.log(value);
});
// 외부에서 함수 내부 값을 이용하고 싶다면 callback 함수를 이용해서 내부 값을 이용할 수 있다.

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

orderFood((value) => {
  console.log(value);
  cooldownFood(value, (e) => {
    // 함수 내부에서 e를 전달 받고 외부에서 e를 사용한것임임
    console.log(e);
    freezeFood(value, (e) => {
      console.log(e);
    });
  });
});

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownFood = `식은 ${food}`;
    callback(cooldownFood);
  }, 3000);
}

// cooldownFood("떡볶이", (value) => {
//   console.log(value);
// });

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezeFood = `냉동된 ${food}`;
    callback(freezeFood);
  }, 1500);
}
