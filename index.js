const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./server/config/keys");
require("./server/models/User");
require("./server/services/passport");

mongoose.connect(keys.mongoURI);
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./server/routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
