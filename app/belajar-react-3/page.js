'use client'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)
    function addCount() {
        setCount(count + 1)
    }

    return (
        <div className="flex gap-x-14">
            <p>Jumlah count: {count}</p>
            <button onClick={addCount}>+</button>
            <button onClick={() => setCount(0)}>Reset count</button>
        </div>
    )
}

//useEffect Hook
function DataFetcher() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        fetch('https://api.unsplash.com/photos/?client_id=JMaUVM8y181p_pYd4QbKEFACfSpvLQXtvUeKhB_6mic')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
                // console.log(data); // Tampilkan data di console client
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []); // Array kosong [] sebagai dependency array agar effect hanya berjalan sekali



    if (loading) return (<div>Loading...</div>)
    return (
        <>
            <h1>Data yang di fetching</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    )
}

// useContext Hook

// Membuat Context bernama ThemeContext
const ThemeContext = createContext('light')

function ThemedComponent() {
    // Menggunakan useContext untuk mengakses nilai ThemeContext
    const theme = useContext(ThemeContext)

    const style = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '10px',
        textAlign: 'center'
    }

    return (
        <div style={style}>
            Tema saat ini: {theme}
        </div>
    )
}

// useReducer Hook
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error()
    }
}

function Counter2() {
    // Menggunakan useReducer untuk mendefinisikan state 'count' dan dispatch
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <div>
            <h1>Hitungan: {state.count}</h1>
            {/* Dispatch action 'increment' untuk menambah count */}
            <button onClick={() => dispatch({ type: 'increment' })}>Tambah</button>
            {/* Dispatch action 'decrement' untuk mengurangi count */}
            <button onClick={() => dispatch({ type: 'decrement' })}>Kurangi</button>
        </div>
    );
}

// useRef Hook
function FocusInput() {
    // Membuat ref dengan useRef yang akan di-attach ke input
    const inputRef = useRef(null);

    // Fungsi untuk memfokuskan input ketika tombol ditekan
    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            {/* Menghubungkan ref dengan input */}
            <input ref={inputRef} type="text" />
            {/* Menambahkan onClick event handler untuk fokus pada input */}
            <button onClick={focusInput}>Fokuskan Input</button>
        </div>
    );
}

// useMemo Hook
function ExpensiveComputation({ num }) {
    // Fungsi simulasi untuk menghitung nilai yang memakan waktu
    const compute = (num) => {
        console.log('Menghitung nilai...');
        return num * 2
    }

    // Menggunakan useMemo untuk meng-cache hasil perhitungan
    const result = useMemo(() => compute(num, [num]))

    return (
        <div>
            <h1>Hasil: {result}</h1>
        </div>
    );
}

// useCallback Hook
function Button({ onClick, children }) {
    return <button onClick={onClick}>{children}</button>;
}

function Counter3() {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => {
        setCount(count + 1)
    }, [count])

    return (
        <div>
            <h1>Hitungan: {count}</h1>
            {/* Menggunakan Button dengan fungsi increment */}
            <Button onClick={increment}>Tambah</Button>
        </div>
    );
}

// Custom hook untuk fetch data
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setData(data);
          setLoading(false); // Set loading ke false setelah data berhasil di-fetch
          console.log(data)
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          setLoading(false); // Set loading ke false meskipun ada error
        });
    }, [url]); // Array dependency berisi url agar fetch dijalankan setiap kali url berubah
  
    return { data, loading };
  }

export default function Index() {
    const [num, setNum] = useState(1);
    const { data, loading } = useFetch('https://api.example.https://api.unsplash.com/photos/?client_id=JMaUVM8y181p_pYd4QbKEFACfSpvLQXtvUeKhB_6mic/data');

    return (
        <div className="flex min-h-screen flex-col items-center  p-24">
            <Counter />
            {/* <DataFetcher/> */}
            <ThemeContext.Provider value="dark">
                <ThemedComponent />
            </ThemeContext.Provider>
            <Counter2 />
            <FocusInput />
            <div>
                <input
                    type="number"
                    value={num}
                    onChange={(e) => setNum(parseInt(e.target.value))}
                />
                {/* Mengirim nilai num sebagai props ke ExpensiveComputation */}
                <ExpensiveComputation num={num} />
            </div>
            <Counter3 />
            {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
        </div>
    )
}