const express = require('express')
const app = express()
require('./db/connection')
const userModel = require('./models/user.model')

app.post('/add', (req, res)=>{

let userData = new User({
    name:"esraa1",
    email:"esraa1fahmy@gmail.com",
    password:'1234568',
    gender:'female'
})

userData.save()
.then(()=> console.log('done'))
.catch((err)=> console.log(err))
})
app.listen(3000)