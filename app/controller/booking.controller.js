const db = require("../config/db.config.js");
const Booking = db.booking;
const Op = db.Sequelize.Op;

exports.createBooking = (req, res) => {
  const booking = {
    booking_date: req.body.booking_date,
    booking_customer_id: req.body.booking_customer_id,
    booking_event_id: req.body.booking_event_id
  };
  Booking.create(booking)
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
  const booking_id = req.query.booking_id;
  var condition = booking_id
    ? { booking_id: { [Op.like]: `%${booking_id}%` } }
    : null;

  Booking.findAll({ where: condition })
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
  const booking_id = req.params.booking_id;

  Booking.findById(booking_id)
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
    const booking_id = req.params.booking_id;

    Booking.update(req.body,{
        where: {booking_id: booking_id}
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
