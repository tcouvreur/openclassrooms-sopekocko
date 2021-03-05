const express = require("express");
const helmet = require("helmet");
const app = express();
const mongodb = require("mongodb");
const mongoose = require("mongoose");
require("dotenv").config();

module.exports = app;

mongoose.connect("mongodb+srv://thomas:N5fJTfJDlmrPmNw2@cluster0.knl64.mongodb.net/Cluster0?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// global.render=require("./controllers/render");
// global.bodyParser = require("body-parser");

app.use(helmet());

// app.use(bodyParser.json());

// app.use((req, res, next) => {
//   console.log("Requête reçue !");
//   next();
// });

// const sauces = require("./routes/sauces");
const user = require("./routes/user");
// app.use("/api", sauces);
app.use("/api/auth", user);

// process.env.SECRET_KEY