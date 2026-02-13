const jwt = require("jsonwebtoken");
const User = require("../model/user.model");

const SECRETE_TOKEN = "aawyeivtyivssec";

const authMiddleWare = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  try {
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }
    const token = authHeader.split(" ")[1];

    const verifiedToken = jwt.verify(token, SECRETE_TOKEN);

    if (!verifiedToken) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }

    const verifiedUser = await User.findOne({
      Email: verifiedToken?.Email,
    }).select("-Password");

    if (!verifiedUser) {
      return res.status(401).json({
        message: "not a valid user",
        success: false,
      });
    }

    req.user = verifiedUser;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Token expired...",
        status: false,
      });
    }
    if (error.name == "JsonWebTokenError") {
      return res.status(403).json({
        message: "Invalid token authentication failed...",
        status: false,
      });
    }
    return res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};

module.exports = authMiddleWare;
