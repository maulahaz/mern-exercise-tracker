//--Import all depedencies:
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

//--Start Express server:
const app = express();

//--Configure ENV file & Require Connection file:
dotenv.config();

//--Connect DB:
require('./db/connect.js');

//--Port:
const port = process.env.PORT || 5000;

//--This method : Use to get data from frontend:
app.use(cors());
app.use(express.json());

//--Routing:
const UsersRouter = require("./routes/UsersRoute");
const ExercisesRouter = require("./routes/ExercisesRoute");
app.use('/users',UsersRouter);
app.use('/exercises',ExercisesRouter);

//--Run the server:
app.listen(port, ()=>{
    console.log('Server is listening on port...'+port);
})