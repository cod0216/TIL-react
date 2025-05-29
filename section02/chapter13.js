/*
Promise란
비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체

비동기 작업을 실행하고 그 결과를 처리하는 코드를 좀 더 효율적이고 좀 더 편하게 작성할 수 있도록 도와준다.

Promise는 setTimeout 같은 비동기 작업들을 래핑하는 객체이다.

Promise는 비동기 작업을 실행하고, 비동기 작업 상태를 관리하고, 비동기 작업 결과를 저장하고 비동기 작업 병렬 실행하고 비동기 작업을 다시 실행해주는 객체이다.

*/

/*
promise는 진행 단계에 따라 3가지 상태로 나눠서 관리한다.
각각의 상태를 살펴보면 
1. 대기(pneding) : 아직 작업이 완료 되지 않은 상태
2. 성공(Fulfiled) : 비동기 작업이 성공적으로 마무리 된 상태(결과)
3. 설패(Rejected) : 비동기 작업이 실패한 상태(결과)

대기 -> 성공 (해결resolve 되었다고 한다.)
대기 -> 실패 (거부reject 되었다고 한다.)
*/

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    //promise 객체 안에  비동기 작업을 실행하는 함수라는 콜백함수를
    //executor

    // resolve는 성공 했다는 걸 뜻하고 reject는 실패했다고 뜬다.
    // ()안에 어떤 값을 넣으면 성공한 이유를 말하고, reject를 말하면 실패한 이유를 보낸다.
    // 결과값을 넣는 것이라고 생각해라라

    setTimeout(() => {
      if (typeof num == "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
      console.log("안녕");
      // resolve("안녕");
      reject("알고싶나?");
    }, 2000);
  }); // 생성자 이용
  //생성자 인수로는 비동기 작업을 이용할 콜백 함수를 이용한다.

  return promise;
}

// then 메서드

// 그 후에
//then은 promise가 성공한 경우 결과값을 자동으로 넘겨준다.
// catch는 반대로 실한 경우 결과값을 자동으로 콜백함수를 실행시켜준다.

// promise.then((result) => {
//   console.log(result);
// });
// then은 promise객체를 다시 반환한다.
// 채이닝으로 catch를 호출 할 수 있다. -> promise 채이닝 이라고 한다.

// promise.catch((result) => {
//   console.log(result);
// });

add10(0)
  .then((result) => {
    console.log(result);
    const newP = add10(result);

    return newP;
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
