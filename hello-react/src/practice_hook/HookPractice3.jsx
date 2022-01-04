import React, { useState, useMemo, useRef, useCallback } from 'react';

/**
 * useRef Hook
 * 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 함
 * 등록 버튼 클릭 시 포커스가 input으로 넘어가도록 구현
 * @param {*} numbers 
 * @returns 
 */
const getAverage = numbers => {
    console.log("평균값 계산중...");
    if(numbers.length === 0)
        return 0;
    const sum = numbers.reduce((a,b) => a+b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState(' ');
    const inputEl = useRef(null);

    const onChange = useCallback(e => {//컴포넌트 처음 렌더링 시에만 함수 생성
        setNumber(e.target.value);
    }, []); 
    const onInsert = useCallback( //number 혹은 list가 바뀌었을 때만 함수 생성
        e=>{
            const nextList = list.concat(parseInt(number));
            setList(nextList);
            setNumber('');
            inputEl.current.focus();
        },
        [number, list]
    );
    
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균 값:</b> {avg}
            </div>
        </div>
    )
}

export default Average;