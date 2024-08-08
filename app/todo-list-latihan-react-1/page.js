'use client'
import { useState } from 'react';

export default function Index() {
    const [tasks, setTasks] = useState([]);
    const [inputTask, setInputTask] = useState('');

    function addTask() {
        if (inputTask.trim()) {
            setTasks([...tasks, inputTask]);
            setInputTask('');
        }
    }

    function removeTask(index) {
        const newData = [...tasks]
        newData.splice(index, 1)
        setTasks(newData)
    }

    return (
        <main className="flex min-h-screen flex-col p-24">
            <h1 className="mb-4">To-Do List</h1>
            <input
                autoComplete='off'
                name="inputTask"
                className="mb-3 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                id="taskInput"
                placeholder="Add a new task"
                value={inputTask}
                onChange={(e) => setInputTask(e.target.value)}
            />
            <button
                onClick={addTask}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                id="addTaskButton"
            >
                Add Task
            </button>
            <div className='container mx-auto p-4'>
            <ul id="taskList" className="list-none space-y-4">
                {tasks.map((task, index) => (
                    <li 
                        key={index} 
                        className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <span className="text-lg font-semibold text-gray-800">{task}</span>
                        <button 
                            className="rounded-lg bg-purple-600 text-white p-2 font-bold ring-1 ring-inset ring-gray-300 hover:bg-purple-700 transition-colors"
                            onClick={() => removeTask(index)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            </div>
            
        </main>
    );
}
