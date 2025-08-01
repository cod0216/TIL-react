//동기란

/*

여러 작업이 있을때 작업을 순서대로 한번에 하나씩 처리하는걸 동기적으로 처리한다 라고 한다.
JS는 동기적으로 코드를 실행한다.

동기 방식에는 치명적인 단점이 존재한다.

자바나 C#은 이러한 문제를 해결하기 위해서 여러개의 문제를 동시에 사용하기 위해서
멀티 스레드를 사용한다.

JS엔진에는 쓰레드가 1개밖에 없음

그래서 JS는 비동기라는 방식으로 해결한다.

비동기란 동기적이지 않다 라는뜻


*/

console.log(1);
setTimeout(() => {
  console.log(2);
}, 3000); // setTimeout함수는 우리가 원하는 코드를 특정 시간이 지난 이후에 비동기적으로 실행시켜주는 기능을 가지고 있다.
// 첫벗째 인수로 callback를 전달하고 2번재 인수로 3000숫자 값을 전달하면 숫자값만큼 대기하다가 callback 함수를 실행시킨다.

console.log(3);
// 동기적으로 실행됨

// 위 코드는 병렬로 처리되는 것처럼 보인다. 타이머가 돌면서 console.log가 출력되는것처럼 보인다.
// js는 단일 스레드이기 때문에 여러개의 스레드를 활용하지 못한다.

// js에서의 비동기 작업들은 자바스크립트 엔진이 아닌 web APIs에서 실행된다. 즉 web의 별도 공간에서 실행된다.

// web APIs는 웹 브라우저가 직접 관리하는 별도의 영역을 말한다.
// 이 영역이 실제 자바스크립트의 비동기 작업들이 실행되는 영역이다.

// 자바스크립트가 순차적으로 실행하다가 콜백함수를 만나면 web APIs에게 코드를 보내고 다음 코드를 실행 한다

// web APIs가 타이머나 조건에 만족하면 다시 JS 엔진에 코드를 돌려준다. 이후 JS는 그 코드를 실행한다.
