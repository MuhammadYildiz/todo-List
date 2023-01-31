import React from 'react'
import { useState } from 'react'
export default function ToDoForm(props) {
    const [input, setInput] = useState("")
    const getInput = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setInput("")
        props.addToDo(input)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:w-[50%] lg:w-[30%]  m-auto ">
                <input className='border-2 border-black outline-none px-2 m-auto p-1 w-[73%] lg:w-[100%] text-black '
                    type="search"
                    placeholder='Add a todo....'
                    value={input}
                    onChange={getInput}
                    onFocus={()=>setInput("")}
                />
                <button type='submit' className='border-2 border-black outline-none px-2 p-1 m-auto my-2 font-bold hover:bg-green-900 hover:text-white max-w-[40%] min-w-[30%]  ' >
                    Add
                </button>
            </form>
        </div>
    )
}
