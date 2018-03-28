const express = require("express");

const app = express();

app.use(express.static(__dirname));

app.get("/api/contact", function(req, res) {
    res.json({
        num: 3
    });
});

app.listen(3000, function() {
    console.log("Server is running 123");
});

