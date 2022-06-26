const mongoose = require('mongoose');

//--User Schema or Document Structure:
const userSchema = mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true,
        trim: true,
        minlength: 3
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
},{
    timestamp: true
}) 

//--Create User Model
const Users = new mongoose.model("tbl_users", userSchema);

module.export = Users;