import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
//vite로 만들면 내부적으로 찾아가기 떄문에 확장자까지 안써도 된다.

// JS 를 평범하게 만들고 HTML 코드를 Return 하게 하면 해당 함수는 리엑트의 컴포넌트가 된다.
// 리엑트는 이걸 함수 컴포넌트라고 부른다.
// const Header = () => {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// }

// 클래스로도 만들 수 있지만 클래스로 만들면 직접 작성해야 되는 코드의 양이 어마어마 해진다.
// 클래스 보단 함수형 컴포넌트를 만드는게 일반적이고 대중적이다.

function App() {
  return (
    <>
    {/* 이렇게 다른 리턴문제 컴포넌트가들어올 경우 */}
    <Header/>  {/* 자식 컴포넌트 */}
      <h1>안녕 리엑트!</h1>
      {/* 부모 컴포넌트 */}
      
      <Main/>
      <Footer/>
    </>
  )
}

// 리엑트에서는 화면에 표시되기 위에서는 App 컴포넌트의 자식 컴포넌트로 존재해야 된다.
// 그래야 App은 조상 컴포넌트로 되고 이를 Root 컴포넌트라고 부르게 된다.
// 그리고 관례상 App을 조상으로 갖는다. (변경해도 되는데 비추)

export default App

// 컴포넌트 함수는 반드시 대문자로 시작해야된다.
// 예) Header (ㅇ) header(X)

// 리엑트에서는 대문자로 시작하지 않으면 컴포넌트로 인정해주지 않는다.
// "난 컴포넌트를 만들고 있는 중이야" --> 꼭 대문자로 적어줘야된다.


// ==========================================

// 컴포넌트를 분리하는 작업 --> 모듈화



