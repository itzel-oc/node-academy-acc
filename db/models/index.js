const path = require('path');
const fs = require('fs');

module.exports = async (sequelize) => {
	const db = {};
	fs.readdirSync(__dirname)
		.filter((file) => {
				return (file.indexOf(".") !== 0) && (file !== "index.js");
		})
		.forEach((file) => {
			console.log(file, '==========', path.join(__dirname, file))
				const model = require(path.join(__dirname, file))(sequelize);
				console.log(model, 'model==========')
				db[model.name] = model;
		});

	Object.keys(db).forEach((modelName) => {
		console.log('model Name', db[modelName]);
		if (db[modelName] && db[modelName].associate) {
				console.log('model Name!', modelName);
				db[modelName].associate(db);
		}
	});
	const categories = await db.categories.findAll({ raw: true });
	const posts = await db.posts.findAll({ 
		raw: false,
		include: [{
			model: db.comments
		}]
	});
	console.log('Categories', categories);
	console.log('posts', posts[0].get({ plain: true }));
	return db;
};