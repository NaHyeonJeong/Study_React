import React from "react";
import './Form.css'
/**
 * input과 button을 포함하는 component
 */
//이거는 함수형
const Form = ({value, onChange, onCreate, onKeyPress}) => {
    //value: input의 내용
    //onChange: input 내용이 변경될 때 실행되는 함수
    //onCreate: button이 클릭될 때 실행될 함수
    //onKeyPress: 
    return (
        <div className="form">
            <input value={value} onChange={onChange}
                onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>추가</div>
        </div>
    );
};

export default Form;


//이거는 클래스형
// import React, { Component } from 'react';
// import './Form.css'
// class Form extends Component {
    
//     render() {
//         const [todo, myChange, myCreate, myKeyPress] = this.props;
//         return (
//             <div>
//                 <input value={todo} onChange={myChange}
//                 onKeyPress={myKeyPress}/>
//                 <div className="create-button" onClick={myCreate}>추가</div>
//             </div>
//         );
//     }
// }