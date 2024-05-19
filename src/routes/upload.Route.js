const router = require("express").Router();
const {
  uploadProfile,
  displayImage,
  deleteProfile,
  updateProfile,
  registerUploadProfile,
  getOwnProfile,
} = require("../controllers/upload_controller");
const { protect } = require("../middleware/protect");
const { route } = require("./user.Route");

router.route("/uploadImage").post(protect, uploadProfile);
// router.route("/registerUploadImage/:userid").post(registerUploadProfile);
// router.route("/displayImage/:userId").get(displayImage);
// router.route("/deleteImage").delete(protect, deleteProfile);
// router.route("/updateImage").put(protect, updateProfile); //should be in protect
// // router.route("/displayWithUsername/:username").get(displayWithUsername);
// router.route("/:username/getOwnPro").get(getOwnProfile);
// router
//   .route("/setDefaultProfilePicture/:userid")
//   .post(setDefaultProfilePicture);s
module.exports = router;
