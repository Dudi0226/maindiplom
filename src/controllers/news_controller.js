const News = require("../models/news");
const asyncHandler = require("../middleware/asyncHandler");

exports.createNews = asyncHandler(async (req, res, next) => {
  try {
    const { title, description, newsdate, newsimage } = req.body;
    const news = await News.create({
      title: title,
      description: description,
      newsdate: newsdate,
      newsimage: newsimage,
      adminid: req.userid,
    });
    res.status(201).json({
      success: true,
      data: news,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
