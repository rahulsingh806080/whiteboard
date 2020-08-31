const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
const port = process.env.PORT || 5000;
// start express server on port 5000
app.listen(port, () => {
  console.log("server started on port 5000");
});

// const server = app.listen(5000);

// const socket = require("socket.io");
// const io = socket(server);

// var socket = require("socket.io-client")("http://localhost:5000");
