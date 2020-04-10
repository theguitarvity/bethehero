const service = require('../../domain/Services/SessionService')
const HTTP_BAD_REQUEST = 400

module.exports = {
    async create(request, response){
        const ong = await service.createSession(request.body)
        
        if(!ong){
            return response.status(HTTP_BAD_REQUEST).json({error: 'No ONG found with this ID'})
        }
        return response.json(ong)
    }
}