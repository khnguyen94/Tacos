// Import all dependencies
const orm = require("../config/orm");

// Create a taco object using the imported orm
let taco = {
  all: function (cb) {
    orm.all("tacos", function (res) {
      cb(res);
    });
  },
  create: function (name, cb) {
    orm.create("tacos", ["taco_name", "devoured"], [name, false], cb);
  },
  update: function (id, cb) {
    // Create condition string variable
    let condition = "id=" + id;

    orm.update("tacos", { devoured: true }, condition, cb);
  },
};

// Export taco object
module.exports = taco;
