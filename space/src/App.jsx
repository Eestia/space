import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import Destination from './pages/destination/destination';
import Crew from './pages/crew/Crew';
import Technology from './pages/tech/Technology';
import Home from './pages/home/home';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination/:planetName' element={<Destination />} />
        <Route path='/destination' element={<Navigate to="/destination/moon" />} />
        <Route path='/crew/:crewId' element={<Crew />} />
        <Route path='/technology/:techId' element={<Technology />} />
        <Route path='/technology' element={<Navigate to="/technology/1" />} />
      </Routes>
  );
}

export default App;


