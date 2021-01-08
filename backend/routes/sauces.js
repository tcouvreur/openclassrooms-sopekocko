/* global bodyParser, render */

const Sauce   = require("../controllers/sauce.js");
const express = require("express");
const router  = express.Router();

// router.post("/", bodyParser.json(), (req, res, next) => {
//   // sauce = new Sauce();
// });

router.get("/:id", (req, res, next) => {
  render(res, new Sauce({id:req.params.id}).getAllInfos());
  // render(res, {error:{status:401,msg:"ceci est un message"}});
});

// router.put('/:id', (req, res, next) => {
//   sauce = new Sauce();
// });

// router.delete('/:id', (req, res, next) => {
//   sauce = new Sauce();
// });

// router.get('/' +'', (req, res, next) => {
//   sauce = new Sauce();
// });

module.exports = router;