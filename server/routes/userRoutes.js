const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");

const User = mongoose.model("users");

module.exports = app => {
  app.get("/admin/api/clients", requireLogin, async (req, res) => {
    const users = await User.find({ role: "admin" }); //change to client

    res.send(users);
  });
};
