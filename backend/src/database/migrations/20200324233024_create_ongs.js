//metodo .up é reponsavel pela criação da tabela
exports.up = function(knex) {
    //create table ongs
    return knex.schema.createTable('ongs', function (table){
        //id primary key
        table.string('id').primary();
        //nome not null
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};
//caso de problemas: deletar
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
