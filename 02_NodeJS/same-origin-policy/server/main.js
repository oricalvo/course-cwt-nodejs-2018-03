const express = require("express");
const request = require("request");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "../client")));

app.use(function(req, res, next) {
    if(req.url.startsWith("/api/data")){
        req.pipe(request('http://localhost:3000/api/data')).pipe(res);
    }
    else {
        next();
    }
});

app.listen(8080, function() {
    console.log("Server is running");
});
