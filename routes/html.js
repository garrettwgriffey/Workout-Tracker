const express = require("express");
const path = require("path");
const router = express.Router();


    // routes
    router.get("/", (req, res) => {
        res.sendFile(path.join(__dirname,"../public/html/index.html"));
    });
    router.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname,"../public/html/stats.html"));
    });
    router.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname,"../public/html/exercise.html"));
    });



module.exports = router;

