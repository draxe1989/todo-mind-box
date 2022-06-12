import React, {useEffect, useState} from 'react';
import './Input.css'

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

    useEffect(()=>{
        window.addEventListener('keypress', (e)=>{
            if (e.key === 'Enter') {
                createTodo()
            }
        })
        return  document.removeEventListener('keyup', (e)=>{
            if (e.key === 'Enter') {
                createTodo()
            }
        })
    }, [text])

    return (
        <div className={'input-wrapper'}>
            <input
                className={'input'}
                type="text"
                value={text}
                placeholder={'What needs to be done?'}
                onChange={e=>setText(e.target.value)}/>
            <button className={'input-button'} onClick={createTodo}>ADD</button>
        </div>
    );
};

export default Input;