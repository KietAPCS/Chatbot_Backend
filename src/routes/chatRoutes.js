const express = require("express");
const chatController = require("../controllers/chatController"); // Adjust the path if needed!
const router = express.Router();

// Define the routes related to chat functionality
router.post("/", chatController.handleChat);
router.post("/clear-chat", chatController.handleClearChat);
router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the chat API!" });
});

module.exports = router;
