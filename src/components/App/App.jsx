import './App.css';
import Input from "../../UI/Input/Input";
import {useState} from "react";
import TodoItem from "../TodoItem/TodoItem";
import Footer from "../Footer/Footer";

function App() {

    const [todos, setTodos] = useState([{text: 'asdasdasd', id: 1, isCompleted: false}])
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
        <div className={'container'}>
            <h1 className={'header'}>TODOS</h1>
            <Input callback={addTodo}/>
            <div className={'todos'}>
                {filterTodos(filter)}
            </div>
            <Footer todos={todos} filter={filter} setFilter={setFilter}  deleteAllCompleted={deleteAllCompleted}/>
        </div>
    );
}

export default App;
