const knex = require('knex')

module.exports = knex({
    client: 'postgres',
    connection: {
        host: 'database',
        user: 'school',
        password: 'password',
        database: 'school',
    },



})