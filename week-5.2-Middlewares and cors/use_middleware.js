const express = require("express");

const app = express();

function middlewares(req,res,next){
    console.log("Method = " + req.method);
    console.log(" Host = " + req.hostname);
    console.log(new Date());

    next();

}

app.use(middlewares);

app.get("/sum/:a/:b", function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer: a + b
    });
});

app.get("/multiply/:a/:b", function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer: a * b
    });
});

app.get("/divide/:a/:b", function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer: a / b
    });
});

app.get("/subtract/:a/:b", function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer: a - b
    });
});

app.listen(3000);
