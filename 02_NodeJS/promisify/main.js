const fs = require("fs");
const {promisify} = require("es6-promisify");
const readFile = promisify(fs.readFile);

blabla();

function blabla() {
    init().then(res => {
    }).catch(err => {
    });
}

// http.get("/api/contact").then(contacts => {
// });
//
// http.get("/api/contact").flatMap(c=>c)

async function init() {
    try {
        const [text1, text2] = await Promise.all([
            readFile("main.js"),
            readFile("yarn.lock")
        ]);

        return text1.length + text2.length;
    }
    catch(err) {
        //
        //  Cleanup
        //

        throw err;
    }
}

