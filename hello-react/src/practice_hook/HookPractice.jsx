import React, { useState } from 'react';
/**
 * Hook은 함수 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 
 * “연동(hook into)“할 수 있게 해주는 함수입니다.
 */
const HookParactice = () => {
    const [value, setValue] = useState(0); //상태의 기본값 지정
    //굳이 클래스 형태로 변환할 필요가 없음

    return(
        <div>
            <p>현재 카운터 값은 <b>{value}</b> 입니다</p>
            <button onClick={() => setValue(value + 1)}>+ 1</button>
            <button onClick={() => setValue(value - 1)}>- 1</button>
        </div>
    );
};
export default HookParactice;
