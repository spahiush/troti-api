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

const getUsers = async (req, res, next) => {
    let users
    try {
        users = await User.find()
    } catch (error) {
        res.json({ message: error })
    }
    res.json({ users })
}

const deleteUser = async (req, res, next) =>{
    let userId = req.param.id
    try {
     await User.findByIdAndDelete(userId)
    } catch (err) {
        console.log(err)
    }
    console.log("Removed user : " + userId )
    res.json({ message: "po u fshi" })
}


exports.getUsers = getUsers
exports.deleteUser = deleteUser
