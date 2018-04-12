const EventEmitter = require("events");
const fs = require("fs");

const event = new EventEmitter();

//const stream = fs.createReadStream("main2.js");

event.on("data", function(buf) {
    console.log(buf.toString());
});

setTimeout(function() {
    event.emit("error", new Error("OOOps"));
}, 2000);

setInterval(function() {
    console.log("Tick");
}, 1000);

// const file = new EventEmitter();
//
// file.on("data", function() {
// });
