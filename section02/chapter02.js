// 단락 평가(Short-circuit Evaluation)이란?

// (varA && varB) 이런 경우 varA가 false면 varB에는 접근하지 않는다.
// (varA || varB) 이런 경우 varA가 true면 varB에는 접근하지 않는다.

// 이게 단락 평가 이다.

function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue());

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이정환" });
