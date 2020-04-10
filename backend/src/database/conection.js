const knex = require('knex')
const env = process.env.NODE_ENV
const configuration = require('../../knexfile')
const config = env === 'test'? configuration.test : configuration.development
const connection = knex(config)

module.exports = connection