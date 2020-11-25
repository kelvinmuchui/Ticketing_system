module.exports = (sequelize, Sequelize) => {
    const EventType = sequelize.define("eventType", {
      event_type_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      event_type_name: {
        type: Sequelize.STRING
      },
      event_type_description: { type: Sequelize.STRING },

    },
		{
			freezeTableName: true, // Model tableName will be the same as the model name
			timestamps: false,
			underscored: true
		  });
    return EventType;
  };