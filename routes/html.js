const path = require("path");
module.exports = function (app) {
    // routes
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname,"../public/html/index.html"));
    });
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname,"../public/html/stats.html"));
    });
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname,"../public/html/exercise.html"));
    });

};