import React, { useEffect } from 'react';
import CarComponent from './components/CarComponent';
// Importing our theme provider which will make our global state available to child components
import CarProvider from './utils/CarContext';

export default function App() {
  useEffect(() => {
    document.title = 'Unit 22.1: Actions';
  }, []);

  return (
    <CarProvider>
      <CarComponent />
    </CarProvider>
  );
}
