import user from "../models/UsersModal.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"


//function getData in database
export const getData = async (req, res) => {
  try {
    /* code */
    const response = await user.findAll()
    res.status(200).json(response)
  } catch (e) {
    res.status(500).json({ message: "Gagal Ambil Data" })
  }
}

//function etc here!!
