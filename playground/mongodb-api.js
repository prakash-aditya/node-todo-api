const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', {useNewUrlParser: true}, (err, client)=>{
  if(err){
    return console.log("Unable to connect to the mongodb database.");
  }
  console.log("Connected to mongodb server.");

  const db = client.db('ToDoApp');

  db.collection('Users').insertOne({
    Name: "Aditya Prakash",
    Age: 25,
    Location: "Jamshedpur, Jharkhand"
  }, (err, result)=>{
    if(err){
      return console.log("Cannot insert into the database");
    }
    console.log(result.ops);
    var timestamp = result.ops[0]._id.getTimestamp();
    console.log(JSON.stringify(timestamp));
  });
  client.close();
});
