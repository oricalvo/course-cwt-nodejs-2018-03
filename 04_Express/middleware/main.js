const express = require("express");

const app = express();

app.get("/data", async function(req, res, next) {
    //res.send({ok: true});
    //next();
    throw new Error("Ooops");

    // try {
    //     await delay(1000);
    //     throw new Error("Ooops");
    // }
    // catch(err) {
    // }
});

app.use(function(req, res) {
    res.send({
        status: 404,
    });
});

app.use(function(err, req, res, next) {
    res.send({
        errorCode: 123,
        internalMessage: err.message,
    });
});

app.listen(3000, function() {
    console.log("Server is running");
});