const OperationsModel = require("../models/Operations");

module.exports.getOprations = async (req, res) => {
    try {
      const { subfunction } = req.params;
  
      // Check if the subfunction is "all"
      if (subfunction === 'All') {
        // If "all" is selected, fetch all documents
        const allKpis = await OperationsModel.find();
        return res.json(allKpis);
      }
  
      // Fetch documents based on the specified subfunction
      const kpis = await OperationsModel.find({ subfunction });
      res.json(kpis);
    } catch (error) {
      console.error('Error fetching KPIs:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

