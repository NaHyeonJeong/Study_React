import React from "react";
import './TodoListTemplate.css';
/**
 * 전체 틀 component
 * @param {*} param0 
 * @returns 
 */
const TodoListTemplate = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;