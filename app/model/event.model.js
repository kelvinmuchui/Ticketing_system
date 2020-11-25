module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("event", {
      event_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      event_name: {
        type: Sequelize.STRING
      },
      event_time: { type: Sequelize.STRING },
      event_location: {
          type: Sequelize.STRING
      },
      event_price: {
        type: Sequelize.STRING
      }
    },
		{
			freezeTableName: true, // Model tableName will be the same as the model name
			timestamps: false,
			underscored: true
		  });
    return Event;
  };