const express = require("express");
const {UserModel , TodoModel} = require("./database");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "titu@123";
const app = express();
mongoose.connect("mongodb+srv://tirthchavan@cluster0.1uribss.mongodb.net/todo-tirth-1")

app.use(express.json());

app.post("/signup", async function(req,res){
    const email    = req.body.email;
    const password = req.body.password;
    const name     = req.body.name;

    await UserModel.create({
        email:email,
        password:password,
        name: name
    })

    res.json({
        message: "You are logged in"
    })

})

app.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email:email,
        password: password
    })

    console.log(user);

    if(user){
        const token = jwt.sign({
            id: user._id
        })
        res.json({
             token: token
        });
    }else{
        res.status(403).json({
            message: " incorrect info "
        })
    }

})

app.post("/todo", function(req,res){

})

app.get("/todo", function(req,res){

})

app.listen(3000);
