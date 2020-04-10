const generateUniqueId = require('../../../src/util/generateUniqueId')
describe('Generate unique ID', ()=>{
    it('should generate an unique id', ()=>{
        const uniqueId = generateUniqueId()
        expect(uniqueId).toHaveLength(8)
    })
})