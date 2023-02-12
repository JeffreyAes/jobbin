import { Route, Navigate, Routes } from 'react-router-dom';
import React, { useState } from 'react'
import './App.css';
import UserRegister from './views/UserRegister';
import Dashboard from './views/Dashboard';



function App() {
  const [logged, setLogged] = useState(null)
  return (
    <div className="text-center">
      <h1>Jobbin'</h1>
      <Routes>
        <Route element={<Navigate to='/register' replace />} path='/' ></Route>
        <Route element={<UserRegister logged={logged} setLogged={setLogged} />} path='/register' ></Route>
        <Route element={<Dashboard logged={logged} setLogged={setLogged} />} path='/dashboard' ></Route>
      </Routes>
    </div>
  );
}

export default App;
