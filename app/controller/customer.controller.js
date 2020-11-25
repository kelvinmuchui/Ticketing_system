const db = require('../config/db.config.js');
const Customer = db.customers;
const Login = db.login;

// Post a Customer
exports.create = (req, res) => {	
	// Save to MySQL database
	
	var login;
	Login.create({ 
	  //customerid: db.sequelize.Utils.generateUUID(),
	  login_user_name: req.body.login_user_name,
	  login_email_address: req.body.login_email_address,
	  login_rank: req.body.login_rank,
	  login_password: req.body.login_password
	}).then(createdLogin => {		
		// Send created customer to client
		login = createdLogin;
		
		return Customer.create({
			customer_name: req.body.customer_name,
			 customer_contact: req.body.customer_id,
			customer_gender: req.body.customer_gender
		})
	}).then(customer => {
		login.setCustomer(customer)
		res.send('OK');
	})
};
 
// FETCH all Customers include Addresses
exports.findAll = (req, res) => {
	Login.findAll({
		attributes: [['login_id', 'customer_login_id'], ['login_user_name', 'name'],"login_rank"],
		include: [{
			model: Customer,
			where: { customer_login_id: db.Sequelize.col('login.login_id') },
			attributes: ['customer_name', 'customer_contact']
		}]
	}).then((logins) => {
	   res.send(logins);
	});
};
