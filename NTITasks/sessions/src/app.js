const express= require('express')
const app = express()
require('../db/connection')
// const userRoutes= require('../routes/user.route')
// const TaskRoutes= require('../routes/task.route')
const studentRoutes= require('../routes/task.route')


app.use(express.json()) // urlencoded
app.use(studentRoutes)

// app.use(TaskRoutes)
module.exports=app
