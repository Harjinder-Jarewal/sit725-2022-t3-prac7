require('dotenv').config()

//Mongodb connection ...
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://Hjarewal:jarewal@cluster0.0psjper.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true})
client.connect((err,db) => { 
    if(!err) { 
        console.log('MongoDB Connected') 
    } 
    else { 
        console.log("DB Error: ", err); 
        process.exit(1); 
    } 
}) 

module.exports = client;