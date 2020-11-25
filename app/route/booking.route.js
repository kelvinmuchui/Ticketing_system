module.exports = function(app) {
 
    const booking = require('../controller/booking.controller');
 
    // Create a new event
    app.post('/api/booking', booking.createBooking);
 
    // Retrieve all event
    app.get('/api/booking', booking.findAll);

    // //find one 
    app.get('/api/booking/:booking_id', booking.findOne)

    // //update event type
    app.put('/api/booking/:booking_id', booking.update)
}