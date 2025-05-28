import douglasImg from '../src/assets/crew/image-douglas-hurley.png';
import markImg from '../src/assets/crew/image-mark-shuttleworth.png';
import victorImg from '../src/assets/crew/image-victor-glover.png';
import anoushehImg from '../src/assets/crew/image-anousheh-ansari.png';

const crew = [
  {
    id: 'crew1',
    role: 'COMMANDER',
    name: 'DOUGLAS HURLEY',
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: douglasImg,
  },
  {
    id: 'crew2',
    role: 'MISSION SPECIALIST',
    name: 'MARK SHUTTLEWORTH',
    description:
      "Mark Shuttleworth is the founder and CEO of Canonical, the company behind Ubuntu OS. He became the first South African to travel to space as a tourist.",
    image: markImg,
  },
  {
    id: 'crew3',
    role: 'PILOT',
    name: 'VICTOR GLOVER',
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy.",
    image: victorImg,
  },
  {
    id: 'crew4',
    role: 'FLIGHT ENGINEER',
    name: 'ANOUSHEH ANSARI',
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. She was the first Iranian in space and the first self-funded woman to fly to the ISS.",
    image: anoushehImg,
  },
];

export default crew;
