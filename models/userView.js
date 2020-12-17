const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userViewSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  productId: {
    type: String,
    required: true
  },
  viewDate: {
    type: Date,
    required: true
  }
})

const userViewModel = mongoose.model('userView', userViewSchema)
module.exports = userViewModel
