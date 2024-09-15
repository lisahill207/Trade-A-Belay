import User from "../models/user.model.js";

export const getAllBios = async (req, res) => {
  try {
    const bios = await User.find({ _id: { $ne: req.user.id } })
      .sort({ createdAt: -1 })
      .select("-password");

    if (bios.length === 0) {
      return res.status(200).json([]);
    }

    res.status(200).json(bios);
  } catch (error) {
    console.log("Error in getAllBios controller: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
