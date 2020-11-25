module.exports = function(app) {
 
    const eventType = require('../controller/eventType.controller');
 
    // Create a new event
    app.post('/api/eventType', eventType.createEventType);
 
    // Retrieve all event
    app.get('/api/eventType', eventType.findAll);

    //find one 
    app.get('/api/eventType/:event_type_id', eventType.findOne)

    //update event type
    app.put('/api/eventType/:event_type_id', eventType.update)
}