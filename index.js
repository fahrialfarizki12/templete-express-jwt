import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./router/UsersRouter.js"
const app = express()
dotenv.config()

app.use(router)
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT, () => {
  console.log(`Server Berjalan Di http://localhost:${process.env.PORT}`)
})
