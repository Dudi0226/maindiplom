const Users = require("../models/users");
const asyncHandler = require("../middleware/asyncHandler");
const Counts = require("../models/counts");

// Controller for creating a new count record
const getCount = asyncHandler(async (req, res) => {
  try {
    // const counts = await Counts.findAll({
    //   include: [
    //     {
    //       model: Users,
    //       as: "user",
    //       where: {
    //         adminid: req.userid,
    //       }, // This ensures only users with the specific post are returned
    //     },
    //   ],
    // });
    const counts = await Counts.findAll();
    res.status(200).json({ success: true, data: counts });
  } catch (error) {
    console.error("Error creating count:", error);
    res
      .status(500)
      .json({ success: false, error: "Could not create count record" });
  }
});

const createCount = asyncHandler(async (req, res) => {
  try {
    const { coldwater, hotwater, wastewater, countdate, amount } = req.body;
    console.log(req.userid);

    // Create count record
    const count = await Counts.create({
      coldwater: coldwater,
      hotwater: hotwater,
      wastewater: wastewater,
      countdate: countdate,
      amount: amount,
      userid: req.userid,
    });

    res.status(201).json({ success: true, data: count });
  } catch (error) {
    console.error("Error creating count:", error);
    res
      .status(500)
      .json({ success: false, error: "Could not create count record" });
  }
});

// Other controller functions for updating, deleting, or fetching counts can be added here

module.exports = {
  createCount,
  getCount,
};
