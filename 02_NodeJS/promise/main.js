const fs = require("fs");

fs.readFile("main.js", function(err, buf) {
    if(err) {
        console.error(err);
        return;
    }

    console.log(buf.toString());
});

readFile("main.js").then(function(text) {
    console.log(buf);
}).catch(function(err) {
    console.error(err);
});

function readFile(filePath) {
    return new Promise((resolve,reject)=> {

        fs.readFile(filePath, function(err, buf) {
            if(err) {
                reject(err);
                return;
            }

            resolve(buf.toString());
        });

    });
}

function doSomething(callback) {
    internal(function(err) {
        if(err) {
            callback(err);
            return;
        }

        anotherThing(callback);
    })
}

function doSomething() {
    return internal().then(anotherThing);
}
