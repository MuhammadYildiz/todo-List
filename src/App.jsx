import { useState } from 'react'
import ToDoForm from './ToDoForm'
import TodoItem from './TodoItem'

function App() {
    const [todos, setTodos] = useState([])
    const addToDo = (text) => {
        let id = 1
        if (todos.length > 0) {
            id = todos[0].id + 1
        }
        let todo = {
            id: id,
            text: text,
            done: false
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }
    const doneTodo = (id) => {
        let uppdateTodos = todos.map((todo) => {
            if (todo.id == id) {
                todo.done = !todo.done
            }
            return todo
        })
        setTodos(uppdateTodos)
    }
    const removeTodo = (id) => {
        let uppdateTodos = [...todos].filter((todo) => todo.id !== id)
        setTodos(uppdateTodos)
    }
    const clearTodo = ()=>{
        setTodos([])
    }
    return (
        <div className="w-[100%] m-auto min-h-[80vh] mt-10 text-center p-5">
            <h1 className='text-3xl font-bold p-5'> ToDo List App</h1>
            <ToDoForm addToDo={addToDo} />
            {todos.map((todo) => {
                return (
                    <TodoItem doneTodo={doneTodo} removeTodo={removeTodo} todo={todo} key={todo.id} />
                )
            })}
            {todos.length > 0 &&<button type='button' onClick={() =>clearTodo()} 
            className=" border-2 border-black outline-none p-1 m-2 px-4 py-2  font-bold hover:bg-red-600 hover:text-white" >
                Clear All
            </button>}
        </div>
    )
}

export default App
