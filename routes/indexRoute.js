const express = require("express");
const router = express.Router();
const { ensureAuthenticated, isAdmin } = require("../middleware/checkAuth");

router.get("/", (req, res) => {
  res.send("welcome");
});

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  // console.log("PRINT\n\n");
  console.log(req.session);
  // console.log("\nEND PROFILE\n");
  // console.log(req.user);
  // console.log(typeof req.user);
  res.render("dashboard", {
    user: req.user,
    profile: req.session.profile
  });
});

router.get("/admin", ensureAuthenticated, (req, res) => {
  
  req.sessionStore.all((err, sessions) => {
    if (err) {
      console.log(err);
      return res.redirect("/auth/login");
    }

    //console.log(sessions);

    let sessionList = [];
    for (let key in sessions) {
      if (req.user.id != sessions[key].passport.user) {
        sessionList.push({"SessionID":key, "UserID":sessions[key].passport.user})
      }
    }
    //console.log(sessionList);
    res.render("admin", { user: req.user, sessions: sessionList });
  });

});

router.get('/destroy/:sessionId', ensureAuthenticated, (req, res) => {
  const sessionId = req.params.sessionId;
  req.sessionStore.destroy(sessionId, (err) => {
    if (err) {
      console.log(err);
      return res.redirect('/admin');
    }
    res.redirect('/admin');
  });
});

module.exports = router;