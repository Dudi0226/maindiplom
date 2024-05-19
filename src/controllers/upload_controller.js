const Count_image = require("../models/count_image"); // Adjust the path as necessary
const multer = require("multer");
const path = require("path");

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Ensure the 'uploads' directory exists
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${path.basename(file.originalname)}`);
  },
});

const upload = multer({ storage: storage }).single("image");

exports.uploadProfile = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error uploading file", error: err.message });
    }

    const { countid } = req.body;
    const imageurl = req.file ? req.file.path : null;

    if (!countid || !imageurl) {
      return res
        .status(400)
        .json({ message: "countid and image file are required" });
    }

    try {
      const newImage = await Count_image.create({ countid, imageurl });
      res
        .status(201)
        .json({ message: "Image uploaded successfully", data: newImage });
    } catch (error) {
      res.status(500).json({
        message: "Error saving image to database",
        error: error.message,
      });
    }
  });
};
