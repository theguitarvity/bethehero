const service = require('../../../src/domain/Services/OngService')
const generateUniqueId = require('../../../src/util/generateUniqueId')
const faker = require('faker')
const repository = require('../../../src/domain/Repositories/OngRepository')
describe('ONG Service', ()=>{
    const createOng = jest.fn()
    const getAll = jest.fn()
    beforeEach(async ()=>{
        
    })
    it('should be able to create a ong', async () =>{
        const data = {
            id:generateUniqueId(),
            name: faker.name.findName(),
            email: faker.internet.email(),
            whatsapp: faker.random.number({min:10, max:11}),
            city: faker.address.city(),
            uf: faker.random.word().substr(0,2)
        }
        createOng.mockImplementation(create => )
        const result = service.createOng(data)
        expect(result).toEqual(data.id)
    })
    
})