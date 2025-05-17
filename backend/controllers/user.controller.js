import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ _id: id }, process.env.SECRET, { expiresIn: "3d" });
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.login(username, password);
    const token = createToken(user._id);
    res.status(200).json({ username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const signupUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    // console.log("Signup data:", username, password, email);
    console.log(req.body);

    const user = await User.signup(username, password, email);
    const token = createToken(user._id);
    res.status(200).json({ username, token });
  } catch (error) {
    console.error("Signup error:", error); // <--- Add this
    res.status(400).json({ error: error.message });
  }
};
