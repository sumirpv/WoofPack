var path = require("path");
var db = require("../models");
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
            picture: req.file.path,
            myPack: req.body.myPack, 
            dogCoin: 0
        })
            .then(function (data) {
                req.session.user = {
                    auth: true,
                    id: data._id,
                    firstname: data.firstname,
                    email: data.email,
                    picture: data.picture,
                    username: data.username,
                    myPack: data.myPack
                };
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
            db.Profile.findOneAndUpdate({
                _id: req.session.user.id
            }, { $push: { dog: data._id } }, { new: true }).then(function (dogData) {
                res.json(dogData);
            });
        }).catch(function (err) {
            res.json(err);
        });
    });

    // check if session
    app.get("/api/session", function (req, res) {
        if (req.session.user) {
            res.send(req.session.user);
        }
        if (!req.session.user) {
            res.send(false)
        }
    })

    // check login
    app.post("/api/login", function (req, res) {
        db.Profile.find({ username: req.body.username }).then(function (data) {
            if (data.length === 0) {
                res.send(false)
            }
            else if (data[0].password === req.body.password && data[0].username === req.body.username) {
                req.session.user = {
                    auth: true,
                    id: data[0]._id,
                    firstname: data[0].firstname,
                    email: data[0].email,
                    picture: data[0].picture,
                    username: data[0].username,
                    myPack: data[0].myPack
                }
                res.send(true)
            }
            else {
                res.send(false)
            }
        })
    });

    // get user data.
    app.get("/api/user", function (req, res) {
        var id = req.session.user.id
        var o_id = new ObjectId(id);
        db.Profile.findOne({ _id: o_id }).populate("dog").then(function (result) {
            res.send(result);
        })
    })

    //getting all users from db 
    app.get("/api/alluser", function (req, res) {
        //get req.session.mypack and filter out those who are already in your pack
        mypack = req.session.user.myPack;
        mypackarray = [];
        for (let i=0; i<mypack.length; i++) {
            var o_id = new ObjectId(mypack[i]);
            mypackarray.push(o_id);
        };
        db.Profile.find( { _id: { $nin : mypackarray } } ).populate("dog").then(function (data) {
            res.send(data);
        }).catch(err => res.status(422).json(err));
    });

    //Add Pack Member   
    app.put("/api/addpack/", function (req, res) {
        db.Profile.findOneAndUpdate({
            _id: req.session.user.id
        }, { $push: { myPack: req.body.username } }, { new: true })
            .then(data => {
                res.json(data);
            })
    });

    //Get User's Pack from DB
    app.get('/api/mypack', function (req, res) {
        var id = req.session.user.id
        var o_id = new ObjectId(id);
        db.Profile.find({ _id: o_id }).populate({path: "myPack", populate: {path:"dog"}})
            .then(function (data) {
                res.send(data);
            }).catch(err => res.status(422).json(err));
    });

    app.post('/api/mypack/info', function (req, res) {
        db.Profile.find({ username: req.body.username })
            .then(function (data) {
                res.send(data);
            }).catch(err => res.status(422).json(err));
    });

    // Logout route that ends user session and redirects back to home pg
    app.get("/api/logout", function (req, res) {
        req.session.destroy(function(err) {
            if (err) {
                console.log(err)
            } else {
                res.end();
            };
        });
    })

    app.post("/api/sendcoin", function(req, res){
        console.log("api/sendcoin", req.body)
        console.log("this is the sender", req.session.user.id)
        var id = req.body.reciver
        var o_id = new ObjectId(id);
        db.Profile.update({_id: o_id}, {$inc:{dogCoin: req.body.coinValue}}).then(function(data){
            res.send(true); 
        }).then(function(data){
            id = req.session.user.id
            var o_id = new ObjectId(id);
            return db.Profile.update({_id: o_id}, {$inc:{dogCoin: - req.body.coinValue}}).then(function(result){
                res.end(); 
            })
        })
    })

    app.post('/api/rating', function (req, res){
        console.log("req.body.id ", req.body.id);
        var o_id= new Object(req.body.id);
        db.Profile.update({_id:o_id}, {$push:{rating : req.body.rating}}).
        then(function(data){
            console.log("this is rating res.data", data);
            res.end();
        }).catch(err => res.status(422).json(err));
    }) 
};
