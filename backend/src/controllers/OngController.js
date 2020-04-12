//efetuar conexao com o banco de dados
const connection = require('../database/connection');
//importando metodo cryptograph
const crypto = require('crypto');

module.exports = {
    //listar table ongs
    async index (request, response){
        const ongs = await connection('ongs').select('*');
        //já retorna como array
        return response.json(ongs);
    },
    
    async create (request, response){
    
    const { name, email, whatsapp, city, uf } = request.body;
    //criando metodo para gerar um id aleatorio para minha ong
    const id = crypto.randomBytes(4).toString('HEX');
    //await - quando o codigo chega neste ponto ele aguarda a etapa ter fim para entao ele continuar
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })    
    return response.json({ id });
    }
};