const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const loginData = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError("Please enter a username and password", 400);
  }
  // just for demo ,normaly the data will be provided by DB !!!
  const id = new Date().getDate();
  // create token
  const token = jwt.sign({ username, id }, process.env.JWT, {
    expiresIn: "30d",
  });

  res.status(200).json({ success: true, token: token });
};
const dashbord = async (req, res) => {
  const user = req.user;
  let randomNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello ${user.username} `,
    Number: `Your luccy number ${randomNumber}`,
  });
};

module.exports = { loginData, dashbord };
