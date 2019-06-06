const sequelize = require('./sequelize');

module.exports = (app) => {
    app.set('sequelize', sequelize.initConnection(app));
};