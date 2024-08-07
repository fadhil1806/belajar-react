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

    return (
        <main className="flex min-h-screen flex-col p-24">
            <h1 className="mb-4">To-Do List</h1>
            <input
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
            <ul id="taskList">
                {tasks.map((task, index) => (
                    <li key={index} className="py-2">{task}</li>
                ))}
            </ul>
        </main>
    );
}
