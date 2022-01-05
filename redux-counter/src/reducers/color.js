import * as types from '../actions/ActionTypes';
/**
 * 기존의 index.js에 있던 reducer를 color.js와 number.js로 분리시켜 진행
 * 나중에 combineReducer로 합쳐서 루트 리듀서로 만들기
 */
const initialState = {
    color: 'green'
};

const color = (state = initialState, action) => {
    switch(action.type) {
        case types.SET_COLOR:
            return {
                color: action.color
            };
        default:
            return state;
    }
}

export default color;