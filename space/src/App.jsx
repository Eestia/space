import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Destination from './pages/destination/destination';
import Crew from './pages/crew/Crew';
import Tech from './pages/tech/Tech';
import Home from './pages/home/home';
import Navbar from './components/Navbar/Navbar';
import { Navigate } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/destination/:planetName' element={<Destination />} />
        <Route path="/destination" element={<Navigate to="/destination/moon" />} />
        <Route path="/crew/:crewId" element={<Crew />} />
        <Route path='/tech' element={<Tech/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
