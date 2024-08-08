'use client'
import { useState } from "react";

function FormTodo() {
    const [data, setData] = useState([])
    const [text, setText] = useState('')
    const [status, setStatus] = useState('')

    const handleChangeText = () => setText(event.target.value)
    const handleChangeStatus = () => setStatus(event.target.value)

    const addTodo = (event) => {
        event.preventDefault();
        const newData = { id: data.length + 1, text: text, status: status }
        setData([...data, newData]);
        setText('');
        setStatus('');
    }

    const removeTodo = (id) => {
        setData(data.filter(todo => todo.id !== id));
    };

    return (
        <form onSubmit={addTodo}>
            <label>Text  : <input type='text' value={text} onChange={handleChangeText}></input></label>
            <label>Status: <input type='text' value={status} onChangeq={handleChangeStatus}></input></label>
            <button type="submit">Submit</button>
            <ul>
                {data.map(todo => (
                    <li key={todo.id}>Text: {todo.text} - Status: {todo.status == 'selesai' ? 'true' : 'false'} <button onClick={() => removeTodo(todo.id)}>Remove</button></li>
                ))}
            </ul>
        </form>
    )
}

export default function TodoApp() {
    return (
        <>
            <FormTodo />
        </>
    )
}