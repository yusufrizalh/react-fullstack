import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Categories = db.define(
  "categories",
  {
    name: {
      type: DataTypes.STRING
    }
  },
  {
    freezeTableName: true
  }
);

export default Categories;
