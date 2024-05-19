const router = require("express").Router();
const { protect } = require("../middleware/protect");
const { createCount, getCount } = require("../controllers/count_.controller");
router.route("/").get(protect, getCount);
router.route("/create").post(protect, createCount);
module.exports = router;
