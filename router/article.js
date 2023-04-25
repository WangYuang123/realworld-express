/**
 * 文章相关路由
 */
const express = require('express')
const router = express.Router()
const articleController = require('../controller/article')
const validate = require('../validate/article')
const auth = require('../middleware/auth')

// 文章列表
router.get('/', articleController.articleList)

// 推送文章
router.get('/feed', articleController.feedList)

// 获取文章
router.get('/:articleId', validate.getArticleDetail, articleController.getArticleDetail)

// 创建文章
router.post('/', auth, validate.createArticle, articleController.createArticle)

// 更新文章
router.put('/:articleId', auth, validate.updateArticle, articleController.updateArticle)

// 删除文章
router.delete('/:articleId', auth, validate.deleteArticle, articleController.delArticle)

// 添加评论
router.post('/:slug/comments', articleController.addComments)

// 获取某个文章的评论
router.get('/:slug/comments', articleController.getComments)

// 删除评论
router.delete('/:slug/comments/:id', articleController.delComments)

// 喜欢文章
router.post('/:slug/favorite', articleController.favoriteArticle)

// 取消喜欢文章
router.delete('/:slug/favorite', articleController.unFavoriteArticle)


module.exports = router