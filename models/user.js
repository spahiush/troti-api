const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {type: String},
    password: {type: String},
    notes: [
       { 
        title: {type: String},
         content: {type: String}    
       }
]
})

module.exports = mongoose.model('User', userSchema)