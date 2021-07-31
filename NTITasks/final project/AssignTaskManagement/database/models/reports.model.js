const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    title:{type:String, unique:true, required:true, trim:true},
    content:{type:String, required:true},
    userTasks:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

}, {timestamps:true}

)

const Reports = mongoose.model('Reports', reportSchema)
module.exports=Reports