import express from "express";
import { register, login } from "../controllers/userController.js";
const router = express.Router();

router.get('/', (req, res)=>{
  res.send("Welcome to user route")
})

router.post('/register', register);
router.post('/login', login);

export default router;