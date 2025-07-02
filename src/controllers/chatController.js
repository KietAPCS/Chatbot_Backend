// controllers/chatController.js
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("❌ GEMINI_API_KEY is not set!");
  throw new Error("GEMINI_API_KEY environment variable is required");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const chatSessions = {};

async function generateResponse(userInput, sessionId) {
  try {
    // Get or initialize chat history for this session
    if (!chatSessions[sessionId]) {
      chatSessions[sessionId] = [];
    }

    const chatHistory = chatSessions[sessionId];

    const generationConfig = {
      temperature: 0.9,
      maxOutputTokens: 2048,
    };

    if (chatHistory.length === 0) {
      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: userInput }] }],
        generationConfig,
      });

      const response = result.response.text();

      chatHistory.push({ role: "user", parts: [{ text: userInput }] });
      chatHistory.push({ role: "model", parts: [{ text: response }] });

      return response;
    } else {
      chatHistory.push({ role: "user", parts: [{ text: userInput }] });

      const result = await model.generateContent({
        contents: chatHistory,
        generationConfig,
      });

      const response = result.response.text();

      chatHistory.push({ role: "model", parts: [{ text: response }] });

      return response;
    }
  } catch (error) {
    console.error("Error generating response:", error);
    return "Sorry, I encountered an error. Please try again.";
  }
}

async function handleChat(req, res) {
  try {
    console.log("handleChat called");
    console.log("req.body:", req.body);
    console.log("req.headers:", req.headers);

    // Check if req.body exists
    if (!req.body) {
      return res.status(400).json({ error: "Request body is missing" });
    }

    const { message, sessionId } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const chatSessionId = sessionId || "default";

    const response = await generateResponse(message, chatSessionId);

    res.json({
      message: response,
      sessionId: chatSessionId,
    });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// API endpoint to clear chat history
function handleClearChat(req, res) {
  const { sessionId } = req.body;

  if (sessionId && chatSessions[sessionId]) {
    chatSessions[sessionId] = [];
    res.json({ message: "Chat history cleared" });
  } else {
    res.status(400).json({ error: "Invalid session ID" });
  }
}

module.exports = {
  handleChat,
  handleClearChat,
};
