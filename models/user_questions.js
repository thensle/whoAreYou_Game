module.exports = function(sequelize, DataTypes) {
  var userQuestions = sequelize.define("userQuestions", {
    question: {
      type: DataTypes.STRING
    },
    sfw: { 
        type: DataTypes.BOOLEAN    
    }
  },
    {
      timestamps: false,

      classMethod: function(models){
        userQuestions.belongsTo(models.Users, {
          foreignKey:{
            allowNull: false
          }
        });
      }
    }
  );

    console.log('this is user questions' + userQuestions);
    return userQuestions;
};
