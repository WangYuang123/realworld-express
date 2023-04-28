/**
 * 用户资料相关路由
 */
const express = require('express')
const router = express.Router()

router.get('/profile/:username', (req, res) => {
	res.render('profile.html')
})

router.get('/profile/:username/favorites', (req, res) => {
	res.render('profile.html')
})




module.exports = router