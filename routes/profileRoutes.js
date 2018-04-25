var path = require("path");
var db = require("../models")
var multer = require('multer');
const uuidv4 = require('uuid/v4');
//var router = express.Router();

var multerConf = {
    storage: multer.diskStorage({
        destination: function (req, file, next) {
            next(null, './uploads')
        },
        filename: function (req, file, next) {
            console.log(file);
            const ext = file.mimetype.split('/')[1];
            next(null, file.fieldname + "-" + Date.now() + "." + ext)
        }
    }),
    fileFilter: function (req, file, next) {
        if (!file) {
            next();
        }
        const image = file.mimetype.startsWith('image/');
        if (image) {
            next(null, true);
        } else {
            next({ message: "file type not supported" }, false)
        }
    }
}

module.exports = function (app) {
// create new user
    app.post("/api/newUser", multer(multerConf).single('avatar'), function (req, res) {
        console.log(req.body);

        db.Profile.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            address: req.body.address,
            phone: req.body.phone,
            about: req.body.about, 
            username: req.body.about, 
            username: req.body.username, 
            email: req.body.email,
            password: req.body.password,
            picture: req.file.path})
            .then(function (data) {
                console.log(data._id)
                req.session.user = data._id;
                res.json(data);
            }).catch(function (err) {
                res.json(err);
            })
    })
// check if session 
    app.get("/api/session", function(req, res){
        //console.log(req.session.user)
        if (req.session.user){
            //console.log("true")
            res.send(true); 
        }
        if (!req.session.user){
            //console.log("false")
            res.send(false) 
        }
        
    })
// check login
    app.post("/api/login", function (req, res) {
    console.log(req.body)
    db.Profile.find({username: req.body.username}).then(function (data) {
        console.log(data);
                        if (data.length === 0){
                            console.log("yay");
                            res.send(false)
                        }
                        else if (data[0].password === req.body.password && data[0].username === req.body.username) {
                            req.session.user = data;
                            res.send(true)
                        }
                        else {
                            res.send(false)
                        }
                        })
});
// app.get("/api/login", function (req, res) {
//     console.log(req.session.user)
//     db.Owner.find({_id: ObjectId(req.session.user)}).then(function (data) {
//         if (data) {
//             console.log("loged in");
//             req.session.user = data.dataValues;
//             //res.redirect("/profile");
//             res.json(data.dataValues);

//         } else {
//             res.send("you suck")
//         }

//     }).catch(function (err) {
//         res.json(err);
//     });
// });
}

