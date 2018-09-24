const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const requireCredits = require("../middleware/requireCredits");

const Order = mongoose.model("Order");

module.exports = app => {
  app.get("/api/order/thanks", (req, res) => {
    res.send("Thanks for voting!");
  });

  app.post("/api/orders", requireLogin, requireCredits, async (req, res) => {
    const { description, origin, destination, volume } = req.body;

    const order = new Order({
      description,
      origin,
      destination,
      volume,
      _user: req.user.id,
      dateOrdered: Date.now()
    });

    try {
      await order.save();
      req.user.credits -= 50;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
