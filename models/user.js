module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },

        {
            classMethods: {
                associate: function(models){
                    Users.hasMany(models.userQuestions, {
                        onDelete: "cascade"
                    });
                }
            },

            timestamps: false 
        }
    );
    return Users;
};