const crypto = require('crypto')
const OngReository = require('../Repositories/OngRepository')
module.exports = {
    async createOng(data){
        const {name, email, whatsapp, city, uf} = data
        const id = crypto.randomBytes(4).toString('HEX')

        const ong = await OngReository.create({
            id,
            name, 
            email, 
            whatsapp, 
            city, 
            uf
        })

        return ong

    },
    async getAllOngs(){
        const ongs = await OngReository.getAll()
        return ongs
    }
}