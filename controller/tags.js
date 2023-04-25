// 获取标签
exports.gettags = async(req, res, next) => {
	try{
		res.send('获取标签')
	}catch(err){
		next(err);
	}
}