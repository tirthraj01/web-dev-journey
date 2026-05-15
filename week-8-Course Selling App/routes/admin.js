const {Router} = require("express");
const {adminModule} = require("../ds");
const adminRouter = Router();

adminRouter.post("/signup", function(req,res){
    res.json({
        message: " signup endpoint"
})

})

adminRouter.post("/signin", function(req,res){
    res.json({
        message: " signin endpoint"
    })

})

adminRouter.post("/course", function(req,res){
    res.json({
        message: " signin endpoint"
    })

})
