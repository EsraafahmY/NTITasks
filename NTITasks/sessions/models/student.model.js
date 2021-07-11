// const mongoose = require('mongoose')
const validator = require('validator');
const { schema } = require('./user.model');
const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment-create-update');

const Student = mongoose.model('Student', {
    name:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        required:[true, 'must have a name']
    },
    id:{
        // type:schema.types.autoIncrement,
        type:number,
        unique:true
     },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        required:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error ('invalid email')
        }      
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    courser:{
        type: Array
    }
})
module.exports=Student