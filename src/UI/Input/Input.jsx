import React, {useState} from 'react';

const Input = ({callback}) => {
    const [text, setText]=useState('')

    const createTodo = ()=> {
        if (text.length > 0 ) {
            const newTodo = {
                id: Date.now(),
                text: text,
                isCompleted: false,
            }
            setText('')
            callback(newTodo)
        }
    }


    return (
        <div>
            <input
                type="text"
                value={text}
                placeholder={'What needs to be done?'}
                onChange={e=>setText(e.target.value)}/>
            <button onClick={createTodo}>ADD</button>
        </div>
    );
};

export default Input;