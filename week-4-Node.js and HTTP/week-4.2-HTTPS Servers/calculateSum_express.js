//creating a http server
//express
//node default library => no
const express = require("express");

function calculateSum(n){
    let ans = 0;
    for(let i = 1; i <= n ; i++) {
    ans = ans + i;
    }
    return ans;
}

let ans = calculateSum(10);
console.log(ans);

const app = express();
 //req = request and res = response
app.get("/", function(req,res) {
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send(ans);
})

app.listen(3000);
