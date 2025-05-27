import { useState } from 'react';
import planets from '../../planetsData'; // ton tableau
import './Destination.css';
import Navbar from '../../components/Navbar/Navbar';

export default function Destination() {
  const [selected, setSelected] = useState(0); // par défaut Moon

  const planet = planets[selected];

  return (
    <div id='bg'>
    <div id='naviga'>
      <Navbar/>
    </div>
    <div id='txt-desti'>
        <h2><span>01</span> PICK YOUR DESTINATION</h2>
    </div>
    <div className="destination">
      <div className="left">
        <img src={planet.image} alt={planet.name} />
      </div>

      <div className="right">
        <div className="tabs">
          {planets.map((p, index) => (
            <button
              key={p.name}
              onClick={() => setSelected(index)}
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
