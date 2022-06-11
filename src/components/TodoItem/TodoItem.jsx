import React from 'react';

const TodoItem = ({todo, toggleChecked, deleteTodo}) => {
    return (
        <div>
            <input type="checkbox" checked={todo.isCompleted} onChange={()=>toggleChecked(todo.id)}/>
            <span>{todo.text}</span>
            <button onClick={()=>deleteTodo(todo.id)}>Удалить</button>
        </div>
    );
};

export default TodoItem;