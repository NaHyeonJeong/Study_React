//Hook 연습
import React, {useState} from 'react';
import HookPractice2 from './practice_hook/HookPractice2';

const App = () => {
  const[visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => {
        setVisible(!visible);
      }}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr/>
      {visible && <HookPractice2/>}
    </div>
  ) ;
  // return <HookPractice3/>;
};

export default App;


// //컴포넌트 반복 : map()
// //특정값 삭제
// import React, { Component } from 'react';
// import IterationPractice from './component/IterationPractice';

// class App extends Component {
//   render() {
//     return (
//       <IterationPractice />
//     );
//   }
// }
// export default App;

// //react에서 Dom 접근하기
// import React, { Component } from 'react';
// import ValidationPractice from './component/ValidationPractice';
// import './component/ValidationPractice.css';
// class App extends Component {
//   render() {
//     return (
//       <ValidationPractice />
//     );
//   }
// }
// export default App;


// //Event
// import React, { Component } from 'react';
// import EventPractice from './EventPractice';
// class App extends Component {
//   render() {
//     return (
//       <EventPractice />
//     );
//   }
// }
// export default App;


// //counter
// import React, { Component } from 'react';
// //import CounterEx from './CounterEx';
// import MyComponent from './MyComponent';
// class App extends Component {
//   render() {
//     return (
//       <MyComponent />
//     );
//   }
// }
// export default App;

// //state
// import React, { Component } from 'react';
// import MyComponent from './MyComponent';
// class App extends Component {
//   render() {
//     return (
//       // <MyComponent name="함수형 컴포넌트 진행" age={10}/> //문자열 종류
//       // <MyComponent name="함수형 컴포넌트 진행" age={10}/> 
//       //값을 넘겨줄 필요 없이 MyComponent.jsx에서 기본값 설정, 변경 가능
//       <MyComponent name="나현정">
//         <div>하위 엘리먼트라고</div>
//       </MyComponent>
//     );
//   }
// }
// export default App;

// import React, { Component } from 'react';
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <div>Hello</div>
//         <div>Bye</div>
//       </React.Fragment>
//     );
//   }
// }
// export default App;