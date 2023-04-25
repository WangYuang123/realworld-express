const { body, param } = require('express-validator')
const validate = require("../middleware/validate");
const mongoose = require('mongoose')
const { Article } = require('../model');

// 创建
exports.createArticle = validate([
	body('article.title').notEmpty().withMessage('标题不能为空'),
	body('article.description').notEmpty().withMessage('摘要不能为空'),
	body('article.body').notEmpty().withMessage('内容不能为空'),
])

// 获取文章详情
exports.getArticleDetail = validate([
	validate.isValidObjectId(['params'], 'articleId')
])

// 更新文章
exports.updateArticle = [
	// 校验id是否是ObjectId
	validate([
		validate.isValidObjectId(['params'], 'articleId')
	]),
	
	// 校验文章是否存在
	async (req, res, next) => {
		const articleId = req.params.articleId
		const article = await Article.findById(articleId)
		if(!article) {
			return res.status(404).end()
		}
		req.article = article
		next()
	},
	
	// 判断 修改的文章是否是当前文章
	async(req, res, next) => {
		if(req.user._id.toString() !== req.article.author.toString()) {
			return res.status(403).end()
		}
		next()
	}
]

// 删除文章
exports.deleteArticle = exports.updateArticle