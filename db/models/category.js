const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const category = sequelize.define('categories', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
    });

    return category
}