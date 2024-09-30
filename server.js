require("dotenv").config();

const express = require("express");
const pool = require("./db");
const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/bill", (req, res) => {
  req;
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
