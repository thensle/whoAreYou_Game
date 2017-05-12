module.exports = function(sequelize, DataTypes) {
  var Questions = sequelize.define("Questions", {
    question: {
    	type: DataTypes.STRING
    },
    sfw: {
    	type: DataTypes.BOOLEAN
    },
 },
	 {
	 	timestamps: false
	 }
 );
  return Questions;
};