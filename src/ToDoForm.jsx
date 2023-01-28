import React from 'react'
import { useState } from 'react'
export default function ToDoForm(props) {
    const [input, setInput] = useState("")
    const getInput = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input) {
            alert('Enter a todo item....')
            return alert
        }
        setInput("")
        props.addToDo(input)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='border-2 border-black outline-none px-2 p-1 m-2'
                    type="text"
                    placeholder='Add a todo....'
                    value={input}
                    onChange={getInput}
                />
                <button type='submit' className='border-2 border-black outline-none px-2 p-1 m-2 font-bold hover:bg-green-900 hover:text-white' >
                    Add
                </button>
            </form>

        </div>
    )
}
