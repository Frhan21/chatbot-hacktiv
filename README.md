<p align="center">
  <img src="https://img.shields.io/badge/Express.js-Chatbot_API-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Node.js-v18%2B-green?style=flat-square" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=flat-square" />
</p>

# 🤖 Chatbot Hacktiv

A lightweight API built with Express.js that integrates with the Gemini API to power a simple, extensible chatbot backend. Designed for developers seeking to experiment with conversational AI features via a Node.js-powered REST interface.

---

## 📚 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- 🌐 RESTful chatbot API powered by [Gemini](https://deepmind.google/technologies/gemini/)
- ⚡ Simple Express.js server setup
- 🔐 API key management (via `.env`)
- 🛠️ Ready for customization or expansion

---

## 🧰 Tech Stack

- **Language**: JavaScript (Node.js)
- **Framework**: Express.js
- **External API**: Gemini API

---

## 🛠️ Installation

### Prerequisites

- Node.js v18 or higher
- NPM or Yarn
- A valid Gemini API key

### Setup Steps
1. Clone the repository
```bash
git clone https://github.com/Frhan21/chatbot-hacktiv.git
cd chatbot-hacktiv
```
2. Install dependencies
```bash
npm install
```
3. Configure environment variables
```bash
cp .env.example .env
```
Add your Gemini API key to .env
`API_KEY=your_api_key`
4. Start the server
```bash
npm start
```
## 🚀 Usage
After the server starts, the API will be available at: 
```bash
http://localhost:3000
```
To send a chatbot prompt
```bash
POST /chat
Content-Type: application/json

{
  "message": "Hello, who are you?"
}
```
## Example Response 
```json
{
  "output" : "Hi! I'm your chatbot powered by Gemini."
}
```

## 📡 API Endpoints
| Method | Endpoint | Description                                     |
| ------ | -------- | ----------------------------------------------- |
| POST   | `/generate-text`  | Gets a reply for text prompt |
| POST | `/generate-image`| Gets describe from image|
| POST | `/generate-audio` | Get transcribe and analyse from audio |



# 🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request.
For major changes, discuss them in an issue first.

# 📄 License
This project is licensed under the [MIT License](https://chatgpt.com/g/g-DpRO2Y344-readme-builder/c/LICENSE).
