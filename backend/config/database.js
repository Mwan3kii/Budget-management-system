const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'budget_app',
    connectTimeout: 10000,
});

const connectDatabase = () => {
    db.connect (err => {
        if (err) {
            console.error('Error connecting to the database', err);
            throw err;
        }
        console.log('MySQL database connected successfully: ', db.config.host);
    });
}

module.exports = connectDatabase;