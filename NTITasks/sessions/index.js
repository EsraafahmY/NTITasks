const app = require('./src/app')
const express= require('express')

app.use(express.json()) // urlencoded

app.listen(2000)