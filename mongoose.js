const mongoose = require('mongoose')
const User = require('./models/user')

const dbURL = 'mongodb+srv://spahiush:abrakadabra@cluster0.bvrgd.mongodb.net/troti'

mongoose.connect(dbURL)
    .then(() => {
        console.log('Connection to Database ESTABLISHED!')
    })
    .catch((err) => {
        console.log('Connection to Database FAILED.')
        console.log(err)
    })

// const createNote = async (req, res, next) => {
//     const createdNote = new Notes({
//         title: req.body.title,
//         content: req.body.content
//     })
// }

// createNote is a function that creates a note
// const createNote = async (req, res, next) => {

    // this one is a temporary object by which we create
    // new note document
//     const createdNote = new Notes({
//         name: req.body.title,
//         price: req.body.price,
//         user: req.body.id
//     })
//     let result
//     try {
//         result = await createdNote.save()
//     } catch (error) {
//         return res.json({ message: error })
//     }
//     res.json({ result })
// }

const getUsers = async (req, res, next) => {
    let users
    try {
        users = await User.find()
    } catch (error) {
        res.json({ message: error })
    }
    res.json({ users })
}


exports.getUsers = getUsers
// exports.createUser = createUser
