const HRModel = require("../models/HRmodel");

module.exports.getHR = async (req, res) => {
  try {
    const { subfunction } = req.params;

    // Check if the subfunction is "all"
    if (subfunction === 'All') {
      // If "all" is selected, fetch all documents
      const allKpis = await HRModel.find();
      return res.json(allKpis);
    }

    // Fetch documents based on the specified subfunction
    const kpis = await HRModel.find({ subfunction });
    res.json(kpis);
  } catch (error) {
    console.error('Error fetching KPIs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// routes/kpiRoutes.js

// ... (previous code)

// Get KPIs based on subfunction or fetch all if subfunction is 'all'

// module.exports = router;

