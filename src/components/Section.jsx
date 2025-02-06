import React from 'react';
import profil from './images/profil.jpg';
import cv from '../files/cv.pdf'

export default function Section() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="sectionClass">
      <img src={profil} alt="profil" className="profile-pic" />
      <h1>I'm <span>Er-reguigue Halima</span></h1>
      <h3>FullStack Developer</h3>
      <p>
        I am a fullstack developer from Morocco, passionate about coding and 
        creating amazing web applications.
      </p>
      <div className="divbutt"> 
        <button className="connect-btn" onClick={() => scrollToSection('contacts')}>
          Connect with me
        </button>
        <a href={cv} download="cv.pdf">
          <button className="resume-btn">My CV</button>
        </a>
      </div>
    </div>
  );
}
