import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config()


const db = new Sequelize("your database", process.env.DB_USER, process.env.DB_PASS)

try {
  db.authenticate()
  console.log("Database Connected")
} catch (e) { 
  console.log("Database Not Connected " + e)
}

export default db