const request = require('supertest')
const app = require('../../src/app')
const faker = require('faker')
const connection = require('../../src/database/conection')
describe('ONG', ()=>{
    beforeEach(async ()=>{
        await connection.migrate.latest()
    })
    it('should be able to create a new Ong', async ()=>{
        const response = await request(app)
            .post('/ongs')
            .send({
                name: faker.name.findName(),
                email: faker.internet.email(),
                whatsapp: faker.random.number({min:10, max:11}),
                city: faker.address.city(),
                uf: faker.random.word().substr(0,2)
            })

        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})