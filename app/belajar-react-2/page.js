'use client'
import React, { useState } from 'react';

function Welcome(props) {
    return <h1>Welcome back, {props.name}</h1>
}
function ClickButton() {
    const handleClick = () => alert('Tombol ini di tekan')

    return (
        <button onClick={handleClick}>Click Alert</button>
    )
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn
    return (
        <>
            {isLoggedIn ? (
                <h1>Selamat datang kembali!</h1>
            ) : (
                <h1>Silakan login.</h1>
            )}
        </>
    )
}

function NumberList() {
    const numbers = [1, 2, 3, 4, 5];
    return (
        <ul>
            {numbers.map((number) => (
                <li key={number.toString()}>{number}</li>
            ))}
        </ul>
    )
}

function NameForm() {
    // Mendefinisikan state "value" dengan nilai awal kosong
    const [value, setValue] = useState('')

    // Fungsi untuk menangani perubahan input dan mengupdate state "value"
    const handleChange = () => setValue(event.target.value)

    // Fungsi untuk menangani submit form dan menampilkan alert
    const handleSubmit = () => {
        alert('nama yang di input: ' + value)
        event.preventDefault(); // Mencegah default action dari form submit
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Nama: <input type='text' value={value} onChange={handleChange}></input></label>
            <button type="submit">Submit</button>
        </form>
    )

    // const handleSubmit = (event) => {
    //     alert('Nama yang diinput: ' + value);
    //     event.preventDefault(); // Mencegah default action dari form submit
    //   }

}

export default function Home() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }


    return (
        <main className="flex min-h-screen flex-col items-center  p-24">
            <Welcome name="Fadhil rabbani"></Welcome>
            <div className='mt-3 container'>
                <h1>Jumlah count: {count}</h1>
                <button onClick={increment}>+</button>
            </div>
            <div className='mt-5'><ClickButton /></div>

            <Greeting isLoggedIn={false}></Greeting>
            <NumberList />
            <NameForm />
        </main>
    )
}