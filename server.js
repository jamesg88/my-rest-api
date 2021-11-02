//server.js houses all my server code 

const express =  require('express')
const app = express() 
const mongoose = require('mongoose')

//connect to database 
mongoose.connect('mongodb://localhost/fans', {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.listen(5000, () => console.log('Server Up and Running'))