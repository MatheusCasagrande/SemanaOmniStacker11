const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        //buscando o id atraves do corpo da requisição
        const { id } = request.body;
        //buscando uma ong do banco de dados
        const ong = await connection('ongs').where('id', id).select('name').first();

        //se a ong não existir retorna erro
        if (!ong){
            return response.status(400).json({ error: 'No ONG found with this ID' })
        }

        return response.json(ong);
    }
};