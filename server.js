const express = require('express')
const bodyParser = require('body-parser')
const database = require('./mongoose')
const { default: mongoose } = require('mongoose')

const app = express()
app.use(bodyParser.json())
app.listen(3001)

app.get('/users', database.getUsers)
// app.get('/user/:id', database.getOneNote)
// app.post('/user', database.createNote)
// app.delete('notes')
// app.patch('/ntes')