const express = require('express')
const routes = express.Router()
const userController = require('./controllers/userController')
const PersonaController = require('./controllers/PersonaController')

//CRUD DE USERS
routes.post('/user', userController.create)  
routes.put('/user/:userId', userController.update)  
routes.get('/user', userController.list)
routes.get('/user/:userId', userController.show)
routes.delete('/user/:userId', userController.delete)

//CRUD DE PERSONAS
routes.post('/persona', PersonaController.create)  
routes.put('/persona/:personaId', PersonaController.update)  
routes.get('/persona', PersonaController.list)
routes.get('/persona/:personaId', PersonaController.show)
routes.delete('/persona/:personaId', PersonaController.delete)

module.exports = routes
