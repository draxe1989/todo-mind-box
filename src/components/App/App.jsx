import './App.css';
import Input from "../../UI/Input/Input";
import {useState} from "react";
import TodoItem from "../TodoItem/TodoItem";

function App() {

    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState('All')

    const addTodo = (todo)=> {
        const arr = [...todos]
        arr.push(todo)
        setTodos(arr)
    }

    const changeTodoComleted = (id)=> {
        const arr = [...todos]
        setTodos(arr.map(item=>{
            if (item.id===id) {
                item.isCompleted = !item.isCompleted
                return item
            } else {
                return item
            }
        }))
    }

    const deleteTodo= (id)=> {
        return setTodos([...todos].filter(item=>item.id!==id))
    }

    const deleteAllCompleted = ()=> {
        return setTodos([...todos].filter(item=>!item.isCompleted))
    }

    const filterTodos = (filter)=> {
        switch (filter) {
            case 'All':
                return todos.map(item=><TodoItem key={item.id} todo={item} toggleChecked={changeTodoComleted} deleteTodo={deleteTodo}/>)
            case 'Active':
                return [...todos].filter(item=>!item.isCompleted).map(item=><TodoItem key={item.id} todo={item} toggleChecked={changeTodoComleted} deleteTodo={deleteTodo}/>)
            case 'Completed':
                return [...todos].filter(item=>item.isCompleted).map(item=><TodoItem key={item.id} todo={item} toggleChecked={changeTodoComleted} deleteTodo={deleteTodo}/>)
            default:
                return null
        }
    }

    return (
        <div>
            <Input callback={addTodo}/>
            {filterTodos(filter)}
            <div>
                <span>{`${todos.filter(item=>item.isCompleted).length} items left`}</span>
                <button style={{borderColor: filter==='All' && 'red'}} onClick={()=>setFilter('All')}>All</button>
                <button style={{borderColor: filter==='Active' && 'red'}} onClick={()=>setFilter('Active')}>Active</button>
                <button style={{borderColor: filter==='Completed' && 'red'}} onClick={()=>setFilter('Completed')}>Completed</button>
                <button onClick={deleteAllCompleted}>Clear completed</button>
            </div>
        </div>
    );
}

export default App;
