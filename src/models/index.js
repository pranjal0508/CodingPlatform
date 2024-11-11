import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.DB_NAME);

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;