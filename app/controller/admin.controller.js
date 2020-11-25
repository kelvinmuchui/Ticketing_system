const db = require('../config/db.config.js');
const Admin = db.admin;
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
		
		return Admin.create({
			admin_name: req.body.admin_name,
			admin_contact: req.body.admin_contact,
			admin_gender: req.body.admin_gender
		})
	}).then(admin => {
		login.setAdmin(admin)
		res.send('OK');
	})
};
 
// // FETCH all Customers include Addresses
// exports.findAll = (req, res) => {
// 	Login.findAll({
// 		attributes: [['login_id', 'customer_login_id'], ['login_user_name', 'name'],"login_rank"],
// 		include: [{
// 			model: Customer,
// 			where: { customer_login_id: db.Sequelize.col('login.login_id') },
// 			attributes: ['customer_name', 'customer_contact']
// 		}]
// 	}).then((logins) => {
// 	   res.send(logins);
// 	});
// };