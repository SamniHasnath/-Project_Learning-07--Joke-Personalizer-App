const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Set EJS
app.set("view engine", "ejs");

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// Handle form submission
app.post("/get-joke", async (req, res) => {
  const name = req.body.name;

  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");

    let joke = response.data.joke;

    // Personalize joke
    joke = `${name}, ${joke}`;

    res.render("result", { joke, name });

  } catch (error) {
    console.log(error.message);
    res.send("Error fetching joke API");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});