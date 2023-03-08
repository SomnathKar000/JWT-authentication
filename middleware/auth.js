const jwt = require("jsonwebtoken");
const customError = require("../errors/custom-error");

const authenticationToken = async (req, res, next) => {
  const authToken = req.headers.authorization;
  if (!authToken || !authToken.startsWith("Bearer ")) {
    throw new customError("Not a valid Token", 400);
  }
  const token = authToken.split(" ")[1];
  try {
    req.user = jwt.verify(token, process.env.JWT);
    next();
  } catch (error) {
    throw new customError("Cannnot access this data", 401);
  }
};

module.exports = authenticationToken;
