const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

const url = process.env.MONGOLAB_URI
  ? process.env.MONGOLAB_URI
  : "mongodb://localhost/cashback";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
