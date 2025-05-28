import { useParams, useNavigate } from 'react-router-dom';
import planets from '../../planetsData';
import './Destination.css';
import Navbar from '../../components/Navbar/Navbar';
import { useState } from 'react';


export default function Destination() {
  const { planetName } = useParams();
  const navigate = useNavigate();

  const selectedIndex = planets.findIndex(p => p.name.toLowerCase() === planetName?.toLowerCase());
  const [selected, setSelected] = useState(selectedIndex !== -1 ? selectedIndex : 0);

  const planet = planets[selected];

  const handleTabClick = (index) => {
    setSelected(index);
    navigate(`/destination/${planets[index].name.toLowerCase()}`);
  };

  return (
    <div id='bg'>
      <div id='navi'>
        <Navbar />
      </div>
      <div id='txt-desti'>
        <h2><span>01</span> PICK YOUR DESTINATION</h2>
      </div>
      <div className="destination">
        <div className="left-desti">
          <img src={planet.image} alt={planet.name} />
        </div>

        <div className="right-desti">
          <div className="tabs">
            {planets.map((p, index) => (
              <button
                key={p.name}
                onClick={() => handleTabClick(index)}
                className={index === selected ? "active" : ""}
              >
                {p.name}
              </button>
            ))}
          </div>

          <div id='para'>
            <h1>{planet.name}</h1>
            <p id='barre'>{planet.description}</p>
          </div>

          <div className="infos">
            <div>
              <h4>EST. TRAVEL TIME</h4>
              <p id='travel'>{planet.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

