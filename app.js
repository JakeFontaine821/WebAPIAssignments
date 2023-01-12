var express = require("express");
var app = express();
var path = require("path");

//setup route for static files
app.use(express.static(__dirname+"/static"))

//main route for site
app.get("/", function(req, res){
    //res.send("Welcome to WebAPI for Games");
    res.sendFile(__dirname+"/static/index.html");
})

app.get("/home", function(req, res){
    res.send("this will be home page for now");
})

app.listen(3000, function(){
    console.log("Running on localhost 3000");
});