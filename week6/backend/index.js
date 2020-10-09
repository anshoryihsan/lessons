const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./src/Helpers/db");
const router = require("./src/Routes");
const { login } = require("./src/Controllers/Auth");
//midleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (request, response) => {
  response.send("hello world");
});

app.use(router())

//GET METHOD

app.listen(8000, () => {
  console.log("server running on port 8000");
});
