/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		"example_user",
		{},
		{
			sequelize,
		}
	);
};
