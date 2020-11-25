module.exports = (sequelize, Sequelize) => {
    const Ticket = sequelize.define("ticket", {
      ticket_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      ticket_details: {
        type: Sequelize.STRING
      },
      ticket_quantity: { type: Sequelize.INTEGER },
      ticket_booking_id: {
        type: Sequelize.INTEGER,
          references: {
              model : "booking",
              key: "booking_id"
          }
      }  
    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
      });
    return Ticket;
  };