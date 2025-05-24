//1. Date 객체를 생성하는 방법
let date1 = new Date(); //내장 함수를 호출해서 생성할 수 있다.
// new 라는 키워드와 함께 새로운 객체를 생성하는 Date같은 내장 함수를 생성자 라고 부른다.

console.log(date1);

let date2 = new Date("1997-01-07/10:10:10"); // "/"나 ","이나 "-" 구분자로 쓴다.
let date22 = new Date(2003, 2, 3, 10, 23, 21); // "/"나 ","이나 "-" 구분자로 쓴다.
console.log(date2);
console.log(date22);

// 2. 타임 스템프
// UTC(협정 시간 시)시간 이후 몇ms가 지났는지 의미
let ts1 = date1.getTime();
// getTime()은 date1에 저장된 시간의 타임스템프를 반환해준다.

console.log(ts1);

let date4 = new Date(ts1); // Date()여기 인자에 타임 스탬프 값을 주면 타임 스템프에 해당하는 시간으로 데이트 객체가 생성된다.

console.log(date1, date4);

// 타임 스템프는 꽤나 복잡한 형태의 시간을 간단한 숫자로 표현할 수 있기 때문에 서비스를 개발하는 과정에서
// 타임스템프가 자주 사용된다.

// 3. 시간 요소들을 추출하는 방법

let yaer = date1.getFullYear();
let month = date1.getMonth() + 1; //Js에서는 month는 0부터 시작한다! (주의)
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(yaer, month, date, hour, minute, seconds);

// 4. 시간 수정하기
date1.setFullYear(2022);
date1.setMonth(2); // 실제로는 3월이 된다.
date1.setDate(13);
date1.setHours(2);
date1.setMinutes(32);
date1.setSeconds(30);

console.log(date1);

// 5.시간을 여러 포맷으로 출력하기

console.log(date1.toDateString());
console.log(date1.toLocaleString());
