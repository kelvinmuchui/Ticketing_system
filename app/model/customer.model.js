module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('customer', {
	
			
		
		customer_id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		  },
		  customer_name: {
			type: Sequelize.STRING
		  },
		  customer_contact: { type: Sequelize.STRING },
		  customer_gender: {
			  type: Sequelize.STRING
		  }
		},
		{
			freezeTableName: true, // Model tableName will be the same as the model name
			timestamps: false,
			underscored: true
		  });
	
	
	return Customer;
}