module.exports = (sequelize, Sequelize) => {
    const Login = sequelize.define("login", {
      login_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      login_user_name: {
        type: Sequelize.STRING
      },
      login_email_address: { type: Sequelize.STRING },
      login_password: {
          type: Sequelize.STRING
      }, 
      login_rank: {
        type: Sequelize.STRING
      }
    },
		{
			freezeTableName: true, // Model tableName will be the same as the model name
			timestamps: false,
			underscored: true
		  });
  
    return Login;
  };