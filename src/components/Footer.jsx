import React from "react";
import { Mail, Phone, Linkedin, Home, User, Briefcase, Layers } from "lucide-react"; 

export default function footer() {

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Contacts */}
        <div className="contact-info">
          <h3>Contact Me</h3>
          <div className="contact-item">
            <Mail className="icon" />
            <span>halimaerreguigue@gmail.com</span>
          </div>
          <div className="contact-item">
            <Phone className="icon" />
            <span>0691364247</span>
          </div>
          <div className="contact-item">
            <Linkedin className="icon" />
            <a 
              href="https://linkedin.com/in/halima-er-reguigue-3b1416280" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Mon LinkedIn
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => scrollToSection('home')}>
              <Home className="icon" /> Home
            </li>
            <li onClick={() => scrollToSection('about')}>
              <User className="icon" /> About Me
            </li>
            <li onClick={() => scrollToSection('services')}>
              <Briefcase className="icon" /> Services
            </li>
            <li onClick={() => scrollToSection('projects')}>
              <Layers className="icon" /> Projects
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Halima Er-reguigue. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
