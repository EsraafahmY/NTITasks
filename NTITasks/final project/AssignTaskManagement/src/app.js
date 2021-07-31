const express= require('express')
const cors = require('cors')
require('dotenv').config()
require('../database/connection')
//  const roleRoutes = require('../routes/roles.routes')
 const userRoutes = require('../routes/user.route')
 const taskRoutes = require('../routes/task.route')
//  const myRoutes = require('../routes/routes.routes')

 const app = express()
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.use('/role',roleRoutes)
app.use('/user',userRoutes)
app.use('/task', taskRoutes)
// app.use('/routes', myRoutes)

module.exports = app