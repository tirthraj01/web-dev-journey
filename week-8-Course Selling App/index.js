const express = require('express');
const mongoose = require("mongoose");
const { userRouter} = require("./routes/user");
const { courseRouter} = require("./routes/course");
const { adminRouter} = require("./routes/admin")
//Routing in express the express router 
const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter)

async function main() {
    mongoose.connect("mongodb+srv://Tirthraj01:Y8yo3ELsOmlKnFht@cluster0.thsrevp.mongodb.net/");
    app.listen(3000);
    console.log(" listening to port ")
}

main()
