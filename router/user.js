/**
 * 用户相关路由
 */
const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/user')
const userValidator = require('../validate/user')

router.get('/login',userCtrl.showLoginPage)

router.get('/register', userCtrl.showRegisterPage)
router.post('/register', userValidator.register, userCtrl.register)


router.get('/settings', userCtrl.showSettingsPage)

router.get('/profile/:username', userCtrl.showProfilePage)

router.get('/profile/:username/favorites', userCtrl.showProfilePage)

module.exports = router;