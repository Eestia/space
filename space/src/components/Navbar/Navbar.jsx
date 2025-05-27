import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../assets/shared/logo.svg'
export default function Navbar() {
  return (
    <nav>
      <div id='div4'>
        <img src={logo} alt="" />
      </div>
      <div id='navligne'></div>
      <div id='div3'>
        <ul>
          <li><Link to="/">00 HOME</Link></li>
          <li><Link to="/destination">01 DESTINATION</Link></li>
          <li><Link to="/crew">02 CREW</Link></li>
          <li><Link to="/technology">03 TECHNOLOGY</Link></li>
        </ul>
      </div>
    </nav>
  );
}
