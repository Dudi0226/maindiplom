const router = require("express").Router();
const { uploadProfile } = require("../controllers/upload_controller");
const { protect } = require("../middleware/protect");

router.route("/uploadImage").post(protect, uploadProfile);

module.exports = router;
