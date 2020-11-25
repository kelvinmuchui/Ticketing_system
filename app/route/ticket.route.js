module.exports = function(app) {
 
    const ticket = require('../controller/ticket.controller');
 
    // Create a new event
    app.post('/api/ticket', ticket.createTicket);
 
    // Retrieve all event
    app.get('/api/ticket', ticket.findAll);

    // //find one 
    app.get('/api/ticket/:ticket_id', ticket.findOne)

    // //update event type
    app.put('/api/ticket/:ticket_id', ticket.update)
}