import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

//props로 number, color, onIncrement, onDecrement, onSetColor을 전달받음
const Counter = ({number, color, onIncrement, 
    onDecrement, onSetColor}) => {
    return (
        <div
            className="Counter"
            onClick={onIncrement}
            onContextMenu={(e) => {
                e.preventDefault();
                onDecrement();
            }}
            onDoubleClick={onSetColor}
            style={{backgroundColor: color}}>
                {number}
        </div>
    );
};

Counter.propTypes = { //상태 변수 타입
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

Counter.defaultProps = { //상태 변수 초기화
    number: 0,
    color: 'blue',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;