const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const posts = sequelize.define('posts', {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        shortDescription: {
            type: Sequelize.STRING,
            field: 'short_description',
            allowNull: false         
        },
        description: {
            type: Sequelize.STRING,
            field: 'short_description',
            allowNull: false         
        },
        publishedAt: {
            type: Sequelize.DATE,
            field: 'published_at',
            allowNull: false         
        },
        image: {
            type: Sequelize.STRING,
            field: 'short_description',
            allowNull: false         
        },
    }, {
        classMethods: {
          associate: function(models) {
            console.log('============ function called ============');
            posts.hasMany(models.comments, {
              onDelete: "CASCADE",
              foreignKey: {
                allowNull: false
              }
            });
          }
        },
        timestamps: false,
        underscored: true,
    });

    posts.associate = (models) => {
      console.log('============ function called ============');
      posts.hasMany(models.comments, {
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: false
        }
      });
    }

    return posts;
}