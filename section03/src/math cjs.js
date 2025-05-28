// math 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// CJS (commonJS) 라는 모듈 시스템
/*
모듈이라는 내장 객체에 exports 라는 프로퍼티의 값으로 객체를 저장한다.
이 객체 안에 각각 프로퍼티로 내보내고 싶은 값들을 넣어주면 된다.
*/
module.exports = {
  add: add,
  sub: sub,
};
/*
위처럼 키 :벨류 로 적어주면 되는데
둘다 이름이 같으면 Key만 적어줘도 된다.
*/

// ESM 과 CJS는 함께 이용할 수 없다.
// 그래서 npm run start 하면 오류가 난다.
// eferenceError: require is not defined in ES module scope, you can use import instead
// import사용해라 라고 알려준다
