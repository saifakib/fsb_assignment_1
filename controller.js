const { generateRandomNumberService } = require("./services");


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