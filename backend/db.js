const mysql = require("mysql");
const pool  = mysql.createPool({
    connectionLimit: 30,
    host: proccess.env.MYSQL_HOST,
    user: proccess.env.MYSQL_USER,
    password: proccess.env.MYSQL_ROOT_PASSWORD,
    database: proccess.env.MYSQL_PORT
});
exports.pool = pool;