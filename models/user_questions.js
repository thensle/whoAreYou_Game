module.exports = function(sequelize, DataTypes) {

  var userQuestions = sequelize.define("Questions", {
    question: {
      type: DataTypes.STRING
    },
    sfw: { 
        type: DataTypes.BOOLEAN    
    }

    // }
    // classMethods: {
    //   associate: function(models){
    //     userQuestions.belongsTo(models.User, {
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });
    //   }
    // },
  	
  }) 
   // {
   //      timestamps: false,
   //    }
    console.log('this is user questions' + userQuestions)
    return userQuestions;
};