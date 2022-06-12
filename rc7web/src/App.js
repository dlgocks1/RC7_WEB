import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './Counter';
// Keyword JSX, State에 대해 간단한 설명

// 시작은 대문자
function App({name}) {
  // 로직 문
  // React Hook useState(초기값) 배열 반환, 
  // 현재 상태 값, 상태값을 바꿀 수 있는 함수
  const [count, setCount] = useState(0);
  
  const addCount = () =>{
    // count = count+1 사용 X
    setCount(count+1)
    setCount(count+2)
    setCount(count+3)
  }

  const subCount = () =>{
    setCount(count-1)
  }

  

  // return문 안에는 html body부분 요소
  return (
    // JSX 문법은 무조건 한 덩어리어야 한다.
    // 한태그 내로 묶어야함
    // div 말고 fragment로 사용해도 됨 <> </>
      <div>
        <h1> {name} </h1>
        <Counter num={count} />
        <h1>{count}</h1>
        <button onClick={(event)=>{
          console.log(event)
          addCount()
        }} > + Button </button>
        <button onClick={subCount}> - Button </button>
        {/* <Apage /> */}
        {/* <Bpage /> */}
        {/* 주석하면서 개발 진행하기 */}
      </div>
    // jsx 파일 내에서 class로 선언하면 이는 JS의 클래스 선언과 겹침
    // className, onClick 처럼 카멜 케이스로 지정하여 사용
    // 함수() 하면 바로 실행한다는 의미 
    // JSX는 닫는 태그가 무조건 있어야함 </> Self-Closing Tag라도 무조건
    // 변수나 함수는 {}태그안에 넣기
    // inline style은 style 내에 객체를 넣어야함 style={{color : "red"}}
    );
}

export default App;
