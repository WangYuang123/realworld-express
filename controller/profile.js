// 获取用户资料
exports.getUserInfo = async(req, res, next) => {
	try{
		res.send('获取用户资料')
	}catch(err){
		next(err);
	}
}

// 关注用户
exports.followUser = async(req, res, next) => {
	try{
		res.send('关注用户')
	}catch(err){
		next(err);
	}
}

// 取消关注用户
exports.cancelFollowUser = async(req, res, next) => {
	try{
		res.send('取消关注用户')
	}catch(err){
		next(err);
	}
}