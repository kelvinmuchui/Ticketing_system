var express = require('express');
var app = express();
var cors = require("cors");
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
require('./app/route/customer.route.js')(app);
require('./app/route/admin.route')(app)
require('./app/route/eventType.route')(app)
require('./app/route/event.route')(app)
require('./app/route/booking.route')(app)
require('./app/route/ticket.route')(app)
require('./app/route/payment.route')(app)
// Create a Server
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})