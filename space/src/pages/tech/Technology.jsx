import { useParams, useNavigate } from "react-router-dom";
import "./tech.css";
import data from "../../technologyData.js"
import Navbar from "../../components/Navbar/Navbar.jsx";

export default function Technology() {
  const { techId } = useParams();
  const navigate = useNavigate();
  const techIndex = parseInt(techId) - 1;
  const tech = data[techIndex];

  if (!tech) return <p>Technology not found</p>;

  return (
    <div id="bg-tech">
    <div id="navi">
      <Navbar/>
    </div>
    <div id="h3-tech">
      <h3><span>03</span> SPACE LAUNCH 101</h3>
    </div>
    <div className="technology-page">
      <div className="left-column">
        <div className="circle-nav">
          {[1, 2, 3].map((n, i) => (
            <div
              key={n}
              onClick={() => navigate(`/technology/${n}`)}
              className={`circle ${techIndex === i ? "active" : ""}`}
            >
              {n}
            </div>
          ))}
        </div>
        <div className="text-info">
          <h4>{tech.terminology}</h4>
          <h1>{tech.name.toUpperCase()}</h1>
          <div id="tech-p">
          <p>{tech.description}</p>
          </div>
        </div>
      </div>
      <div className="right-column">
        <img src={tech.image} alt={tech.name} />
      </div>
    </div>
    </div>
  );
}
