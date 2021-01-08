const express = require("express");
const helmet = require("helmet");
const app = express();
require("dotenv").config();

global.render=require("./controllers/render");
global.bodyParser = require("body-parser");

app.use(helmet());

// app.use(bodyParser.json());

// app.post('/api/stuff',  (req, res) => {
//   console.log(req.body);
//   res.status(201).json({
//     message: 'Objet créé ! :)'
//   });
// });

const sauces = require("./routes/sauces");
app.use("/api", sauces);

app.listen(process.env.PORT || 3001);
console.log("listen");
// process.env.SECRET_KEY