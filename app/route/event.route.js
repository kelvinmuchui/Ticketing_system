module.exports = function(app) {
 
    const event = require('../controller/event.controller');
 
    // Create a new event
    app.post('/api/event', event.createEvent);
 
    // Retrieve all event
    app.get('/api/event', event.findAll);

    // //find one 
    app.get('/api/event/:event_id', event.findOne)

    // //update event type
    app.put('/api/event/:event_id', event.update)
}