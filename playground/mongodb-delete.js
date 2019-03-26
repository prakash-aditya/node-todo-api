const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', {useNewUrlParser:true}, (err, client)=>{
  if(err){
    return console.log(err);
  }
  console.log("Connected to MongoDB server");

  const db = client.db('ToDoApp');

  // db.collection('Users').deleteMany({Name: 'Aditya Prakash'}).then((result)=>{
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5c95d84a99681d2e68b2355a")}).then((result)=>{
    console.log(result);
  });
});
