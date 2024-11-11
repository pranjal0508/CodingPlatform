import { User } from "../models/users.js";

const register = async (req, res) => {
  const { name, email, password, birthday } = req.body;
  // console.log(name);
  // console.log(password);
  try {
    const user = await User.create({ name, email, password, birthday });
    res.status(201).json({ message: "User created successfully.", user })
  } catch (error) {
    res.status(400).json({ message: "User already exists." })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } })
  const pass = user.toJSON().password;
  if (user && pass === password) {
    req.session.user = user.toJSON();
    // console.log(req.session.user);
    req.session.isLogin = true;
    res.json({ message: "Login Successful" })
  } else{
    req.session.isLogin = false;
    res.json({ error: "Unable to login" })
  }
}

export { register, login };