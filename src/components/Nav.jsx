import React from 'react';

export default function Nav() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className="navclass">
      <h2 className="logo">Er-<span>Reguigue</span></h2>
      <ul>
        <li><a onClick={() => scrollToSection('home')}>Home</a></li>
        <li><a onClick={() => scrollToSection('about')}>About Me</a></li>
        <li><a onClick={() => scrollToSection('service')}>Projects</a></li>
      </ul>
      <button className="contact-btn" onClick={() => scrollToSection('contacts')}>Contact Me</button>
    </nav>
  );
}
