'use client'
import React, { createContext, useContext, useState, useReducer } from "react";

// Membuat Context
const UserContext = createContext();
const ThemeContext = createContext();
const CounterContext = createContext()

// Fungsi reducer untuk mengelola state counter
function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function CounterProvider({ children }) {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
}

export default function App() {
    const [theme, setTheme] = useState('blue')
    const [user, setUser] = useState(null);

    const toggleTheme = () => {
        setTheme(theme === 'blue' ? 'red' : 'blue')
    }

    const login = () => {
        setUser({ name: "Fadhil Rabbani", email: "fadhil@example.com" });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <CounterProvider>
                <button onClick={toggleTheme}>Ganti Tema</button>

                <UserContext.Provider value={{ user, login, logout }}>
                    <div className="flex flex-col items-center space-y-4 p-4">
                        <Button text={user ? "Logout" : "Login"} />
                        <UserProfile />
                    </div>
                    <Counter />
                </UserContext.Provider>
            </CounterProvider>
        </ThemeContext.Provider>
    );
}

function Button({ text }) {
    const { theme, toggleTheme } = useContext(ThemeContext)

    const className = theme != 'blue'
        ? 'bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded'
        : 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'

    return (
        <UserContext.Consumer>
            {({ user, login, logout }) => (
                <button
                    className={className}
                    onClick={user ? logout : login}
                >
                    {text}
                </button>
            )}
        </UserContext.Consumer>
    );
}

function UserProfile() {
    return (
        <UserContext.Consumer>
            {({ user }) => (
                <div className="text-center">
                    {user ? (
                        <div>
                            <h1 className="text-xl font-bold">Welcome, {user.name}!</h1>
                            <p>Email: {user.email}</p>
                        </div>
                    ) : (
                        <h1 className="text-xl font-bold">Please log in.</h1>
                    )}
                </div>
            )}
        </UserContext.Consumer>
    );
}

function Counter() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const { state, dispatch } = useContext(CounterContext);

    const className = theme != 'blue'
        ? 'bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded'
        : 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'


    return (
        <div className="flex flex-col items-center space-y-4">
            <h1 className="text-xl font-bold">Counter: {state.count}</h1>
            <button
                onClick={() => dispatch({ type: 'increment' })}
                className={className}
                // className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
            >
                Increment
            </button>
            <button
                onClick={() => dispatch({ type: 'decrement' })}
                className={className}
                // className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
            >
                Decrement
            </button>
        </div>
    );
}