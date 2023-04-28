const express = require("express")
const router = express.Router()
const userRoute = require('./user')

router.use(require('./user'))
router.use(require('./article'))
router.use(require('./profile'))

module.exports = router;