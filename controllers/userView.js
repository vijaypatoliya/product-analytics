const Boom = require('boom')
const userViewService = require('../services/userView')

module.exports = {
  getProductViewReport: async (req, res, next) => {
    try {
      const params = req.query
      const productViewList = await userViewService.getProductViewReport(params.productId, params.startDate, params.endDate)
      return res.send(productViewList)
    } catch (error) {
      return next(Boom.notAcceptable(error))
    }
  }

}
