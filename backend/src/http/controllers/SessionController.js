const connection = require('../../database/conection')
const HTTP_BAD_REQUEST = 400
module.exports = {
    async create(request, response){
        const { id } = request.body

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first()
        
        if(!ong){
            return response.status(HTTP_BAD_REQUEST).json({error: 'No ONG found with this ID'})
        }
        return response.json(ong)
    }
}