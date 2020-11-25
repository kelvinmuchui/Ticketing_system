const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customers = require('../model/customer.model.js')(sequelize, Sequelize);
db.login =require('../model/login.model')(sequelize, Sequelize);
db.admin = require('../model/admin.model')(sequelize, Sequelize);
db.eventType = require('../model/eventType.model')(sequelize, Sequelize);
db.events = require('../model/event.model')(sequelize, Sequelize);
db.booking = require('../model/booking.model')(sequelize, Sequelize);
db.ticket = require('../model/ticket.model')(sequelize, Sequelize);
db.payment = require('../model/payment.model')(sequelize, Sequelize);
db.events.belongsTo(db.eventType, {foreignKey: "event_event_type_id", targetKey: "event_type_id"});
db.eventType.hasMany(db.events, {foreignKey: "event_event_type_id",targetKey: "event_type_id"})
db.customers.belongsTo(db.login, {foreignKey: "customer_login_id", targetKey: "login_id"})
db.login.hasOne(db.customers, { foreignKey: "customer_login_id", targetKey: "login_id"});
db.admin.belongsTo(db.login, {foreignKey: "admin_login_id", targetKey: "login_id"});
db.login.hasOne(db.admin, { foreignKey: "admin_login_id", targetKey: "login_id"});
module.exports = db;