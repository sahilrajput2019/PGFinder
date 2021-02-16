const express = require("express");
const http = require("http");
const morgran = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is Up and Runnig on Port ${PORT}`));

