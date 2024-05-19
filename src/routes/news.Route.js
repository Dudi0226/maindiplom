const router = require("express").Router();
const { createNews, getNews } = require("../controllers/news_controller");
const { protect } = require("../middleware/protect");
router.route("/").get(protect, getNews);
router.route("/create").post(protect, createNews);
module.exports = router;
