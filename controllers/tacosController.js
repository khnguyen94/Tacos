// Import all dependencies
const express = require("express");

const router = express.Router();
const taco = require("../models/taco");

// Create a GET route for homepage
// Params: 1) route, 2) middleware, and 3) callback (req, res)
router.get("/", (req, res) => {
  res.redirect("/tacos");
});

// Create a GET route for all tacos
router.get("/tacos", function (req, res) {
  // Express callback response by calling taco
  taco.all(function (tacoData) {
    // Wrapper for orm.js that using MySQL query callback will return taco_data, render to index with handebar
    res.render("index", { taco_data: tacoData });
  });
});

// Create a POST route to add a taco
router.post("/tacos/create", function (req, res) {
  // takes the request object using it as input for burger.addBurger
  taco.create(req.body.taco_name, function (result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// Create a PUT route to update a taco
router.put("/tacos/:id", function (req, res) {
  taco.update(req.params.id, function (result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = router;
