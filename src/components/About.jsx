import React from 'react';
import profil from './images/profil.jpg';

export default function About() {
    return (
        <div className="about-container">
            <h1 className="title">About <span>me</span></h1>
            <section className="content">
                <img src={profil} alt="Profile" className="profile-image" />
                <div className="text-content">
                    <p>
                    I am an experienced Full-Stack Developer with over a decade of professional expertise in both frontend and backend development. 
                    
                    </p>
                    <p>
                    I specialize in building dynamic, scalable, and efficient web applications.                    
                    </p>
                    <p>
                        My passion for frontend development is reflected in my 
                        enthusiasm and dedication to each project.
                    </p>
                    <div className="skills">
                        <div className="skill">
                            <span>HTML & CSS</span>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "90%" }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span>JavaScript</span>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "85%" }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span>React JS</span>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "85%" }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span>JAVA</span>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "75%" }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span>JEE</span>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "50%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
