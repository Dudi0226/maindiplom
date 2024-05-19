const { protect } = require("../middleware/protect");
const { createUser, registerAdmin } = require("../controllers/user.controller");
const { registerUser } = require("../controllers/user.controller");
const { getUsers } = require("../controllers/user.controller");
const { getUsername } = require("../controllers/user.controller");
const { getUser } = require("../controllers/user.controller");
const { deleteUser } = require("../controllers/user.controller");
const { updateUser } = require("../controllers/user.controller");
const {
  checkVerification,
  deleteUnverifiedUsers,
} = require("../controllers/user.controller");

const router = require("express").Router();
//const {getoneUser} = require("../controllers/user.controller/")
router.route("/createUser").post(createUser);
router.route("/registerAdmin").post(registerAdmin);
router.route("/").get(getUsers);
router.route("/:id").get(getUser);
router.route("/qwertyuiop/qwertyuiop").post(getUsername);
router.route("/deleteUser/:id").delete(deleteUser);
router.route("/updateUser/:id").put(updateUser);
router.route("/checkVerification").post(checkVerification);
router.route("/executeOrder66").delete(deleteUnverifiedUsers);

module.exports = router;
