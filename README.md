# SubmitUniverse Backend

This is the backend for the SubmitUniverse project, built with Node.js, Express, and integrates with Google Gemini AI and Supabase.

## Project Structure

```
.
├── .env
├── package.json
└── src
    ├── app.js
    ├── controllers
    │   └── chatController.js
    └── routes
        └── chatRoutes.js
```

## Features

- Chat API powered by Google Gemini AI
- Session-based chat history
- Supabase integration
- Protected routes with authentication middleware

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
    ```
    GEMINI_API_KEY=your_gemini_api_key
    SUPABASE_PROJECT_URL=your_supabase_url
    SUPABASE_PROJECT_API_KEY=your_supabase_api_key
    SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
    FRONT_END_URL=your_frontend_url
    ```

### Running the Server

```sh
npm start
```

The server will run on the port specified in your `.env` file or default to `3000`.

### API Endpoints

- `POST /api/chat/`  
  Send a chat message.  
  **Body:** `{ "message": "your message", "sessionId": "optional-session-id" }`

- `POST /api/chat/clear-chat`  
  Clear chat history for a session.  
  **Body:** `{ "sessionId": "your-session-id" }`

## Deployment

- The app is ready for deployment on platforms like Render.
- Set environment variables in the Render dashboard (do not commit `.env`).

## License

ISC

---

**Author:**
Phan Tuan Kiet