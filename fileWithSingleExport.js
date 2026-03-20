console.log("I am inside file2.js");

calculateSum = (a = 0, b = 0) => a + b;
module.exports = calculateSum; // this will export the calculateSum function to be used in other files like file1.js
