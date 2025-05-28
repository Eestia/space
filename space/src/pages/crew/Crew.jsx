import { useParams, useNavigate } from 'react-router-dom';
import crewData from '../../crewData';
import './Crew.css';
import Navbar from '../../components/Navbar/Navbar';

export default function Crew() {
  const { crewId } = useParams();
  const navigate = useNavigate();

  const index = crewData.findIndex((c) => c.id === crewId);
  const currentCrew = crewData[index] || crewData[0]; // fallback sécurité

  return (
    <div id='bg-crew'>
      <div id='navi'>
        <Navbar/>
      </div>
      <div className="crew-page">
        <div className="left">
          <div className="content">
            <div id='h2-espace'>
              <h2><span>02</span> MEET YOUR CREW</h2>
            </div>
            <h3>{currentCrew.role}</h3>
            <h1>{currentCrew.name}</h1>
            <div id='p-taille'>
              <p>{currentCrew.description}</p>
            </div>
          </div>
          <div className="dots">
            {crewData.map((c, i) => (
              <button
                key={c.id}
                onClick={() => navigate(`/crew/${c.id}`)}
                className={i === index ? 'active' : ''}
              />
            ))}
          </div>
        </div>
        <div className="right">
          <img src={currentCrew.image} alt={currentCrew.name} />
        </div>
      </div>
  </div>
  );
}
