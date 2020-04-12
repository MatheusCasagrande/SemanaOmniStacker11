const knex = require('knex');
// ../ volta uma pasta
const configuration = require('../../knexfile');
//parms configuração de desenvolvimento
const connection = knex(configuration.development);
//exportando conexao com o banco de dados
module.exports = connection;