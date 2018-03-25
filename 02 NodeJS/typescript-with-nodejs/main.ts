import * as express from "express";

const app = express();

app.get("/api/contact", (req, res) => {
    res.json({});
});

app.listen(3000);

