const path = require("path");
require("./lib");

// for(var key in require.cache) {
//     console.log(key);
// }

console.log("Delete from cache");
const depFullPath = path.resolve(__dirname, "./lib.js");
console.log(depFullPath);
delete require.cache[depFullPath];

require("./lib");

