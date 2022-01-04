import React, {Component} from 'react';
import TodoItem from './TodoItem';
/**
 * TodoItem 컴포넌트 여러 개를 렌더링 해주는 역할
 * 리스트가 동적인 경우에는 함수형이 아닌 클래스형 컴포넌트로 작성해야 함(성능 최적화 위함)
 * todos: todo 객체들이 들어 있는 배열
 * onToggle: 체크박스를 키고 끄는 함수
 * onRemove: 아이템을 삭제시키는 함수
 */
class TodoItemList extends Component{
    shouldComponentUpdate(nextProps, nextState){
        return this.props.checked !== nextProps.checked;
    }

    render(){
        const {todos, onToggle, onRemove} = this.props;
        /* App -> TodoItemList */
        const todoList = todos.map( //반복해서 만들어줌
            ({id, text, checked}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );
        return (
            <div>
                {/* <TodoItem text="안녕"/>
                <TodoItem text="리액트"/>
                <TodoItem text="반가워"/> */}
                {todoList}
            </div>
        );
    }
}
export default TodoItemList;