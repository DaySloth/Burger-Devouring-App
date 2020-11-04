const mysql = require('mysql');

require('dotenv').config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'Batmanisc00l',
        database: 'burger_db',
        pool: {
            max: 7,
            min: 0,
            idle: 10000
        }
    });
};

module.exports = connection;