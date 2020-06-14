const orm = require("../config/orm.js");

// Models
const burger = {
  selectAll: cb => {
    orm.selectAll("burgers", res => {
      cb(res);
    });
  },

  insertOne: (newBurger, cb) => {
    orm.insertOne("burgers", newBurger, res => {
      cb(res);
    });
  },

  updateOne: (burgerData, criteria, cb) => {
    orm.updateOne("burgers", burgerData, criteria, res => {
      cb(res);
    });
  },

  deleteOne: (criteria, cb) => {
    orm.deleteOne("burgers", criteria, res => {
      cb(res);
    });
  }
};

module.exports = burger;
