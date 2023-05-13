const { generateRandomNumberService, generateAProfileService } = require("./services");


module.exports.randonNumberController = (req, res) => {
    try {
      let { start, end } = req.query;

      let error = {};
      if (Number.isInteger(+start) && Number.isInteger(+end)) {
        return res.status(200).json(generateRandomNumberService(+start, +end))
      } else {
        error = new Error("Both start and end values must be integers.");
        error.statusCode = 400
        throw error
      }
    } catch (err) {
      return res.status(err.statusCode || 500).json({
        status: err.statusCode || 500,
        message: err.message
      })
    }
}

module.exports.generateProfileController = (req, res) => {
    try {
        const { properties } = req.query;

        const splitProperties = properties.split(",").map((item) => item.toLowerCase());

        let error = {};
        if (!splitProperties.length > 0) {
            error = new Error("Please give some properties");
            error.statusCode = 400
            throw error;
        }

        return res.status(200).json(generateAProfileService(splitProperties))

    } catch (err) {
      return res.status(err.statusCode || 500).json({
        status: err.statusCode || 500,
        message: err.message
      })
    }
}

