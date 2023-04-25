const { Article, User } = require('../model/index')
// 文章列表
exports.articleList = async(req, res, next) => {
	try{
		// 处理分页
		const {limit = 20, offset = 0, tag, author} = req.query
		
		// 筛选标签
		const filter = {}
		if(tag) {
			filter.tagList = tag
		}
		
		// 筛选作者文章
		if(author) {
			const user = await User.findOne({ username: author })
			filter.author = user ? user._id : null;
		}
		
		const articles = await Article.find(filter).skip(+offset).limit(+limit).sort({ createAt: -1 })
		const articleCont = await Article.countDocuments()
		res.status(200).json({
			articles,
			articleCont
		})
	}catch(err){
		next(err);
	}
}

// 推送文章列表
exports.feedList = async(req, res, next) => {
	try{
		res.send('推送文章列表')
	}catch(err){
		next(err);
	}
}

// 获取文章
exports.getArticleDetail = async(req, res, next) => {
	try{
		const article = await Article.findById(req.params.articleId)
		if(!article) {
			return res.status(401).end()
		}
		res.status(200).json({
			article
		})
	}catch(err){
		next(err);
	}
}

// 创建文章
exports.createArticle = async(req, res, next) => {
	try{
		const article = new Article(req.body.article)
		// 通过身份认证解析到用户对象，获取id属性
		article.author = req.user._id
		await article.populate('author')
		// 将数据映射到User并执行以下
		article.populate('author')
		await article.save()
		res.status(201).json({
			article
		})
	}catch(err){
		next(err);
	}
}

// 更新文章
exports.updateArticle = async(req, res, next) => {
	try{
		const article = req.article
		const bodyArticle = req.body.article
		article.title = bodyArticle.title || article.title
		article.description = bodyArticle.description || article.description
		article.body = bodyArticle.body || article.body
		
		await article.save()
		res.status(200).json({
			article
		})
	}catch(err){
		next(err);
	}
}

// 删除文章
exports.delArticle = async(req, res, next) => {
	try{
		const article = req.article
		await Article.deleteOne(article)

		res.status(204).json({
			msg: '删除成功'
		})
	}catch(err){
		next(err);
	}
}

// 添加评论
exports.addComments = async(req, res, next) => {
	try{
		res.send('添加评论')
	}catch(err){
		next(err);
	}
}

// 获取某个文章的评论
exports.getComments = async(req, res, next) => {
	try{
		res.send('获取某个文章的评论')
	}catch(err){
		next(err);
	}
}

// 删除评论
exports.delComments = async(req, res, next) => {
	try{
		res.send('删除评论')
	}catch(err){
		next(err);
	}
}

// 喜欢文章
exports.favoriteArticle = async(req, res, next) => {
	try{
		res.send('喜欢文章')
	}catch(err){
		next(err);
	}
}


// 取消喜欢文章
exports.unFavoriteArticle = async(req, res, next) => {
	try{
		res.send('取消喜欢文章')
	}catch(err){
		next(err);
	}
}
