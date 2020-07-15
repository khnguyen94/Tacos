// Import all dependencies
var express = require("express");

// Initialize variables
// Create a new instance of the express server, name it "app"
const app = express();

// Create a port
const port = 3000;

// Create a generic get route
// Params: 1) route, 2) middleware, and 3) callback (req, res)
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Listen on port 3000
app.listen(port, () => {
  console.log("Listening on port: " + port);
});
