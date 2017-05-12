module.exports = function(sequelize, DataTypes) {
  var userQuestions = sequelize.define("Questions", {
    question: DataTypes.STRING,
    sfw: DataTypes.BOOLEAN
  },
  {
  	classMethods: {
  		associate: function(models){
  			userQuestions.belongsTo(models.User, {
  				foreignKey: {
  					allowNull: false
  				}
  			});
  	}
  }

 });
  return userQuestions;
};