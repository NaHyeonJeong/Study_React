/**
 * 원본
 */
import Counter from '../components/Counter';
import * as actions from '../actions';
import {connect} from 'react-redux';
import { getRandomColor } from '../utils';

//store에 저장된 state(상태변수) 값을 UI 컴포넌트(Counter)가 사용할 수 있도록 props로 연결
//(counter.js에서 props로 사용할 수 있도록 해줌)

//변수 값 받기
const mapStateToProps = (state) => ({ 
    //변수명은 Counter.js의 Counter의 state 명과 같아야함
    color: state.color,
    number: state.number
});

//액션 생성 함수를 사용하여 액션 생성,
//해당 액션을 dispatch하는 함수를 만든 후,
//UI 컴포넌트(Counter)가 사용할 수 있도록 이를 props로 연결해줌

//dispatch
const mapDispatchToProps = (dispatch) => ({
    //onXXX는 Counter.js의 Counter의 state 명과 같아야함
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => { //double click시 색상 변경
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

//Counter 컴포넌트를 애플리케이션의 데이터 레이어와 묶는 역할 진행
const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter); //Counter를 부름

export default CounterContainer;