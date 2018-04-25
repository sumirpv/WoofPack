var path = require ("path");
var db = require("../models")
//var router = express.Router();

module.exports =function(app){
    
    app.post("/api/newUser", function( req, res){
        console.log("hit the d floor");
        console.log(req.body);
        db.Profile.create(req.body).then(function(data){
            console.log(data)
            //res.cookie("token", token, { maxAge: 9999 })
            req.session.user = data._id;
            console.log(`session is set ${req.session.user}`)
            res.end(); 
        }).catch(function(err){
            res.json(err);
        })
    })

    app.get("/api/session", function(req, res){
        console.log(req.session.user)
        if (req.session.user){
            console.log("true")
            res.send(true); 
        }
        if (!req.session.user){
            console.log("false")
            res.send(false) 
        }
        
    })

    //app.get("/api/user")



}

 //console.log(data.dataValues)
 /*res.cookie("token", token, { maxAge: 9999 })
 req.session.user = data.dataValues;
 res.redirect('/profile')*/