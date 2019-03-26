const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', {useNewUrlParser: true}, (err, client)=>{
  if(err){
    return console.log(err);
  }

  console.log("Connected to the MongoDB server");

  const db = client.db('ToDoApp');

  db.collection('Users').findOneAndUpdate({
    Name: 'Adi'
  },{
    $set: {
      Name: "Aditya"
    },
  },  {
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  }, (err)=>{
    console.log(err);
  });

  db.collection('Users').findOneAndUpdate({
    Name: 'Aditya'
  },{
      $inc: {
        Age: 1
      }
  },{
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  }, (err)=>{
    console.log(err);
  });
});
