const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require("cors")

const app = express()

let port = process.env.PORT || 4000 

app.listen(port,() =>{
    console.log(`Servidor rodando na porta ${port}`)
})

//CONECT TO MONGODB ATLAS
mongoose.connect("mongodb+srv://aoi-node:!123456@cluster0-6ncfa.mongodb.net/<dbname>?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

app.use(bodyParser.json())
app.use(cors())

const users = {

}


app.use('/',require('./src/routes.js'))

