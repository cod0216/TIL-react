// const MoudledDate = require("./math");

// 객체의 구조 분해 할당을 이용해서도 받을 수 있다.
// const { add, sub } = require("./math cjs");

// console.log(MoudledDate.add(1, 2));
// console.log(MoudledDate.sub(1, 2));
// console.log(MoudledDate);

//내장 함수인 require를 이용해서 모듈의 경로를 인수로 전달해서 Math모듈을 사용할 수 있다.

//ESM 방식
import mul, { add, sub } from "./math.js";
// ESM을 사용 시 주의할 점은 우리는 확장자를 꼭 명시해줘야 된다.

// import multiply  from "./math.js";
// default로 export 하면 중괄호 없이 import 해야 된다.
// 그리고 default한건 import 시 마음대로 이름을 정해서 불러올 수 있다.

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(1, 2));

// node 파일경로.js --> 실행

// 이 방식이 CJS 방식이다.
/*
module.exports{ 만든 함수 : 함수 } --> require('/경로');
*/

import randomColor from "randomcolor";
// randomColor라이브러리가 내보낸 randomColor를 불러올 수 있다.
// 경로가 아닌 이름만 명시해줘도 괜찮다.

const color = randomColor();

console.log(color);


