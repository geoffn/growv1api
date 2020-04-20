//only imports the createPool method
const { createPool } = require("mysql");

const UserPool = createPool({
    port: process.env.USERDB_PORT,
    host: process.env.USERDB_HOST,
    user: process.env.USERDB_USER,
    password: process.env.USERDB_PASSWORD,
    database: process.env.USERDB_NAME,
    connectionLimit: 10
});


module.exports = UserPool;
