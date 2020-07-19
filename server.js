// Import all dependencies
const express = require("express");

// Initialize variables
// Create a new instance of the express server, name it "app"
const app = express();

// Create a port
const port = 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/tacosController.js");

app.use(routes);


// Listen on port 3000
app.listen(port, () => {
  console.log("Listening on port: " + port);
});
