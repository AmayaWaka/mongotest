const mongoose = require('mongoose');

//Connection URL

mongoose.connect("mongodb://localhost:27017/fruitsDB");

//Acts as a blueprint for our data

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});
//Creates the collection called Fruits though we are using Fruit
const Fruit = mongoose.model("Fruit", fruitSchema);
//Creates the actual data to be inserted
const fruit = new Fruit({
  name: "Orange",
  rating: 7,
  review: "Pretty Solid as a fruit"
});
//Saves the actual data to be inserted into DB
// fruit.save().then(()=>console.log('Successfully added'));

//Reading the fruit collection from database
Fruit.find(function(err, fruit){
  if(err){
    console.log(err)
  }else{
    console.log(fruit)
  }
})
