import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const AuthToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Token diperlukan" });
  }

  const token = authorization.split(" ")[1];
  const secret = process.env.SECRET;

  try {
    const decode = jwt.verify(token, secret);
    req.cekValid = decode;
    next()
  } catch (e) {
    return res.status(403).json({ message: "Token tidak valid atau kedaluwarsa" });
  }
};

export default AuthToken;
