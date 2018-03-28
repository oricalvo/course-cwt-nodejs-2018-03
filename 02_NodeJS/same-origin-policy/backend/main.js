const express = require("express");

const app = express();

app.get("/api/data", function(req, res) {
    res.json({data: 123});
});

app.listen(3000, function() {
    console.log("Server is running");
});
