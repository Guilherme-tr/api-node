const User = require('../models/users')
const users = require('../models/users')
module.exports = {

    //SHOW ONE USER IN LIST
    async show(req,res){
        try{
            const {userId} = req.params
            const user = await User.find({
                _id: userId
            })
            if(user.length === 0){
                return res.status(401).json({error:"Usuario nao cadastrado com este id"})
            }
            return res.status(200).json({user})
        }catch(error){
            console.log(error)
            return res.status(500).json({msg:'Problemas no servidor'})
        }
    },

    //SHOW ALL USERS ON THE LIST
    async list(req,res){
        try{
            const user = await User.find()
            return res.status(200).json({user})
        }catch(error){
            console.log(error)
            return res.status(500).json({msg:'Problemas no servidor'})
        }
    },

    //ADD ONE USER ON THE LIST
    async create (req,res) {
        try{
            const {nome, email, cargo} = req.body
            const userExist = await User.findOne({email})
            if(userExist){
                return res.status(401).json({error:"Ja existe um usuario com este email"})
            }
            const user = await User.create({nome, email, cargo})
            return res.status(201).json({user})
        } catch(error){
            console.log(error)
            return res.status(500).json({msg:'Problemas no servidor'})
        }
    }, 

    //UPDATE ONE USER ON THE LIST
    async update (req,res) {
        try{
            const {nome, email, cargo} = req.body
            const {userId} = req.params
            const userExist = await User.findById({_id: userId})
            if(!userExist){
                return res.status(401).json({error:"Nao é possivel atualizar um usuario nao cadastrado"})
            }
            const user = await User.findByIdAndUpdate({
                _id: userId
            },{
                nome,
                email,
                cargo
            },{
                new: true
            })
            return res.status(200).json({user})
        } catch(error){
            console.log(error)
            return res.status(500).json({msg:'Problemas no servidor'})
        }
    },

    //DELETE ONE USER ON THE LIST
    async delete (req,res) {
        try{
            const {userId} = req.params
            const user = await User.findByIdAndDelete({_id: userId})
            const userExist = await User.findById({_id: userId})
            if(!userExist){
                return res.status(401).json({error:"Nao é possivel deletar um usuario nao cadastrado"})
            }
            return res.json({user})
        } catch(error){
            console.log(error)
            return res.status(500).json({msg:'Problemas no servidor'})
        }
    }
}