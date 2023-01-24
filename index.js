require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL)
    .then(db => {
        console.log('Database connected')
    })
    .catch(error => {
        console.log(`Error database connected: ${error}`)
    })

app.get('/', (req, res) => res.send('Hello Word'))

app.listen(port, () => console.log('Server running in port ' + port))