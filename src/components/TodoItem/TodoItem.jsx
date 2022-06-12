import React from 'react';
import './TodoItem.css'

const TodoItem = ({todo, toggleChecked}) => {
    return (
        <div className={'todo-wrapper'}>
            <label className={'todo-label'}>
                <input className={'todo-input'} type="checkbox" checked={todo.isCompleted} onChange={()=>toggleChecked(todo.id)}/>
                <div className={'todo-custom-checkbox'}>
                    <div className={'check-element'}/>
                </div>
                <span className={'todo-text'}>{todo.text}</span>
            </label>
        </div>
    );
};

export default TodoItem;