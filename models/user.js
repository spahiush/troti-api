const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: "",
    password: "",
    notes: [
       { 
        title: "",
         content: ""    
       }
]
})

module.exports = mongoose.model('User', userSchema)