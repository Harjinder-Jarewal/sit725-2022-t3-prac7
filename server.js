var express = require("express")
var app = express()
var cors = require('cors')
let projectCollection;
let dbConnect = require("./dbConnect");
let projectRoutes = require("./routes/projectRoutes")

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/api/projects',projectRoutes)

app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req,res,next){

    var firstNumber = parseInt(req.params.firstNumber) 
    var secondNumber = parseInt(req.params.secondNumber)
    var result = firstNumber + secondNumber || null
    if(result == null) {  
      res.json({result: result, statusCode: 400}).status(400)
      }
      else { res.json({result: result, statusCode: 200}).status(200)} 
  })

//Mongodb connection ...
// const MongoClient = require('mongodb').MongoClient;

// const uri = 'mongodb+srv://Hjarewal:jarewal@cluster0.0psjper.mongodb.net/?retryWrites=true&w=majority'
// const client = new MongoClient(uri, {useNewUrlParser: true})

// const createColllection = (collectionName) => { 
//      client.connect((err,db) => { 
//      projectCollection = client.db().collection(collectionName); 
//         if(!err) { 
//              console.log('MongoDB Connected') 
//          } 
//          else { 
//              console.log("DB Error: ", err); 
//              process.exit(1); 
//          } 
//      }) 
// }
// insert project....

// 

var port = process.env.port || 3000;
app.listen(port,() => {
    console.log("App listening to: http://localhost:"+port)
    //createColllection('Pets')
})