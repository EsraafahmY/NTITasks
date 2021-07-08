const express= require('express')
const router = express.Router()
const taskController = require('../controller/task.controller')


router.post('/add', taskController.addTask)
router.get('/tasks', taskController.allTasks)
router.get('/tasks/:id', taskController.aTask)
router.delete('/tasks/:id', taskController.deletetask)

module.exports= router