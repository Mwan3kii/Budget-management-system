const sequelize = require('./sequelize');

sequelize.sync({force: true})
.then (() => {
    console.log('Database and tables created successfuly!');
})
.catch ((err) => {
    console.error('There was an error creating the database!', err);
});