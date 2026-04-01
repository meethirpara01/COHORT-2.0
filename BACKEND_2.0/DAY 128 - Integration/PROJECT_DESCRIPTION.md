# AI-Powered Chat Application - Full Stack Project

## Project Overview
    A comprehensive, full-stack AI chat application built with modern web technologies that integrates multiple LLM providers with real-time internet search capabilities. The platform enables users to have intelligent conversations with AI assistants that can access current information, send emails, and provide context-aware responses.

---

## Key Features & Functionality

### Core Features
- **Multi-Model AI Integration**: Seamless integration with Google Gemini 2.5 Flash Lite and Mistral AI models
- **Real-Time Chat Interface**: Live messaging with instant AI responses and automatic chat title generation
- **Internet Search Integration**: Tavily search API integration for up-to-date information retrieval
- **Email Capabilities**: Built-in email sending functionality through AI-powered tools
- **User Authentication**: Secure JWT-based authentication with email verification
- **Chat Persistence**: MongoDB-backed persistent storage of conversations and message history
- **Real-Time Communication**: Socket.io integration for real-time updates and bidirectional communication
- **Dark Mode Support**: Theme switching functionality with React Context API

---

## Technical Architecture

### Backend Stack
- **Framework**: Express.js (Node.js)
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT tokens with bcryptjs password hashing
- **Real-Time**: Socket.io server
- **Email Service**: Nodemailer for email delivery
- **API Documentation**: Express-validator for input validation
- **Middleware**: CORS, Morgan logging, Cookie-parser

### Frontend Stack
- **Framework**: React 19 with Vite build tool
- **State Management**: Redux Toolkit (@reduxjs/toolkit)
- **HTTP Client**: Axios for API requests
- **Real-Time**: Socket.io-client for WebSocket communication
- **Styling**: Tailwind CSS with custom theming
- **Router**: React Router v7 for SPA navigation
- **Markdown**: React-markdown with GFM support for formatted AI responses
- **Linting**: ESLint configuration

### AI/ML Services
- **LangChain**: Orchestration framework for AI agent management
- **Google Generative AI**: Gemini 2.5 Flash Lite model integration
- **Mistral AI**: Mistral Small model integration
- **Tavily Search**: Internet search and current information retrieval
- **Zod**: TypeScript-first schema validation for tool definitions

---

## Project Structure

### Backend (`/Backend`)
```
src/
├── app.js                 # Express app setup with middleware configuration
├── server.js              # Server entry point with Socket.io initialization
├── config/
│   └── database.js        # MongoDB connection configuration
├── controllers/
│   ├── auth.controller.js # User registration, login, email verification
│   └── chat.controller.js # Chat and message management
├── middlewares/
│   └── auth.middleware.js # JWT authentication middleware
├── models/
│   ├── user.model.js      # User schema and password hashing
│   ├── chat.model.js      # Chat conversation model
│   └── message.model.js   # Message model with role tracking
├── routes/
│   ├── user.routes.js     # Authentication endpoints
│   └── chat.routes.js     # Chat operation endpoints
├── services/
│   ├── ai.service.js      # AI response generation and chat titles
│   ├── tavily.service.js  # Internet search integration
│   └── mail.service.js    # Email sending functionality
├── sockets/
│   └── server.socket.js   # WebSocket event handlers
└── validators/
    └── auth.validator.js  # Input validation schemas
```

### Frontend (`/Frontend`)
```
src/
├── main.jsx               # React entry point
├── app/
│   ├── App.jsx           # Root component with router setup
│   ├── routes/
│   │   └── app.routes.jsx # Route definitions
│   └── store/
│       └── app.store.js   # Redux store configuration
└── features/
    ├── auth/
    │   ├── components/
    │   │   └── Protected.jsx      # Private route wrapper
    │   ├── pages/
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   └── Verify.jsx         # Email verification page
    │   ├── services/
    │   │   └── auth.api.js        # Auth API calls
    │   ├── hook/
    │   │   └── useAuth.js         # Custom auth hook
    │   └── auth.slice.js          # Redux auth slice
    └── chat/
        ├── components/
        │   └── ChatHome.jsx       # Main chat interface
        ├── pages/
        │   └── Dashboard.jsx      # Chat dashboard
        ├── services/
        │   ├── chat.api.js        # Chat API calls
        │   └── chat.socket.js     # WebSocket integration
        ├── hook/
        │   ├── useChat.js         # Custom chat hook
        │   ├── useTheme.js        # Theme management hook
        │   ├── ThemeContext.js    # Theme context provider
        │   └── ThemeProvider.jsx  # Theme wrapper component
        └── chat.slice.js          # Redux chat slice
```

