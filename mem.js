const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const appleSchema = mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});


const Apple = mongoose.model("Apple", appleSchema);


const apple = new Apple({
  name: "Jane",
  rating: 5,
  review: "ugikloijn"

})

apple.save()
