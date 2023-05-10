const { Article, User } = require('../model/index')

exports.showHomePage = async(req, res, next) => {
	try{
		res.render('index.html')
	}catch(err){
		next(err);
	}
}

exports.showEditorPage = async(req, res, next) => {
	try{
		res.render('editor.html')
	}catch(err){
		next(err);
	}
}

exports.showArticlePage = async(req, res, next) => {
	try{
		res.render('article.html')
	}catch(err){
		next(err);
	}
}
