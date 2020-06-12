// CREATE A NEW SCHEMA FROM MONGODB ATLAS

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
        },
        email:{
            type: String,
            required: true,
        },
        cargo: {
            type: String,
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema)