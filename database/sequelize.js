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
	await sequelize.sync();
}

const sequelize = new Sequelize("sqlite::memory:", {
	define: {
		createdAt: "created_at",
		updatedAt: "updated_at",
	},
}); // Example for postgres
(async () => {
	await loadAllModels();
	const example = sequelize.model("example");
	for (let i = 0; i < 25; i++) {
		example.create({ name: `example_${i}` });
	}
})();
module.exports = { sequelize };
