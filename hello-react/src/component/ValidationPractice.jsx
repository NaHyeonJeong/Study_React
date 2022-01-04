import React, {Component} from "react";
import './ValidationPractice.css';
/**
 * html에서 dom에 접근하기 위해서는 각 태그에 id를 부여하여 사용한다
 * react에서 dom에 접근하기 위해서는 ref를 사용한다
 */
class ValidationPractice extends Component{
    state={
        password: '',
        Clicked: false,
        Validate: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    handlButtonClick = () => {
        this.setState({
            Clicked: true,
            validated: this.state.password === '0000'
        });
        //input에 focus주기 - 깜빡깜빡거림
        this.input.focus();
    }

    render(){
        return(
            <div>
                <input
                    ref={(ref) => this.input=ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.Clicked && this.state.validated ? 'success' : 'failure'}
                    />
                <button
                    onClick={this.handlButtonClick}>검증하기</button>
            </div>
        )
    }
}

export default ValidationPractice;