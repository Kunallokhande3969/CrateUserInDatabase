  const  mongoose = require('mongoose');

   async function mydb(){
    await  mongoose.connect("mongodb://localhost/asbdb");
    console.log("connected to MongoDB")
   }
   mydb();
  const db = mongoose.connection;