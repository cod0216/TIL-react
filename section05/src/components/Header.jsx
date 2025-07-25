const Header = () => {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}

export default Header;


// ES 모듈 시스템에 의해서 Header.jsx에서 Header라는 함수가 기본값으로 내보내 지게 된다.
// 이렇게 되면 다른 구분에서 import Header from "./위치"; 이렇게 사용가능!