const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cookieParser = require('cookie-parser');
var session = require('express-session');
//const routes = require("./routes/profileRoutes.js");
const app = express();
const PORT = process.env.PORT || 3001;
const socket = require('socket.io');



// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//app.use(routes);
app.use(express.static("public"));

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/woofpack",
);

app.use(cookieParser());
app.use(session({secret: "343430939043jfef", resave:false, saveUninitialized:true}));



require("./routes/profileRoutes.js")(app);

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });


var server = app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

//Socket set up on server
const io = socket(server);

io.on('connection', function (socket) {
  console.log('made socket connection', socket.id)

  socket.on('chat', function (data) {
    io.sockets.emit('chat', data)
    console.log(data);
  });
});
