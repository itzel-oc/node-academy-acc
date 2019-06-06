const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Comment = sequelize.define('comments', {
        content: {
            type: Sequelize.STRING,
            allowNull: false
        },
        author: {
            type: Sequelize.STRING,
            allowNull: false         
        }
    }, {
        timestamps: false,
        underscored: true,
    });

    return Comment;
}