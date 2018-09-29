const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");

const Truck = mongoose.model("Truck");

module.exports = app => {
  app.post("/api/trucks", requireLogin, async (req, res) => {
    const { model, volume } = req.body;
    const truck = new Truck({
      model,
      volume,
      dateOrdered: Date.now()
    });
    try {
      await truck.save();

      res.send(truck);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get("/api/trucks", requireLogin, async (req, res) => {
    const trucks = await Truck.find({});
    res.send(trucks);
  });
};
