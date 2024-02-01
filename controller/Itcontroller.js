const ITModel = require("../models/It");

module.exports.getIT = async (req, res) => {
  try {
    const { subfunction } = req.params;

    // Check if the subfunction is "all"
    if (subfunction === 'All') {
      // If "all" is selected, fetch all documents
      const allKpis = await ITModel.find();
      return res.json(allKpis);
    }

    // Fetch documents based on the specified subfunction
    const kpis = await ITModel.find({ subfunction });
    res.json(kpis);
  } catch (error) {
    console.error('Error fetching KPIs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};