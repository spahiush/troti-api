const express = require('express')
const bodyParser = require('body-parser')
const database = require('./mongoose')
const { default: mongoose } = require('mongoose')

const app = express()
app.use(bodyParser.json())
app.listen(3001)

app.get('/users', database.getUsers)
app.get('/users/:id', database.getOneUser)
app.post('/users', database.createUser)
app.delete('/users/:id', database.deleteUser)
// app.patch('/users/:id', database.updateUser)