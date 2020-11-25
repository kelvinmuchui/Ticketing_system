module.exports = function(app) {
 
    const payment= require('../controller/payment.controller');
 
    // Create a new event
    app.post('/api/eventType', payment.createPayment);
 
    // Retrieve all event
    app.get('/api/payment', payment.findAll);

    //find one 
    app.get('/api/payment/:payment_id', payment.findOne)

    //update event type
    app.put('/api/payment/:payment_id', payment.update)
}