# Personalized Joke Generator

A dynamic web application built with **Node.js** that fetches real-time data from a Public API and personalizes it for the user. This project demonstrates the flow of data from an external REST API to a server-side rendered frontend.

## 🚀 Features
- **Public API Integration:** Asynchronously fetches jokes from [JokeAPI](https://sv443.net/jokeapi/v2/).
- **Dynamic Personalization:** Injects user-provided data into API strings before rendering.
- **Modern UI/UX:** Styled with **Bootstrap 5** featuring a mobile-responsive "Glassmorphism" design.
- **Robust Error Handling:** Implements `try-catch` blocks to handle API downtime or network failures gracefully.

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **API Client:** Axios (for promise-based HTTP requests)
- **View Engine:** EJS (Embedded JavaScript templates)
- **Styling:** Bootstrap 5, Google Fonts

## 🧠 API Knowledge Applied
In this project, I implemented several key API concepts:
1. **Endpoint Consumption:** Managed GET requests to the `https://v2.jokeapi.dev/` endpoint.
2. **Query Parameters:** Filtered results using `?type=single` to ensure data consistency.
3. **Async/Await Pattern:** Used non-blocking code to ensure the server remains performant while waiting for external data.
4. **Data Parsing:** Accessed nested JSON properties (`response.data.joke`) to extract specific content for the UI.

