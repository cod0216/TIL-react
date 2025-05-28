// math 모듈

// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// export { add, sub };
//ES 모듈 시스템에서는 이렇게 모듈로부터 어떠한 값을 내보낼 때 그냥 Export라는 키워드 뒤에 객체를 리터럴로 생성해서
// 그 안에 내보내고 싶은 값들을 담아주기만 하면 된다.

// 앞서 살펴 봤던 CJS모다 간결한거같다.

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// 이렇게 export 바로 붙혀도 된다.

export default function multiply(a, b) {
  return a * b;
}
/*
이렇게 default라고 내보내면 이 multiply는 default로서 내보내져서
이 Math 모듈을 대표하는 단 하나의 기본 값이 된다.
*/
