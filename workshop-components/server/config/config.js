const { PORT, USER, PASSWORD, DB_NAME } = process.env;

const productionConnection = `mongodb://localhost:27017/user-list`;

module.exports = {
  port: PORT || 3005,
  dbConnection: `${productionConnection}`,
};
