import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Load Gemini API Key
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// ✅ Fallback if .env is missing key
if (!GEMINI_API_KEY) {
  console.warn("⚠️ GEMINI_API_KEY not found in .env");
}

// ✅ API Route for Chat
app.post("/api/chat", async (req, res) => {
  try {
    const { message, type } = req.body;

    const systemPrompt = {
      MBBS: "You are a general physician AI assistant. Give helpful but safe suggestions — not prescriptions.",
      BAMS: "You are an Ayurvedic AI assistant. Suggest natural home remedies using Ayurveda principles.",
      BDS: "You are a dental AI assistant. Give oral hygiene advice, not medical prescriptions.",
    };

    const prompt = `${systemPrompt[type] || "You are a health assistant."} User said: ${message}`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
      res.json({ reply: data.candidates[0].content.parts[0].text });
    } else {
      console.error("❌ Gemini API Error:", data);
      res.status(500).json({ reply: "⚠️ AI model did not respond properly." });
    }
  } catch (error) {
    console.error("🔥 Server Error:", error);
    res.status(500).json({ reply: "⚠️ Internal Server Error." });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`⚡ HealthAI backend running on http://localhost:${PORT}`)
);
