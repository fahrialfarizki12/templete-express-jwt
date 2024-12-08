import { Sequelize, DataTypes } from "sequelize";
import db from "../config/db.js"

const user = db.define("users", {
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, { freezeTableName: true }
)

const sync = async () => {
  await user.sync()
}
sync()

export default user