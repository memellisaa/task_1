const mongoose = require('mongoose')
const { nanoid } = require('nanoid')

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => nanoid(10)
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('User', userSchema)