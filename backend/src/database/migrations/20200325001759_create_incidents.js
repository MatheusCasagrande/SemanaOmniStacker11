exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        //cria uma primary key auto_increment
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        //criando um relacionamento da ONG que criou o caso
        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
