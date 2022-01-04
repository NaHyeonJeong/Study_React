import React, {Component} from "react";

class EventPractice extends Component{
    state={message: '', username: ''}
    //컴포넌트에 임의의 메소드를 만들면 기본적으로 this에 접근할 수 없음
    //constructor에서 각 메소드를 this와 binding 해주어야 함
        //메소드에서 this를 사용할 수 있도록 메소드에 this를 binding
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    //바벨의 transform-class-properties 문법을 사용하여 화살표 함수 형태로 메소드 정의
    //여러개의 input과 state 관리
    handleChange = (e) =>{ //데이터 변경 감지 이벤트
        this.setState({
            //message:e.target.value
            //2개의 input에서 각각 name과 message를 아래의 형식으로 만들어줌
                //나현정:안녕하세요
            [e.target.name]:e.target.value
        });
    }
    handleClick = () => { //button 클릭 이벤트
        alert(this.state.username + ':' + this.state.message);
        this.setState({
            message:'',
            username:''
        });
    }
    handleKeyPress = (e) => { //input enter키 이벤트
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    render(){
        return(
            <div>
                <h1>이벤트 연습ㄴㄴ</h1>
                <input name="username" value={this.state.username} onChange={this.handleChange}/>
                <input 
                    type="text"
                    name="message"
                    placeholder="아무거나 입력하기"
                    value={this.state.message}
                    /*onChange={ //이벤트 설정
                        (e)=>{
                            //console.log(e.target.value);
                            this.setState({ //input에 입력한 값을 state에 저장
                                message: e.target.value
                            })
                        }
                    }*/
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button //입력한 값이 state에 저장 되었는지 확인
                    /*onClick={()=>{
                        alert(this.state.message)
                        this.setState({
                            message:''
                        });
                    }
                    }*/
                    onClick={this.handleClick}>
                    확인
                </button>

            </div>
        );
    }
}

export default EventPractice;