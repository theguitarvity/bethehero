const connection = require('../../database/conection')
const entity = 'ongs'
module.exports ={
    async create(data){
        await connection(entity).insert(data)
        return data.id
    },
    async getAll(){
        const ongs = await connection(entity).select('*')
        return ongs
    }
}