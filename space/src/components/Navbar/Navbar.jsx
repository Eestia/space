import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/shared/logo.svg';

export default function Navbar() {
  return (
    <nav>
      <div id='div4'>
        <img src={logo} alt="" />
      </div>
      <div id='navligne'></div>
      <div id='div3'>
        <ul>
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>00 HOME</NavLink></li>
          <li><NavLink to="/destination" className={({ isActive }) => isActive ? 'active' : ''}>01 DESTINATION</NavLink></li>
          <li><NavLink to="/crew" className={({ isActive }) => isActive ? 'active' : ''}>02 CREW</NavLink></li>
          <li><NavLink to="/technology" className={({ isActive }) => isActive ? 'active' : ''}>03 TECHNOLOGY</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}