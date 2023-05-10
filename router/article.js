/**
 * 文章相关路由
 */
const express = require('express')
const router = express.Router()
const articleCtrl = require('../controller/article')

router.get('/', articleCtrl.showHomePage)

router.get('/editor', articleCtrl.showEditorPage)

router.get('/editor/:articledId', articleCtrl.showEditorPage)

router.get('/article/:articledId', articleCtrl.showArticlePage)

module.exports = router