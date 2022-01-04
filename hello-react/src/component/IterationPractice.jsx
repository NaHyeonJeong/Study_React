import React, {Component} from "react";
/**
 * map()을 사용하여 컴포넌트를 반복해서 만들어줌
 * 여기서는 li 태그와 내용을 반복해서 만듬
 */
class IterationPractice extends Component{
    state={ //초기값 설정
        names: ['Angular', 'React', 'Vue', 'Ember'],
        name: ''
    };

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    handleInsert = () => {
        //names 배열에 값을 추가하고 name 값 초기화
        this.setState({
            names: this.state.names.concat(this.state.name),
            name:''
        });
    }
    /*//전개연산자(...) 사용, 뒤에 위치한 배열값을 그대로 꺼내서 현재 배열에 복사
    handleRemove = (index) => {
        const {names} = this.state;
        this.setState({
            names:[
                ...names.slice(0, index),
                ...names.slice(index+1, names.length)
            ]
        });
    }*/
    //filter 함수 사용
    handleRemove = (index) => {
        //편의상 names에 대한 레퍼런스를 미리 만듬
        const {names} = this.state;
        this.setState({
            //filter를 통해 index번째(삭제 원하는 위치)를 제외한 원소만 있는 *새 배열 생성*
            names: names.filter((item, i) => i !== index)
        });
    }

    render(){
        // const names = 
        //     ['Angular', 'React', 'Vue', 'Ember'];
        const nameList = this.state.names.map(
            (name, index) => ( //item 더블 클릭하면 값 제거
                <li key={index} onDoubleClick={() => this.handleRemove(index)}>
                    {name}
                </li>)
        );

        return (
            <React.Fragment>
                <input //데이터 추가 위함
                    onChange={this.handleChange}
                    value={this.state.name}/>
                <button onClick={this.handleInsert}>추가</button>
                <ul>
                    {nameList}
                </ul>
            </React.Fragment>
        );
    }
}

export default IterationPractice;