function createUserRoutes(app){
    app.post("/user/signup", function(req,res){
    res.json({
        message: " signup endpoint"
    })

})

app.post("/user/signin", function(req,res){

})

app.get("/user/purchases", function(req,res){

})
}

module.exports = {
    createUserRoutes: createUserRoutes
}
