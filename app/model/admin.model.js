module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
      admin_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      admin_name: {
        type: Sequelize.STRING
      },
      admin_gender: { type: Sequelize.STRING },
      admin_contact: {
          type: Sequelize.STRING
      }
    }
    ,
		{
			freezeTableName: true, // Model tableName will be the same as the model name
			timestamps: false,
			underscored: true
		  });
    return Admin;
  };