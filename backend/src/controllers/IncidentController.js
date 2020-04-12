const connection = require('../database/connection');

module.exports ={
    async index (request, response){
        //começar na pagina 1
        const { page = 1 } = request.query;

        //query para contar o numero total de incidents
        const [count] = await connection('incidents').count();

        //enviar apenas 5 incidents por vez em cada pagina, dividindo-os em páginas
        const incidents = await connection('incidents')
        //interelacionamento de tabelas
        //buscando informações referente a tabela ongs para a incidents
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id') 
        .limit(5)
        .offset( (page - 1) * 5 )
        //selecionando todas as variaveis da tabela incidents, porém pegando apenas alguns da tabela ong
        .select([
            'incidents.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp', 
            'ongs.city', 
            'ongs.uf'
        ]);

        //retornando o count no cabeçalho do header
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create (request, response){
        const { title, description, value } = request.body;
        //acessar o id da ong
        const ong_id = request.headers.authorization;
        //inserir na tabela incidents
        //a primeira variavel retorna para dentro do ID
        const [ id ] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({ id });
    },

    async delete(request, response){
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents').where('id', id).select('ong_id').first();

        if (incident.ong_id !== ong_id){
            return response.status(401).json({ error:'Operation not permitted.' });
        }

        await connection('incidents').where('id', id).delete();
        return response.status(204).send();
    },
};