import Sequelize from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "postgres",
    dialect: "postgres",
  },
);

export default sequelize;
