const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

let porta = 3000

app.listen(porta,() =>{
    console.log(`Servidor rodando na porta ${porta}`)
})

mongoose.connect("mongodb+srv://aoi-node:!123456@cluster0-6ncfa.mongodb.net/<dbname>?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

app.use(bodyParser.json())

const users = {

}


app.use('/',require('./src/routes.js'))

