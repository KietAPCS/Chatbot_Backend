require("dotenv").config();
const express = require("express");
const cors = require("cors");
const chatRoutes = require("./routes/chatRoutes");

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Debug middleware to log request body
app.use((req, res, next) => {
  console.log("Request method:", req.method);
  console.log("Request URL:", req.url);
  console.log("Content-Type:", req.get("Content-Type"));
  console.log("Request body:", req.body);
  next();
});

// Mount routes under the '/api' path
app.use("/api/chat", chatRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
