import React from 'react'
export default function TodoItem(props) {
    return (
        <div>
            <ul>
                <li className="flex justify-around  w-full sm:w-[60%] m-auto">
                    <button className='border-2 border-black outline-none px-2 p-1 m-2 hover:bg-yellow-600 hover:text-white'
                        type='button' onClick={() => props.doneTodo(props.todo.id)}>
                        {props.todo.done ? "Undo" : "Done"}
                    </button>
                    <p className={props.todo.done ? "line-through border-2 border-red-500 outline-none px-2 p-1 m-2 min-w-[50%] " : 'border-2 border-black outline-none px-2 p-1 m-2 min-w-[50%]'}>
                        {props.todo.text}
                    </p>
                    <button className='border-2 border-black outline-none px-2 p-1 m-2 hover:bg-red-800 hover:text-white'
                        type='button' onClick={() => props.removeTodo(props.todo.id)}>
                        Delete
                    </button>
                </li>
            </ul>
        </div>


    )
}
