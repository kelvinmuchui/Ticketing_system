module.exports = function(app) {
 
    const admins = require('../controller/admin.controller');
 
    // Create a new Customer
    app.post('/api/admins', admins.create);
 
    // Retrieve all Customer
    //app.get('/api/customers', customers.findAll);
}