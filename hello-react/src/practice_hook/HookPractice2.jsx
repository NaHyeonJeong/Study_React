import React, {useEffect, useState} from "react";
/**
 * useEffect 는 기본적으로 렌더링 되고난 직후마다 실행되며, 
 * 두번째 파라미터 배열에 무엇을 넣느냐에 따라 실행되는 조건이 달라집니다.
 */
const HookParactice2 = () => {
    //관리할 대상이 이름과 닉네임 총 2개다...
    //사용법은 똑같음
    const [name, setName] = useState(' ');
    const [nickname, setNickname] = useState(' ');

    //useEffect 는 리액트 컴포넌트가 렌더링 될 때마다 
    //특정 작업을 수행하도록 설정 할 수 있는 Hook 
    // useEffect(() => {
    //     console.log("렌더링 완료다!");
    //     console.log({
    //         name,
    //         nickname
    //     });
    // });

    //화면에 가장 처음 렌더링 될 때만 실행됨
    //업데이트할 경우에는 실행 안됨(위에는 글자를 적을때 마다 실행됬음)
    //두번째 파라미터에 "[]"를 넣어주면 됨
    // useEffect(() => {
    //     console.log("mount 될 때만 실행된다1");
    // }, []);

    //특정 값이 바뀔때만 실행되게
    //두번째 파라미터에 "[내가 원하는 특정 값]"을 넣어주면 됨
    // useEffect(() => {
    //     console.log("[name] " + name);
    // }, [name]);

    //컴포넌트가 언마운트 되기 전, 업데이트 되기 직전에 사용하려면
    useEffect(() => {
        console.log('effect');
        console.log("[name] " + name);
        return () => {
            console.log('cleanup');
            console.log("[name that after cleanup] " + name);
        };
    }, [name]);

    const onChangeName = e =>{
        setName(e.target.value);
    };
    const onChangeNickName = e =>{
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickName}/>
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>닉네임: </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default HookParactice2;