const db = require("../config/db.config.js");
const Event = db.events;
const Op = db.Sequelize.Op;

exports.createEvent = (req, res) => {
  const event = {
    event_name: req.body.event_name,
    event_time: req.body.event_time,
    event_location: req.body.event_location,
    event_price: req.body.event_price,
    event_event_type_id: req.body.event_event_type_id
  };
  Event.create(event)
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
  const event_id = req.query.event_id;
  var condition = event_id
    ? { event_id: { [Op.like]: `%${event_id}%` } }
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
  const event_id = req.params.event_id;

  Event.findById(event_id)
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
    const event_id = req.params.event_id;

    Event.update(req.body,{
        where: {event_id: event_id}
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
