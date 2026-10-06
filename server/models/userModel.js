const db = require("../config/db");

exports.getAllUsers = async () => {
  try {
    return db("users").select('id', 'email');
  } catch (error) {
    console.error("[MODEL][getAllUsers]", error.message);
    throw error;
  }
};

exports.createUser = async (email, password) => {
  try {
    const [id] = await db("users").insert({ email, password });
    return id;
  } catch (error) {
    console.error("[MODEL][createUser]", error.message);
    throw error;
  }
};

exports.getUserByEmail = async (email) => {
  try {
    return await db("users").where({ email }).first();
  } catch (error) {
    console.error("[MODEL][getUserByEmail]", error.message);
    throw error;
  }
};

/*
UTILITY FOR SEEDING (NOT A LAB BUG)
*/
exports.seedUsers = async () => {
  const users = [
    { email: "alice@test.com", password: "1234" },
    { email: "bob@test.com", password: "1234" },
  ];

  for (const user of users) {
    await db("users").insert(user);
  }
};
