const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://localhost:27017/GBG', {
useCreateIndex:true,
useFindAndModify:true,
useNewUrlParser:true,
useUnifiedTopology:true
})



let taskData = new Task({
    title:"Mongo Task",
    content:"add new data base",
    description:'add new table in db'
})

taskData.save()
.then(()=> console.log('done'))
.catch((err)=> console.log(err))