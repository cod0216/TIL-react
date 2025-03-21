// 1. if 조건문 (if문)

let num = 9;

if (num >= 10) {
  console.log("num 10 이상입니다.");
  console.log("조건이 참 입니다!");
} else if (num >= 5) {
  console.log("num은 5 이상입니다.");
} else {
  console.log("조건이 거짓입니다!");
}
// if로 시작해서 else로 끝나야 한다
// else if로 시작하면 오류가 난다!

// 2. Switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 떄 if보다 더 직관적이다.

let animal = "owl";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("그런 동물은 전 모릅니다.");
  }
}

// 어떠한 변수의 값을 기준으로 각각 다른 코드를 실행시키고 싶다면
//  그럴때에는 Switch 문을 이용하는게 좋구, 그렇지 않고 복잡한 여러개의 조건을 이용하고 싶다
// 한다면 그럴땐 if문을 이용하는게 좋을거 같다.
