const db = require("../models");
module.exports = function (app) {
    // routes
    app.get("/workout", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/exercise", (req, res) => {
        db.User.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post("/submit", ({
        body
    }, res) => {
        db.Workout.create(body)
            .then(({
                _id
            }) => db.User.findOneAndUpdate({}, {
                $push: {
                    workout: _id
                }
            }, {
                new: true
            }))
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/populateduser", (req, res) => {
        db.Workout.find({})
            .populate("notes")
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
};
