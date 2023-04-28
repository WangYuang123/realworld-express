/**
 * 用户相关路由
 */
const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
	res.render('login.html', {
		isLogin: true
	})
})

router.get('/register', (req, res) => {
	res.render('login.html')
})

router.get('/settings', (req, res) => {
	res.render('settings.html')
})

module.exports = router;