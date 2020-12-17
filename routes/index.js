const express = require('express')
const router = express.Router()
const userView = require('./userView')

router.use('/userView', userView)
module.exports = router
