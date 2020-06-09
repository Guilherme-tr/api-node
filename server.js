const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

let porta = 3000

app.listen(porta,() =>{
    console.log(`Servidor rodando na porta ${porta}`)
})

mongoose.connect("mongodb+srv://aoi-node:!123456@cluster0-6ncfa.mongodb.net/<dbname>?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true})

app.use(bodyParser.json())

const users = {

}

const User = require('./src/models/users')


app.post('/',async (req,res) =>{
    const {nome, cidade, idade} = req.body
    const user = await User.create({nome, cidade, idade})
    res.json({user})
})  

