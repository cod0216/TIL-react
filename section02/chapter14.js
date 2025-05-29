//async

// 어떤 함수를 비동기 함수로 만들어주는 키워

// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드
// async를 사용하면 간단하기 동기 함수를 비동기 함수로 반환할 수 있게 해준다.

// async function getDate() {
//   return {
//     name: "최은창",
//     id: "cod0216",
//   };
// }

// console.log(getDate());

async function getDate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "최은창",
        id: "cod0216",
      });
    }, 1500);
  });
}
console.log(getDate());

// await이랑 함께 사용 되어야 한다.
// async 함수 내부에서만 사용이 가능한 키워드다.

// 비동기 함수가 다 처리되길 기다리는 역할

// async function printDate() {
//   await getDate().then((result) => {
//     console.log(result);
//   });
// }
// printDate();

async function printDate() {
  const data = await getDate(); //getDate()가 종료되면 결과값을 반환한다.
  console.log(data, "흠");
}
printDate();

// await은 async가 붙지 않은 함수 안에서 사용하면 오류가 발생한다.

// node.js는 js에서 간단한 인터렉션을 사용할 수 있던 작업에서 범용적으로 사용할 수 있게끔 해주었다.
// js의 실행환경 즉 runtime이며 react또한 node.js를 기반으로 동작한다.
