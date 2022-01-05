import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

//리덕스 관련 불러오기
import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux'; //react-redux 라이브러리에 내장된 컴포넌트(리액트 애플리케이션에서 store 연동할 수 있도록 도와줌)

//store 객체 생성하기
// 스토어 생성
const store = createStore(
  reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //Redux tool 사용 위해서 window.사용
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));