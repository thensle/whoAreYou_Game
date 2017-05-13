module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("users", {
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    },
	    {
           timestamps: false 
	    }
    );
    console.log("this is user: " + Users);
    return Users;
};
