const express = require('express')
const { removeAllListeners } = require('nodemon')
const router = express.Router()
const Subscriber = require('../models/user')

module.exports = router


// getting all  
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// getting one   
router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        // const user = await Subscriber.findById(req.params.id)
        const user = await Subscriber.findOne({ _id: req.params.id }).exec()
        res.json(user)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


// creating one    
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender
    })

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


// updating one   
router.patch('/:id', async (req, res) => {
    const user = await Subscriber.findOne({ _id: req.params.id }).exec()
    if (req.body.name){
        user.name = req.body.name
    }
    if (req.body.age){
        user.age = req.body.age
    }
    if (req.body.gender){
        user.gender = req.body.gender
    }
    user.save()
    res.status(200).json(user)
})

// deleting one  
router.delete('/:id', async(req, res) => {
    try {
        console.log(`Deleting ${req.params.id}`)
        await Subscriber.deleteOne({ _id: req.params.id })
        console.log(`Deleted ${req.params.id}`)
        res.status(200).json({"deleted": true})
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
