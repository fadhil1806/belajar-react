'use client'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from "react";

// 1
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

//2
function FetchData() {
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

//3
const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    // Fungsi untuk toggle tema
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function ThemeApp() {
    const { theme } = useContext(ThemeContext);

    const style = {
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px",
        textAlign: "center",
    };

    return (
        <div style={style}>
            <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
        </div>
    );
}

function ToggleButton() {
    const { toggleTheme } = useContext(ThemeContext);

    return <button onClick={toggleTheme}>Toggle Theme</button>;
}

function ThemedButton({ children }) {
    const { theme } = useContext(ThemeContext);

    const style = {
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px",
        textAlign: "center",
    };

    return <button style={style}>{children}</button>;
}

export default function App() {
    return (

        <ThemeProvider>
            <main className="flex min-h-screen flex-col items-center  p-24">
                <ThemeApp />
                <ToggleButton />
                <Counter />
                <ThemedButton />
                {/* <FetchData /> */}
            </main>

        </ThemeProvider>);
}