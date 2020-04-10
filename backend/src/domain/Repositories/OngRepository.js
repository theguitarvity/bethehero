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
    },
    async getOngById(id){
        const ong = await connection(entity)
            .select('*')
            .where('id', id)
            .first()
        return ong
    }
}