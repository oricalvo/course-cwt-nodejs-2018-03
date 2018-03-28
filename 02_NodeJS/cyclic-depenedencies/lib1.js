const lib2 = require("./lib2");

function run() {
    console.log("lib1");
}

// module.exports = {
//     run,
// };

exports.run = run;

