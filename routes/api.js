const db = require("../models");
const express = require("express");
const router = express.Router();

// find
router.get("/workouts", (req, res) => {
    db.Workout.find()
    .then((workout) => {
        res.json(workout);
    })
    .catch((err) => {
        res.json(err);
    });
});

// create
router.post("/workouts", (req, res) => {
    db.Workout.create({})
    .then((workout) => {
        res.json(workout);
    })
    .catch((err) => {
        res.json(err);
    });
});

// update
router.put("/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id,
        {$push:{exercises:req.body}}
        )
    .then((workouts) => {
        res.json(workouts);
    })
    .catch((err) => {
        res.json(err);
    });
});

// find
router.get("/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7)
    .then((workouts) => {
        res.json(workouts);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;