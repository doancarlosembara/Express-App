/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('users', (table) =>{
        table.increments('id')
        table.string('nama', 255)
        table.string('alamat_rumah', 255)
        table.string('email', 255)
        table.integer('umur')
        table.timestamps()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTable('users')
};
