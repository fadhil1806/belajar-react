'use client'
import React, { useState } from "react"
import ThemeContext from "./ThemeContext"
import ThemedComponent from "./ThemedComponent"
export default function App() {
    // Mengelola state tema dengan useState
    const [theme, setTheme] = useState('light')

    // Fungsi untuk mengganti tema
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemedComponent />
        </ThemeContext.Provider>
    )
}