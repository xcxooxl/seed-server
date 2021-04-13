import { DataTypes, Sequelize } from "sequelize";

async function loadAllModels() {
	const path = require("path");
	const modelsPath = path.join(__dirname, "models");

	require("fs")
		.readdirSync(modelsPath)
		.forEach(function (modelName) {
			// models[path.basename(modelName).replace(".js","")] = require(path.join(modelsPath,modelName))(sequelize,DataTypes);
			require(path.join(modelsPath, modelName))(sequelize, DataTypes);
		});
}

const sequelize = new Sequelize("sqlite::memory:", {
	define: {
		createdAt: "created_at",
		updatedAt: "updated_at",
	},
}); // Example for postgres
function defineRelationships() {
	const example_user = sequelize.model("example_user");
	const exampleModel = sequelize.model("example");
	const userModel = sequelize.model("user");
	exampleModel.belongsToMany(userModel, { through: example_user });
	userModel.belongsToMany(exampleModel, { through: example_user });
}

async function initDB() {
	await loadAllModels();
	defineRelationships();
	await sequelize.sync();
}

(async () => {
	await initDB();

	const example_user = sequelize.model("example_user");
	const exampleModel = sequelize.model("example");
	const userModel = sequelize.model("user");

	for (let i = 1; i <= 25; i++) {
		const example = await exampleModel.create({ name: `example_${i}` });
		const user = await userModel.create({ name: `user_${i}`, exampleId: example });
		await example_user.create({ userId: user.id, exampleId: example.id });
	}
	let users = await userModel.findAll({ include: [exampleModel] });
})();
module.exports = { sequelize };
