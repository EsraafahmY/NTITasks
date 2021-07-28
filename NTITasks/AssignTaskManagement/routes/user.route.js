const express = require('express')
const router = new express.Router()
const userController = require('../app/controllers/user.controller')
const auth = require('../app/middleware/auth')
const upload = require('../app/middleware/multer-upload')

router.post('/register', userController.register)
router.post('/user/login', userController.login)
// router.post('/activate/:otp', userController.activateUser)

router.post('/user/logout', auth,userController.logout)
router.post('/user/logoutAll', auth,userController.logoutAll)
router.post('/user/me', auth,userController.me)

// router.post('/profile',auth, upload.single('profile'), userController.profileImage)

module.exports=router