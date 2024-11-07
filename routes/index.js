const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.render("login"));
router.get("/register", (req, res) => res.render("register"));
router.get("/login", (req, res) => res.render("login"));
router.get("/dashboard", (req, res) => {
  if (!req.isAuthenticated()) return res.redirect("/login");
  res.render("dashboard", { user: req.user });
});

module.exports = router;
