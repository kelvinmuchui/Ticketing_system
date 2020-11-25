const db = require("../config/db.config.js");
const Ticket = db.ticket;
const Op = db.Sequelize.Op;

exports.createTicket = (req, res) => {
  const ticket = {
    ticket_detail: req.body.ticket_detail,
    ticket_quantity: req.body.ticket_quantity,
    ticket_booking_id: req.body.ticket_booking_id
  };
  Ticket.create(ticket)
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
  const ticket_id = req.query.ticket_id;
  var condition = ticket_id
    ? { ticket_id: { [Op.like]: `%${ticket_id}%` } }
    : null;

  Ticket.findAll({ where: condition })
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

// Find a single EventType with an id
exports.findOne = (req, res) => {
  const ticket_id = req.params.ticket_id;

  Booking.findById(ticket_id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Event type with id=" + event_type_id
      });
    });
};

// Update a EventType by the id in the request
exports.update = (req, res) => {
    const ticket_id = req.params.ticket_id;

    Ticket.update(req.body,{
        where: {ticket_id: ticket_id}
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

// Delete a EventType with the specified id in the request
exports.delete = (req, res) => {};

// Delete all EventType from the database.
exports.deleteAll = (req, res) => {};
