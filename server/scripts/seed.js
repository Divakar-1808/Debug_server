const initDb = require('../migrations/initDb');
const User = require('../models/userModel');
const Todo = require('../models/todoModel');

const seed = async () => {
    try {
        console.log('Initializing DB...');
        await initDb();

        console.log('Seeding users...');
        await User.seedUsers();

        console.log('Seeding todos...');
        await Todo.seedTodos();

        console.log('Seed complete');
        process.exit(0);

    } catch (error) {
        console.error('Seed failed:', error.message);
        process.exit(1);
    }
};

seed();
