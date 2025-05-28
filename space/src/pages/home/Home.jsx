import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';

export default function Home() {
  return (
    <div className='home'>
    <div id='navi'>
      <Navbar/>
    </div>
    <div className="centre">
        <div id='div1'>
          <h3>SO,YOU WANT TO TRAVEL TO</h3>
          <h1>SPACE</h1>
          <div id='ecart'>
          <p>Let's face it; if you want to go to space, you might as well <br />
          genuinely go to outer space and not hover kind of on the <br />
          edge of it. Well sit back, and relax because we'll give you a <br />
          truly out of this world experience!</p>
          </div>
        </div>
        <div id='div2'>
          <Link to="/destination">
          <h3>EXPLORE</h3>
          </Link>
        </div>
    </div>
  </div>
  );
}