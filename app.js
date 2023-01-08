const { MongoClient } = require('mongodb');
const express = require("express");
const mongoose = require("mongoose");
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'sampl';
const app = express();

mongoose.connect("mongodb://localhost:27017/TNSMedicine",{
    useNewUrlParser : true,
    useUnifiedTopology: true,
}, (error) => {
    if(error){
        console.log("error")
    } else{
        console.log("successfully connected")
    }
})

app.listen(8080, () => {
    console.log("on port 8080")
})


// async function main() { 
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('medicine');
//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());