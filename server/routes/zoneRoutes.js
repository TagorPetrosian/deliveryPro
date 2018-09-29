const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");

const Zone = mongoose.model("Zone");

module.exports = app => {
  app.post("/api/zones", requireLogin, async (req, res) => {
    const { center, radius } = req.body;
    const zone = new Zone({
      center,
      radius,
      dateAdded: Date.now()
    });
    try {
      await zone.save();

      res.send(zone);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get("/api/zones", requireLogin, async (req, res) => {
    const zones = await Zone.find({});
    res.send(zones);
  });
};
