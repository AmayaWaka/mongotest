// const mongoose = require('mongoose');
//
// //Connection URL
//
// mongoose.connect("mongodb://localhost:27017/fruitsDB");
//
// //Acts as a blueprint for our data
//
// const fruitSchema = new mongoose.Schema({
//   name: String,
//   rating: Number,
//   review: String
// });
// //Creates the collection called Fruits though we are using Fruit
// const Fruit = mongoose.model("Fruit", fruitSchema);
// //Creates the actual data to be inserted
// const fruit = new Fruit({
//   name: "Orange",
//   rating: 7,
//   review: "Pretty Solid as a fruit"
// });
// //Saves the actual data to be inserted into DB
// fruit.save().then(()=>console.log('Successfully added'));















//initialised mongoose constant
const mongoose = require('mongoose');
//Created a connection with the db
mongoose.connect("mongodb://localhost:27017/personDB");


//Create Schema for the person db
const personSchema = new mongoose.Schema({
  name: String,
  age: Number

});
//initialized the preson collection

const Person = mongoose.model("person", personSchema );
//Creted data for entry

const person = new Person({
  name: "Brad",
  age: 21
});
//Inserted collection into db
person.save();
