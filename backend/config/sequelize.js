const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('budget_app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false // disable logging of sql queries
});

sequelize.authenticate()
.then(() => {
    console.log('Connection to MySQL has been established successfully');
})
.catch((err) => {
    console.error('Unable to connect to the database: ', err);
})

module.exports = sequelize;