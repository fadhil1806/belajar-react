import React, { createContext, useState, useContext } from 'react';

// Membuat Context untuk tema
const ThemeContext = createContext();

// Komponen Provider untuk ThemeContext
export function ThemeProvider({ children }) {
  // State untuk menyimpan tema saat ini
  const [theme, setTheme] = useState('blue'); // Tema default adalah biru

  // Fungsi untuk beralih antara tema
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'blue' ? 'orange' : 'blue'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook untuk menggunakan ThemeContext
export const useTheme = () => useContext(ThemeContext);
