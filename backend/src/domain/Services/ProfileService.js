const IncidentService = require('./IncidentService')
module.exports = {
    async getIncidentsByOng(data){
        const ong_id = data.headers.authorization
        const inicidents = await IncidentService.getIncidentByOngId(ong_id)

        return inicidents

    }
}