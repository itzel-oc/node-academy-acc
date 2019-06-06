const Sequelize = require('Sequelize');
const debug = require('debug')('app:sequelize');
const modelsBuilder = require('./models');

const {
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    DB_PORT
} = process.env;

module.exports = {
    async initConnection(app) {
        const sequelize = new Sequelize('academy', DB_USERNAME, DB_PASSWORD, {
            dialect: 'postgres',
            host: 'localhost',
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 1000
            },
            port: DB_PORT,
            logging: true
        });
        this.defineModels(sequelize, app);
        try {
            // await this.sequelize.authenticate();
            await sequelize.authenticate();
            debug('Connection has been established successfully');
        } catch(err) {
            debug(err);
        }
        return sequelize;
    },
    defineModels(sequelize, app) {
        const models = modelsBuilder(sequelize);
        console.log('models ===========', JSON.stringify(models));
        app.set('Models', models);
    } 
}