const taskModel = require('../models/task.model')

addTask = async(req,res)=>{
    try{
        const taskData = new taskModel(req.body)
        await task.save()
        res.status(200).send({
            apiStatus: true,
            message: " data inserted",
            data: taskData
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            message: "error inserting data",
            data: e
        })
    }
}
allTasks=  async(req,res)=>{
    try{
        const data = await taskModel.find()
        res.status(200).send({
            apiStatus:true,
            message:"data retrived",
            data: data,
            count: data.length
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            message:"error loading data",
            data: e
        })
    }
}
aTask = async(req,res)=>{
    try{
        const id = req.params.id
        const data = await taskModel.findById(id)
        if(!data){
            res.status(404).send({
                apiStatus:true,
                message:"task not found",
                data: null
            })
        }
        res.status(200).send({
            apiStatus:true,
            message:"data retrived",
            data: data
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            message:"error loading data",
            data: e
        })
    }
}
deletetask = async(req,res)=>{
    try{
        const id = req.params.id
        const data = await taskModel.findByIdAndDelete(id)
        if(!data){
            res.status(404).send({
                apiStatus:true,
                message:"task not found",
                data: null
            })
        }
        res.status(200).send({
            apiStatus:true,
            message:"data deleted",
            data: data
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            message:"error loading data",
            data: e
        })
    }
}

module.exports = { addTask, allTasks, aTask, deletetask }
