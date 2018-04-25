var path = require ("path");
var db = require("../models")
var multer  = require('multer');
const uuidv4 = require('uuid/v4');
//var router = express.Router();

var multerConf = {
    storage: multer.diskStorage({
        destination: function (req, file, next) {
            next(null, './public/uploads')
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

module.exports =function(app){
    
    app.post("/api/newUser", multer(multerConf).single('avatar'), function( req, res){
        console.log(req.body);
 
        






        db.Profile.create(req.body).then(function(data){
            res.json(data);
        }).catch(function(err){
            res.json(err);
        })
    })



}