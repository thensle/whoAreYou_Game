module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("users", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
	    {
	    	classMethods: {
	    		associate: function(models){
	    			Users.hasMany(models.userQuestions, {
	    				onDelete: "cascade"
	    			});
	    		}
	    	}
	    }

    );
    
    // console.log("this is user: " + Users);
    return Users;
};
