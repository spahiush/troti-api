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

    const getOneUser = async (req, res, next) => {
        const userId = req.params.id;
        let user;
        try {
            user = await User.findById(userId)  
            } catch(err) {
                res.json({message: err})
        }
        res.json(user)
    
    }

    const getUsers = async (req, res, next) => {
        let users
        try {
            users = await User.find()
        } catch (error) {
            res.json({ message: error })
        }
        res.json({ users })
    }

    const deleteUser = async (req, res, next) => {
        const userId = req.params.id;
        let user;
        try {
            user = await User.findByIdAndDelete(userId)  
            } catch(err) {
                res.json({message: err})
        }
        res.json(user)
    }

exports.getUsers = getUsers
exports.deleteUser = deleteUser
exports.getOneUser = getOneUser
