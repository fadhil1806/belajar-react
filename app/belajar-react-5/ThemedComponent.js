import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedComponent() {
  // Menggunakan useContext untuk mengakses nilai context
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Menentukan gaya berdasarkan nilai context
  const style = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '10px',
    textAlign: 'center'
  };

  return (
    <div style={style} className='h-100'>
      Tema saat ini: {theme}
      {/* Tombol untuk mengganti tema */}
      <button onClick={toggleTheme}>Ganti Tema</button>
    </div>
  );
}

export default ThemedComponent;