/**
 * 标枪相关路由
 */
const express = require('express')
const router = express.Router()
const tagsController = require('../controller/tags')

// 获取标签
router.get('/', tagsController.gettags)

module.exports = router