const indexControllers = {};

indexControllers.home = async (req, res) => {
  return res.json({ ok: true, message: "server is live.." });
};

module.exports = indexControllers;
