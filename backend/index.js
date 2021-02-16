// requiring packages
const express = require("express");
const http = require("http");
const morgran = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const server = http.createServer(app);

// DB Connection
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database Connection establsihed Successfully");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>
  console.log(`Server is Up and Runnig on Port ${PORT}`)
);
