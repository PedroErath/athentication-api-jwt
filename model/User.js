const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String, minLength:3, maxLength:80, required: true},
    email: {type: String, minLength:5, maxLength:100, required: true},
    password: {type: String, minLength:6, maxLength:80, required: true},
    admin: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('User', userSchema)