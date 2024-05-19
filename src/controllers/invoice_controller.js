const asyncHandler = require("../middleware/asyncHandler");
const Invoices = require("../models/invoice");

// Controller function to handle accepting counts and generating invoices

const acceptCount = asyncHandler(async (req, res) => {
  try {
    // Extract necessary data from request body
    const { usercode, countid, additionalservices, totalamount } = req.body;

    // Create a new invoice in the database
    const invoice = await Invoices.create({
      usercode: usercode,
      countid: countid,
      additionalservices: additionalservices,
      totalamount: totalamount,
    });

    // Send a success response with the created invoice
    res.status(201).json({ success: true, invoice });
  } catch (error) {
    // Handle any errors
    console.error("Error accepting count and generating invoice:", error);
    res.status(500).json({
      success: false,
      error: "Энэ заалтан дээр нэхэмжлэл үүссэн байна",
    });
  }
});

const getInvoice = asyncHandler(async (req, res) => {
  try {
    const invoices = await Invoices.findAll();
    res.status(201).json({ success: true, data: invoices });
  } catch (error) {
    // Handle any errors
    console.error("Error accepting count and generating invoice:", error);
    res.status(500).json({
      success: false,
      error: "Энэ заалтан дээр нэхэмжлэл үүссэн байна",
    });
  }
});

const deleteInvoice = asyncHandler(async (req, res) => {
  try {
    // Extract necessary data from request body
    const { invoiceId } = req.params;

    // Create a new invoice in the database
    const invoice = await Invoices.destroy({
      where: {
        id: invoiceId,
      },
    });

    // Send a success response with the created invoice
    res.status(201).json({ success: true, invoice });
  } catch (error) {
    // Handle any errors
    console.error("Error accepting count and generating invoice:", error);
    res.status(500).json({
      success: false,
      error: "Энэ нэхэмжлэлийг устгах боломжгүй",
    });
  }
});

module.exports = {
  acceptCount,
  deleteInvoice,
  getInvoice,
};
