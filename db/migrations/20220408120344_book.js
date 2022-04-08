/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('book',table => { 
        table.increments('id');
        table.string('isbn').notNullable().unique();
        table.string('title').notNullable();        
        table.timestamps(true,true);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('book');
  
};
