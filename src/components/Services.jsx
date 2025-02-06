import React from 'react';

const services = [
    {
        id: 1,
        title: "Educational Website",
        description: "Educational Institution Management Website of EST Fquih Ben Salah",
        color: "#ff6600", // Couleur du texte
        borderColor: "#ffffff" // Couleur de la bordure au survol
    },
    {
        id: 2,
        title: " Dynamic website ",
        description: "Email Management Website in ABHOER",
        color: "#ff0099",
        borderColor: "#ffffff"
        // borderColor: "#ff0099"
    },
    {
        id: 3,
        title: "School document management website",
        description: "Simple website for managing school documents at ENSA Safi.",
        color: "#9900ff",
        borderColor: "#ffffff"
    }
];

export default function Services() {
    return (
        <div className="services-container">
            <h1 className="title">My <span>Projects</span></h1>
            <div className="services-grid">
                {services.map((service) => (
                    <div className="service-card" key={service.id} style={{ borderColor: service.borderColor }}>
                        <h2>{service.id}</h2>
                        <h3 style={{ color: service.color }}>{service.title}</h3>
                        <p>{service.description}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}
