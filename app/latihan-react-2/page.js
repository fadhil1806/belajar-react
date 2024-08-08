// Latihan:
// Buat komponen sederhana menggunakan JSX dan render di halaman HTML.
// Gunakan props untuk mengirim data ke komponen.
// Buat komponen yang memiliki state dan ubah state melalui event handler.
// Buat conditional rendering menggunakan if atau ternary operator.
// Buat daftar elemen dengan menggunakan key yang unik.
// Buat form yang menerima input dari pengguna dan menampilkan hasilnya

'use client'
import { useState } from "react"

function Introduction(props) {
    return (
        <h1>Halo, {props.name}</h1>
    )
}

function Login(props) {
    return (
      <>
          {props.status ? (
            <h1>Akses di dapatkan</h1>
        ) : (
            <h1>Akses tidak ada</h1>
        )}
      </>
    )
}

function FormUser() {
    const [value, setValue] = useState('')
    const handleInput = () => setValue(event.target.value)
    
    const showValue = () => {
        return (
            alert('Value form yang kamu kirim adalah ' + value)
        )
    }

    return (
        <form onSubmit={showValue}>
            <input type="text" value={value}  onChange={handleInput}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default function Index() {
    const [count, setCount] = useState(0)

    function increment () {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }

    const fruits = ['manggo', 'apple', 'banana', 'watermelon', 'pepaya']

    return (
        <main className="flex min-h-screen flex-col items-center  p-24">
            <Introduction name="Fadhil Rabbani" />

            <div className="d-flex container">
                <p>Total Count: {count}</p>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
            <Login status={true} />

            {fruits.map(fruit => (
                <div key={fruit}>{fruit}</div>
            ))}
            <FormUser/>
        </main>
    )
}