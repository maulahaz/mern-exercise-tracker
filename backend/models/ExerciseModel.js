const mongoose = require('mongoose');

//--Exercise Schema or Document Structure:
const ExerciseSchema = mongoose.Schema({
    username:{type: String,required: true,},
    description:{type: String,required: true,},
    duration:{type: Number,required: true,},
    date:{type: Date,required: true,},
},{
    timestamp: true
});

//--Create Exercise Model
const Exercise = new mongoose.model("tbl_exercises", ExerciseSchema);

module.export = Exercise;