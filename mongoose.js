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

    const createUser = async (req,res,next) =>{
        let result
        const newUser = new User ({
            username: req.body.username,
            password: req.body.password,
            notes: [
            ]
        })

        try {
            result = await newUser.save()
        } catch (error) {
            return res.json({ message: error })
        }
        res.json({ result })
        }

    // const updateUser = async (req, res, next) => {
    //     const userId = req.params.id;
    //     let user;
    //     try {
    //         user = await User.replaceOne
    //         } catch(err) {
    //             res.json({message: err})
    //     }
    //     res.json(user)
    
    // }

// exports.updateUser =updateUser
exports.createUser = createUser
exports.getUsers = getUsers
exports.deleteUser = deleteUser
exports.getOneUser = getOneUser
