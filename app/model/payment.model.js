module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define(
    "payment",
    {
      payment_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      payment_date: {
        type: Sequelize.DATE
      },
      payment_mode: { type: Sequelize.STRING },
      payment_reference: {
        type: Sequelize.STRING
      },
      payment_ticket_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "ticket",
          key: "ticket_id"
        }
      }
    },
    {
      freezeTableName: true, // Model tableName will be the same as the model name
      timestamps: false,
      underscored: true
    }
  );
  return Payment;
};
