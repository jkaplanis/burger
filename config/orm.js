const connection = require("./connection.js");

// ORM
let orm = {
  selectAll: (tableInput, cb) => {
    const queryString = "SELECT * FROM ??";

    connection.query(queryString, [tableInput], (err, data) => {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },

  insertOne: (tableInput, newRowData, cb) => {
    const queryString = "INSERT INTO ?? SET ?";
    const values = [tableInput, newRowData];

    connection.query(queryString, values, (err, data) => {
      if (err) {
        throw err;
      }
      cb(data);
    });
  },

  updateOne: (tableInput, updateValues, condition, cb) => {
    const queryString = "UPDATE ?? SET ? Where ?";
    const values = [tableInput, updateValues, condition];

    connection.query(queryString, values, (err, data) => {
      if (err) {
        throw err;
      }
      cb(data);
    });
  }
};

module.exports = orm;
