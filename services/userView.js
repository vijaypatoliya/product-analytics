const userViewModel = require('../models/userView')

module.exports = {
  getProductViewReport: async (productId, startDate, endDate) => {
    try {
      startDate = startDate ? new Date(startDate) : new Date('0')
      endDate = endDate ? new Date(endDate) : new Date()

      const query = {
        viewDate: { $gte: startDate, $lt: endDate }
      }
      if (productId) query.productId = productId

      const results = await userViewModel.aggregate([
        { $match: query },
        {
          $group: { _id: '$productId', viewCount: { $sum: 1 }, uniqueUsers: { $addToSet: '$userId' }, users: { $push: '$userId' } }
        }, {
          $addFields: { uniqueUserCount: { $size: '$uniqueUsers' }, totalUser: { $size: '$users' } }
        }
      ])

      return results
    } catch (error) {
      return []
    }
  }

}
