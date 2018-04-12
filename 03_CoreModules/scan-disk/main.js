const fs = require("fs");
const {promisify} = require("util");
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const path = require("path");

let processFileCount = 0;

async function scanDir(root) {
    const items = await readdir(root);

    for (const item of items) {
        const itemPath = path.join(root, item);

        try {
            const info = await stat(itemPath);
            if (info.isDirectory()) {
                scanDir(itemPath)
            }
            else if (info.isFile()) {
                processFile(itemPath);
            }
        }
        catch (err) {
            //
            //  Ignore error
            //
            console.error(err.message);
        }
    }
}

function f(b) {
    b[0] = 123;
}

async function processFile(filePath) {
    ++processFileCount;

    try {
        const buf = Buffer.alloc(1000000);
        f(buf);

        console.log(processFileCount + " " + filePath);
        await delay(200);
    }
    finally {
        --processFileCount;
    }
}

function delay(ms) {
    return new Promise(resolve=>setTimeout(resolve, ms));
}

scanDir("c://");
