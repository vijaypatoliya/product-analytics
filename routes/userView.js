const express = require('express')
const userViewController = require('../controllers/userView')
const router = express.Router()

router.get('/', (req, res, next) => userViewController.getProductViewReport(req, res, next))

module.exports = router
