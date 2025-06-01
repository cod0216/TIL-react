/*
{
  "name": "section04",
  "private": true,
  "version": "0.0.0",
  "type": "module", //ESM
  "scripts": { // 개발중에 사용될 스크립트도 미리 설정되어있다.
    "dev": "vite",  --> 리엑트를 개발용으로 실행시킬 수 있는 그런 명령어다.
    "build": "vite build", 
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": { //이 항목은 오직 개발 할떄만 사용되는 라이브러리들이 저장된다.
   개발시에 유용한 문법체크, 테스트 도구들이 들어있다.
   실제로 배포할때는 이런 개발용 라이브러리는 포함되지 않는다.

    "@eslint/js": "^9.25.0",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "@vitejs/plugin-react": "^4.4.1",
    "eslint": "^9.25.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "vite": "^6.3.5"
  }
}

// package.json 기반으로 라이브러리를 먼저 설치해야 된다.
그러니까 
npm create reacte@latest 
//설치 하면 된다. 이후 npm i를 진행하면 된다.

public 
vite.svg --> 이미지 파일

이런 SVG 파일이네 png, jpeg, 폰트, 동영상 등 코드가 아닌 정적인 파일을 저장하는 정적인 저장소이다.


src폴더는
소스의 약자로 실제로 우리가 작성할 리엑트, 자바스크립트 코드들을 보관하는
폴더이다.

그래서 src 폴더 안에
asset 폴더가 있고 app.css 파일이나 app.jsx 파일이 저장된다.

jsx확장자는 리엑트에서 사용되는 특수한 확장자다 
react 코드가 작성되는 공간이라고 생각하면 된다.

asset은 이미지나 정적인 파일을 저장하는 공간이라고 생각하면 된다.
이는 pubilc의 정적과는 조금의 차이가 있다.



eslint.cjs는 eslint의 설정 파일이다.
--> eslint는 개발자들 사이에서 코드 스타일을 통일해주는 도구 이다.

index.html
 --> html 파일은 리엑트 앱의 기본 틀 역할을 하는 그런 html 파일이라고 생각하면 된다.

 원래는 UI 요소를 만들때 다 HTML로 만들지만 

 그런데 Readt에서는 App.jsx안에 있는 것처럼 
 자바 스크립트 함수, 컴포넌트로 만든다.

 이런 JS 컴포넌트를 index.html에 돔을 수정해서 추가하는 방식으로 동작한다.

 그때 이 파일이 가장 기본적인 틀이 되는 파일이다.



 vite.config.js 파일
 --> 리엑트 파일을 만들때 옵션을 설정하는 파일이다.


*/
