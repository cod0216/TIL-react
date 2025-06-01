/*
5173은 어디서 나온 주소일까?

vite를 생성한 리엑트 앱에는 web 서버가 내장되어 있었고
리엑트앱을 가동하기 위해 사용했던 npm run dev는 이러한 리액트 앱 서버를 가동시키기 위한 명령어다.

npm run dev를 통해 리액트 앱을 가동 시켰고 5173은 현재 가동중인 리액트 웹 서버에 접속할 수 있는 주소였다.

그렇기 때문에 우리가 만든 브라우저에 접속할 수 있었던 것이다.

 localhost:5173 로 접속하면
--> index.html파일을 브라우저에 보내주게 된다


<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>

// index.html이 실행 되었을때 sciprt가 동적으로 불러와 실행된다.


  </body>
</html>



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 --> 인수로 전달받은 html 요소를 root로 만들어 준다.
 root를 id로 같는 요소를 불러온다.

 해당 요소를 createRoot즉 react의 루트로 변환해주고 있다.

 그 이후 render를 호출한다.

 App이란걸 렌더링 하겠다.
 <App/> 컴포넌트라는 뜻인데 다시 말하면 App 컴포넌트를 렌더링 하고 있다.

   <StrictMode>
    <App />
  </StrictMode>,
)


리엑트에서는 APP이라는 함수는 HTML 테그들을 리턴하고 있다.
리엑트에서는 함수가 HTML 테그들을 리턴하고 있으면 --> 컴포넌트라고 부른다.



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App



컴포넌트가 리턴하고 있는 html들을 

main.jsx 파일에서 리엑트의 root 아래에 render 메서드를 통해 화면 아래에 렌더링 될 수 있게 두었다. 

라고 이해를 할 수 있다.


*/