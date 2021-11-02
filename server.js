//server.js houses all my server code 

require('dotenv').config()
const express =  require('express')
const app = express() 
const mongoose = require('mongoose')

//connect to database 
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.listen(5000, () => console.log('Server Up and Running'))