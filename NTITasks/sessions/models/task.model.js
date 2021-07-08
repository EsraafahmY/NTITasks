const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('Task', {
    title:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        required:[true, 'must have a title']
    },
    content:{
        type:String,
        // trim:true,
        lowercase:true,
        unique:true,
        required:true
    },
    description:{
        type:String,
        // trim:true,
    }
})

module.exports=Task