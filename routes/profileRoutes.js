var path = require("path");
var db = require("../models")
var multer = require('multer');
const uuidv4 = require('uuid/v4');
var ObjectId = require('mongodb').ObjectId;


var multerConf = {
    storage: multer.diskStorage({
        destination: function (req, file, next) {
            next(null, './client/public/uploads')
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
        //console.log(req.body);
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
            picture: req.file.path.replace('client/public/', "")
        })
            .then(function (data) {
                req.session.user = {
                    auth: true,
                    id: data._id,
                    firstname: data.firstname,
                    email: data.email,
                    picture: data.picture,
                    username: data.username
                };
                //console.log("this is req.session.user on login", req.session.user)
                res.json(data);
            }).catch(function (err) {
                res.json(err);
            })
    })

    // add dog to DB
    app.post("/api/dog", multer(multerConf).single("avatar"), function (req, res) {
        db.Dog.create({
            dogName: req.body.dogName,
            breed: req.body.breed,
            age: req.body.age,
            temperment: req.body.temperment,
            size: req.body.size,
            aboutDog: req.body.aboutDog,
            picture: req.file.path.replace('client/public/', "")
        }).then(function (data) {
            //console.log("dog id" + data._id);
            //console.log("prof id" + req.session.user.id);
            return db.Profile.findOneAndUpdate({
                _id: req.session.user.id
            }, { $push: { dog: data._id } }, { new: true });
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        });
    });

    // check if session
    app.get("/api/session", function (req, res) {
        //console.log("this is check session",req.session.user)
        if (req.session.user) {
            //console.log("true")
            res.send(req.session.user);
        }
        if (!req.session.user) {
            //console.log("false")
            res.send(false)
        }

    })
    // check login
    app.post("/api/login", function (req, res) {
        db.Profile.find({ username: req.body.username }).then(function (data) {
            //console.log(data);
            if (data.length === 0) {
                //console.log("yay");
                res.send(false)
            }
            else if (data[0].password === req.body.password && data[0].username === req.body.username) {
                req.session.user = {
                    auth: true,
                    id: data[0]._id,
                    firstname: data[0].firstname,
                    email: data[0].email,
                    picture: data[0].picture,
                    username: data[0].username
                }
                //console.log("when login this is session", req.session.user)
                res.send(true)
            }
            else {
                res.send(false)
            }
        })
    });
    // get user data.
    app.get("/api/user", function (req, res) {
        // console.log("this is hit")
        //console.log(req.session.user);
        var id = req.session.user.id
        var o_id = new ObjectId(id);
        db.Profile.findOne({ _id: o_id }).populate("dog").then(function (result) {
            //console.log(result); 
            res.send(result);
        })
    })

    //getting all users from db 
    app.get("/api/alluser", function (req, res) {
        // console.log("alluserdata", req.body);
        db.Profile.find({}).then(function (data) {
            console.log(data);
            res.send(data);
        }).catch(err => res.status(422).json(err));
    });


    //Add Pack Member   
    app.put("/api/addpack/", function (req, res) {
        // console.log('this is body for adding a pack member', req.body.username);
        db.Profile.findOneAndUpdate({
            _id: req.session.user.id
        }, { $push: { myPack: req.body.username } }, { new: true })
            .then(data => {
                res.json(data);
            })

    });

    //Get User's Pack from DB
    app.get('/api/mypack', function (req, res) {

        db.Profile.find({ _id: req.session.user.id }).
            then(function (data) {
                console.log('data', data[0]);
                // res.send(data);
                var myPackInfo = [];
                for (let i=0; i< data[0].myPack.length; i++) {
                    var id = data[0].myPack[i];
                    var o_id = new ObjectId(id);
                    db.Profile.find({ _id: o_id})
                    .then(resy => {
                        myPackInfo.push(resy)
                        console.log(resy);
                        res.send(resy);
                    });
                }
            }).catch(err => res.status(422).json(err));
    });

    app.post('/api/mypack/info', function (req, res) {
        db.Profile.find({ username: req.body.username })
            .then(function (data) {
                res.send(data);
            }).catch(err => res.status(422).json(err));
    });


};
