import React, { useState } from "react";
import "./VideoStyles.css";

export default function App() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <span className="nav-logo">Beatriz</span>
          <ul className="nav-links">
            <li><a href="#home"><span className="nav-number">I</span><span className="nav-label">Home</span></a></li>
            <li><a href="#about"><span className="nav-number">II</span><span className="nav-label">About</span></a></li>
            <li><a href="#experience"><span className="nav-number">III</span><span className="nav-label">Experience</span></a></li>
            <li><a href="#projects"><span className="nav-number">IV</span><span className="nav-label">Work</span></a></li>
            <li><a href="#passions"><span className="nav-number">V</span><span className="nav-label">Interests</span></a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Video */}
      <div className="video-container" id="home">
        <video
          src={`${process.env.PUBLIC_URL}/videos/0920(1).mov`}
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
        <p>Hello, I'm <span className="highlight">Beatriz</span>. I'm 24 years old and I'm from Lisbon.</p>
        <p>I've always loved creating and pushing myself a little further. Lately, however, I've realized that finding the time or the patience to pause and reflect has become increasingly difficult.</p>
        <p>We live in a world that urges us to <span className="highlight">rush</span>: we run through yellow lights, sleep less, and feel like life doesn't wait for us. It's easy to lose our sense of self in this rhythm. But I believe there is still space to resist.</p>
        <p>For me, creating begins with simple, small gestures: sitting in a café, ordering an espresso, letting the moment awaken my mind. That's where the most genuine ideas emerge.</p>
        <p>Slowing down is not a luxury, it's a necessity. It's in that space between movement and pause that we can <span className="highlight">think, create, and innovate</span>. And that's what I strive to bring to everything I do.</p>
      </section>

      {/* Experience Section */}
      <section className="experience" id="experience">
        <h2>My Journey</h2>
        <div className="experience-container">
          {/* Experience 1 */}
          <div className="experience-item">
            <div className="experience-header">
              <h3>Backstage Developer</h3>
              <span className="company">EDP</span>
            </div>
            <p className="experience-meta">
              Full-time · Feb 2026 - Present · Remote
            </p>
            <ul className="experience-description">
              <li>Contributed to the development of TechSphere, an Internal Developer Platform (IDP) for EDP, focused on enabling self-service infrastructure provisioning.</li>
              <li>Designed and implemented platform features using Python, JavaScript, and TypeScript.</li>
              <li>Integrated and leveraged Terraform modules from the infrastructure team to standardize and automate resource provisioning across Azure and AWS environments.</li>
            </ul>
            <div className="experience-skills">
              <span className="skill-tag">Backstage</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">TypeScript</span>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="experience-item">
            <div className="experience-header">
              <h3>Assistant Cloud Engineer</h3>
              <span className="company">NTT DATA Europe & Latam</span>
            </div>
            <p className="experience-meta">
              Full-time · Oct 2025 - Present · Lisbon, Portugal
            </p>
            <ul className="experience-description">
              <li>Working as a Cloud Engineer within the API Platforms area, contributing to both internal initiatives and client projects.</li>
              <li>Involved in an internal project focused on the management of cloud certifications (Azure and Google Cloud), leveraging tools such as Azure DevOps and Confluence for project management, documentation, and team collaboration.</li>
              <li>Concurrently contributing to a client project in the energy sector, supporting the development of an Internal Developer Platform (IDP) for cloud resource provisioning.</li>
              <li>Previously contributed to a MuleSoft project (Nov–Feb), where I developed a frontend interface integrated with MuleSoft services.</li>
            </ul>
            <div className="experience-skills">
              <span className="skill-tag">DevOps</span>
              <span className="skill-tag">Azure</span>
              <span className="skill-tag">Cloud Computing</span>
              <span className="skill-tag">MuleSoft</span>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="experience-item">
            <div className="experience-header">
              <h3>Freelance Web Developer</h3>
              <span className="company">Freelance</span>
            </div>
            <p className="experience-meta">
              Hybrid · Jan 2024 - Oct 2025 · 1 yr 10 mos
            </p>
            <ul className="experience-description">
              <li>Design, development, and maintenance of custom websites for clients using React Native.</li>
              <li>Led client meetings to gather requirements and define use cases.</li>
            </ul>
            <div className="experience-skills">
              <span className="skill-tag">React Native</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Web Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Arts and Crafts</h2>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-item phone-mockup">
            <div className="phone-frame">
              <video
                src={`${process.env.PUBLIC_URL}/videos/0924(5).mp4`}
                controls
                muted
                playsInline
                webkit-playsinline="true"
                className="project-video-vertical"
              />

            </div>
            <p>Personalized AI Travel Itineraries.</p>
            <h5>React Native Expo, Firebase, APIs</h5>
            <div className="project-buttons">
              <button className="see-more-btn" onClick={() => setShowModal1(true)}>
                more info
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-item computer-mockup">
            <div className="computer-frame">
              <video
                src={`${process.env.PUBLIC_URL}/videos/finance-dashboard-showcase.mp4`}
                controls
                muted
                playsInline
                webkit-playsinline="true"
                className="project-video-horizontal"
              />
            </div>
            <p>Finance Dashboard</p>
            <h5>React, React Router, Local Storage</h5>
            <div className="project-buttons">
              <button className="see-more-btn" onClick={() => setShowModal2(true)}>
                more info
              </button>
              <a
                href="https://bvpas-iscte.github.io/finance-dashboard-web/"
                target="_blank"
                rel="noopener noreferrer"
                className="see-demo-btn"
              >
                try demo
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-item computer-mockup">
          <div className="computer-frame">
            <video
              src={`${process.env.PUBLIC_URL}/videos/bi-dashboard-showcase.mp4`}
              controls
              muted
              playsInline
              webkit-playsinline="true"
              className="project-video-horizontal"
            />
          </div>
          <p>Amazon Reviews BI Platform</p>
          <h5>Power BI, Microsoft Fabric, DAX, SQL</h5>
          <div className="project-buttons">
            <button className="see-more-btn" onClick={() => setShowModal3(true)}>
              more info
            </button>
          </div>
        </div>

        {/* Modal Project 1 */}
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

        {/* Modal Project 2 */}
        {showModal2 && (
          <div className="modal-overlay" onClick={() => setShowModal2(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-btn" onClick={() => setShowModal2(false)}>
                &times;
              </span>
              <h3>Finance Tracker</h3>
              <p>
                A React web app that helps users track their expenses and income.
                Built with React and Vite.
                TypeScript, JavaScript, HTML, CSS.
              </p>
            </div>
          </div>
        )}

        {/* Modal Project 3 */}
        {showModal3 && (
          <div className="modal-overlay" onClick={() => setShowModal3(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-btn" onClick={() => setShowModal3(false)}>
                &times;
              </span>
              <h3>Amazon Reviews BI Platform</h3>
              <p>
                A complete Business Intelligence solution built in Microsoft Fabric to analyze Amazon
                customer reviews. Designed a dimensional data warehouse (star schema) with 5 dimensions,
                built a semantic model with custom DAX measures and KPIs, and developed an interactive
                multi-page Power BI dashboard alongside paginated reports answering 20 business questions
                on customer sentiment, engagement, and product performance. Group project for Business
                Intelligence II at NOVA IMS.
              </p>
            </div>
          </div>
        )}

      </section>

      {/* Interests Section */}
      <section className="interests" id="passions">
        <h2>My Interests</h2>
        <div className="interests-grid">
          <div className="interest-card">
            <div className="interest-icon">✎</div>
            <h3>Writing</h3>
            <p>In a world of noise, writing is how I slow down and think clearly.</p>
          </div>
          <div className="interest-card">
            <div className="interest-icon">✦</div>
            <h3>Brainstorming</h3>
            <p>Creating space for ideas to collide, connect, and evolve into something new.</p>
          </div>
          <div className="interest-card">
            <div className="interest-icon">⌨</div>
            <h3>Coding</h3>
            <p>Turning thought into reality—building meaningful solutions from scratch.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
