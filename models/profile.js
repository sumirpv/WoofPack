const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  userName: { type: String,
     unique :true,
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
  firstName: { type: String,
     required: "First Name is Required" 
    },
  lastName: { type: String, 
    required: "Last Name is Required"
    },
  emailId: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  phoneNo: { type: Number, required: true},
  address: { type: String, required: true },
  aboutMe: { type: String, required: true },
  picture: { type: String, required: true },
  rating: { type: String, required: true },
  dogCoin: { type: String, required: true },
  dog : {
    type: Schema.Types.ObjectId,
    ref: "Dog"
  },
  message: {
    type: Schema.Types.ObjectId,
    ref: "Message"
  }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile ;