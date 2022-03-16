import React, { useEffect } from 'react';
import ThemeComponent from './components/ThemeComponent';
import ThemeProvider from './utils/ThemeContext';

export default function App() {
  useEffect(() => {
    document.title = 'Unit 22.1: useReducer';
  }, []);

  return (
    <ThemeProvider>
      <ThemeComponent />
    </ThemeProvider>
  );
}
