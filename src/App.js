import React, { useState } from "react";
import "./VideoStyles.css";

export default function App() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <span className="nav-logo">Beatriz</span>
          <ul className="nav-links">
            <li><a href="#home">I</a></li>
            <li><a href="#about">II</a></li>
            <li><a href="#projects">III</a></li>
            <li><a href="#passions">IV</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Video */}
      <div className="video-container" id="home">
        <video
          src="/videos/0920(1).mov"
          autoPlay
          loop
          muted
          playsInline
          controls
        />
      </div>

      {/* About Me Section */}
      <section className="about" id="about">
        <h1>A Little About Me</h1>
        <p>Hello, I’m <span className="highlight">Beatriz</span>. I’m 23 years old and I´m from Lisbon.</p>
        <p>I’ve always loved creating and pushing myself a little further. Lately, however, I’ve realized that finding the time — or the patience — to pause and reflect has become increasingly difficult.</p>
        <p>We live in a world that urges us to <span className="highlight">rush</span>: we run through yellow lights, sleep less, and feel like life doesn’t wait for us. It’s easy to lose our sense of self in this rhythm. But I believe there is still space to resist.</p>
        <p>For me, creating begins with simple, small gestures: sitting in a café, ordering an espresso, letting the moment awaken my mind. That’s where the most genuine ideas emerge.</p>
        <p>Slowing down is not a luxury - it’s a necessity. It’s in that space between movement and pause that we can <span className="highlight">think, create, and innovate</span>. And that’s what I strive to bring to everything I do.</p>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Arts and Crafts</h2>
        <div className="projects-grid">
          {/* Projeto 1 */}
          <div className="project-item phone-mockup">
            <div className="phone-frame">
              <video
                src="/videos/0924(5).mp4"
                controls
                muted
                className="project-video-vertical"
              />
            </div>
            <p>Personalized AI Travel Itineraries.</p>
            <h5>React Native Expo, Firebase, APIs</h5>
            <button className="see-more-btn" onClick={() => setShowModal1(true)}>
              more info
            </button>
          </div>
          {/* Projeto 2 */}
          <div className="project-item computer-mockup">
            <div className="computer-frame">
              <video
                src="/videos/0926(1).mov"
                controls
                muted
                className="project-video-horizontal"
              />
            </div>
            <p>Finance Tracker App</p>
            <h5>React, React Router, Local Storage</h5>
            <div className="project-buttons">
              <button className="see-more-btn" onClick={() => setShowModal2(true)}>
                more info
              </button>
              <a
                href="https://bvpas-iscte.github.io/finance-tracker/"
                target="_blank"
                rel="noopener noreferrer"
                className="see-demo-btn"
              >
                try demo
              </a>
            </div>
          </div>


        </div>

        {/* Modal Projeto 1 */}
        {showModal1 && (
          <div className="modal-overlay" onClick={() => setShowModal1(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-btn" onClick={() => setShowModal1(false)}>
                &times;
              </span>
              <h3>AI Itineraries</h3>
              <p>
                A full stack mobile app that generates intelligent, personalized travel itineraries using Artificial Intelligence.
                The frontend is built with React Native and Expo, while Firebase handles backend functionality including data storage and authentication.
                The app also integrates multiple APIs to communicate with the AI engine, fetch weather forecasts, and access location data from Google Places.
              </p>


            </div>
          </div>
        )}

        {/* Modal Projeto 2 */}
        {showModal2 && (
          <div className="modal-overlay" onClick={() => setShowModal2(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-btn" onClick={() => setShowModal2(false)}>
                &times;
              </span>
              <h3>Finance Tracker</h3>
              <p>
                A React web app that helps users track their expenses and income.
                Built with React and React Router, it uses Local Storage to save user data directly in the browser.
              </p>
            </div>
          </div>
        )}

      </section>
      {/* Passions Section */}
      <section className="passions" id="passions">
        <h2>Behind the Scenes</h2>
        <div className="passions-grid">
          <div className="passion-item">
            <img src="/pics/book.jpg" alt="Books" />
            <p className="passion-description">Hiding inside a good true crime book.</p>
          </div>
          <div className="passion-item">
            <img src="/pics/dance.jpg" alt="Dance" />
            <p className="passion-description">Transform feelings into movement.</p>
          </div>
          <div className="passion-item">
            <img src="/pics/coffee.jpg" alt="Coffee" />
            <p className="passion-description">Hot coffes in freezing mornings.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
