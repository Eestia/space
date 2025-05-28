import vehicle from './assets/technology/image-launch-vehicle-portrait.jpg';
import capsule from './assets/technology/image-space-capsule-portrait.jpg';
import spaceport from './assets/technology/image-spaceport-portrait.jpg';

const technologyData = [
  {
    name: "Launch vehicle",
    terminology: "THE TERMINOLOGY...",
    description: `A launch vehicle or carrier rocket is a rocket-propelled
vehicle used to carry a payload from Earth's surface to
space, usually to Earth orbit or beyond. Our WEB-X
carrier rocket is the most powerful in operation.
Standing 150 metres tall, its quite an awe-inspiring
sight on the launch pad!`,
    image: {vehicle}
  },
  {
    name: "Spaceport",
    terminology: "THE TERMINOLOGY...",
    description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
  payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
  it's quite an awe-inspiring sight on the launch pad!`,
    image: {spaceport}
  },
  {
    name: "Space capsule",
    terminology: "THE TERMINOLOGY...",
    description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
  you'll spend your time during the flight. It includes a space gym, cinema, 
  and plenty of other activities to keep you entertained.`,
    image: {capsule}
  }
];

export default technologyData;
