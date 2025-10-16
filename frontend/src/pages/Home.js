import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    console.log("✅ Home component loaded");
  }, []);

  return (
    <div className="home-container">
      <h1 className="title">🏥 HealthAI — Your Smart Health Assistant</h1>
      <p className="subtitle">Choose your field of consultation:</p>

      <div className="card-container">
        <Link to="/mbbs" className="card mbbs">
          <span className="icon">🩺</span>
          <h3>General Medicine (MBBS)</h3>
          <p>AI-powered medical suggestions for common issues.</p>
        </Link>

        <Link to="/bams" className="card bams">
          <span className="icon">🌿</span>
          <h3>Ayurveda (BAMS)</h3>
          <p>Find natural remedies based on Ayurvedic principles.</p>
        </Link>

        <Link to="/bds" className="card bds">
          <span className="icon">🦷</span>
          <h3>Dentistry (BDS)</h3>
          <p>Get oral hygiene and temporary pain relief advice.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
