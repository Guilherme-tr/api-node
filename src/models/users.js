const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    cidade:{
        type: String,
    },
    idade: {
        type: Number
    }
})

module.exports = mongoose.model("User", userSchema)