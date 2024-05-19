const router = require("express").Router();
const { protect } = require("../middleware/protect");
const {
  acceptCount,
  deleteInvoice,
  getInvoice,
} = require("../controllers/invoice_controller");
router.route("/acceptcount").post(protect, acceptCount);
router.route("/").get(protect, getInvoice);
router.route("/deleteInvoice/:invoiceId").delete(protect, deleteInvoice);
module.exports = router;
