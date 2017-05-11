module.exports = function(sequelize, DataTypes) {
  var Questions = sequelize.define("Questions", {
    question: DataTypes.STRING,
    sfw: DataTypes.BOOLEAN
  }, {
  	timestamps: false
  },
  {
  	classMethods: {
  		associate: function(models){
  			Questions.belongsTo(models.User, {
  				foreignKey: {
  					allowNull: false
  				}
  			});
  	}
  }

 });
  return Questions;
};