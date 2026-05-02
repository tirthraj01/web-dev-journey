    const { json } = require("body-parser");
    const express = require('express');
    const jwt = require('jsonwebtoken')
    const JWT_secret = "";
    const app = express();
    app.use(express.json());
    // stores the username , pass, and token address

    const user = [];


    app.post("/signing up", function(req,res){
        const username = req.body.username;
        const password = req.body.password;

        user.push({
            username: username,
            password: password
        })
        res.json({
            message: "You are sign up"
        })

        console.log(user)
    })

    app.post("/signing in", function(req,res){
        const username = req.body.username;
        const password = req.body.password;

        //to check is it you or not 
        let foundUser = null;

        for(let i = 0 ; i<user.length; i++){
            if(user[i].username == username && user[i].password == password){

            }
        }

        if( foundUser){
            const token = jwt.sign({
                username: username
            },JWT_secret); //convey their username over to a jwt 

            //foundUser.token = token;
            res.json({
                message: token
            })
        } else {
            res.status(403).send({
                message: "Invalid username or password"
            })
        }
        
    })

    app.get("/me",function(req,res){ 
        const token = req.headers.token //jwt 
        const decodeINFO = jwt.verify(token,JWT_secret);
        const username = decodeINFO.username


        let  foundUser = null;

        for( let i =0 ; i < user.length; i++){
            if(user[i].username == username){
                foundUser = user[i]
            }
        }

        if (foundUser){
            res.json({
                username: foundUser.username,
                password: foundUser.password
            })
        } else{
            res.json({
                message: "token invalid"
            })
        }
    })

    app.listen(3000); 
