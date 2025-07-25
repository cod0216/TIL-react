// const Main = () => {

//     const number = 9;

//     return(
//         <main>
//             <h1>main</h1>
//             <h2>{number%2 === 0 ? "짝수" : "홀수"}</h2>
//         </main>
//     );
// }

// export default Main;

/*
    const str = 값

    return ( {str} ); 이렇게 넣을 수 있다. 
                    이렇듯 JSX에서 JS 값을 렌더링 하고 싶다면 {} 안에 작성해 주면 되고
                    숫자나 문자값으로 평가 될 수 있는 식이라면 무엇이든지 넣을 수 있다.
                    {number + 10} 이것도 연산되어서 넣을 수 있다.
                    삼항 연산도 가능하다 {number % 2 === 0 ? "짝수" : "홀수"}


    JSX 주의사항
        1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
            {10}, {number} 이렇게 한줄로 표현 될 수 있는 표현식들을 넣을 수 있다.
            {if(){}}, {for(){}} 이런 것들은 넣을 수 없다.
            오직 JS 표현식만 사용 가능하다는 점을 기억하자

        2. JSX에서는 숫자, 문자열, 배열 값만 렌더링 된다.
            {10},{number},{[1,2,3]} 이렇게는 렌더링이 되지만
            {true}, {undefined}, {null} 값들은 렌더링이 되진 않는다.(하지만 오류는 없다!)
            그리고 const obj = {a:1}; 이렇게 객체가 있다면
            {obj} 이렇게 하면 Object are not calid as React child 에러가 뜬다.
            올바르게 사용하려면 점 표기법을 이용해서 객체 값을 꺼내야 된다. {obj.a}

        3. 모든 테그는 닫혀있어야 한다. 
        <img> 도 셀프 클로징<img/> 또는 별도의 닫는 테그를 만들어줘야된다.

        4. 최상위 태그는 반드시 하나만이여야 한다.
            return(
                <div></div>
                <main></main>
            ) // 이렇게 작성되면 최상위 태그가 2개 (div, main)으로 취급되어 에러가 난다.
             이런 경우

             <> <- 빈테그 이용

             return(
                <>
                    <div></div>
                    <main></main>
                <>
            )

            대신 <> 사용시 안묶여잇고 요소들이 흩뿌려져 있다

*/






const Main = () => {

    const number = 9;

    return(
        <></>
    );
}

export default Main;
