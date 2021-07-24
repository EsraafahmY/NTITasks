const express = require('express')
const router = new express.Router()
const User = require('../database/models/user.model')

router.post('/user/register', async (req,res)=>{
    try{
        const userData = new User(req.body)
        /*
        new User({
"name":"marwa",
"email":"marwa@test.com",
"password":"123456",
"x":"7"
})
        */
        await userData.save()
        res.send('done')
    }
    catch(e){
res.send(e)
    }
})

router.get('/user/all', async(req,res)=>{
    try{
const data =await User.find()
res.send(data)
    }
    catch(e){
res.send(e)
    }
})

router.post('/login', async (req,res)=>{
    try{
        user = await User.login(req.body.email, req.body.password)
        //generate token
        token =await user.generateToken()

        res.send({
            data:{user, token},
            msg:"logged in"
        })
    }
    catch(e){
        res.send({
            data:e.message,
            msg:"error"
        })
    }
})
module.exports=router