const {Router} = require("express");

const courseRouter = Router();

courseRouter.post("/purchase", function(req,res){
    res.json({
        message: " signin endpoint"
    })
})

courseRouter.get("/preview", function(req,res){
    res.json({
        message: " signin endpoint"
    })

})


module.exports = {
    courseRouter : courseRouter
}
