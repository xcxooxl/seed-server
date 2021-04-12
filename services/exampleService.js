import { sequelize } from "@db/sequelize";

module.exports = {
	async getExamples() {
		return sequelize.model("example").findAll();
	},
	getExamplesById(id) {
		return sequelize.model("example").findByPk(id);
	},
};
