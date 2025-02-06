import React from "react";
import { Mail, Phone, Linkedin, Home, User, Briefcase, Layers } from "lucide-react"; // Remplacement de MapPin par Linkedin

export default function ContactMe() {

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="contact-containerr">
      <div className="divvvvv">
        <section className="contentt">
          <div className="text-contentt">
            <div className="contact-details">
              <p id="parafooter">Contacts</p>

              <div className="contact-item">
                <Mail className="icon" />
                <span>
                  <a href="mailto:halimaerreguigue@gmail.com">halimaerreguigue@gmail.com</a>
                </span>
              </div>

              <div className="contact-item">
                <Phone className="icon" />
                <span>0691364247</span>
              </div>
              <div className="contact-item">
                <Linkedin className="icon" />
                <span>
                  <a
                    href="https://linkedin.com/in/halima-er-reguigue-3b1416280"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mon LinkedIn
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="sectlistfooter">
          <p className="parafooterr">Quick Links</p>
          <ul className="listtt">
            <li onClick={() => scrollToSection('home')}>
              <Home className="icon" /> Home
            </li>
            <li onClick={() => scrollToSection('about')}>
              <User className="icon" /> About Me
            </li>
            <li onClick={() => scrollToSection('service')}>
              <Layers className="icon" /> Projects
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
