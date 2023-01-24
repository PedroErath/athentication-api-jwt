require('dotenv').config()
const port = process.env.PORT
const express = require('express')
const app = express()
const UserRouter = require('./Routes/UserRouter')

const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL)
    .then(db => {
        console.log('Database connected')
    })
    .catch(error => {
        console.log(`Error database connected: ${error}`)
    })

app.use('/', UserRouter)

app.listen(port, () => console.log('Server running in port ' + port))