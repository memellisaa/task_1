require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const User = require('./models/user')

mongoose.connect('mongodb://localhost/appName', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

app.get('/helloworld', (req, res) => { res.send("hello world") })


const getUser = async (req, res, next) => {
    let user
    try {
        user = await User.findById(req.params.id)
        // const user = await User.findOne({ _id: req.params.id }).exec()
        if (user == null) {
            res.status(404).json({ "message": "user not found" })
        }
        
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
    res.user = user
    next()
}

// getting all  
// app.get('/', async (req, res) => {
//     try {
//         const users = await User.find()
//         res.json(users)
//     } catch (err) {
//         res.status(500).json({ message: err.message })
//     }
// })

app.get('/users', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

app.get('/users/:id', getUser, (req, res) => {
    res.json(res.user)
})


app.post('/users', async (req, res) => {
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender
    })

    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


app.patch('/users/:id', getUser, async (req, res) => {
    try {
        const user = res.user
        if (user == null) {
            res.status(404).json({ "message": "user not found" })
            return
        }
        if (req.body.name) {
            user.name = req.body.name
        }
        if (req.body.age) {
            user.age = req.body.age
        }
        if (req.body.gender) {
            user.gender = req.body.gender
        }
        await user.save()
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})

app.delete('/users/:id', async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id })
        res.status(200).json({ "deleted": true })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


app.listen(3000, () => {
    console.log('Server Started')
})