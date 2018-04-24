var path = require ("path");
var db = require("../models")
//var router = express.Router();

module.exports =function(app){
    
    app.post("/api/newUser", function( req, res){
        console.log("hit the d floor");
        console.log(req.body);
        db.Profile.create(req.body).then(function(data){
            res.json(data);
        }).catch(function(err){
            res.json(err);
        })
    })



}