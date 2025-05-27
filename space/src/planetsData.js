import moonImg from './assets/destination/image-moon.png';
import marsImg from './assets/destination/image-mars.png';
import europaImg from './assets/destination/image-europa.png';
import titanImg from './assets/destination/image-titan.png';

const planets = [
  {
    name: "MOON",
    image: moonImg,
    description: "See our Planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While youtre there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    travel: "3 days"
  },
  {
    name: "MARS",
    image: marsImg,
    description: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    travel: "9 months"
  },
  {
    name: "EUROPA",
    image: europaImg,
    description: "The smallest of the four Galilean moons orbiting Jupiter,Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    travel: "3 years"
  },
  {
    name: "TITAN",
    image: titanImg,
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    travel: "7 years"
  },
];

export default planets;
