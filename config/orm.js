// Import all dependencies
const connection = require("./connection");

// Middleware Functions
// Assists in formatting SQL queries in proper SQL format and syntax
// A middleware function that prints question marks, used in creating mysql query string
const printQuestionMarks = (num) => {
  // Create an array variable
  let arr = [];

  // For loop that takes in num, pushes an amount of ?s into arr that is equal to num value
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  // Return the arr as a string
  return arr.toString();
};

// A middleware function that turns objects into SQL query syntax, used in creating mysql query string
const objToSQL = (obj) => {
  // Create an array variable
  let arr = [];

  // For loop that takes in obj, for each key in that object,
  // Convert the key into the format: key + "=" + ob[key]
  // and push to the arr
  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  // Return the arr as a string
  return arr.toString();
};

// Create the ORM object with CRUD functionalities
// For each CRUD function, remember to include all necessary params for the function as well as a callback function
const orm = {
  // CREATE
  // params: table, cols, vals, cb
  // vals is an array of values we want to save to cols
  // cols are the columns we want to insert the values into
  create: (table, cols, vals, cb) => {
    // Define the query string
    // INSERT INTO table_name (cols) VALUES (?-val1, ?-val2, ?-val3, ...)
    let queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    // Run the query using the completed queryString and a call back function
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      // If no err, than run the call back function and pass into it the result
      cb(result);
    });
  },
  // READ
  // params: tableInput, cb
  all: (tableInput, cb) => {
    // Define the query string
    // SELECT * FROM table_name
    let queryString = "SELECT * FROM " + tableInput + ";";

    console.log(queryString);

    // Run the query using the completed queryString and a call back function
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      // If no err, than run the call back function and pass into it the result
      cb(result);
    });
  },
  // UPDATE
  // params: table, objColVals, condition, cb
  // objColVals are the columns and corresponding values that you want to update
  // EX: {taco_name: "Carne Asada Taco", devoured: true}
  update: (table, objColVals, condition, cb) => {
    // Define the query string
    // UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSQL(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      // If no err, than run the call back function and pass into it the result
      cb(result);
    });
  },
  // DELETE
  delete: (tableInput, cb) => {
    // Define the query string
    //
  },
};

// Export orm
module.exports = orm;
