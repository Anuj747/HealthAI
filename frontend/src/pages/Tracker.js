import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Tracker.css";

const Tracker = () => {
  const [bmi, setBmi] = useState(null);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) return;
    const bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(1);
    setBmi(bmiValue);
  };

  return (
    <motion.div
      className="tracker-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="tracker-title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        📊 Health Tracker Dashboard
      </motion.h1>

      <motion.p
        className="tracker-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Enter your basic details to track your health metrics.
      </motion.p>

      <motion.div
        className="input-card glass-card"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h3>Calculate BMI</h3>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button onClick={calculateBMI}>Check BMI</button>

        {bmi && (
          <motion.p
            className="bmi-result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Your BMI is: <strong>{bmi}</strong>{" "}
            {bmi < 18.5
              ? "— Underweight"
              : bmi < 24.9
              ? "— Normal"
              : bmi < 29.9
              ? "— Overweight"
              : "— Obese"}
          </motion.p>
        )}
      </motion.div>

      <motion.div
        className="metrics-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} className="glass-card metric-card">
          ❤️ <h3>Heart Rate</h3>
          <p>72 bpm</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="glass-card metric-card">
          💤 <h3>Sleep Hours</h3>
          <p>7.5 hrs</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="glass-card metric-card">
          🔥 <h3>Calories Burned</h3>
          <p>540 kcal</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="glass-card metric-card">
          💧 <h3>Water Intake</h3>
          <p>2.5 L</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="ai-summary glass-card"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h3>🧠 AI Health Summary</h3>
        <p>
          Based on your inputs and metrics, your overall health appears{" "}
          <strong>Stable</strong>. Maintain hydration and a consistent sleep
          schedule.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Tracker;
