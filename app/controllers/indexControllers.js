const jwt = require("jsonwebtoken");

const indexControllers = {};

indexControllers.loginWithEmail = async (req, res) => {
  const { email, password } = req.body;
  console.log({ email, password });

  const packet = { email };
  packet.token = jwt.sign(packet, process.env.JWT_SECRET_USER, { expiresIn: "365d" });

  return res.json({ ok: true, packet, message: "Login is successful" });
};

module.exports = indexControllers;
