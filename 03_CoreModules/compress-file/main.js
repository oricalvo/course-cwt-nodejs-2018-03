const zlib = require("zlib");
const fs = require("fs");

main();

async function main() {
    console.log("before");
    await compress("main.js", "main.js.gz");
    console.log("after");
}

function compress(source, target) {
    return new Promise((resolve,reject)=> {
        function onError(err) {
            reject(err);
        }

        fs.createReadStream(source)
            .on("error", onError)
            .pipe(zlib.createGzip())
            .on("error", onError)
            .pipe(fs.createWriteStream(target))
            .on("error", onError)
            .on("finish", function () {
                console.log("finish");
                resolve();
            });
    });
}
