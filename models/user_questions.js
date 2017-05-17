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
      classMethod: function(models){
        userQuestions.belongsTo(models.Users, {
          foreignKey:{
            allowNull: false
          }
        });
      },
      
      timestamps: false
    }
  );

    return userQuestions;
};
