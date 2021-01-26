const express = require("express");

const dbRouter = require("../data/seeds/dbRouter");

const server = express();

server.use(express.json());

server.use("/api/cars", dbRouter);

module.exports = server;