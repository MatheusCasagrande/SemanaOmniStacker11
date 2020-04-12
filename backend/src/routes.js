const express = require('express');
const connection = require('./database/connection');
//importando arquivo de criação das ong
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();
/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de Parâmetros:
 * 
 * Query Parms: Parâmetros nomeados enviados na rota após '?' (filtros, páginação)
 * Route Parms: Parâmetros para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * Databases:
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * 
  * NoSQL: MongoDB, CouchDB
  */

/**
 * Driver: SELECT * FROM users
 * 
 * Query Builder: table('users').select('*').where()
 */

//criando rota para conexão
//('/') rota principal, index - ('/contato') rota para contato
/* routes.post('/users', (request, response) => { 
    //return response.send('Hello World!'); pode ser usado assim porém
    const parms = request.query;
        mostra os parametros de busca da url que utilizam query
    console.log(parms); 
    const body = request.body;
    console.log(body);     
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Matheus Casagrande'});});
*/
//rota para sessão logado
routes.post('/sessions', SessionController.create);

//rota para listar ongs
routes.get('/ongs', OngController.index);
//rota para criação de ongs
routes.post('/ongs', OngController.create);
//rota para criação de incidentes
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
//rota para deletar um incidente
routes.delete('/incidents/:id', IncidentController.delete);

//rota para incidents criados pela própria ong
routes.get('/profile', ProfileController.index);

//exportando variaveis
module.exports = routes;



