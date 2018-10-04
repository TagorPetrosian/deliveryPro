const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");

const Order = mongoose.model("Order");
const User = mongoose.model("users");
const Zone = mongoose.model("Zone");
const Truck = mongoose.model("Truck");

module.exports = app => {
  app.get("/admin/api/schedules", requireLogin, async (req, res) => {
    const pickups = await Order.find({ recieved: false });
    const drops = await Order.find({ recieved: true, delivered: false });
    const zones = await Zone.find({});
    const trucks = await Truck.find({});
    const drivers = await User.find({ role: "driver" });
    const stops = [];

    for (pickup of pickups) {
      stops.push({
        location: pickup.origin,
        description: pickup.description,
        orderId: pickup.id,
        volume: pickup.volume,
        sort: "Pickup"
      });
    }

    for (drop of drops) {
      stops.push({
        location: drop.destionation,
        description: drop.description,
        orderId: picdropkup.id,
        volume: drop.volume,
        sort: "Drop"
      });
    }

    pickups.map(pick);
    const schedules = [
      {
        driver: "brad",
        stops: [
          { location: "rishon1", orderId: "1" },
          { location: "rishon1", orderId: "2" },
          { location: "rishon1", orderId: "4" }
        ]
      },
      {
        driver: "brad",
        stops: [
          { location: "beersheva", orderId: "1" },
          { location: "sderot", orderId: "2" },
          { location: "beeryakov", orderId: "4" }
        ]
      },
      {
        driver: "brad",
        stops: [
          { location: "telaviv", orderId: "1" },
          { location: "petahtikva", orderId: "2" },
          { location: "ramatgan", orderId: "4" }
        ]
      },
      {
        driver: "brad",
        stops: [
          { location: "rishon1", orderId: "1" },
          { location: "rishon1", orderId: "2" },
          { location: "rishon1", orderId: "4" }
        ]
      },
      {
        driver: "brad",
        stops: [
          { location: "beersheva", orderId: "1" },
          { location: "sderot", orderId: "2" },
          { location: "beeryakov", orderId: "4" }
        ]
      },
      {
        driver: "brad",
        stops: [
          { location: "telaviv", orderId: "1" },
          { location: "petahtikva", orderId: "2" },
          { location: "ramatgan", orderId: "4" }
        ]
      }
    ];
    res.send(schedules);
  });

  app.get("/driver/api/schedule", requireLogin, async (req, res) => {
    //use req.user.id
    const schedule = {
      driver: "brad",
      stops: [
        { location: "telaviv", orderId: "5baa37942ae3221e1cb32a4d" },
        { location: "petahtikva", orderId: "2" },
        { location: "ramatgan", orderId: "4" }
      ]
    };

    res.send(schedule);
  });
};
