const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', {useNewUrlParser: true}, (err, client)=>{
  if(err){
    return console.log("unable to connect to the server");
  }
  const db = client.db('ToDoApp');

  // db.collection('todos').find().toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=>{
  //   if(err){
  //     return console.log("Unable to find the Todos");
  //   }
  // });

  db.collection('todos').find().count().then((count)=>{
    console.log("Number of todos", count);
  }, (err)=>{
    console.log(err);
  });

  db.collection('Users').find({Name: 'Aditya Prakash'}).toArray().then((docs)=>{
    console.log('Users: ');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    if(err){
      console.log(err);
    }
  });

});
