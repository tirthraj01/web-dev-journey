const express = require("express");
const app = express();

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

//site ;
// for sum            =  localhost:3000/sum/a/b
// for multiplication =  localhost:3000/sum/a/b
// for division       =  localhost:3000/sum/a/b
// for subtraction    =  localhost:3000/sum/a/b
