const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_TOKEN = "aawyeivtyivssec";

const handleSignUpUserController = async (req, res) => {
  try {
    const { FirstName, LastName, Email, Password } = req.body;

    if (!FirstName || !Email || !Password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const existingUser = await User.findOne({ Email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    const user = await User.insertOne({
      FirstName,
      Email,
      LastName,
      Password: hashedPassword,
    });

    return res.status(201).json({
      message: "User created successfully",
      success: true,
      id: user._id,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

const handleSignInUserController = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

   const user = await User.findOne({ Email });

    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
        success: false,
      });
    }

    const isPasswordMatched = await bcrypt.compare(Password, user.Password);

    if (!isPasswordMatched) {
      return res.status(400).json({
        message: "Incorrect password",
        success: false,
      });
    }

    const token = jwt.sign({ Email: user.Email, id: user._id },SECRET_TOKEN);

    return res.status(200).json({
      message: "User logged in successfully",
      success: true,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

module.exports = {
  handleSignInUserController,
  handleSignUpUserController,
};
