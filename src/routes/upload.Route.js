const router = require("express").Router();
const { uploadCount } = require("../controllers/upload_controller");
const { protect } = require("../middleware/protect");

router.route("/uploadImage").post(protect, uploadCount);

module.exports = router;
