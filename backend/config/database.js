import { Sequelize } from "sequelize";

const db = new Sequelize("demo", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

export default db;
