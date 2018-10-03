const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");

module.exports = app => {
  app.get("/admin/api/schedules", requireLogin, async (req, res) => {
    // const users = await User.find({ role: "driver" }); //change to client
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
    const schedule = {
      driver: "brad",
      stops: [
        { location: "telaviv", orderId: "1" },
        { location: "petahtikva", orderId: "2" },
        { location: "ramatgan", orderId: "4" }
      ]
    };

    res.send(schedule);
  });
};
