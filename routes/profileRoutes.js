var path = require("path");
var db = require("../models")
var multer = require('multer');
const uuidv4 = require('uuid/v4');
var ObjectId = require('mongodb').ObjectId; 
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
        db.Profile.find({username: req.body.username}).then(function (data) {
            console.log(data);
            if (data.length === 0){
                console.log("yay");
                res.send(false)
            }
            else if (data[0].password === req.body.password && data[0].username === req.body.username) {
                req.session.user = data[0]._id;
                res.send(true)
            }
            else {
                res.send(false)
            }
        })
    });
// get user data.
    app.get("/api/user",function (req, res){
        console.log("this is hit")
        console.log(req.session.user);
        var id = req.session.user
        var o_id = new ObjectId(id);
        db.Profile.findOne({_id: o_id}).then(function(result){
            console.log(result); 
            res.send(result);
        })
    })

<<<<<<< HEAD
//     }).catch(function (err) {
//         res.json(err);
//     });
// });

    app.post('/api/message', function (req, res){
        console.log(req.body);

        db.Message.create(req.body).then(data => {
            console.log(`message was added to db successfully`);
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
    })
=======
>>>>>>> c3211b16811514e8ac5d61491f81fa3745035561
}
