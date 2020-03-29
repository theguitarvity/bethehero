const IncidentRepository = require('../Repositories/IncidentRepository')
const HTTP_NOT_AUTHORIZED = 401
const HTTP_NO_CONTENT = 204
module.exports = {
    async create(data){
        const ong_id = data.headers.authorization
        const { title, description, value} = data.body 

        const ong = await IncidentRepository.create({
            title,
            description, 
            value,
            ong_id
        })       

        return ong
    },
    async getAllIncidents(data){
        const { page = 1 } = data
        const incidents = await IncidentRepository.getIncidentsWithOngs(page)

        const count = await IncidentRepository.count()

        return { incidents, count }

    },
    async deleteIncident(datas){
        const { id } = data.params
        const ong_id = data.headers.authorization
        const incident = await IncidentRepository.getIncidentById(id)
        
        if(incident.ong_id !== ong_id){
            return false
        }   
        await IncidentRepository.delete(id)

        return true
    },
    async getIncidentByOngId(id){
        const incidents = await IncidentRepository.getIncidentByOngId(id)
        return incidents
    }
}