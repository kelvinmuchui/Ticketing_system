const db = require("../config/db.config.js");
const Payment = db.payment;
const Op = db.Sequelize.Op;

exports.createPayment = (req, res) => {
  const payment = {
    payment_date: req.body.payment_date,
    payment_mode: req.body.payment_mode,
    payment_reference: req.body.payment_reference,
    payment_ticket_id: req.body.payment_ticket_id
  };
  Payment.create(payment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
// Retrieve all Event from the database.
exports.findAll = (req, res) => {
  const payment_id = req.query.payment_id;
  var condition = payment_id
    ? { payment_id: { [Op.like]: `%${payment_id}%` } }
    : null;

  Event.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// // Find a single EventType with an id
exports.findOne = (req, res) => {
  const payment_id = req.params.payment_id;

  Event.findById(payment_id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Event type with id=" + event_type_id
      });
    });
};

// // Update a EventType by the id in the request
exports.update = (req, res) => {
    const payment_id = req.params.payment_id;

    Event.update(req.body,{
        where: {payment_id: payment_id}
    })
    .then(num => {
        if (num == 1){
            res.send({
                message: "Event type was updated successfully."
              });
        }else {
            res.send({
              message: `Cannot update Event Type with id=${id}. Maybe Event type was not found or req.body is empty!`
            });
          }
    })
    .catch(err => {
        res.status(500).send({
          message: "Error updating Event type with id=" + event_type_id
        });
      });
};

// // Delete a EventType with the specified id in the request
// exports.delete = (req, res) => {};

// // Delete all EventType from the database.
// exports.deleteAll = (req, res) => {};
