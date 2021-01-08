const express = require("express");
const helmet = require("helmet");
const app = express();
require("dotenv").config();

module.exports = app;

global.render=require("./backend/controllers/render");
// global.bodyParser = require("body-parser");

app.use(helmet());

// app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log('Requête reçue !');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next;
});

app.use((req, res, next) => {
  res.json({
    message: 'Objet créé ! :)'
  });
});

const sauces = require("./backend/routes/sauces");
app.use("/api", sauces);

// process.env.SECRET_KEY