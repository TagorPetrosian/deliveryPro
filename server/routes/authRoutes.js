const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      if (req.user.role === "admin") {
        return res.redirect("/admin/dashboard/metrics");
      } else if (req.user.role === "driver") {
        return res.redirect("/driver/dashboard/schedule");
      } else if (req.user.role === "client") {
        return res.redirect("/client/dashboard/orders");
      }
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    // res.send(req.user);
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
