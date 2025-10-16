
# HealthAI Backend (GPT-3.5)

This is a minimal Node + Express backend for HealthAI that exposes a single endpoint:

POST /chat
Body: { userId, speciality, question }

It forwards the question to OpenAI's **gpt-3.5-turbo** model and returns the assistant's reply.

## Setup

1. Copy `.env.example` to `.env` and set your OpenAI API key:
   OPENAI_API_KEY=sk-...

2. Install dependencies:
   npm install

3. Start the server:
   node server.js

The server will run on http://localhost:4000 by default.
