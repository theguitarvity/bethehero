const OngRepository = require('../Repositories/OngRepository')
module.exports = {
    async createSession(data){
        const { id } = data
        const ong = await OngRepository.getOngById(id)

        return ong
    }
}