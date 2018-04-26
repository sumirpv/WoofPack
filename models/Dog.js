const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogSchema = new Schema({

  dogName: {
     type: String, 
    //  required: true 
    },
  breed: { type: String,
    //  required: true 
    },
  age: { type: String,
    //  required: true 
    },
  temperment: { type: Number, 
    // required: true 
  },
  aboutDog: { type: String,
    //  required: true 
    },
  size: { type: String, 
    // required: true 
  },
  file: { type: String, 
    // required: true 
  }
});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;