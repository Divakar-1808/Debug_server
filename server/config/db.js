const knex = require('knex');
const path = require('path');
const fs = require('fs');

const isVercel = process.env.VERCEL === '1';

const localDbPath = path.join(__dirname, '..', 'database', 'todos.db');
const vercelDbPath = path.join('/tmp', 'todos.db');

 const dbPath = isVercel ? vercelDbPath : localDbPath;


if (isVercel && !fs.existsSync(vercelDbPath) && fs.existsSync(localDbPath)) {
    fs.copyFileSync(localDbPath, vercelDbPath);
}

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: dbPath
    },
    useNullAsDefault: true
});

module.exports = db;
