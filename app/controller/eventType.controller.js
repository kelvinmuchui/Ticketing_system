const db = require("../config/db.config.js");
const EventType = db.eventType;
const Op = db.Sequelize.Op;

exports.createEventType = (req, res) => {
  const eventType = {
    event_type_name: req.body.event_type_name,
    event_type_description: req.body.event_type_description
  };
  EventType.create(eventType)
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
  const event_type_id = req.query.event_type_id;
  var condition = event_type_id
    ? { event_type_id: { [Op.like]: `%${event_type_id}%` } }
    : null;

  EventType.findAll({ where: condition })
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
  const event_type_id = req.params.event_type_id;

  EventType.findById(event_type_id)
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
    const event_type_id = req.params.event_type_id;

    EventType.update(req.body,{
        where: {event_type_id: event_type_id}
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
