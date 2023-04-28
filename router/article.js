/**
 * 文章相关路由
 */
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.render('index.html')
})

router.get('/editor', (req, res) => {
	res.render('editor.html')
})

router.get('/editor/:articledId', (req, res) => {
	res.render('editor.html')
})

router.get('/article/:articledId', (req, res) => {
	res.render('article.html')
})

module.exports = router