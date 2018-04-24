const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogSchema = new Schema({

  dogName: { type: String, required: true },
  dogBreed: { type: String, required: true },
  dogAge: { type: String, required: true },
  dogTemperament: { type: Number, required: true },
  aboutDog: { type: String, required: true },
  dogSize: { type: String, required: true },
  dogPicture: { type: String, required: true }
});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;