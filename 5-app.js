const names = require("./1-names");
const sayHi = require("./2-utils");
const data = require("./3-Alternative-export");
require("./4-mind-grenade");

console.log(data);
sayHi("susan");
sayHi(names.tony);
sayHi(names.peter);
