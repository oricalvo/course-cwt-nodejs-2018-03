"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get("/api/contact", (req, res) => {
    res.json({});
});
app.listen(3000);
//# sourceMappingURL=main.js.map