const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./server/config/keys");
require("./server/models/User");
require("./server/models/Truck");
require("./server/models/Zone");
require("./server/services/passport");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);
const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./server/routes/authRoutes")(app);
require("./server/routes/billingRoutes")(app);
require("./server/routes/orderRoutes")(app);
require("./server/routes/userRoutes")(app);
require("./server/routes/truckRoutes")(app);
require("./server/routes/driverRoutes")(app);
require("./server/routes/zoneRoutes")(app);

if (process.env.NODE_ENV === "production") {
  //Express will serve up production assets like main.js or main.css file
  app.use(express.static("client/build"));
  //Express will serve up the index.html file if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
