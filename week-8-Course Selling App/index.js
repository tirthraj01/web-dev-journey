const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { createUserRoutes} = require("./user");
const { createCourseRoutes} = require("./course");
//Routing in express the express router 
const app = express();

createUserRoutes(app);

app.use(express());


app.listen(3000);
