const Persona = require('../models/persona')

module.exports = {

    //SHOW ONE PERSONA IN LIST
    async show(req,res){
        try{
            const {personaId} = req.params
            const personas = await Persona.find({
                _id: personaId
            })
            if(personas.length === 0){
                return res.status(401).json({error:"Persona nao cadastrada com este id"})
            }
            return res.status(200).json({personas})
        }catch(error){
            console.log(error)
            return res.status(500).json({msg:'Problemas no servidor'})
        }
    },

    //SHOW ALL PERSONAS ON THE LIST
    async list(req,res){
        try{
            const personas = await Persona.find()
            return res.status(200).json({personas})
        }catch(error){
            console.log(error)
            return res.status(500).json({msg:'Problemas no servidor'})
        }
    },

    //ADD ONE PERSONA ON THE LIST
    async create (req,res) {
        try{
            const {owner, name, sex, age, role, where_works, scolarship, communication_means, dreams, problems, company_help, company_workers, company_role, image} = req.body
            const persona = await Persona.create({owner, name, sex, age, role, where_works, scolarship, communication_means, dreams, problems, company_help, company_workers, company_role, image})
            return res.status(201).json({persona})
        } catch(error){
            console.log(error)
            return res.status(500).json({msg:'Problemas no servidor'})
        }
    },  

    //UPDATE ONE PERSONA ON THE LIST
    async update (req,res) {
        try{
            const {name, sex, age, role, where_works, scolarship, communication_means, dreams, problems, company_help, company_workers, company_role, image} = req.body
            const {personaId} = req.params
            const personaExist = await Persona.findById({_id: personaId})
            if(!personaExist){
                return res.status(401).json({error:"Nao é possivel atualizar uma persona nao cadastrado"})
            }
            const persona = await Persona.findByIdAndUpdate({
                _id: personaId
            },{
                name, sex, age, role, where_works, scolarship, communication_means, 
                dreams, problems, company_help, company_workers, company_role, image
            },{
                new: true
            })
            return res.status(200).json({persona})
        } catch(error){
            console.log(error)
            return res.status(500).json({msg:'Problemas no servidor'})
        }
    },

    //DELETE ONE PERSONA ON THE LIST
    async delete (req,res) {
        try{
            const {personaId} = req.params
            const personaExist = await Persona.findById({_id: personaId})
            if(!personaExist){
                return res.status(401).json({error:"Nao é possivel deletar uma persona nao cadastrada"})
            }
            const persona = await Persona.findByIdAndDelete({_id: personaId})
            return res.json({persona})
        } catch(error){
            console.log(error)
            return res.status(500).json({msg:'Problemas no servidor'})
        }
    }
}