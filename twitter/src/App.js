import React from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <AppRoutes />
      
    </div>
  );
}

export default App;
