const db = require("../model");
const Login = db.Login;
const Admin = db.Admin;
const Customer = db.Customer;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  Login.findOne({
    where: {
      login_user_name: req.body.username
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!"
      });
      return;
    }

    // Email
    Login.findOne({
      where: {
        login_email_address: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });
  });
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;
