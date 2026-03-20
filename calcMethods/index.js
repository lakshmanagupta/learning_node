const calculateAdd = require("./add.js"); // this will import the add.js and execute it
const calculateMultiply = require("./multiply.js"); // this will import the multiply.js and execute it

module.exports = {
  calculateSum: calculateAdd,
  calculateMultiplication: calculateMultiply,
};
