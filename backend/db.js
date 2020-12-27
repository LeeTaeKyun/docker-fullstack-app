const mysql = require("mysql");
const pool  = mysql.createPool({
    connectionLimit: 30,
    host: 'mysql',
    user: 'root',
    password: 'wmfrpa',
    database: 'myapp',
});
exports.pool = pool;