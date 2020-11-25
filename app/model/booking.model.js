module.exports = (sequelize, Sequelize) => {
    const Booking = sequelize.define("booking", {
      booking_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
     
      booking_date: { type: Sequelize.DATE },
      booking_customer_id: {
        type: Sequelize.INTEGER,
        references: {
            model :"customer",
            key:"customer_id"
        }
      },
      booking_event_id: {
        type: Sequelize.INTEGER,
          references: {
              model : "event",
              key: "event_id"
          }
      }
  
    },
    
    {
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
      });

    return Booking;

  };