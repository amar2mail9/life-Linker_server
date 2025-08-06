import { userModel } from "../models/user.model.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { email, username, password, fullname, role } = req.body;
    const existUser = await userModel.findOne({
      $or: [{ email: email }, { username: username }],
    });

    if (existUser) {
      return res.status(409).json({
        success: false,
        message: "User Already exits",
      });
    } else {
      const hashPassword = bcrypt.hashSync(password, 12);
      const newUser = userModel({
        email,
        username,
        password: hashPassword,
        fullname,
        role: role,
      });

      await newUser.save();

      return res.status(201).json({
        success: true,
        message: "Registration Successfully",
        user: newUser,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
