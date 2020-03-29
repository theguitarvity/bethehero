const service = require('../../domain/Services/ProfileService')
module.exports = {
    async index(request, response){
        const incidents = await service.getIncidentsByOng(request)
        
        return response.json(incidents)
        
    }
}