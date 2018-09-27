const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const requireCredits = require("../middleware/requireCredits");

const Order = mongoose.model("Order");

module.exports = app => {
  app.get("/api/order/thanks", (req, res) => {
    res.send("Thank you for ordering");
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

  app.get("/admin/api/all_orders", requireLogin, async (req, res) => {
    const orders = await Order.find({});

    res.send(orders);
  });
  app.get("/api/orders", requireLogin, async (req, res) => {
    const orders = await Order.find({ _user: req.user.id });

    res.send(orders);
  });
};
