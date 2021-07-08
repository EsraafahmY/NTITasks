// const mongodb = require('mongodb')
// const mongoClient = mongodb.MongoClient

const {MongoClient, ObjectID} = require('mongodb')

const dbUrl = "mongodb://127.0.0.1:27017"
dbName = "GBDB"
MongoClient.connect(dbUrl ,{ }, (error, client)=>{
if(error) return console.log('error in db')
const myDb = client.db(dbName)
// const {MongoClient , ObjectID}
// let d = new ObjectID()
// myDb.collection('test').insertOne({name:"aaaa", age:28})
// .then(()=>console.log('inserted'))
// .catch(e=> console.log(e))

// myDb.collection('test').insertOne({name:"aaaa", grades:[
//     {sub: "a" , degee:50},
//     {sub:"b" ,degree:60}

// ]})
// .then(()=>console.log('inserted'))
// .catch(e=> console.log(e))

// myDb.collection('test').find().toArray((err, data)=>{
// if(err) return console.log(e)
// console.log(data)
// myDb.collection('test').findOne({name:"soso"}, (err, data)=>{
//     if(err) return console.log(e)
//        console.log(data)

})
})