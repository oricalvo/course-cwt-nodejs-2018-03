const express = require("express");
const {getAllContacts} = require("./dal");
const {promisifyExpressApi} = require("./common");

const app = express();

app.get("/api/contact", promisifyExpressApi(async function(req, res) {
    const contacts = getAllContacts();
    return contacts;
}));

app.listen(3000, function() {
    console.log("Server is running");
});

