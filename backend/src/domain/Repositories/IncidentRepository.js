const connection = require('../../database/conection')
const entity = 'incidents'

module.exports = {
    async create(data){
        const [id] = await connection(entity).insert(data)
        return id
    },
    async getIncidentsWithOngs(page){
     
        const incidents = await connection(entity)
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(
                    [
                        'incidents.*', 
                        'ongs.name', 
                        'ongs.email', 
                        'ongs.whatsapp', 
                        'ongs.city', 
                        'ongs.uf'
                    ]
                )
        return incidents
    },
    async count(){
        const [count] = await connection(entity).count()
        return count["count(*)"]  
    },
    async delete(id){
        await connection(entity).where('id', id).delete()
    },
    async getIncidentById(id){
        const incident = await connection(entity)
            .where('id', id)
            .first()
        
        return incident
    },
    async getIncidentByOngId(ong_id){
        const incidents = connection(entity)
                .where('ong_id', ong_id)
                .select('*')
        return incidents
    }
}