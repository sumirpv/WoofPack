const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cookieParser = require('cookie-parser');
var session = require('express-session');
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


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

var server = app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);  
});

//Socket set up on server
const io = socket(server);
io.on('connection', function (socket) {
  console.log('made socket connection', socket.id);
  socket.on("room", function(room){
    console.log("room", room);
    socket.join(room);

    socket.on("message", function(data) {
      io.sockets.in(room).emit('message', {message: data.message,username:data.username});
      addChat(data.message, data.username);
    });
    
    socket.on("typing",function(data){
      socket.broadcast.in(room).emit("typing",{username:data.username})
    });
  });
  
  socket.on('chat', function (data) {
    io.sockets.emit('chat', data)
    console.log(data);
  });

  socket.on('typing', function(data){
    socket.broadcast.emit('typing',data);
})
});
