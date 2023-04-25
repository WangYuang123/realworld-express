/**
 * 用户资料相关路由
 */
const express = require('express')
const router = express.Router()
const profileController = require('../controller/profile')

// 获取用户资料
router.get('/:username', profileController.getUserInfo)

// 关注用户
router.post('/:username/follow', profileController.followUser)

// 取消关注用户
router.delete('/:username/follow', profileController.cancelFollowUser)



module.exports = router