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
    // const zonesWithLatLng = []; // zones street to coordinates map
    // const stopsWithLatLng = []; // stops street to coordinates map
    const stops = [];

    //map zone locations to coordinates
    // for (zone of zones) {
    //   let zoneWithCord = {};
    //   zoneWithCord.center = zone.center;
    //   zoneWithCord.radius = zone.radius;

    //   zonesWithLatLng.push(zoneWithCord);
    // }

    //sort to stops by origin
    for (pickup of pickups) {
      stops.push({
        location: pickup.origin,
        description: pickup.description,
        orderId: pickup.id,
        volume: pickup.volume,
        sort: "Pickup"
      });
    }

    //sort to stops by destination
    for (drop of drops) {
      stops.push({
        location: drop.destionation,
        description: drop.description,
        orderId: picdropkup.id,
        volume: drop.volume,
        sort: "Drop"
      });
    }

    // //map stop locations to coordinates
    // for (stop of stops) {
    //   googleMapsClient.geocode(
    //     {
    //       address: stop.location
    //     },
    //     (err, response) => {
    //       if (!err) {
    //         stop.latlng = response.json.results[0].geometry.location;
    //       }
    //     }
    //   );
    // }

    for (driver of drivers) {
    }

    res.send(zonesWithLatLng);
    // const schedules = [
    //   {
    //     driverId: "345",
    //     driver: "Bradd Pitt",
    //     stops: [
    //       {
    //         location: "Ha-Hadarim Street, Rishon LeTsiyon, Israel",
    //         sort: "Drop",
    //         orderId: "1"
    //       },
    //       {
    //         location: "Rothschild Street, Bat Yam, Israel",
    //         sort: "Drop",
    //         orderId: "2"
    //       },
    //       {
    //         location: "Bograshov Street, Tel Aviv-Yafo, Israel",
    //         sort: "Drop",
    //         orderId: "4"
    //       }
    //     ]
    //   },
    //   {
    //     driverId: "345",
    //     driver: "Stanley Copper",
    //     stops: [
    //       { location: "beersheva", orderId: "1" },
    //       { location: "sderot", orderId: "2" },
    //       { location: "beeryakov", orderId: "4" }
    //     ]
    //   },
    //   {
    //     driverId: "345",
    //     driver: "brad",
    //     stops: [
    //       { location: "telaviv", orderId: "1" },
    //       { location: "petahtikva", orderId: "2" },
    //       { location: "ramatgan", orderId: "4" }
    //     ]
    //   },
    //   {
    //     driverId: "345",
    //     driver: "brad",
    //     stops: [
    //       { location: "rishon1", orderId: "1" },
    //       { location: "rishon1", orderId: "2" },
    //       { location: "rishon1", orderId: "4" }
    //     ]
    //   },
    //   {
    //     driverId: "345",
    //     driver: "brad",
    //     stops: [
    //       { location: "beersheva", orderId: "1" },
    //       { location: "sderot", orderId: "2" },
    //       { location: "beeryakov", orderId: "4" }
    //     ]
    //   },
    //   {
    //     driverId: "345",
    //     driver: "brad",
    //     stops: [
    //       { location: "telaviv", orderId: "1" },
    //       { location: "petahtikva", orderId: "2" },
    //       { location: "ramatgan", orderId: "4" }
    //     ]
    //   }
    // ];
    // res.send(schedules);
  });

  app.get("/driver/api/schedule", requireLogin, async (req, res) => {
    //use req.user.id
    // const schedule = {
    //   driver: "brad",
    //   stops: [
    //     { location: "telaviv", orderId: "5baa37942ae3221e1cb32a4d" },
    //     { location: "petahtikva", orderId: "2" },
    //     { location: "ramatgan", orderId: "4" }
    //   ]
    // };
    const schedule = {
      driverId: "345",
      driver: "Bradd Pitt",
      stops: [
        {
          location: "Ha-Hadarim Street, Rishon LeTsiyon, Israel",
          sort: "Drop",
          orderId: "5bb61b76e373d408dc861be8"
        },
        {
          location: "Rothschild Street, Bat Yam, Israel",
          sort: "Drop",
          orderId: "5bb61b22e373d408dc861be7"
        },
        {
          location: "Bograshov Street, Tel Aviv-Yafo, Israel",
          sort: "Drop",
          orderId: "5bb61ad3e373d408dc861be6"
        }
      ]
    };

    res.send(schedule);
  });
};
