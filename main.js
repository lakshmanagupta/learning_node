const codeFromSingleExportFile = require("./fileWithSingleExport.js"); // this will import the fileWithSingleExport.js and execute it
const codeFromMultipleExportFile = require("./fileWithMultipleExports.js"); // this will import the fileWithMultipleExports.js and execute it

var a = " Welcome to JavaScript! ";
var myName = "Lakshman";
var nodeMsg = "Let's start learning nodeJS";
var message = "Hello " + myName + " " + nodeMsg;
console.log(message);
// console.log(globalThis)// this will give you the global object in nodeJS/JS/everywhere as it is a latest standard in JS
console.log(globalThis === global); // this will return true as globalThis is the same as global in nodeJS

//using the imported code from fileWithMultipleExports.js
console.log(
  "Print everything what we got from fileWithMultipleExports",
  codeFromMultipleExportFile,
);
console.log("Name of the developer:", codeFromMultipleExportFile.nameofDev);
console.log(
  "Characteristics of the developer:",
  codeFromMultipleExportFile.charOfDev(),
);

//using the imported code from fileWithSingleExport.js
console.log(
  "Print everything what we got from fileWithSingleExport",
  codeFromSingleExportFile,
);
console.log(
  "Result of calculateSum function from fileWithSingleExport",
  codeFromSingleExportFile(20, 30),
);
