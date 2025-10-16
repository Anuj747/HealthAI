import React from "react";
import "./History.css";

const History = () => {
  // Temporary static data (you can later fetch from backend or localStorage)
  const historyData = [
    {
      id: 1,
      date: "Oct 14, 2025",
      type: "MBBS Consultation",
      summary: "Fever and headache - temporary cure suggested: paracetamol & rest",
    },
    {
      id: 2,
      date: "Oct 13, 2025",
      type: "BDS Consultation",
      summary: "Toothache - suggested saltwater rinse and clove oil application",
    },
    {
      id: 3,
      date: "Oct 12, 2025",
      type: "BAMS Consultation",
      summary: "Cough - advised turmeric milk & steam inhalation",
    },
  ];

  return (
    <div className="history-container">
      <h1 className="history-title">📜 HealthAI History</h1>
      <p className="history-subtitle">
        Review your previous AI consultations and health tracker logs.
      </p>

      <div className="history-grid">
        {historyData.map((item) => (
          <div key={item.id} className="glass-card history-card">
            <h3>{item.type}</h3>
            <p className="date">{item.date}</p>
            <p className="summary">{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
