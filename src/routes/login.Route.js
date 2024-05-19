const router = require("express").Router();
const { Login, adminLogin } = require("../controllers/login_controller");
const { protect } = require("../middleware/protect");
const {
  verifyUser,
  changePassword,
  getLoggedUser,
  disconnect,
} = require("../controllers/login_controller");
router.route("/login").post(Login);
router.route("/adminlogin").post(adminLogin);
router.route("/verify/:token").get(verifyUser);
router.route("/changePassword").put(protect, changePassword);
router.route("/loggedUsers").get(getLoggedUser);
router.route("/disconnect/:username").put(disconnect);
module.exports = router;
// const express = require("express");
// const router = express.Router();
// const logCtrl = require("../controllers/login.Controller");

// router.route("/login").post(logCtrl.Login);
