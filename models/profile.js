const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  username: { type: String,
   //  unique :true,
     trim: true,
     required: "Username is Required" 
    },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
    },
  firstname: { type: String,
     required: "First Name is Required" 
    },
  lastname: { type: String, 
    required: "Last Name is Required"
    },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  phone: { type: Number, required: true},
  address: { type: String, required: true },
  about: { type: String, required: true },
  picture: { type: String },
  rating: { type: String},
  token: {type: String},
  dogCoin: { type: String },
  dog : [{
    type: Schema.Types.ObjectId,
    ref: "Dog"
  }],
  message: [{
    type: Schema.Types.ObjectId,
    ref: "Message"
  }], 
  myPack: [{
    type: Schema.Types.ObjectId,
    ref: "Profile"
  }]


});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile ;