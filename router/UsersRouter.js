import express from "express"
import { getData } from "../controllers/UsersController.js"
const router = express.Router()

router.get("/",getData)

export default router