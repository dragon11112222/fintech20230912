var fs = require("fs");

console.log("first func");
var result = fs.readFileSync("./test.txt", "utf8");
console.log(result);
console.log("마지막기능");
