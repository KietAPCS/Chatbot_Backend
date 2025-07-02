# SubmitUniverse Backend

This is the backend for a chatbot service built with Node.js, Express, and powered by Google Gemini 1.5 Flash AI model.

## Project Structure

```
.
├── .env
├── package.json
├── test-api.js
└── src
    ├── index.js
    ├── controllers
    │   └── chatController.js
    └── routes
        └── chatRoutes.js
```

## Features

- Chat API powered by Google Gemini 1.5 Flash AI model
- Session-based chat history management
- In-memory chat sessions with conversation context
- RESTful API endpoints for chat interactions
- CORS enabled for cross-origin requests
- JSON request/response handling

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone <your-repo-url>
   cd backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:

   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=3000
   ```

### Running the Server

```sh
npm start
```

The server will run on the port specified in your `.env` file or default to `3000`.

### API Endpoints

#### Chat Endpoints

- **GET /api/chat/**  
  Welcome message for the chat API.  
  **Response:** `{ "message": "Welcome to the chat API!" }`

- **POST /api/chat/**  
  Send a chat message to the Gemini AI chatbot.  
  **Body:** `{ "message": "your message", "sessionId": "optional-session-id" }`  
  **Response:** `{ "message": "AI response", "sessionId": "session-id" }`

- **POST /api/chat/clear-chat**  
  Clear chat history for a specific session.  
  **Body:** `{ "sessionId": "your-session-id" }`  
  **Response:** `{ "message": "Chat history cleared" }`

#### Example Usage

```bash
# Send a chat message
curl -X POST http://localhost:3000/api/chat/ \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, how are you?", "sessionId": "user123"}'

# Clear chat history
curl -X POST http://localhost:3000/api/chat/clear-chat \
  -H "Content-Type: application/json" \
  -d '{"sessionId": "user123"}'
```

## Deployment

This app is ready for deployment on cloud platforms like Render, Heroku, or Vercel.

### Environment Variables for Deployment

- `GEMINI_API_KEY`: Your Google Gemini API key
- `PORT`: Server port (optional, defaults to 3000)

**Note:** Never commit your `.env` file to version control. Set environment variables directly in your deployment platform's dashboard.

## Technology Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **AI Model:** Google Gemini 1.5 Flash
- **Dependencies:**
  - `@google/generative-ai` - Google Generative AI SDK
  - `express` - Web framework
  - `cors` - Cross-origin resource sharing
  - `dotenv` - Environment variable management
  - `multer` - File upload handling (future use)

## License

ISC

---

**Author:**
Phan Tuan Kiet
