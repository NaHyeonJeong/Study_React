//import * as types from '../actions/ActionTypes';
import number from './number';
import color from './color';
import { combineReducers } from 'redux';

// Action이 디스패치 되면 counter 호출

// // 초기 상태를 정의합니다.
// const initialState = {
//     color: 'green',
//     number: 0
// }

// function counter(state = initialState, action) {
//     switch (action.type) {
//         case types.INCREMENT:
//             return {
//                 ...state, //number는 바뀌지만 다른 값들은 유지
//                 number:state.number + 1
//             };
//         case types.DECREMENT:
//             return {
//                 ...state, //number는 바뀌지만 다른 값들은 유지
//                 number:state.number - 1
//             };
//         case types.SET_COLOR:
//             return {
//                 ...state, //color는 바뀌지만 다른 값들은 유지
//                 color:action.color
//             };
//         default:
//             return state;
//     }
// };
// export default counter;

/*
서브 리듀서들을 하나로 합칩니다.
combineReducers를 실행하고 나면, 나중에 store의 형태가 파라미터로 전달한 객체의 모양대로 만들어집니다.
지금의 경우:
    {
        numberData: {
            number: 0
        },
        colorData: {
            color: 'black'
        }
    }
로 만들어집니다.
*/
const reducers = combineReducers({
    numberData: number,
    colorData: color
});

    
export default reducers;