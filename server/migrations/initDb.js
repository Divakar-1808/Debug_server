const db = require('../config/db');

const initDb = async () => {

    /*
    NOTE:
    Infrastructure code (NO LAB BUGS).
    This ensures tables exist before any request hits controllers.
    */

    const hasTodos = await db.schema.hasTable('todos');
    if (!hasTodos) {
        await db.schema.createTable('todos', (table) => {
            table.increments('id');
            table.integer('user_id').notNullable();
            table.string('title').notNullable();
            table.string('description');
            table.boolean('done').defaultTo(false);
        });
        console.log('Created todos table');
    }

    const hasUsers = await db.schema.hasTable('users');
    if (!hasUsers) {
        await db.schema.createTable('users', (table) => {
            table.increments('id');
            table.string('email').notNullable().unique();
            table.string('password').notNullable();
        });
        console.log('Created users table');
    }
};

module.exports = initDb;
