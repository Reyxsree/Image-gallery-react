import React from 'react';
import ReactDOM from 'react-dom/client';
import college from './images/college.jpg';
import haripriya from './images/haripriya.jpg';
import mom from './images/mom.jpg';
import myself from './images/myself.jpg';
import reya from './images/reya.jpg';
import sabari from './images/sabari.jpg';
import school from './images/school.jpg';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Heading(){
  return(
  
  <div className="heading">
    <h1>Image Galerry</h1>
  </div>
)
}






function Gallery(props) {
  return (
    <div>
    
    <div className="gallery-item">
      
      <img src={props.image} alt={props.name} />
      <h2 className="heading">{props.name}</h2>
    </div>
    </div>
  );
}

const photos = [
  { image: college, name: "college" },
  { image: haripriya, name: "Haripriya" },
  { image: mom, name: "mom" },
  { image: myself, name: "myself" },
  { image: reya, name: "reya" },
  { image: sabari, name: "sabari" },
  { image: school, name: "school" }
];

root.render(
  <div>
    <Heading />
  <div className="gallery-container">
    
    {photos.map((item) => (
      <Gallery key={item.name} image={item.image} name={item.name} />
    ))}
  </div>
  </div>
);


