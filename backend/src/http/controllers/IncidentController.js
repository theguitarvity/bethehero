const service = require('../../domain/Services/IncidentService')
const HTTP_NOT_AUTHORIZED = 401
const HTTP_NO_CONTENT = 204
module.exports = {
    async index(request, response){
        const incidents = await service.getAllIncidents(request.query)
        response.header('X-Total-Count', incidents.count)
        return response.json(incidents.incidents)
    },
    async create(request, response) {
        const incident = await service.create(request)
        return response.json({incident})
    },
    async delete(request, response){
        const result = await service.deleteIncident(request)
        
        if(!result){
            return response.status(HTTP_NOT_AUTHORIZED).json({
                error:'error: "Operation not permitted."'
            })
        }
        return response.status(HTTP_NO_CONTENT).send()
    }
}