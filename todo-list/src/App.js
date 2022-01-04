import React, {Component} from 'react';

import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

// const initialTodos = new Array(500).fill(0).map(
//   (item, idx) => ({id:idx, text:`일정 ${idx}`, checked:true})
// );
class App extends Component{
  // state = {
  //   todos: initialTodos
  // }
  //각 component에 props가 필요한 이유는 react에서는 component간의 데이터 전송을
  //부모를 통해서만 하는 걸 권장하는데
  //이 app.js 파일이 부모이기 때문에 
  //자식 component에서 props를 사용해서 데이터를 가지고 있는다
  //그렇지만 이렇게 되면 app.js가 너무 복잡(무거워)해지기 때문에 Redux를 사용함
    //context도 있기는 한데 이거는 내장되어 있음

//App 컴포넌트에서 handleChange, handleCreate, handleKeyPress 메소드를 구현하고, 
//이를 state의 input 
//값과 함께 Form 컴포넌트로 전달

  id = 3; //기본값으로 0-2까지 넣었기 때문에 다음부터는 3부터 추가됨
  state = {
    input: '',
    todos: [
      {id:0, text:'리액트 소개', checked:false},
      {id:1, text:'리액트 구조', checked:true},
      {id:2, text:'리액트 사용', checked:false}
    ]
  }

  //== Form Component 기능 start ==//
  handleChange = (e) => {
    this.setState({
      input: e.target.value //input의 다음 바뀔 값
    });
  }
  handleCreate = () => {
    const {input, todos} = this.state;

    this.setState({
      input:'',
      //concat을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }
  handleKeyPress = (e) => {
    //눌려진 키가 enter이면 handlecreate 호출
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }
  //배열 업데이트시 배열 값 직접 수정 ㄴㄴ
  //전개 연산자 사용해 업데이트 해야할 배열이나 객체의 내용을 복사
  //checkbox 이벤트 처리
  handleToggle = (id) =>{
    const {todos} = this.state;

    //파라미터 가지고 몇번째 Item인지 찾음
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; //선택한 객체

    const copyTodos = [...todos]; //배열을 복사

    //기존의 값들을 복사하고, checked 값을 덮어쓰기
    copyTodos[index] ={
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos:copyTodos
    });
  }
  handelRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos:todos.filter(todo => todo.id !== id)
    });
  }
  //== Form Component 기능 end ==//

  render(){
    const {input, todos} = this.state;
    //비구조화 할당
    const{ //this.을 붙여줘야 하는 과정 생략이 가능하도록 해줌
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handelRemove
    } = this;

    return(
      <TodoListTemplate form={<Form
        value={input}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}/>}>
        <TodoItemList todos={todos} 
          onToggle={handleToggle} onRemove={handelRemove}/>
      </TodoListTemplate>
      //Checkbox를 업데이트 하는 handleToggle 함수들을
      //onToggle이라는 key로 TodoItemList 컴포넌트에 props로 전달한다. 
    );
  }
}

export default App;