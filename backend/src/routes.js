const express = require('express')
const {celebrate, Segments, Joi} = require('celebrate')
const OngController = require('./http/controllers/OngController')

const IncidentController = require('./http/controllers/IncidentController')

const ProfileController = require('./http/controllers/ProfileController')

const SessionController = require('./http/controllers/SessionController')

const routes = express.Router()

routes.get('/ongs', OngController.index)

routes.post('/ongs',celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), 
OngController.create)

routes.get('/incidents', celebrate({
    [Segments.QUERY]:Joi.object().keys({
        page:Joi.number()
    })
}),IncidentController.index)
routes.post('/incidents',celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]:Joi.object().keys({
        title:Joi.string().required(),
        description:Joi.string().required(),
        value:Joi.number().required()
    })
}), IncidentController.create)
routes.delete('/incidents/:id',celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
    [Segments.QUERY]:Joi.object().keys({
        id:Joi.number().required()
    })
}), IncidentController.delete)

routes.get('/profile', celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}),ProfileController.index)

routes.post('/session',celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), SessionController.create)



module.exports = routes