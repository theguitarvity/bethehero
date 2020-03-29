const express = require('express')

const OngController = require('./http/controllers/OngController')

const IncidentController = require('./http/controllers/IncidentController')

const ProfileController = require('./http/controllers/ProfileController')

const SessionController = require('./http/controllers/SessionController')

const connection = require('./database/conection')
const routes = express.Router()

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)

routes.post('/session', SessionController.create)



module.exports = routes