---

## API Endpoints

### Authentication Routes (`/api/auth`)
- **POST** `/register` - User registration with email verification
- **POST** `/login` - User login with JWT token issuance
- **GET** `/verify-email` - Email verification via token

### Chat Routes (`/api/chats`)
- **POST** `/message` - Send message and get AI response
- **GET** `/` - Retrieve all user chats
- **GET** `/:chatId/messages` - Fetch messages for specific chat
- **DELETE** `/delete/:chatId` - Delete chat conversation

---

## Key Implementation Details

### Authentication Flow
1. User registers with username, email, and password
2. Password hashed using bcryptjs
3. Email verification token sent via Nodemailer
4. JWT token generated upon successful login
5. Protected routes validated with auth middleware

### Chat Workflow
1. User sends message via frontend
2. If new chat: AI generates descriptive title using Mistral
3. Message stored in MongoDB with user association
4. Message history retrieved from database
5. LangChain agent processes conversation with AI toolkit
6. AI can utilize:
   - **Search Internet Tool**: Tavily API for current information
   - **Send Email Tool**: Nodemailer for user-requested emails
7. AI response generated and stored
8. Real-time updates sent via Socket.io

### AI Agent Architecture
- **Base Model**: Mistral AI with agentic reasoning
- **Tools**: Dynamic tool binding with Zod schema validation
- **System Prompts**: Context-aware instructions for different tasks
- **Message Management**: Maintains conversation history for context

---

## Security & Best Practices
- ✅ JWT-based stateless authentication
- ✅ Bcryptjs password hashing before storage
- ✅ CORS configuration for frontend-backend communication
- ✅ Environment variables for sensitive credentials
- ✅ Request validation with express-validator
- ✅ Protected routes with authentication middleware
- ✅ User isolation in chat queries (user-filtered database queries)

---

## Development Workflow

### Backend Commands
```bash
npm run dev    # Start development server with Nodemon hot-reload
```

### Frontend Commands
```bash
npm run dev    # Start Vite development server
npm run build  # Build optimized production bundle
npm run lint   # Run ESLint for code quality
npm run preview # Preview production build locally
```

---

## Technologies & Dependencies Summary

| Category | Technologies |
|----------|--------------|
| **Backend Runtime** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **AI/ML** | LangChain, Google Generative AI, Mistral AI |
| **Search** | Tavily API |
| **Real-time Communication** | Socket.io |
| **Frontend Framework** | React 19, Vite |
| **State Management** | Redux Toolkit |
| **Styling** | Tailwind CSS |
| **Security** | JWT, bcryptjs |
| **Email** | Nodemailer |
| **Validation** | Express-validator, Zod |

---

## Learning Outcomes & Skills Demonstrated

- Full-stack JavaScript/Node.js development
- RESTful API design and implementation
- MongoDB database design and optimization
- JWT authentication and authorization
- Integration with third-party AI APIs
- Real-time communication with WebSockets
- React component architecture and state management
- Redux for global state management
- Environment configuration and security practices
- Error handling and validation patterns
- User experience design (chat interface, theming)
- Email integration and background tasks

---

## Deployment Considerations

- Backend can be deployed on: AWS EC2, Railway, Render, Heroku
- Frontend can be deployed on: Vercel, Netlify, AWS S3 + CloudFront
- Database: MongoDB Atlas (cloud) or self-hosted MongoDB
- Environment variables required for: JWT_SECRET, GEMINI_API_KEY, MISTRAL_API_KEY, TAVILY_API_KEY, email credentials

---

## Future Enhancement Opportunities

- File upload support for chat context
- Chat export/sharing functionality
- User profiles and preferences
- Rate limiting and usage analytics
- Conversation branching and variations
- Model selection UI for users
- Streaming responses for faster UX
- Advanced conversation analytics
