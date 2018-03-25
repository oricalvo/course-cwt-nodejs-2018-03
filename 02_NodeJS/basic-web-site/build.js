const child_process = require("child_process");
const path = require("path");
const fs = require("fs");
const opn = require("opn");

const command = process.argv[2];

if(command == "dev") {
    dev();
}
else {
    console.error("Unknown command: " + command);
}

function dev() {
    fs.readFile(path.resolve(__dirname, "config.json"), "utf8", function(err, data) {
        const config = JSON.parse(data);

        child_process.spawn(path.resolve("node_modules/.bin/http-server"), [
            "-p",
            config.port,
        ], {
            shell: true,
            stdio: "inherit",
        });

        opn(`http://localhost:${config.port}`);
    });
}

