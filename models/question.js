module.exports = function(sequelize, DataTypes) {
  var Questions = sequelize.define("Questions", {
    question: DataTypes.STRING,
    sfw: DataTypes.BOOLEAN, defaultValue: false,
  });
  return Questions;
};