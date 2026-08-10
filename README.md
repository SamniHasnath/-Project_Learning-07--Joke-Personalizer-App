# 😂 Personalized Joke Generator

A web application built with **Node.js**, **Express.js**, and **EJS** that fetches jokes from a public API and personalizes them using user input. This project demonstrates how to consume external REST APIs, process JSON data, and display dynamic content in a server-side rendered application.

---

## 🚀 Features

- 😂 Fetches random jokes from a public API
- ✏️ Personalizes jokes using user-provided information
- 🌐 Real-time API integration
- ⚡ Asynchronous data fetching with Axios
- 🎨 Modern responsive UI with Bootstrap 5
- 📱 Mobile-friendly design
- 🛡️ Error handling for API failures and network issues

---
<img width="622" height="483" alt="image" src="https://github.com/user-attachments/assets/16b5a71c-8566-472b-91a9-4a83f4d642cc" />
![Uploading image.png…]()


## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Frontend
- EJS
- Bootstrap 5
- HTML5
- CSS3

### API Integration
- Axios
- JokeAPI

---

## 📂 Project Structure

```text
personalized-joke-generator/
│
├── server.js
├── package.json
│
├── views/
│   ├── index.ejs
│   └── result.ejs
│
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/personalized-joke-generator.git
cd personalized-joke-generator
```

### Install Dependencies

```bash
npm install
```

### Start Application

```bash
node server.js
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 🎮 How It Works

1. User enters their name or custom text.
2. The server sends a request to JokeAPI.
3. A random joke is fetched from the API.
4. The joke content is personalized using the user's input.
5. The customized joke is displayed on the webpage.

---

## 🌐 API Concepts Used

This project demonstrates several important API concepts:

- Making HTTP GET requests
- Consuming REST APIs
- Working with JSON responses
- Using query parameters
- Async/Await programming
- Error handling with Try-Catch
- Data parsing and rendering

### Example Endpoint

```text
https://v2.jokeapi.dev/joke/Any?type=single
```

---

## 📚 Learning Outcomes

Through this project, I learned:

- API integration with Axios
- Express.js routing
- Server-side rendering with EJS
- Handling asynchronous operations
- Processing JSON data
- Error handling strategies
- Building responsive web interfaces

---

## 🎯 Project Goal

The goal of this project is to understand how external APIs communicate with backend applications and how retrieved data can be processed, customized, and displayed dynamically to users.

---

## 👩‍💻 Author

**N. F. Samni Hasnath**

Developed as a learning project to practice API integration, asynchronous programming, and full-stack web development concepts.

---

## ⭐ License

This project is open-source and available for learning, modification, and personal use.
