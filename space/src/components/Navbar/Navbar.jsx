import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/shared/logo.svg';
import hamburgerIcon from '../../assets/shared/icon-hamburger.svg';
import closeIcon from '../../assets/shared/icon-close.svg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav>
      <div id='div4'>
        <img src={logo} alt="Logo" />
      </div>

      <button className="burger-btn" onClick={toggleMenu}>
        <img src={menuOpen ? closeIcon : hamburgerIcon} alt="Menu" />
      </button>

      <div id='div3' className={menuOpen ? 'open' : ''}>
        <ul onClick={() => setMenuOpen(false)}>
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>00 HOME</NavLink></li>
          <li><NavLink to="/destination" className={({ isActive }) => isActive ? 'active' : ''}>01 DESTINATION</NavLink></li>
          <li><NavLink to="/crew/crew1" className={({ isActive }) => isActive ? 'active' : ''}>02 CREW</NavLink></li>
          <li><NavLink to="/technology" className={({ isActive }) => isActive ? 'active' : ''}>03 TECHNOLOGY</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
