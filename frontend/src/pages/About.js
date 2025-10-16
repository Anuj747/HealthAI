import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">💡 About HealthAI</h1>
      <p className="about-subtitle">
        HealthAI is a digital health platform designed to make healthcare
        smarter and more accessible through AI-driven insights and quick
        remedies. Users can track their health, view their medical history,
        and consult specialized AI models across three domains: MBBS, BAMS,
        and BDS.
      </p>

      <div className="about-card">
        <h2>🌍 Mission</h2>
        <p>
          To empower individuals with instant, reliable, and personalized
          health assistance powered by Artificial Intelligence and modern
          web technologies.
        </p>
      </div>

      <div className="about-card">
        <h2>⚙️ Core Features</h2>
        <ul>
          <li>💬 AI chatbots for MBBS, BAMS, and BDS consultation</li>
          <li>📊 Health tracker with real-time insights</li>
          <li>📜 Secure medical history tracking</li>
          <li>🧊 Modern glassmorphic UI for seamless experience</li>
        </ul>
      </div>

      <div className="about-card">
        <h2>🚀 Future Vision</h2>
        <p>
          HealthAI aims to integrate with wearable devices and real-time
          medical monitoring systems, offering preventive care and remote
          diagnostics for everyone, everywhere.
        </p>
      </div>

      <p className="footer">
        © 2025 HealthAI | Developed by <strong>Team Tech Vikings ⚔️</strong>
      </p>
    </div>
  );
};

export default About;
