const router = require("express").Router();
const { createNews } = require("../controllers/news_controller");
const { protect } = require("../middleware/protect");
router.route("/create").post(protect, createNews);
module.exports = router;
