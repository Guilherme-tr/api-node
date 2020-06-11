const express = require('express')
const routes = express.Router()
const userController = require('./controllers/userController')

//CRUD DE USERS
routes.post('/user', userController.create)  
routes.put('/user/:userId', userController.update)  
routes.get('/user', userController.list)
routes.get('/user/:userId', userController.show)
routes.delete('/user/:userId', userController.delete)


module.exports = routes
