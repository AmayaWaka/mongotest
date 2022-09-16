const MongoClient = require('mongodb').MongoClient;
const assert = require("assert");

//Connection URL

const url = 'mongodb://localhost:27017';

//Database Name

const dbName = 'fruitsDB';

//Create a new MongoClient
const client = new MongoClient(url);

//use connect method to connect to the server



client.connect(function(err){
  assert.equal(null, err);
  console.log("Connected Successfully to server");
  const db = client.db(dbName);
  client.close()
});
const insertDocuments = function(db, callback){
  //get the documents collection
  const collection = db.collection('fruits');
  //Insert Some documents
  collection.insertMany([
{
  name: "Apple",
  score: 8,
  review: "Great fruit"
},
{
  name: "Orange",
  score: 8,
  review: "To sweet"
},
{
  name: "Banana",
  score: 8,
  review: "Great"
}
  ], function(err, result){
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  })
}
