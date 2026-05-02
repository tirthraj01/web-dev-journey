const { json } = require("body-parser");
const express = require("express");
const app = express();
app.use(express.json());
// stores the username , pass, and token address

const user = [];

//to generate the token func used ( create a address)
function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
                   'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                   '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    //to create the token address logic used
    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token = token + [ options[Math.floor(Math.random() * options.length)] ];
    }
    return token;
}

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
        const token = generateToken();
        foundUser.token = token;
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
    const token = req.headers.token
    let  foundUser = null;

    for( let i =0 ; i < user.length; i++){
        if(user[i].token == token){
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
