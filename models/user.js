module.exports = function(sequelize, DataTypes) {
	
	var User = sequelize.define("User", 
	{
		email: {
			type 		: DataTypes.STRING,
			isUnique	: true,
			allowNull	: false,
			validate 	: {
				isEmail: true
			}
		}
		// password: {
		// 	type: DataTypes.STRING,
		// 	// allowNull: false,
		// },

		
		// classMethods: {
		// 	associate: function(models){
		// 		User.hasMany(models.userQuestions, {
		// 			onDelete: "cascade"
		// 		})
		// 	}
		// }

	}); 
	// {
	// 	timestamps: true,
	// }
	console.log("this is user: " + User)
	return User;
};