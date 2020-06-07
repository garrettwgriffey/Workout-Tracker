const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day:{
        type: Date,
        default: () => new Date() 
    },
    exercises: [
        {
            type: String,
            name: {
                type: String, 
                required: true
            },
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number
        }
    ]
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;