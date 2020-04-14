//const mysql = require("mysql");


//only imports the createPool method
const { createPool } = require("mysql");

const foodBankPool = createPool({
    port: process.env.FOODBANKDB_PORT,
    host: process.env.FOODBANKDB_HOST,
    user: process.env.FOODBANKDB_USER,
    password: process.env.FOODBANKDB_PASSWORD,
    database: process.env.FOODBANKDB_NAME,
    connectionLimit: 10
});


module.exports = foodBankPool;

