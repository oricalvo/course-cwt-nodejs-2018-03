const zlib = require("zlib");
const fs = require("fs");

fs.createReadStream("main.js")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("main.js.gz"));
