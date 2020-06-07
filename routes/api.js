const db = require("../models");
const express = require("express");
const router = express.Router();

// find
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then((workout) => {
        res.json(workout);
    })
    .catch((err) => {
        res.json(err);
    });
});

// create
router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
    .then((workout) => {
        res.json(workout);
    })
    .catch((err) => {
        res.json(err);
    });
});

// update
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id)
    .then((workouts) => {
        res.json(workouts);
    })
    .catch((err) => {
        res.json(err);
    });
});

// find
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then((workouts) => {
        res.json(workouts);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;