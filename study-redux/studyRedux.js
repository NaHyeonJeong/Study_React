//Action Type 변수
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//Action 생성 함수
//값을 증가시키는 액션
const increment = () => ({
    type : INCREMENT
});

//가변적인 값이 들어가야 하면 파라미터를 넣어서 액션을 만든다.
const increment2 = (diff) => ({
    type : INCREMENT,
    diff : diff
});

//값을 감소시키는 액션
const decrement = (diff) => ({
    type : DECREMENT,
    diff : diff
});

// console.log(increment);
// console.log(increment2(3));
// console.log(decrement(3));

const initialState = { //state 객체 - number가 상태변수
    number : 0 ,
    foo:'bar',
    baz:'qux'
} 
//reducer 함수
function counter(state = initialState, action) { 
    switch(action.type) {
        case INCREMENT:
            return { 
                ...state, //number외에도 다른 state 값들을 처리하기 위함
                number:state.number + action.diff 
            };
        case DECREMENT:
            return { 
                ...state, 
                number:state.number - action.diff 
            };
        default:
            return state;
    }
}
console.log(counter(undefined,increment2(2)))
console.log(counter(undefined,decrement(3)))

const { createStore } = Redux;
const store = createStore(counter);

store.subscribe(() => {
  console.log(store.getState());
})

console.log(store.getState());
//액션 전달
store.dispatch(increment2(1));
store.dispatch(increment2(5));
store.dispatch(increment2(10));
//Action -> Reducer(state 정보를 가지고 있음) -> Redux Store